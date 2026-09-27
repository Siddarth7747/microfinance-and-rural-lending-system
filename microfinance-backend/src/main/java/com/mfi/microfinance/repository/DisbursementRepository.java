package com.mfi.microfinance.repository;

import com.mfi.microfinance.entity.Disbursement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface DisbursementRepository extends JpaRepository<Disbursement, Long> {

    Optional<Disbursement> findByDisbursementId(String disbursementId);

    List<Disbursement> findByLoanId(Long loanId);

    List<Disbursement> findByBranchIdAndDisbursementDate(Long branchId, LocalDate date);

    List<Disbursement> findByStatus(String status);
}
