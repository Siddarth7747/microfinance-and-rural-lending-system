package com.mfi.microfinance.dto.request;

import jakarta.validation.constraints.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class RepaymentRequest {

    @NotNull(message = "Loan ID is required")
    private Long loanId;

    @NotNull(message = "Amount is required")
    @DecimalMin(value = "1", message = "Minimum repayment is 1")
    private BigDecimal amount;

    @NotBlank(message = "Payment mode is required")
    private String paymentMode; // CASH, UPI, NEFT, NACH

    @NotNull(message = "Payment date is required")
    private LocalDate paymentDate;

    private String referenceNumber;
    private String collectedBy;
    private Double collectionLatitude;
    private Double collectionLongitude;
    private String receiptPhotoUrl;

    @Builder.Default
    private Boolean isOfflineEntry = false;

    public Long getLoanId() { return loanId; }
    public void setLoanId(Long loanId) { this.loanId = loanId; }

    public BigDecimal getAmount() { return amount; }
    public void setAmount(BigDecimal amount) { this.amount = amount; }

    public String getPaymentMode() { return paymentMode; }
    public void setPaymentMode(String paymentMode) { this.paymentMode = paymentMode; }

    public LocalDate getPaymentDate() { return paymentDate; }
    public void setPaymentDate(LocalDate paymentDate) { this.paymentDate = paymentDate; }

    public String getReferenceNumber() { return referenceNumber; }
    public void setReferenceNumber(String referenceNumber) { this.referenceNumber = referenceNumber; }

    public String getCollectedBy() { return collectedBy; }
    public void setCollectedBy(String collectedBy) { this.collectedBy = collectedBy; }

    public Double getCollectionLatitude() { return collectionLatitude; }
    public void setCollectionLatitude(Double collectionLatitude) { this.collectionLatitude = collectionLatitude; }

    public Double getCollectionLongitude() { return collectionLongitude; }
    public void setCollectionLongitude(Double collectionLongitude) { this.collectionLongitude = collectionLongitude; }

    public String getReceiptPhotoUrl() { return receiptPhotoUrl; }
    public void setReceiptPhotoUrl(String receiptPhotoUrl) { this.receiptPhotoUrl = receiptPhotoUrl; }

    public Boolean getIsOfflineEntry() { return isOfflineEntry; }
    public void setIsOfflineEntry(Boolean isOfflineEntry) { this.isOfflineEntry = isOfflineEntry; }
}

