package com.mfi.microfinance.mapper;

import com.mfi.microfinance.dto.request.BorrowerRegistrationRequest;
import com.mfi.microfinance.dto.response.BorrowerResponse;
import com.mfi.microfinance.entity.Borrower;
import org.springframework.stereotype.Component;

@Component
public class BorrowerMapper {

    public Borrower toEntity(BorrowerRegistrationRequest request) {
        if (request == null) return null;

        return Borrower.builder()
                .firstName(request.getFirstName())
                .middleName(request.getMiddleName())
                .lastName(request.getLastName())
                .dateOfBirth(request.getDateOfBirth())
                .gender(request.getGender())
                .aadhaarNumber(request.getAadhaarNumber())
                .panNumber(request.getPanNumber())
                .voterId(request.getVoterId())
                .mobileNumber(request.getMobileNumber())
                .alternateMobile(request.getAlternateMobile())
                .email(request.getEmail())
                .addressLine1(request.getAddressLine1())
                .addressLine2(request.getAddressLine2())
                .village(request.getVillage())
                .taluka(request.getTaluka())
                .district(request.getDistrict())
                .state(request.getState())
                .pincode(request.getPincode())
                .latitude(request.getLatitude())
                .longitude(request.getLongitude())
                .fatherOrSpouseName(request.getFatherOrSpouseName())
                .familySize(request.getFamilySize())
                .annualHouseholdIncome(request.getAnnualHouseholdIncome())
                .occupation(request.getOccupation())
                .caste(request.getCaste())
                .religion(request.getReligion())
                .bankName(request.getBankName())
                .bankAccountNumber(request.getBankAccountNumber())
                .ifscCode(request.getIfscCode())
                .build();
    }

    public BorrowerResponse toResponse(Borrower borrower) {
        if (borrower == null) return null;

        String fullName = (borrower.getFirstName() + " " +
                (borrower.getMiddleName() != null ? borrower.getMiddleName() + " " : "") +
                borrower.getLastName()).trim();

        String aadhaarMasked = borrower.getAadhaarNumber() != null && borrower.getAadhaarNumber().length() == 12
                ? "XXXX-XXXX-" + borrower.getAadhaarNumber().substring(8)
                : borrower.getAadhaarNumber();

        String bankAccMasked = borrower.getBankAccountNumber() != null && borrower.getBankAccountNumber().length() > 4
                ? "XXXX" + borrower.getBankAccountNumber().substring(borrower.getBankAccountNumber().length() - 4)
                : borrower.getBankAccountNumber();

        return BorrowerResponse.builder()
                .id(borrower.getId())
                .brn(borrower.getBrn())
                .firstName(borrower.getFirstName())
                .middleName(borrower.getMiddleName())
                .lastName(borrower.getLastName())
                .fullName(fullName)
                .dateOfBirth(borrower.getDateOfBirth())
                .gender(borrower.getGender())
                .aadhaarNumberMasked(aadhaarMasked)
                .mobileNumber(borrower.getMobileNumber())
                .village(borrower.getVillage())
                .district(borrower.getDistrict())
                .state(borrower.getState())
                .pincode(borrower.getPincode())
                .occupation(borrower.getOccupation())
                .annualHouseholdIncome(borrower.getAnnualHouseholdIncome())
                .kycStatus(borrower.getKycStatus() != null ? borrower.getKycStatus().name() : null)
                .cibilScore(borrower.getCibilScore())
                .bankName(borrower.getBankName())
                .bankAccountNumberMasked(bankAccMasked)
                .branchName(borrower.getBranch() != null ? borrower.getBranch().getBranchName() : null)
                .isActive(borrower.getIsActive())
                .build();
    }
}
