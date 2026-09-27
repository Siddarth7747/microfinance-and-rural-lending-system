package com.mfi.microfinance.service;

import com.mfi.microfinance.entity.Loan;
import com.mfi.microfinance.entity.enums.LoanStatus;
import com.mfi.microfinance.repository.LoanRepository;
import com.mfi.microfinance.repository.RepaymentTransactionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.*;

/**
 * Incentive calculation service with configurable slab-based tiers.
 * Calculates monthly performance incentives for field officers based on
 * collection efficiency, PAR maintenance, and portfolio growth.
 */
@Service
@RequiredArgsConstructor
public class IncentiveCalculationService {

    private final LoanRepository loanRepository;

    // Incentive slabs based on collection efficiency
    private static final List<IncentiveSlab> COLLECTION_SLABS = List.of(
            new IncentiveSlab(99.0, 100.0, new BigDecimal("0.010")),  // 99-100%: 1.0% bonus
            new IncentiveSlab(97.0, 99.0, new BigDecimal("0.007")),   // 97-99%: 0.7% bonus
            new IncentiveSlab(95.0, 97.0, new BigDecimal("0.005")),   // 95-97%: 0.5% bonus
            new IncentiveSlab(90.0, 95.0, new BigDecimal("0.003")),   // 90-95%: 0.3% bonus
            new IncentiveSlab(0.0, 90.0, BigDecimal.ZERO)             // Below 90%: no bonus
    );

    // Zero PAR bonus
    private static final BigDecimal ZERO_PAR_BONUS = new BigDecimal("2000");

    /**
     * Calculate monthly incentive for an officer based on their performance metrics.
     */
    public Map<String, Object> calculateMonthlyIncentive(String officerName, BigDecimal totalCollected,
                                                           double collectionRate, int par30Count,
                                                           int newBorrowerCount) {
        // 1. Collection efficiency slab bonus
        BigDecimal collectionBonus = BigDecimal.ZERO;
        String applicableSlab = "No Bonus";
        for (IncentiveSlab slab : COLLECTION_SLABS) {
            if (collectionRate >= slab.minRate && collectionRate < slab.maxRate) {
                collectionBonus = totalCollected.multiply(slab.bonusRate).setScale(2, RoundingMode.HALF_UP);
                applicableSlab = String.format("%.0f%%-%.0f%% (%.1f%%)", slab.minRate, slab.maxRate,
                        slab.bonusRate.multiply(BigDecimal.valueOf(100)).doubleValue());
                break;
            }
        }
        // Handle 100% case
        if (collectionRate >= 100.0) {
            collectionBonus = totalCollected.multiply(new BigDecimal("0.010")).setScale(2, RoundingMode.HALF_UP);
            applicableSlab = "100% (1.0%)";
        }

        // 2. Zero PAR bonus (if no PAR 30+ accounts)
        BigDecimal parBonus = par30Count == 0 ? ZERO_PAR_BONUS : BigDecimal.ZERO;

        // 3. New borrower acquisition bonus (₹100 per new borrower)
        BigDecimal acquisitionBonus = BigDecimal.valueOf(newBorrowerCount).multiply(new BigDecimal("100"));

        // Total incentive
        BigDecimal totalIncentive = collectionBonus.add(parBonus).add(acquisitionBonus);

        Map<String, Object> result = new HashMap<>();
        result.put("officerName", officerName);
        result.put("totalCollected", totalCollected);
        result.put("collectionRate", collectionRate + "%");
        result.put("applicableSlab", applicableSlab);
        result.put("collectionBonus", collectionBonus);
        result.put("par30Count", par30Count);
        result.put("zeroPARBonus", parBonus);
        result.put("newBorrowerCount", newBorrowerCount);
        result.put("acquisitionBonus", acquisitionBonus);
        result.put("totalIncentive", totalIncentive);
        return result;
    }

    /**
     * Overloaded helper method returning direct total incentive BigDecimal.
     */
    public BigDecimal calculateMonthlyIncentive(String officerName, BigDecimal totalCollected, double collectionRate) {
        Map<String, Object> res = calculateMonthlyIncentive(officerName, totalCollected, collectionRate, 0, 0);
        return (BigDecimal) res.get("totalIncentive");
    }

    /**
     * Get the incentive slab configuration.
     */
    public List<Map<String, Object>> getIncentiveSlabs() {
        List<Map<String, Object>> slabs = new ArrayList<>();
        for (IncentiveSlab slab : COLLECTION_SLABS) {
            Map<String, Object> s = new HashMap<>();
            s.put("minCollectionRate", slab.minRate + "%");
            s.put("maxCollectionRate", slab.maxRate + "%");
            s.put("bonusPercentage", slab.bonusRate.multiply(BigDecimal.valueOf(100)) + "%");
            slabs.add(s);
        }
        return slabs;
    }

    private record IncentiveSlab(double minRate, double maxRate, BigDecimal bonusRate) {}
}
