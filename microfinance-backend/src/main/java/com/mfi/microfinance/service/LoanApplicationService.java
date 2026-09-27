package com.mfi.microfinance.service;

import com.mfi.microfinance.dto.request.LoanApplicationRequest;
import com.mfi.microfinance.entity.*;
import com.mfi.microfinance.entity.enums.LoanStatus;
import com.mfi.microfinance.repository.*;
import com.mfi.microfinance.util.BrnGeneratorUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class LoanApplicationService {

    private final LoanApplicationRepository loanApplicationRepository;
    private final BorrowerRepository borrowerRepository;
    private final LoanProductRepository loanProductRepository;
    private final LoanGroupRepository loanGroupRepository;

    @Transactional
    public LoanApplication applyForLoan(LoanApplicationRequest request) {
        Borrower borrower = borrowerRepository.findById(request.getBorrowerId())
                .orElseThrow(() -> new RuntimeException("Borrower not found"));
        LoanProduct product = loanProductRepository.findById(request.getLoanProductId())
                .orElseThrow(() -> new RuntimeException("Loan Product not found"));

        LoanGroup group = null;
        if (request.getLoanGroupId() != null) {
            group = loanGroupRepository.findById(request.getLoanGroupId()).orElse(null);
        }

        LoanApplication application = LoanApplication.builder()
                .applicationNumber(BrnGeneratorUtil.generateApplicationNumber())
                .borrower(borrower)
                .loanProduct(product)
                .loanGroup(group)
                .requestedAmount(request.getRequestedAmount())
                .requestedTenureMonths(request.getRequestedTenureMonths())
                .loanPurpose(request.getLoanPurpose())
                .status(LoanStatus.PENDING_REVIEW)
                .branch(borrower.getBranch())
                .bureauCheckCompleted(true)
                .build();

        return loanApplicationRepository.save(application);
    }

    public java.util.List<LoanApplication> getAllApplications() {
        return loanApplicationRepository.findAll();
    }

    public LoanApplication getApplicationById(Long id) {
        return loanApplicationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Loan application not found with id: " + id));
    }
}
