package com.mfi.microfinance.service;

import com.mfi.microfinance.entity.InsuranceClaim;
import com.mfi.microfinance.entity.enums.ClaimStatus;
import com.mfi.microfinance.repository.InsuranceClaimRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Insurance service handling credit life & disability insurance operations
 * including enrolment, premium calculation, nominee management, and claims processing.
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class InsuranceService {

    private final InsuranceClaimRepository insuranceClaimRepository;

    // Premium rates as per RBI guidelines for microfinance credit-linked insurance
    private static final BigDecimal LIFE_PREMIUM_RATE = new BigDecimal("0.015");      // 1.5% of loan
    private static final BigDecimal DISABILITY_PREMIUM_RATE = new BigDecimal("0.005"); // 0.5% of loan
    private static final BigDecimal COMBINED_PREMIUM_RATE = new BigDecimal("0.018");   // 1.8% combined

    /**
     * Calculate insurance premium based on loan amount and coverage type.
     */
    public Map<String, Object> calculateInsurancePremium(BigDecimal loanAmount, String coverageType) {
        if (loanAmount == null) loanAmount = BigDecimal.ZERO;
        if (coverageType == null) coverageType = "LIFE_AND_DISABILITY";

        BigDecimal rate = switch (coverageType.toUpperCase()) {
            case "LIFE_ONLY" -> LIFE_PREMIUM_RATE;
            case "DISABILITY_ONLY" -> DISABILITY_PREMIUM_RATE;
            default -> COMBINED_PREMIUM_RATE;
        };

        BigDecimal premium = loanAmount.multiply(rate).setScale(2, RoundingMode.HALF_UP);
        BigDecimal coverageAmount = loanAmount; // Coverage equals loan outstanding

        Map<String, Object> result = new HashMap<>();
        result.put("loanAmount", loanAmount);
        result.put("coverageType", coverageType);
        result.put("premiumRate", rate.multiply(BigDecimal.valueOf(100)) + "%");
        result.put("premiumAmount", premium);
        result.put("coverageAmount", coverageAmount);
        result.put("policyTerm", "Co-terminus with loan");
        return result;
    }

    /**
     * Enrol a borrower in credit-linked insurance.
     */
    public Map<String, Object> enrollBorrower(Long borrowerId, Long loanId, BigDecimal loanAmount,
                                                String coverageType, String nomineeName,
                                                String nomineeRelation, String nomineeAadhaar) {
        Map<String, Object> premium = calculateInsurancePremium(loanAmount, coverageType);

        String policyNumber = "POL-" + System.currentTimeMillis();

        Map<String, Object> enrollment = new HashMap<>(premium);
        enrollment.put("policyNumber", policyNumber);
        enrollment.put("borrowerId", borrowerId);
        enrollment.put("loanId", loanId);
        enrollment.put("nomineeName", nomineeName);
        enrollment.put("nomineeRelation", nomineeRelation);
        enrollment.put("nomineeAadhaar", nomineeAadhaar);
        enrollment.put("enrolmentDate", LocalDate.now().toString());
        enrollment.put("status", "ACTIVE");

        log.info("[Insurance] Enrolled borrower {} in policy {} coverage {}", borrowerId, policyNumber, coverageType);
        return enrollment;
    }

    /**
     * Process renewal of an existing insurance policy.
     */
    public Map<String, Object> processRenewal(String policyNumber, BigDecimal revisedLoanOutstanding) {
        Map<String, Object> renewal = calculateInsurancePremium(revisedLoanOutstanding, "LIFE_AND_DISABILITY");
        renewal.put("policyNumber", policyNumber);
        renewal.put("renewalDate", LocalDate.now().toString());
        renewal.put("status", "RENEWED");
        log.info("[Insurance] Policy {} renewed with outstanding {}", policyNumber, revisedLoanOutstanding);
        return renewal;
    }

    /**
     * Update nominee details for an insurance policy.
     */
    public Map<String, Object> updateNominee(String policyNumber, String nomineeName,
                                               String nomineeRelation, String nomineeAadhaar) {
        Map<String, Object> result = new HashMap<>();
        result.put("policyNumber", policyNumber);
        result.put("nomineeName", nomineeName);
        result.put("nomineeRelation", nomineeRelation);
        result.put("nomineeAadhaar", nomineeAadhaar);
        result.put("updatedDate", LocalDate.now().toString());
        result.put("status", "NOMINEE_UPDATED");
        return result;
    }

    /**
     * Get all claims for a borrower.
     */
    public List<InsuranceClaim> getClaimsByBorrower(Long borrowerId) {
        return insuranceClaimRepository.findByBorrowerId(borrowerId);
    }

    /**
     * Get portfolio-level insurance summary statistics.
     */
    public Map<String, Object> getPortfolioInsuranceSummary() {
        List<InsuranceClaim> allClaims = insuranceClaimRepository.findAll();

        long totalClaims = allClaims.size();
        long pendingClaims = allClaims.stream().filter(c -> c.getStatus() == ClaimStatus.INITIATED || c.getStatus() == ClaimStatus.UNDER_REVIEW).count();
        long settledClaims = allClaims.stream().filter(c -> c.getStatus() == ClaimStatus.SETTLED).count();
        long rejectedClaims = allClaims.stream().filter(c -> c.getStatus() == ClaimStatus.REJECTED).count();

        BigDecimal totalClaimAmount = allClaims.stream()
                .map(InsuranceClaim::getClaimAmount)
                .filter(a -> a != null)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        BigDecimal totalSettledAmount = allClaims.stream()
                .filter(c -> c.getStatus() == ClaimStatus.SETTLED && c.getSettledAmount() != null)
                .map(InsuranceClaim::getSettledAmount)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        Map<String, Object> summary = new HashMap<>();
        summary.put("totalClaims", totalClaims);
        summary.put("pendingClaims", pendingClaims);
        summary.put("settledClaims", settledClaims);
        summary.put("rejectedClaims", rejectedClaims);
        summary.put("totalClaimAmount", totalClaimAmount);
        summary.put("totalSettledAmount", totalSettledAmount);
        summary.put("claimSettlementRate", totalClaims > 0 ?
                BigDecimal.valueOf(settledClaims * 100.0 / totalClaims).setScale(1, RoundingMode.HALF_UP) + "%" : "N/A");
        return summary;
    }
}
