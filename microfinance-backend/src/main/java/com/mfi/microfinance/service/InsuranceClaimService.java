package com.mfi.microfinance.service;

import com.mfi.microfinance.entity.InsuranceClaim;
import com.mfi.microfinance.repository.InsuranceClaimRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class InsuranceClaimService {

    private final InsuranceClaimRepository claimRepository;

    @Transactional
    public InsuranceClaim fileClaim(InsuranceClaim claim) {
        claim.setStatus(com.mfi.microfinance.entity.enums.ClaimStatus.INITIATED);
        return claimRepository.save(claim);
    }

    public List<InsuranceClaim> getClaimsByLoan(Long loanId) {
        return claimRepository.findByLoanId(loanId);
    }
}
