package com.mfi.microfinance.service;

import com.mfi.microfinance.entity.Loan;
import com.mfi.microfinance.entity.enums.LoanStatus;
import com.mfi.microfinance.repository.LoanRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class WriteOffRecoveryService {

    private final LoanRepository loanRepository;

    @Transactional
    public Loan writeOffLoan(Long loanId, String approvalReason) {
        Loan loan = loanRepository.findById(loanId)
                .orElseThrow(() -> new RuntimeException("Loan not found"));

        loan.setIsWrittenOff(true);
        loan.setStatus(LoanStatus.WRITTEN_OFF);
        return loanRepository.save(loan);
    }
}
