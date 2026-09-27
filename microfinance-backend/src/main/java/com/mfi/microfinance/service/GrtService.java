package com.mfi.microfinance.service;

import com.mfi.microfinance.entity.LoanGroup;
import com.mfi.microfinance.repository.LoanGroupRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;

@Service
@RequiredArgsConstructor
public class GrtService {

    private final LoanGroupRepository loanGroupRepository;

    @Transactional
    public LoanGroup completeGrt(Long groupId, String remarks) {
        LoanGroup group = loanGroupRepository.findById(groupId)
                .orElseThrow(() -> new RuntimeException("Group not found"));

        group.setGrtCompleted(true);
        group.setGrtDate(LocalDate.now());
        group.setGrtRemarks(remarks);

        return loanGroupRepository.save(group);
    }
}
