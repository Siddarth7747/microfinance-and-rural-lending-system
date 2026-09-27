package com.mfi.microfinance.mapper;

import com.mfi.microfinance.dto.request.ShgSavingsRequest;
import com.mfi.microfinance.entity.ShgSavings;
import org.springframework.stereotype.Component;

@Component
public class ShgMapper {

    public ShgSavings toSavingsEntity(ShgSavingsRequest request) {
        if (request == null) return null;
        return ShgSavings.builder()
                .transactionType(request.getTransactionType())
                .amount(request.getAmount())
                .transactionDate(request.getTransactionDate())
                .remarks(request.getRemarks())
                .recordedBy(request.getRecordedBy())
                .build();
    }
}
