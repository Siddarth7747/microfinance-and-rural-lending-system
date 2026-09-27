package com.mfi.microfinance.repository;

import com.mfi.microfinance.entity.Loan;
import com.mfi.microfinance.entity.enums.LoanStatus;
import com.mfi.microfinance.entity.enums.ParClassification;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Repository
public interface LoanRepository extends JpaRepository<Loan, Long> {

    Optional<Loan> findByLoanAccountNumber(String loanAccountNumber);

    List<Loan> findByBorrowerId(Long borrowerId);

    List<Loan> findByBorrowerIdAndStatusIn(Long borrowerId, List<LoanStatus> statuses);

    Page<Loan> findByBranchIdAndStatus(Long branchId, LoanStatus status, Pageable pageable);

    List<Loan> findByStatusIn(List<LoanStatus> statuses);

    List<Loan> findByParClassification(ParClassification classification);

    @Query("SELECT SUM(l.outstandingPrincipal) FROM Loan l WHERE l.branch.id = :branchId AND l.status = 'ACTIVE'")
    BigDecimal sumOutstandingByBranch(@Param("branchId") Long branchId);

    @Query("SELECT l FROM Loan l WHERE l.status = 'ACTIVE' AND l.dpd > 0")
    List<Loan> findOverdueLoans();

    @Query("SELECT COUNT(l) FROM Loan l WHERE l.branch.id = :branchId AND l.status = :status")
    Long countByBranchAndStatus(@Param("branchId") Long branchId, @Param("status") LoanStatus status);

    @Query("SELECT l FROM Loan l WHERE l.assignedOfficer = :officerName AND l.status IN :statuses")
    List<Loan> findByOfficerAndStatuses(@Param("officerName") String officerName,
                                         @Param("statuses") List<LoanStatus> statuses);
}
