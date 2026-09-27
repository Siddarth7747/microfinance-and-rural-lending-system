package com.mfi.microfinance.service;

import com.mfi.microfinance.entity.LoanApplication;
import com.mfi.microfinance.entity.enums.LoanStatus;
import com.mfi.microfinance.repository.LoanApplicationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;

@Service
@RequiredArgsConstructor
public class LoanApprovalWorkflowService {

    private final LoanApplicationRepository loanApplicationRepository;
    private final LoanService loanService;

    @Transactional
    public LoanApplication recommendByFieldOfficer(Long applicationId, String officerName, String remarks) {
        LoanApplication app = getApp(applicationId);
        app.setStatus(LoanStatus.FIELD_OFFICER_RECOMMENDED);
        app.setFieldOfficerName(officerName);
        app.setFieldOfficerRemarks(remarks);
        app.setFieldOfficerRecommendationDate(LocalDate.now());
        return loanApplicationRepository.save(app);
    }

    @Transactional
    public LoanApplication approveByBranchManager(Long applicationId, String managerName, String remarks) {
        LoanApplication app = getApp(applicationId);
        app.setStatus(LoanStatus.BRANCH_MANAGER_APPROVED);
        app.setBranchManagerName(managerName);
        app.setBranchManagerRemarks(remarks);
        app.setBranchManagerApprovalDate(LocalDate.now());
        return loanApplicationRepository.save(app);
    }

    @Transactional
    public LoanApplication approveByCreditCommittee(Long applicationId, String approverName, String remarks) {
        LoanApplication app = getApp(applicationId);
        app.setStatus(LoanStatus.SANCTIONED);
        app.setApprovedAmount(app.getRequestedAmount());
        app.setApprovedTenureMonths(app.getRequestedTenureMonths());
        app.setCreditCommitteeApprover(approverName);
        app.setCreditCommitteeRemarks(remarks);
        app.setCreditCommitteeApprovalDate(LocalDate.now());
        LoanApplication saved = loanApplicationRepository.save(app);
        loanService.createLoanFromSanctionedApplication(saved, LocalDate.now());
        return saved;
    }

    @Transactional
    public LoanApplication rejectApplication(Long applicationId, String reason) {
        LoanApplication app = getApp(applicationId);
        app.setStatus(LoanStatus.REJECTED);
        app.setRejectionReason(reason);
        app.setRejectionDate(LocalDate.now());
        return loanApplicationRepository.save(app);
    }

    private LoanApplication getApp(Long id) {
        return loanApplicationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Application not found"));
    }
}
