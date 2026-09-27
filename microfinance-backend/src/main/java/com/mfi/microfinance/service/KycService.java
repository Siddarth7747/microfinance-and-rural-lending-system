package com.mfi.microfinance.service;

import com.mfi.microfinance.dto.request.KycVerificationRequest;
import com.mfi.microfinance.entity.Borrower;
import com.mfi.microfinance.entity.enums.KycStatus;
import com.mfi.microfinance.exception.KycVerificationException;
import com.mfi.microfinance.repository.BorrowerRepository;
import com.mfi.microfinance.validation.AadhaarNumberValidator;
import com.mfi.microfinance.validation.IfscCodeValidator;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class KycService {

    private final BorrowerRepository borrowerRepository;

    @Transactional
    public KycStatus verifyKyc(KycVerificationRequest request) {
        Borrower borrower = borrowerRepository.findById(request.getBorrowerId())
                .orElseThrow(() -> new RuntimeException("Borrower not found"));

        if ("AADHAAR".equalsIgnoreCase(request.getDocumentType())) {
            if (!AadhaarNumberValidator.validateVerhoeff(request.getDocumentNumber())) {
                throw new KycVerificationException("Invalid Aadhaar number (Verhoeff checksum failed)");
            }
            borrower.setAadhaarNumber(request.getDocumentNumber());
            borrower.setKycStatus(KycStatus.AADHAAR_VERIFIED);
        } else if ("PAN".equalsIgnoreCase(request.getDocumentType())) {
            if (!request.getDocumentNumber().matches("^[A-Z]{5}[0-9]{4}[A-Z]{1}$")) {
                throw new KycVerificationException("Invalid PAN format");
            }
            borrower.setPanNumber(request.getDocumentNumber());
            borrower.setKycStatus(KycStatus.FULLY_VERIFIED);
        }

        borrowerRepository.save(borrower);
        return borrower.getKycStatus();
    }
}
