package com.mfi.microfinance.service;

import com.mfi.microfinance.entity.*;
import com.mfi.microfinance.entity.enums.LoanStatus;
import com.mfi.microfinance.entity.enums.ParClassification;
import com.mfi.microfinance.repository.LoanRepository;
import com.mfi.microfinance.util.BrnGeneratorUtil;
import com.mfi.microfinance.util.EmiCalculatorUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class LoanService {

    private final LoanRepository loanRepository;
    private final EmiScheduleService emiScheduleService;

    @Transactional
    public Loan createLoanFromSanctionedApplication(LoanApplication app, LocalDate disbursementDate) {
        BigDecimal sanctioned = app.getApprovedAmount() != null ? app.getApprovedAmount() : app.getRequestedAmount();
        int tenure = app.getApprovedTenureMonths() != null ? app.getApprovedTenureMonths() : app.getRequestedTenureMonths();
        LoanProduct product = app.getLoanProduct();

        BigDecimal emi = EmiCalculatorUtil.calculateEmi(sanctioned, product.getInterestRatePerAnnum(), tenure, product.getInterestMethod());

        Loan loan = Loan.builder()
                .loanAccountNumber(BrnGeneratorUtil.generateLoanAccountNumber(product.getProductCode()))
                .loanApplication(app)
                .borrower(app.getBorrower())
                .loanProduct(product)
                .loanGroup(app.getLoanGroup())
                .sanctionedAmount(sanctioned)
                .disbursedAmount(sanctioned)
                .outstandingPrincipal(sanctioned)
                .outstandingInterest(sanctioned.multiply(product.getInterestRatePerAnnum()).multiply(BigDecimal.valueOf(tenure)).divide(new BigDecimal("1200"), 2, java.math.RoundingMode.HALF_UP))
                .overdueAmount(BigDecimal.ZERO)
                .interestRate(product.getInterestRatePerAnnum())
                .tenureMonths(tenure)
                .emiAmount(emi)
                .totalEmis(tenure)
                .paidEmis(0)
                .status(LoanStatus.ACTIVE)
                .parClassification(ParClassification.CURRENT)
                .dpd(0)
                .disbursementDate(disbursementDate)
                .firstEmiDate(disbursementDate.plusMonths(1))
                .maturityDate(disbursementDate.plusMonths(tenure))
                .processingFee(sanctioned.multiply(product.getProcessingFeePercent() != null ? product.getProcessingFeePercent() : BigDecimal.ZERO).divide(new BigDecimal("100"), 2, java.math.RoundingMode.HALF_UP))
                .totalRepaid(BigDecimal.ZERO)
                .branch(app.getBranch())
                .build();

        Loan saved = loanRepository.save(loan);
        emiScheduleService.generateEmiSchedule(saved, disbursementDate.plusMonths(1));
        return saved;
    }

    public Loan getLoanById(Long id) {
        return loanRepository.findById(id).orElseThrow(() -> new RuntimeException("Loan not found"));
    }

    public List<Loan> getActiveLoansByBorrower(Long borrowerId) {
        return loanRepository.findByBorrowerIdAndStatusIn(borrowerId, List.of(LoanStatus.ACTIVE, LoanStatus.OVERDUE));
    }

    public List<Loan> getAllLoans() {
        return loanRepository.findAll();
    }
}
