package com.mfi.microfinance.service;

import com.mfi.microfinance.entity.Loan;
import com.mfi.microfinance.entity.enums.LoanStatus;
import com.mfi.microfinance.entity.enums.ParClassification;
import com.mfi.microfinance.repository.LoanRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class NpaClassificationService {

    private final LoanRepository loanRepository;

    @Transactional
    public void classifyNpaLoans() {
        List<Loan> overdueLoans = loanRepository.findOverdueLoans();

        for (Loan loan : overdueLoans) {
            if (loan.getDpd() > 90) {
                loan.setStatus(LoanStatus.NPA);
                if (loan.getDpd() <= 180) {
                    loan.setParClassification(ParClassification.SUB_STANDARD);
                } else if (loan.getDpd() <= 365) {
                    loan.setParClassification(ParClassification.DOUBTFUL);
                } else {
                    loan.setParClassification(ParClassification.LOSS);
                }
                loanRepository.save(loan);
            }
        }
    }
}
