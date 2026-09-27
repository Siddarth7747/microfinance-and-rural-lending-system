package com.mfi.microfinance.mapper;

import com.mfi.microfinance.dto.response.LoanScheduleResponse;
import com.mfi.microfinance.entity.Loan;
import com.mfi.microfinance.entity.LoanApplication;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;

@Component
public class LoanMapper {

    public LoanApplication toApplicationEntity(com.mfi.microfinance.dto.request.LoanApplicationRequest request) {
        if (request == null) return null;
        return LoanApplication.builder()
                .requestedAmount(request.getRequestedAmount())
                .requestedTenureMonths(request.getRequestedTenureMonths())
                .loanPurpose(request.getLoanPurpose())
                .build();
    }

    public LoanScheduleResponse toScheduleResponse(Loan loan) {
        if (loan == null) return null;
        String borrowerName = loan.getBorrower() != null
                ? loan.getBorrower().getFirstName() + " " + loan.getBorrower().getLastName()
                : "N/A";
        String productName = loan.getLoanProduct() != null ? loan.getLoanProduct().getProductName() : "N/A";
        String method = loan.getLoanProduct() != null && loan.getLoanProduct().getInterestMethod() != null
                ? loan.getLoanProduct().getInterestMethod().name()
                : "FLAT";

        return LoanScheduleResponse.builder()
                .loanAccountNumber(loan.getLoanAccountNumber())
                .borrowerName(borrowerName)
                .productName(productName)
                .sanctionedAmount(loan.getSanctionedAmount())
                .interestRate(loan.getInterestRate())
                .interestMethod(method)
                .tenureMonths(loan.getTenureMonths())
                .emiAmount(loan.getEmiAmount())
                .totalInterest(loan.getOutstandingInterest() != null ? loan.getOutstandingInterest() : BigDecimal.ZERO)
                .totalPayable(loan.getSanctionedAmount().add(loan.getOutstandingInterest() != null ? loan.getOutstandingInterest() : BigDecimal.ZERO))
                .build();
    }
}
