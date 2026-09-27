package com.mfi.microfinance.repository;

import com.mfi.microfinance.entity.LoanGroup;
import com.mfi.microfinance.entity.enums.GroupType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface LoanGroupRepository extends JpaRepository<LoanGroup, Long> {

    Optional<LoanGroup> findByGroupCode(String groupCode);

    boolean existsByGroupCode(String groupCode);

    List<LoanGroup> findByGroupTypeAndIsActiveTrue(GroupType groupType);

    List<LoanGroup> findByBranchIdAndIsActiveTrue(Long branchId);

    Page<LoanGroup> findByBranchId(Long branchId, Pageable pageable);

    List<LoanGroup> findByGrtCompletedFalseAndIsActiveTrue();

    List<LoanGroup> findByMembersId(Long borrowerId);
}
