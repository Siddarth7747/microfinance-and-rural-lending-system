package com.mfi.microfinance.repository;

import com.mfi.microfinance.entity.LoanProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface LoanProductRepository extends JpaRepository<LoanProduct, Long> {

    Optional<LoanProduct> findByProductCode(String productCode);

    List<LoanProduct> findByIsActiveTrue();
}
