package com.mfi.microfinance.controller;

import com.mfi.microfinance.dto.request.DisbursementRequest;
import com.mfi.microfinance.entity.Disbursement;
import com.mfi.microfinance.service.DisbursementService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/disbursements")
@RequiredArgsConstructor
public class DisbursementController {

    private final DisbursementService disbursementService;

    @PostMapping
    public ResponseEntity<Disbursement> initiateDisbursement(@Valid @RequestBody DisbursementRequest request) {
        return ResponseEntity.ok(disbursementService.initiateDisbursement(request));
    }
}
