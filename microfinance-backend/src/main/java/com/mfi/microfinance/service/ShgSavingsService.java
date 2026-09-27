package com.mfi.microfinance.service;

import com.mfi.microfinance.dto.request.ShgSavingsRequest;
import com.mfi.microfinance.entity.Borrower;
import com.mfi.microfinance.entity.LoanGroup;
import com.mfi.microfinance.entity.ShgSavings;
import com.mfi.microfinance.mapper.ShgMapper;
import com.mfi.microfinance.repository.BorrowerRepository;
import com.mfi.microfinance.repository.LoanGroupRepository;
import com.mfi.microfinance.repository.ShgSavingsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;

@Service
@RequiredArgsConstructor
public class ShgSavingsService {

    private final ShgSavingsRepository shgSavingsRepository;
    private final LoanGroupRepository loanGroupRepository;
    private final BorrowerRepository borrowerRepository;
    private final ShgMapper shgMapper;

    @Transactional
    public ShgSavings recordSavingsTransaction(ShgSavingsRequest request) {
        LoanGroup group = loanGroupRepository.findById(request.getGroupId())
                .orElseThrow(() -> new RuntimeException("SHG group not found"));
        Borrower member = borrowerRepository.findById(request.getMemberId())
                .orElseThrow(() -> new RuntimeException("Member not found"));

        ShgSavings savings = shgMapper.toSavingsEntity(request);
        savings.setGroup(group);
        savings.setMember(member);
        savings.setBranch(group.getBranch());

        BigDecimal currentBalance = shgSavingsRepository.calculateGroupBalance(group.getId());
        if (currentBalance == null) currentBalance = BigDecimal.ZERO;

        if ("DEPOSIT".equalsIgnoreCase(request.getTransactionType())) {
            savings.setBalanceAfter(currentBalance.add(request.getAmount()));
        } else {
            savings.setBalanceAfter(currentBalance.subtract(request.getAmount()));
        }

        return shgSavingsRepository.save(savings);
    }
}
