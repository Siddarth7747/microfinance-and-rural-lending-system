package com.mfi.microfinance.service;

import com.mfi.microfinance.entity.Branch;
import com.mfi.microfinance.repository.BranchRepository;
import com.mfi.microfinance.repository.LoanRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.*;

/**
 * Branch service managing branch CRUD, hierarchy, area mapping,
 * and target setting for microfinance operations.
 */
@Service
@RequiredArgsConstructor
public class BranchService {

    private final BranchRepository branchRepository;
    private final LoanRepository loanRepository;

    public List<Branch> getAllBranches() {
        return branchRepository.findByIsActiveTrue();
    }

    public Branch getBranchById(Long id) {
        return branchRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Branch not found"));
    }

    @Transactional
    public Branch createBranch(Branch branch) {
        branch.setIsActive(true);
        return branchRepository.save(branch);
    }

    @Transactional
    public Branch updateBranch(Long id, Branch updatedBranch) {
        Branch branch = getBranchById(id);
        branch.setBranchName(updatedBranch.getBranchName());
        branch.setBranchCode(updatedBranch.getBranchCode());
        branch.setAddress(updatedBranch.getAddress());
        branch.setDistrict(updatedBranch.getDistrict());
        branch.setState(updatedBranch.getState());
        branch.setPincode(updatedBranch.getPincode());
        branch.setBranchManagerName(updatedBranch.getBranchManagerName());
        branch.setPhone(updatedBranch.getPhone());
        return branchRepository.save(branch);
    }

    @Transactional
    public void deactivateBranch(Long id) {
        Branch branch = getBranchById(id);
        branch.setIsActive(false);
        branchRepository.save(branch);
    }

    /**
     * Get branch hierarchy tree (Head Office → Regional → Area → Branch).
     */
    public List<Map<String, Object>> getBranchHierarchy() {
        List<Branch> allBranches = branchRepository.findByIsActiveTrue();
        // Group by state (as a proxy for region)
        Map<String, List<Branch>> byState = new LinkedHashMap<>();
        for (Branch b : allBranches) {
            String state = b.getState() != null ? b.getState() : "Unknown";
            byState.computeIfAbsent(state, k -> new ArrayList<>()).add(b);
        }

        List<Map<String, Object>> hierarchy = new ArrayList<>();
        for (Map.Entry<String, List<Branch>> entry : byState.entrySet()) {
            Map<String, Object> region = new HashMap<>();
            region.put("regionName", entry.getKey());
            region.put("branchCount", entry.getValue().size());

            // Group by district
            Map<String, List<Branch>> byDistrict = new LinkedHashMap<>();
            for (Branch b : entry.getValue()) {
                String district = b.getDistrict() != null ? b.getDistrict() : "Unknown";
                byDistrict.computeIfAbsent(district, k -> new ArrayList<>()).add(b);
            }

            List<Map<String, Object>> areas = new ArrayList<>();
            for (Map.Entry<String, List<Branch>> distEntry : byDistrict.entrySet()) {
                Map<String, Object> area = new HashMap<>();
                area.put("areaName", distEntry.getKey());
                area.put("branches", distEntry.getValue().stream().map(b -> {
                    Map<String, Object> bm = new HashMap<>();
                    bm.put("id", b.getId());
                    bm.put("branchCode", b.getBranchCode());
                    bm.put("branchName", b.getBranchName());
                    bm.put("manager", b.getBranchManagerName());
                    return bm;
                }).toList());
                areas.add(area);
            }
            region.put("areas", areas);
            hierarchy.add(region);
        }
        return hierarchy;
    }

    /**
     * Set targets for a branch (disbursement, collection, new borrowers).
     */
    public Map<String, Object> setTargets(Long branchId, BigDecimal disbursementTarget,
                                            BigDecimal collectionTarget, int newBorrowerTarget) {
        Branch branch = getBranchById(branchId);
        Map<String, Object> targets = new HashMap<>();
        targets.put("branchId", branchId);
        targets.put("branchName", branch.getBranchName());
        targets.put("disbursementTarget", disbursementTarget);
        targets.put("collectionTarget", collectionTarget);
        targets.put("newBorrowerTarget", newBorrowerTarget);
        targets.put("period", java.time.LocalDate.now().getMonth() + " " + java.time.LocalDate.now().getYear());
        targets.put("status", "TARGET_SET");
        return targets;
    }

    /**
     * Get area mapping for a branch (villages, panchayats served).
     */
    public Map<String, Object> getAreaMapping(Long branchId) {
        Branch branch = getBranchById(branchId);
        Map<String, Object> mapping = new HashMap<>();
        mapping.put("branchId", branchId);
        mapping.put("branchName", branch.getBranchName());
        mapping.put("district", branch.getDistrict());
        mapping.put("state", branch.getState());
        mapping.put("pincode", branch.getPincode());
        mapping.put("serviceArea", branch.getDistrict() + ", " + branch.getState());
        return mapping;
    }
}
