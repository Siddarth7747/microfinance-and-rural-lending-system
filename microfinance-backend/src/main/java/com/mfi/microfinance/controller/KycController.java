package com.mfi.microfinance.controller;

import com.mfi.microfinance.dto.request.KycVerificationRequest;
import com.mfi.microfinance.entity.enums.KycStatus;
import com.mfi.microfinance.service.KycService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/kyc")
@RequiredArgsConstructor
public class KycController {

    private final KycService kycService;

    @PostMapping("/verify")
    public ResponseEntity<KycStatus> verifyKyc(@Valid @RequestBody KycVerificationRequest request) {
        return ResponseEntity.ok(kycService.verifyKyc(request));
    }
}
