package com.mfi.microfinance.service;

import com.mfi.microfinance.entity.Borrower;
import com.mfi.microfinance.entity.LoanGroup;
import com.mfi.microfinance.entity.enums.GroupType;
import com.mfi.microfinance.exception.InsufficientGroupSizeException;
import com.mfi.microfinance.repository.BorrowerRepository;
import com.mfi.microfinance.repository.LoanGroupRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LoanGroupService {

    private final LoanGroupRepository loanGroupRepository;
    private final BorrowerRepository borrowerRepository;

    @Transactional
    public LoanGroup createGroup(LoanGroup group, List<Long> memberIds) {
        if (memberIds != null && memberIds.size() < 4) {
            throw new InsufficientGroupSizeException("JLG group must have at least 4 members for mutual guarantee");
        }

        if (memberIds != null) {
            List<Borrower> members = borrowerRepository.findAllById(memberIds);
            group.setMembers(members);
        }

        group.setIsActive(true);
        group.setCohesionScore(85);
        return loanGroupRepository.save(group);
    }

    public List<LoanGroup> getGroupsByBranch(Long branchId) {
        if (branchId == null) return loanGroupRepository.findAll();
        return loanGroupRepository.findByBranchIdAndIsActiveTrue(branchId);
    }

    public List<LoanGroup> getAllGroups() {
        return loanGroupRepository.findAll();
    }
}
