package com.mfi.microfinance.controller;

import com.mfi.microfinance.dto.request.RepaymentRequest;
import com.mfi.microfinance.entity.RepaymentTransaction;
import com.mfi.microfinance.service.RepaymentService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/repayments")
@RequiredArgsConstructor
public class RepaymentController {

    private final RepaymentService repaymentService;

    @PostMapping
    public ResponseEntity<RepaymentTransaction> processRepayment(@Valid @RequestBody RepaymentRequest request) {
        return ResponseEntity.ok(repaymentService.processRepayment(request));
    }
}
