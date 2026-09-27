package com.mfi.microfinance.service;

import com.mfi.microfinance.entity.enums.InterestMethod;
import com.mfi.microfinance.util.EmiCalculatorUtil;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.MathContext;
import java.math.RoundingMode;

/**
 * Comprehensive interest calculation service supporting flat, reducing-balance,
 * and daily-reducing-balance interest methods as per RBI microfinance guidelines.
 */
@Service
public class InterestCalculationService {

    /**
     * Calculate EMI amount based on the specified interest method.
     */
    public BigDecimal calculateEmi(BigDecimal principal, BigDecimal annualRate, int tenureMonths, InterestMethod method) {
        return EmiCalculatorUtil.calculateEmi(principal, annualRate, tenureMonths, method);
    }

    /**
     * Calculate total interest payable using the reducing balance method.
     * Interest is calculated on the outstanding principal after each EMI payment.
     */
    public BigDecimal calculateReducingBalanceInterest(BigDecimal principal, BigDecimal annualRate, int tenureMonths) {
        BigDecimal monthlyRate = annualRate.divide(BigDecimal.valueOf(1200), 10, RoundingMode.HALF_UP);
        BigDecimal emi = calculateEmi(principal, annualRate, tenureMonths, InterestMethod.REDUCING_BALANCE);
        BigDecimal totalPayment = emi.multiply(BigDecimal.valueOf(tenureMonths));
        return totalPayment.subtract(principal).max(BigDecimal.ZERO);
    }

    /**
     * Calculate interest for a single day on outstanding principal (daily reducing balance).
     * Used for exact day-count interest calculation between payments.
     */
    public BigDecimal calculateDailyInterest(BigDecimal outstandingPrincipal, BigDecimal annualRate) {
        if (outstandingPrincipal == null || annualRate == null) return BigDecimal.ZERO;
        // Daily interest = Outstanding Principal × (Annual Rate / 100 / 365)
        return outstandingPrincipal
                .multiply(annualRate)
                .divide(BigDecimal.valueOf(36500), 6, RoundingMode.HALF_UP);
    }

    /**
     * Calculate accrued interest over a given number of days using daily reducing balance.
     * Useful for mid-cycle interest accrual, prepayment, and foreclosure calculations.
     */
    public BigDecimal calculateDailyReducingInterest(BigDecimal outstandingPrincipal, BigDecimal annualRate,
                                                      BigDecimal emiAmount, int numberOfDays) {
        if (outstandingPrincipal == null || annualRate == null || numberOfDays <= 0) return BigDecimal.ZERO;

        BigDecimal totalInterest = BigDecimal.ZERO;
        BigDecimal dailyRate = annualRate.divide(BigDecimal.valueOf(36500), 10, RoundingMode.HALF_UP);
        BigDecimal remainingPrincipal = outstandingPrincipal;

        for (int day = 1; day <= numberOfDays; day++) {
            BigDecimal dayInterest = remainingPrincipal.multiply(dailyRate).setScale(6, RoundingMode.HALF_UP);
            totalInterest = totalInterest.add(dayInterest);

            // At end of each 30-day period (approximate month), reduce principal by EMI - interest portion
            if (day % 30 == 0 && emiAmount != null && emiAmount.compareTo(BigDecimal.ZERO) > 0) {
                BigDecimal monthInterest = remainingPrincipal.multiply(dailyRate).multiply(BigDecimal.valueOf(30));
                BigDecimal principalPortion = emiAmount.subtract(monthInterest).max(BigDecimal.ZERO);
                remainingPrincipal = remainingPrincipal.subtract(principalPortion).max(BigDecimal.ZERO);
            }
        }

        return totalInterest.setScale(2, RoundingMode.HALF_UP);
    }

    /**
     * Calculate flat interest for the full loan tenure.
     * Total Interest = Principal × Rate × Tenure / 1200
     */
    public BigDecimal calculateFlatInterest(BigDecimal principal, BigDecimal annualRate, int tenureMonths) {
        if (principal == null || annualRate == null) return BigDecimal.ZERO;
        return principal.multiply(annualRate).multiply(BigDecimal.valueOf(tenureMonths))
                .divide(BigDecimal.valueOf(1200), 2, RoundingMode.HALF_UP);
    }

    /**
     * Split EMI into principal and interest components for a given installment number.
     */
    public BigDecimal[] splitEmiComponents(BigDecimal principal, BigDecimal annualRate, int tenureMonths,
                                            int installmentNumber, InterestMethod method) {
        if (method == InterestMethod.FLAT) {
            BigDecimal totalInterest = calculateFlatInterest(principal, annualRate, tenureMonths);
            BigDecimal interestPerMonth = totalInterest.divide(BigDecimal.valueOf(tenureMonths), 2, RoundingMode.HALF_UP);
            BigDecimal principalPerMonth = principal.divide(BigDecimal.valueOf(tenureMonths), 2, RoundingMode.HALF_UP);
            return new BigDecimal[]{principalPerMonth, interestPerMonth};
        }

        // Reducing balance: calculate outstanding at the given installment
        BigDecimal monthlyRate = annualRate.divide(BigDecimal.valueOf(1200), 10, RoundingMode.HALF_UP);
        BigDecimal emi = calculateEmi(principal, annualRate, tenureMonths, method);
        BigDecimal outstanding = principal;

        for (int i = 1; i < installmentNumber; i++) {
            BigDecimal interestComponent = outstanding.multiply(monthlyRate).setScale(2, RoundingMode.HALF_UP);
            BigDecimal principalComponent = emi.subtract(interestComponent);
            outstanding = outstanding.subtract(principalComponent);
        }

        BigDecimal interestComponent = outstanding.multiply(monthlyRate).setScale(2, RoundingMode.HALF_UP);
        BigDecimal principalComponent = emi.subtract(interestComponent);
        return new BigDecimal[]{principalComponent, interestComponent};
    }
}
