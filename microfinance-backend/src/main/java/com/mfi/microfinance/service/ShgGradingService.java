package com.mfi.microfinance.service;

import com.mfi.microfinance.entity.LoanGroup;
import com.mfi.microfinance.repository.LoanGroupRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ShgGradingService {

    private final LoanGroupRepository loanGroupRepository;

    public String gradeShgGroup(Long groupId) {
        LoanGroup group = loanGroupRepository.findById(groupId)
                .orElseThrow(() -> new RuntimeException("Group not found"));

        int score = group.getCohesionScore() != null ? group.getCohesionScore() : 75;
        if (score >= 85) return "GRADE_A";
        if (score >= 70) return "GRADE_B";
        return "GRADE_C";
    }
}
