package com.mfi.microfinance.controller;

import com.mfi.microfinance.dto.request.ShgSavingsRequest;
import com.mfi.microfinance.entity.ShgSavings;
import com.mfi.microfinance.service.ShgSavingsService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/shg-savings")
@RequiredArgsConstructor
public class ShgSavingsController {

    private final ShgSavingsService shgSavingsService;

    @PostMapping
    public ResponseEntity<ShgSavings> recordSavings(@Valid @RequestBody ShgSavingsRequest request) {
        return ResponseEntity.ok(shgSavingsService.recordSavingsTransaction(request));
    }
}
