package com.mfi.microfinance.validation;

import java.math.BigDecimal;

public class LoanAmountLimitValidator {
    private static final BigDecimal RBI_MFI_MAX_HOUSEHOLD_INCOME = new BigDecimal("300000"); // 3 Lakhs
    private static final BigDecimal RBI_MFI_MAX_LOAN_AMOUNT = new BigDecimal("200000"); // 2 Lakhs

    public static boolean isEligibleByIncome(BigDecimal householdIncome) {
        if (householdIncome == null) return false;
        return householdIncome.compareTo(RBI_MFI_MAX_HOUSEHOLD_INCOME) <= 0;
    }

    public static boolean isWithinMicrofinanceLoanLimit(BigDecimal totalOutstanding, BigDecimal newRequestedAmount) {
        BigDecimal total = (totalOutstanding == null ? BigDecimal.ZERO : totalOutstanding).add(newRequestedAmount);
        return total.compareTo(RBI_MFI_MAX_LOAN_AMOUNT) <= 0;
    }
}
