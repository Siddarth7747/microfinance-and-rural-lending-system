package com.mfi.microfinance.service;

import com.mfi.microfinance.entity.Loan;
import com.mfi.microfinance.entity.enums.LoanStatus;
import com.mfi.microfinance.repository.LoanRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class RestructuringService {

    private final LoanRepository loanRepository;

    @Transactional
    public Loan restructureLoan(Long loanId, int additionalTenureMonths, String reason) {
        Loan loan = loanRepository.findById(loanId)
                .orElseThrow(() -> new RuntimeException("Loan not found"));

        loan.setTenureMonths(loan.getTenureMonths() + additionalTenureMonths);
        loan.setIsRestructured(true);
        loan.setStatus(LoanStatus.RESTRUCTURED);

        return loanRepository.save(loan);
    }
}
