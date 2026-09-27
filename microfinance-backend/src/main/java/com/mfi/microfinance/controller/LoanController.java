package com.mfi.microfinance.controller;

import com.mfi.microfinance.entity.Loan;
import com.mfi.microfinance.service.LoanService;
import com.mfi.microfinance.service.PrepaymentForeclosureService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/loans")
@RequiredArgsConstructor
public class LoanController {

    private final LoanService loanService;
    private final PrepaymentForeclosureService foreclosureService;

    @GetMapping
    public ResponseEntity<List<Loan>> getAllLoans() {
        return ResponseEntity.ok(loanService.getAllLoans());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Loan> getLoanById(@PathVariable Long id) {
        return ResponseEntity.ok(loanService.getLoanById(id));
    }

    @GetMapping("/borrower/{borrowerId}")
    public ResponseEntity<List<Loan>> getLoansByBorrower(@PathVariable Long borrowerId) {
        return ResponseEntity.ok(loanService.getActiveLoansByBorrower(borrowerId));
    }

    @GetMapping("/{id}/foreclosure-quote")
    public ResponseEntity<Map<String, BigDecimal>> getForeclosureQuote(@PathVariable Long id) {
        return ResponseEntity.ok(foreclosureService.calculateForeclosureAmount(id));
    }

    @PostMapping("/{id}/foreclose")
    public ResponseEntity<Loan> forecloseLoan(@PathVariable Long id) {
        return ResponseEntity.ok(foreclosureService.forecloseLoan(id));
    }
}
