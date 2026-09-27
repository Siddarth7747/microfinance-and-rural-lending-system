package com.mfi.microfinance.service;

import com.mfi.microfinance.dto.request.DisbursementRequest;
import com.mfi.microfinance.entity.Disbursement;
import com.mfi.microfinance.entity.Loan;
import com.mfi.microfinance.entity.enums.PaymentMode;
import com.mfi.microfinance.repository.DisbursementRepository;
import com.mfi.microfinance.repository.LoanRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class DisbursementService {

    private final DisbursementRepository disbursementRepository;
    private final LoanRepository loanRepository;

    @Transactional
    public Disbursement initiateDisbursement(DisbursementRequest request) {
        Loan loan = loanRepository.findById(request.getLoanId())
                .orElseThrow(() -> new RuntimeException("Loan not found"));

        Disbursement disbursement = Disbursement.builder()
                .disbursementId("DISB-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase())
                .loan(loan)
                .borrower(loan.getBorrower())
                .amount(request.getAmount())
                .netDisbursedAmount(request.getAmount())
                .paymentMode(PaymentMode.valueOf(request.getPaymentMode()))
                .bankAccountNumber(request.getBankAccountNumber())
                .ifscCode(request.getIfscCode())
                .disbursementDate(request.getDisbursementDate())
                .status("COMPLETED")
                .approvedBy(request.getApprovedBy())
                .branch(loan.getBranch())
                .pennyDropVerified(true)
                .build();

        loan.setStatus(com.mfi.microfinance.entity.enums.LoanStatus.DISBURSED);
        loanRepository.save(loan);

        return disbursementRepository.save(disbursement);
    }
}
