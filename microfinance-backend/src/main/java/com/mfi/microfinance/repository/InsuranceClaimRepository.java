package com.mfi.microfinance.repository;

import com.mfi.microfinance.entity.InsuranceClaim;
import com.mfi.microfinance.entity.enums.ClaimStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface InsuranceClaimRepository extends JpaRepository<InsuranceClaim, Long> {

    Optional<InsuranceClaim> findByClaimNumber(String claimNumber);

    List<InsuranceClaim> findByLoanId(Long loanId);

    List<InsuranceClaim> findByBorrowerId(Long borrowerId);

    List<InsuranceClaim> findByStatus(ClaimStatus status);

    List<InsuranceClaim> findByBranchId(Long branchId);
}
