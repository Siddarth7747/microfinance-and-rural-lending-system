package com.mfi.microfinance.service;

import com.mfi.microfinance.entity.Loan;
import com.mfi.microfinance.entity.enums.LoanStatus;
import com.mfi.microfinance.repository.LoanRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class PrepaymentForeclosureService {

    private final LoanRepository loanRepository;

    public Map<String, BigDecimal> calculateForeclosureAmount(Long loanId) {
        Loan loan = loanRepository.findById(loanId)
                .orElseThrow(() -> new RuntimeException("Loan not found"));

        BigDecimal principal = loan.getOutstandingPrincipal();
        BigDecimal foreclosureFee = principal.multiply(new BigDecimal("0.02")); // 2% foreclosure charge
        BigDecimal total = principal.add(foreclosureFee);

        Map<String, BigDecimal> res = new HashMap<>();
        res.put("outstandingPrincipal", principal);
        res.put("foreclosureCharges", foreclosureFee);
        res.put("totalSettlementAmount", total);
        return res;
    }

    @Transactional
    public Loan forecloseLoan(Long loanId) {
        Loan loan = loanRepository.findById(loanId)
                .orElseThrow(() -> new RuntimeException("Loan not found"));

        loan.setOutstandingPrincipal(BigDecimal.ZERO);
        loan.setOutstandingInterest(BigDecimal.ZERO);
        loan.setStatus(LoanStatus.FORECLOSED);
        loan.setClosureDate(LocalDate.now());

        return loanRepository.save(loan);
    }
}
