package com.mfi.microfinance.util;

import com.mfi.microfinance.dto.response.LoanScheduleResponse;
import com.mfi.microfinance.entity.enums.InterestMethod;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class EmiCalculatorUtil {

    public static BigDecimal calculateEmi(BigDecimal principal, BigDecimal annualRate, int tenureMonths, InterestMethod method) {
        if (principal == null || annualRate == null || tenureMonths <= 0) return BigDecimal.ZERO;

        if (method == InterestMethod.FLAT) {
            BigDecimal totalInterest = principal.multiply(annualRate).multiply(BigDecimal.valueOf(tenureMonths))
                    .divide(new BigDecimal("1200"), 2, RoundingMode.HALF_UP);
            BigDecimal totalPayable = principal.add(totalInterest);
            return totalPayable.divide(BigDecimal.valueOf(tenureMonths), 2, RoundingMode.HALF_UP);
        } else {
            // Reducing balance EMI: P * r * (1+r)^n / ((1+r)^n - 1)
            double p = principal.doubleValue();
            double r = annualRate.doubleValue() / 1200.0;
            if (r == 0) return principal.divide(BigDecimal.valueOf(tenureMonths), 2, RoundingMode.HALF_UP);

            double emi = (p * r * Math.pow(1 + r, tenureMonths)) / (Math.pow(1 + r, tenureMonths) - 1);
            return BigDecimal.valueOf(emi).setScale(2, RoundingMode.HALF_UP);
        }
    }

    public static List<LoanScheduleResponse.InstallmentDetail> generateSchedule(
            BigDecimal principal, BigDecimal annualRate, int tenureMonths,
            InterestMethod method, LocalDate startDate) {

        List<LoanScheduleResponse.InstallmentDetail> schedule = new ArrayList<>();
        BigDecimal emi = calculateEmi(principal, annualRate, tenureMonths, method);
        BigDecimal remainingPrincipal = principal;
        BigDecimal monthlyRate = annualRate.divide(new BigDecimal("1200"), 6, RoundingMode.HALF_UP);

        for (int i = 1; i <= tenureMonths; i++) {
            LocalDate dueDate = startDate.plusMonths(i);
            BigDecimal interestComp;
            BigDecimal principalComp;

            if (method == InterestMethod.FLAT) {
                interestComp = principal.multiply(annualRate).divide(new BigDecimal("1200"), 2, RoundingMode.HALF_UP);
                principalComp = emi.subtract(interestComp);
            } else {
                interestComp = remainingPrincipal.multiply(monthlyRate).setScale(2, RoundingMode.HALF_UP);
                principalComp = emi.subtract(interestComp);
            }

            if (i == tenureMonths) {
                // Adjust final installment rounding
                principalComp = remainingPrincipal;
                emi = principalComp.add(interestComp);
                remainingPrincipal = BigDecimal.ZERO;
            } else {
                remainingPrincipal = remainingPrincipal.subtract(principalComp);
            }

            schedule.add(LoanScheduleResponse.InstallmentDetail.builder()
                    .installmentNumber(i)
                    .dueDate(dueDate)
                    .principalComponent(principalComp)
                    .interestComponent(interestComp)
                    .emiAmount(emi)
                    .outstandingAfter(remainingPrincipal.max(BigDecimal.ZERO))
                    .isPaid(false)
                    .build());
        }

        return schedule;
    }
}
