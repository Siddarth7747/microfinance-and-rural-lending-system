package com.mfi.microfinance.repository;

import com.mfi.microfinance.entity.Branch;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BranchRepository extends JpaRepository<Branch, Long> {

    Optional<Branch> findByBranchCode(String branchCode);

    List<Branch> findByIsActiveTrue();

    List<Branch> findByState(String state);

    List<Branch> findByDistrict(String district);

    List<Branch> findByRegionHeadBranchId(Long regionHeadBranchId);
}
