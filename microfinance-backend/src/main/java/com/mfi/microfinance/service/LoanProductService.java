package com.mfi.microfinance.service;

import com.mfi.microfinance.entity.LoanProduct;
import com.mfi.microfinance.repository.LoanProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LoanProductService {

    private final LoanProductRepository loanProductRepository;

    public List<LoanProduct> getActiveProducts() {
        return loanProductRepository.findByIsActiveTrue();
    }

    public LoanProduct getProductById(Long id) {
        return loanProductRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Loan Product not found"));
    }

    @Transactional
    public LoanProduct createProduct(LoanProduct product) {
        product.setIsActive(true);
        return loanProductRepository.save(product);
    }
}
