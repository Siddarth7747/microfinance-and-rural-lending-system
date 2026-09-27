package com.mfi.microfinance.controller;

import com.mfi.microfinance.dto.request.BorrowerRegistrationRequest;
import com.mfi.microfinance.dto.response.BorrowerResponse;
import com.mfi.microfinance.service.BorrowerService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/borrowers")
@RequiredArgsConstructor
public class BorrowerController {

    private final BorrowerService borrowerService;

    @PostMapping
    public ResponseEntity<BorrowerResponse> registerBorrower(@Valid @RequestBody BorrowerRegistrationRequest request) {
        return ResponseEntity.ok(borrowerService.registerBorrower(request));
    }

    @GetMapping("/{id}")
    public ResponseEntity<BorrowerResponse> getBorrowerById(@PathVariable Long id) {
        return ResponseEntity.ok(borrowerService.getBorrowerById(id));
    }

    @GetMapping
    public ResponseEntity<Page<BorrowerResponse>> getAllBorrowers(
            @RequestParam(defaultValue = "") String query,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        return ResponseEntity.ok(borrowerService.searchBorrowers(query, PageRequest.of(page, size)));
    }

    @GetMapping("/search")
    public ResponseEntity<Page<BorrowerResponse>> searchBorrowers(
            @RequestParam(defaultValue = "") String query,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        return ResponseEntity.ok(borrowerService.searchBorrowers(query, PageRequest.of(page, size)));
    }

    @PutMapping("/{id}")
    public ResponseEntity<BorrowerResponse> updateBorrower(
            @PathVariable Long id,
            @Valid @RequestBody BorrowerRegistrationRequest request) {
        return ResponseEntity.ok(borrowerService.updateBorrower(id, request));
    }
}
