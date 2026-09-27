package com.mfi.microfinance.repository;

import com.mfi.microfinance.entity.LoanApplication;
import com.mfi.microfinance.entity.enums.LoanStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface LoanApplicationRepository extends JpaRepository<LoanApplication, Long> {

    Optional<LoanApplication> findByApplicationNumber(String applicationNumber);

    List<LoanApplication> findByBorrowerId(Long borrowerId);

    Page<LoanApplication> findByStatus(LoanStatus status, Pageable pageable);

    Page<LoanApplication> findByBranchIdAndStatus(Long branchId, LoanStatus status, Pageable pageable);

    @Query("SELECT la FROM LoanApplication la WHERE la.status IN :statuses AND la.branch.id = :branchId")
    Page<LoanApplication> findPendingApprovals(@Param("branchId") Long branchId,
                                                @Param("statuses") List<LoanStatus> statuses,
                                                Pageable pageable);

    @Query("SELECT COUNT(la) FROM LoanApplication la WHERE la.branch.id = :branchId AND la.status = :status")
    Long countByBranchAndStatus(@Param("branchId") Long branchId, @Param("status") LoanStatus status);
}
