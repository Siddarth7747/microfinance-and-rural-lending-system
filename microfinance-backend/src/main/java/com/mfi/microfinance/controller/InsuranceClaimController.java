package com.mfi.microfinance.controller;

import com.mfi.microfinance.entity.InsuranceClaim;
import com.mfi.microfinance.service.InsuranceClaimService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/insurance-claims")
@RequiredArgsConstructor
public class InsuranceClaimController {

    private final InsuranceClaimService claimService;

    @PostMapping
    public ResponseEntity<InsuranceClaim> fileClaim(@RequestBody InsuranceClaim claim) {
        return ResponseEntity.ok(claimService.fileClaim(claim));
    }

    @GetMapping("/loan/{loanId}")
    public ResponseEntity<List<InsuranceClaim>> getClaimsByLoan(@PathVariable Long loanId) {
        return ResponseEntity.ok(claimService.getClaimsByLoan(loanId));
    }
}
