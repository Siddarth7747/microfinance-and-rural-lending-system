package com.mfi.microfinance.repository;

import com.mfi.microfinance.entity.Borrower;
import com.mfi.microfinance.entity.enums.KycStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BorrowerRepository extends JpaRepository<Borrower, Long> {

    Optional<Borrower> findByBrn(String brn);

    Optional<Borrower> findByAadhaarNumber(String aadhaarNumber);

    Optional<Borrower> findByMobileNumber(String mobileNumber);

    List<Borrower> findByBranchId(Long branchId);

    Page<Borrower> findByBranchIdAndIsActiveTrue(Long branchId, Pageable pageable);

    List<Borrower> findByKycStatus(KycStatus kycStatus);

    @Query("SELECT b FROM Borrower b WHERE " +
           "LOWER(b.firstName) LIKE LOWER(CONCAT('%', :search, '%')) OR " +
           "LOWER(b.lastName) LIKE LOWER(CONCAT('%', :search, '%')) OR " +
           "b.brn LIKE CONCAT('%', :search, '%') OR " +
           "b.mobileNumber LIKE CONCAT('%', :search, '%')")
    Page<Borrower> searchBorrowers(@Param("search") String search, Pageable pageable);

    @Query("SELECT COUNT(b) FROM Borrower b WHERE b.branch.id = :branchId AND b.isActive = true")
    Long countActiveBorrowersByBranch(@Param("branchId") Long branchId);

    boolean existsByAadhaarNumber(String aadhaarNumber);

    boolean existsByMobileNumber(String mobileNumber);
}
