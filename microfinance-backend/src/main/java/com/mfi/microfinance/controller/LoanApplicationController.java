package com.mfi.microfinance.controller;

import com.mfi.microfinance.dto.request.LoanApplicationRequest;
import com.mfi.microfinance.entity.LoanApplication;
import com.mfi.microfinance.service.LoanApplicationService;
import com.mfi.microfinance.service.LoanApprovalWorkflowService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/loan-applications")
@RequiredArgsConstructor
public class LoanApplicationController {

    private final LoanApplicationService loanApplicationService;
    private final LoanApprovalWorkflowService workflowService;

    @GetMapping
    public ResponseEntity<java.util.List<LoanApplication>> getAllApplications() {
        return ResponseEntity.ok(loanApplicationService.getAllApplications());
    }

    @GetMapping("/{id}")
    public ResponseEntity<LoanApplication> getApplicationById(@PathVariable Long id) {
        return ResponseEntity.ok(loanApplicationService.getApplicationById(id));
    }

    @PostMapping
    public ResponseEntity<LoanApplication> applyForLoan(@Valid @RequestBody LoanApplicationRequest request) {
        return ResponseEntity.ok(loanApplicationService.applyForLoan(request));
    }

    @PutMapping("/{id}/recommend")
    public ResponseEntity<LoanApplication> recommend(@PathVariable Long id, @RequestBody Map<String, String> body) {
        return ResponseEntity.ok(workflowService.recommendByFieldOfficer(id, body.get("officerName"), body.get("remarks")));
    }

    @PutMapping("/{id}/approve-bm")
    public ResponseEntity<LoanApplication> approveBm(@PathVariable Long id, @RequestBody Map<String, String> body) {
        return ResponseEntity.ok(workflowService.approveByBranchManager(id, body.get("managerName"), body.get("remarks")));
    }

    @PutMapping("/{id}/approve-credit")
    public ResponseEntity<LoanApplication> approveCredit(@PathVariable Long id, @RequestBody Map<String, String> body) {
        return ResponseEntity.ok(workflowService.approveByCreditCommittee(id, body.get("approverName"), body.get("remarks")));
    }

    @PutMapping("/{id}/reject")
    public ResponseEntity<LoanApplication> reject(@PathVariable Long id, @RequestBody Map<String, String> body) {
        return ResponseEntity.ok(workflowService.rejectApplication(id, body.get("reason")));
    }
}
