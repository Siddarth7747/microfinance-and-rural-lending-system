package com.mfi.microfinance.mapper;

import com.mfi.microfinance.dto.request.LoanApplicationRequest;
import com.mfi.microfinance.entity.LoanApplication;
import org.springframework.stereotype.Component;

@Component
public class LoanApplicationMapper {

    public LoanApplication toEntity(LoanApplicationRequest request) {
        if (request == null) return null;
        return LoanApplication.builder()
                .requestedAmount(request.getRequestedAmount())
                .requestedTenureMonths(request.getRequestedTenureMonths())
                .loanPurpose(request.getLoanPurpose())
                .build();
    }
}
