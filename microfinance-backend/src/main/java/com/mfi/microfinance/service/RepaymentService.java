package com.mfi.microfinance.service;

import com.mfi.microfinance.dto.request.RepaymentRequest;
import com.mfi.microfinance.entity.*;
import com.mfi.microfinance.entity.enums.PaymentMode;
import com.mfi.microfinance.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class RepaymentService {

    private final RepaymentTransactionRepository repaymentRepository;
    private final LoanRepository loanRepository;
    private final EmiScheduleRepository emiScheduleRepository;

    @Transactional
    public RepaymentTransaction processRepayment(RepaymentRequest request) {
        Loan loan = loanRepository.findById(request.getLoanId())
                .orElseThrow(() -> new RuntimeException("Loan not found"));

        List<EmiSchedule> unpaidSchedules = emiScheduleRepository.findByLoanIdAndIsPaidFalseOrderByDueDateAsc(loan.getId());

        BigDecimal amount = request.getAmount();
        BigDecimal principalPaid = BigDecimal.ZERO;
        BigDecimal interestPaid = BigDecimal.ZERO;

        EmiSchedule currentEmi = null;

        if (!unpaidSchedules.isEmpty()) {
            currentEmi = unpaidSchedules.get(0);
            if (amount.compareTo(currentEmi.getEmiAmount()) >= 0) {
                currentEmi.setIsPaid(true);
                currentEmi.setPaidDate(request.getPaymentDate());
                currentEmi.setPaidAmount(currentEmi.getEmiAmount());
                emiScheduleRepository.save(currentEmi);

                principalPaid = currentEmi.getPrincipalComponent();
                interestPaid = currentEmi.getInterestComponent();
            }
        }

        loan.setOutstandingPrincipal(loan.getOutstandingPrincipal().subtract(principalPaid).max(BigDecimal.ZERO));
        loan.setTotalRepaid(loan.getTotalRepaid().add(amount));
        loan.setPaidEmis(loan.getPaidEmis() + 1);

        if (loan.getOutstandingPrincipal().compareTo(BigDecimal.ZERO) == 0) {
            loan.setStatus(com.mfi.microfinance.entity.enums.LoanStatus.CLOSED);
        }

        loanRepository.save(loan);

        RepaymentTransaction tx = RepaymentTransaction.builder()
                .transactionId("TXN-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase())
                .loan(loan)
                .borrower(loan.getBorrower())
                .emiSchedule(currentEmi)
                .amount(amount)
                .principalPaid(principalPaid)
                .interestPaid(interestPaid)
                .paymentMode(PaymentMode.valueOf(request.getPaymentMode()))
                .paymentDate(request.getPaymentDate())
                .referenceNumber(request.getReferenceNumber())
                .collectedBy(request.getCollectedBy())
                .collectionLatitude(request.getCollectionLatitude())
                .collectionLongitude(request.getCollectionLongitude())
                .isOfflineEntry(request.getIsOfflineEntry())
                .syncedAt(request.getIsOfflineEntry() ? LocalDateTime.now() : null)
                .branch(loan.getBranch())
                .build();

        return repaymentRepository.save(tx);
    }
}
