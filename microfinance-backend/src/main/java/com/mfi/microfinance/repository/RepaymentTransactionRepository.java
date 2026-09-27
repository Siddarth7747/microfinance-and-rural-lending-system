package com.mfi.microfinance.repository;

import com.mfi.microfinance.entity.RepaymentTransaction;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Repository
public interface RepaymentTransactionRepository extends JpaRepository<RepaymentTransaction, Long> {

    List<RepaymentTransaction> findByLoanId(Long loanId);

    Page<RepaymentTransaction> findByBorrowerId(Long borrowerId, Pageable pageable);

    List<RepaymentTransaction> findByPaymentDate(LocalDate date);

    List<RepaymentTransaction> findByBranchIdAndPaymentDate(Long branchId, LocalDate date);

    @Query("SELECT SUM(r.amount) FROM RepaymentTransaction r WHERE r.branch.id = :branchId AND r.paymentDate = :date AND r.isReversed = false")
    BigDecimal sumCollectionByBranchAndDate(@Param("branchId") Long branchId, @Param("date") LocalDate date);

    List<RepaymentTransaction> findByIsOfflineEntryTrueAndSyncedAtIsNull();

    @Query("SELECT r FROM RepaymentTransaction r WHERE r.collectedBy = :officer AND r.paymentDate = :date")
    List<RepaymentTransaction> findByOfficerAndDate(@Param("officer") String officer, @Param("date") LocalDate date);
}
