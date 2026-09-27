package com.mfi.microfinance.service;

import com.mfi.microfinance.dto.request.BorrowerRegistrationRequest;
import com.mfi.microfinance.dto.response.BorrowerResponse;
import com.mfi.microfinance.entity.Borrower;
import com.mfi.microfinance.entity.Branch;
import com.mfi.microfinance.entity.enums.KycStatus;
import com.mfi.microfinance.exception.OverIndebtednessException;
import com.mfi.microfinance.mapper.BorrowerMapper;
import com.mfi.microfinance.repository.BorrowerRepository;
import com.mfi.microfinance.repository.BranchRepository;
import com.mfi.microfinance.util.BrnGeneratorUtil;
import com.mfi.microfinance.validation.LoanAmountLimitValidator;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class BorrowerService {

    private final BorrowerRepository borrowerRepository;
    private final BranchRepository branchRepository;
    private final BorrowerMapper borrowerMapper;

    @Transactional
    public BorrowerResponse registerBorrower(BorrowerRegistrationRequest request) {
        if (borrowerRepository.existsByAadhaarNumber(request.getAadhaarNumber())) {
            throw new RuntimeException("Borrower with this Aadhaar already registered");
        }
        if (borrowerRepository.existsByMobileNumber(request.getMobileNumber())) {
            throw new RuntimeException("Borrower with this Mobile number already registered");
        }

        if (request.getAnnualHouseholdIncome() != null &&
            !LoanAmountLimitValidator.isEligibleByIncome(request.getAnnualHouseholdIncome())) {
            throw new OverIndebtednessException("Annual household income exceeds RBI microfinance ceiling limit (3 Lakhs)");
        }

        Borrower borrower = borrowerMapper.toEntity(request);

        Branch branch = null;
        if (request.getBranchId() != null) {
            branch = branchRepository.findById(request.getBranchId()).orElse(null);
        }
        borrower.setBranch(branch);
        borrower.setBrn(BrnGeneratorUtil.generateBrn(branch != null ? branch.getBranchCode() : "GEN"));
        borrower.setKycStatus(KycStatus.PENDING);
        borrower.setIsActive(true);

        Borrower saved = borrowerRepository.save(borrower);
        return borrowerMapper.toResponse(saved);
    }

    public BorrowerResponse getBorrowerById(Long id) {
        Borrower borrower = borrowerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Borrower not found with id: " + id));
        return borrowerMapper.toResponse(borrower);
    }

    public Page<BorrowerResponse> searchBorrowers(String query, Pageable pageable) {
        if (query == null || query.trim().isEmpty()) {
            return borrowerRepository.findAll(pageable).map(borrowerMapper::toResponse);
        }
        return borrowerRepository.searchBorrowers(query.trim(), pageable)
                .map(borrowerMapper::toResponse);
    }

    @Transactional
    public BorrowerResponse updateBorrower(Long id, BorrowerRegistrationRequest request) {
        Borrower borrower = borrowerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Borrower not found with id: " + id));

        borrower.setFirstName(request.getFirstName());
        borrower.setLastName(request.getLastName());
        borrower.setMobileNumber(request.getMobileNumber());
        borrower.setAddressLine1(request.getAddressLine1());
        borrower.setVillage(request.getVillage());
        borrower.setTaluka(request.getTaluka());
        borrower.setDistrict(request.getDistrict());
        borrower.setState(request.getState());
        borrower.setPincode(request.getPincode());

        return borrowerMapper.toResponse(borrowerRepository.save(borrower));
    }
}
