package com.mfi.microfinance.controller;

import com.mfi.microfinance.entity.LoanProduct;
import com.mfi.microfinance.service.LoanProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/loan-products")
@RequiredArgsConstructor
public class LoanProductController {

    private final LoanProductService loanProductService;

    @GetMapping
    public ResponseEntity<List<LoanProduct>> getActiveProducts() {
        return ResponseEntity.ok(loanProductService.getActiveProducts());
    }

    @GetMapping("/{id}")
    public ResponseEntity<LoanProduct> getProductById(@PathVariable Long id) {
        return ResponseEntity.ok(loanProductService.getProductById(id));
    }

    @PostMapping
    public ResponseEntity<LoanProduct> createProduct(@RequestBody LoanProduct product) {
        return ResponseEntity.ok(loanProductService.createProduct(product));
    }
}
