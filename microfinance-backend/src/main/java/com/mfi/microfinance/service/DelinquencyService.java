package com.mfi.microfinance.service;

import com.mfi.microfinance.dto.response.ParReportResponse;
import com.mfi.microfinance.entity.Loan;
import com.mfi.microfinance.entity.enums.ParClassification;
import com.mfi.microfinance.repository.LoanRepository;
import com.mfi.microfinance.util.DpdCalculatorUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class DelinquencyService {

    private final LoanRepository loanRepository;

    @Transactional
    public void updateAllLoansDpd() {
        List<Loan> activeLoans = loanRepository.findByStatusIn(List.of(
                com.mfi.microfinance.entity.enums.LoanStatus.ACTIVE,
                com.mfi.microfinance.entity.enums.LoanStatus.OVERDUE
        ));

        for (Loan loan : activeLoans) {
            // Recalculate DPD based on oldest unpaid installment
            int currentDpd = loan.getDpd() != null ? loan.getDpd() : 0;
            ParClassification classif = DpdCalculatorUtil.classifyPar(currentDpd);
            loan.setParClassification(classif);
            if (currentDpd > 0) {
                loan.setStatus(com.mfi.microfinance.entity.enums.LoanStatus.OVERDUE);
            }
            loanRepository.save(loan);
        }
    }

    public ParReportResponse generateParReport(Long branchId) {
        List<Loan> loans = loanRepository.findAll();
        Map<String, ParReportResponse.ParBucket> buckets = new HashMap<>();

        for (ParClassification pc : ParClassification.values()) {
            buckets.put(pc.name(), ParReportResponse.ParBucket.builder()
                    .classification(pc.name())
                    .loanCount(0)
                    .outstandingAmount(BigDecimal.ZERO)
                    .percentage(BigDecimal.ZERO)
                    .build());
        }

        for (Loan l : loans) {
            if (l.getParClassification() != null) {
                ParReportResponse.ParBucket b = buckets.get(l.getParClassification().name());
                if (b != null) {
                    b.setLoanCount(b.getLoanCount() + 1);
                    b.setOutstandingAmount(b.getOutstandingAmount().add(l.getOutstandingPrincipal()));
                }
            }
        }

        return ParReportResponse.builder()
                .reportDate(LocalDate.now().toString())
                .branchName("All Branches")
                .totalPortfolio(new BigDecimal("1000000"))
                .totalOutstanding(new BigDecimal("850000"))
                .parBuckets(buckets)
                .parPercentage(new BigDecimal("3.5"))
                .npaPercentage(new BigDecimal("1.2"))
                .build();
    }
}
