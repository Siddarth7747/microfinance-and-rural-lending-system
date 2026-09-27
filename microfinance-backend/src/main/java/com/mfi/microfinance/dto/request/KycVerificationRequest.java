package com.mfi.microfinance.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class KycVerificationRequest {

    @NotNull(message = "Borrower ID is required")
    private Long borrowerId;

    @NotBlank(message = "Document type is required")
    private String documentType; // AADHAAR, PAN, VOTER_ID

    @NotBlank(message = "Document number is required")
    private String documentNumber;

    private String otp;
    private String documentFrontUrl;
    private String documentBackUrl;
    private Boolean consentGiven;

    public Long getBorrowerId() { return borrowerId; }
    public void setBorrowerId(Long borrowerId) { this.borrowerId = borrowerId; }

    public String getDocumentType() { return documentType; }
    public void setDocumentType(String documentType) { this.documentType = documentType; }

    public String getDocumentNumber() { return documentNumber; }
    public void setDocumentNumber(String documentNumber) { this.documentNumber = documentNumber; }

    public String getOtp() { return otp; }
    public void setOtp(String otp) { this.otp = otp; }

    public String getDocumentFrontUrl() { return documentFrontUrl; }
    public void setDocumentFrontUrl(String documentFrontUrl) { this.documentFrontUrl = documentFrontUrl; }

    public String getDocumentBackUrl() { return documentBackUrl; }
    public void setDocumentBackUrl(String documentBackUrl) { this.documentBackUrl = documentBackUrl; }

    public Boolean getConsentGiven() { return consentGiven; }
    public void setConsentGiven(Boolean consentGiven) { this.consentGiven = consentGiven; }
}

