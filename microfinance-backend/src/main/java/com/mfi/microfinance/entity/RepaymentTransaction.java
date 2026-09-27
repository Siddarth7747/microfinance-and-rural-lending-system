package com.mfi.microfinance.entity;

import com.mfi.microfinance.entity.enums.PaymentMode;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "repayment_transactions")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
@EntityListeners(AuditingEntityListener.class)
public class RepaymentTransaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 30)
    private String transactionId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "loan_id", nullable = false)
    private Loan loan;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "borrower_id", nullable = false)
    private Borrower borrower;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "emi_schedule_id")
    private EmiSchedule emiSchedule;

    @Column(nullable = false, precision = 12, scale = 2)
    private BigDecimal amount;

    @Column(precision = 12, scale = 2)
    private BigDecimal principalPaid;

    @Column(precision = 12, scale = 2)
    private BigDecimal interestPaid;

    @Column(precision = 12, scale = 2)
    private BigDecimal penalInterestPaid;

    @Column(precision = 12, scale = 2)
    private BigDecimal excessAmount;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PaymentMode paymentMode;

    @Column(nullable = false)
    private LocalDate paymentDate;

    @Column(length = 50)
    private String referenceNumber; // UPI ref / cheque no

    @Column(length = 100)
    private String collectedBy;

    // GPS of collection point
    private Double collectionLatitude;
    private Double collectionLongitude;

    @Column(length = 500)
    private String receiptPhotoUrl;

    @Column(nullable = false)
    @Builder.Default
    private Boolean isOfflineEntry = false;

    private LocalDateTime syncedAt;

    @Column(nullable = false)
    @Builder.Default
    private Boolean isReversed = false;

    @Column(length = 255)
    private String reversalReason;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "branch_id")
    private Branch branch;

    @CreatedDate
    @Column(updatable = false)
    private LocalDateTime createdAt;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTransactionId() { return transactionId; }
    public void setTransactionId(String transactionId) { this.transactionId = transactionId; }

    public Loan getLoan() { return loan; }
    public void setLoan(Loan loan) { this.loan = loan; }

    public Borrower getBorrower() { return borrower; }
    public void setBorrower(Borrower borrower) { this.borrower = borrower; }

    public EmiSchedule getEmiSchedule() { return emiSchedule; }
    public void setEmiSchedule(EmiSchedule emiSchedule) { this.emiSchedule = emiSchedule; }

    public BigDecimal getAmount() { return amount; }
    public void setAmount(BigDecimal amount) { this.amount = amount; }

    public BigDecimal getPrincipalPaid() { return principalPaid; }
    public void setPrincipalPaid(BigDecimal principalPaid) { this.principalPaid = principalPaid; }

    public BigDecimal getInterestPaid() { return interestPaid; }
    public void setInterestPaid(BigDecimal interestPaid) { this.interestPaid = interestPaid; }

    public BigDecimal getPenalInterestPaid() { return penalInterestPaid; }
    public void setPenalInterestPaid(BigDecimal penalInterestPaid) { this.penalInterestPaid = penalInterestPaid; }

    public BigDecimal getExcessAmount() { return excessAmount; }
    public void setExcessAmount(BigDecimal excessAmount) { this.excessAmount = excessAmount; }

    public PaymentMode getPaymentMode() { return paymentMode; }
    public void setPaymentMode(PaymentMode paymentMode) { this.paymentMode = paymentMode; }

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

    public LocalDateTime getSyncedAt() { return syncedAt; }
    public void setSyncedAt(LocalDateTime syncedAt) { this.syncedAt = syncedAt; }

    public Boolean getIsReversed() { return isReversed; }
    public void setIsReversed(Boolean isReversed) { this.isReversed = isReversed; }

    public String getReversalReason() { return reversalReason; }
    public void setReversalReason(String reversalReason) { this.reversalReason = reversalReason; }

    public Branch getBranch() { return branch; }
    public void setBranch(Branch branch) { this.branch = branch; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public static RepaymentTransactionBuilder builder() { return new RepaymentTransactionBuilder(); }

    public static class RepaymentTransactionBuilder {
        private Long id;
        private String transactionId;
        private Loan loan;
        private Borrower borrower;
        private EmiSchedule emiSchedule;
        private BigDecimal amount;
        private BigDecimal principalPaid;
        private BigDecimal interestPaid;
        private BigDecimal penalInterestPaid;
        private BigDecimal excessAmount;
        private PaymentMode paymentMode;
        private LocalDate paymentDate;
        private String referenceNumber;
        private String collectedBy;
        private Double collectionLatitude;
        private Double collectionLongitude;
        private String receiptPhotoUrl;
        private Boolean isOfflineEntry = false;
        private LocalDateTime syncedAt;
        private Boolean isReversed = false;
        private String reversalReason;
        private Branch branch;
        private LocalDateTime createdAt;

        public RepaymentTransactionBuilder id(Long id) { this.id = id; return this; }
        public RepaymentTransactionBuilder transactionId(String transactionId) { this.transactionId = transactionId; return this; }
        public RepaymentTransactionBuilder loan(Loan loan) { this.loan = loan; return this; }
        public RepaymentTransactionBuilder borrower(Borrower borrower) { this.borrower = borrower; return this; }
        public RepaymentTransactionBuilder emiSchedule(EmiSchedule emiSchedule) { this.emiSchedule = emiSchedule; return this; }
        public RepaymentTransactionBuilder amount(BigDecimal amount) { this.amount = amount; return this; }
        public RepaymentTransactionBuilder principalPaid(BigDecimal principalPaid) { this.principalPaid = principalPaid; return this; }
        public RepaymentTransactionBuilder interestPaid(BigDecimal interestPaid) { this.interestPaid = interestPaid; return this; }
        public RepaymentTransactionBuilder penalInterestPaid(BigDecimal penalInterestPaid) { this.penalInterestPaid = penalInterestPaid; return this; }
        public RepaymentTransactionBuilder excessAmount(BigDecimal excessAmount) { this.excessAmount = excessAmount; return this; }
        public RepaymentTransactionBuilder paymentMode(PaymentMode paymentMode) { this.paymentMode = paymentMode; return this; }
        public RepaymentTransactionBuilder paymentDate(LocalDate paymentDate) { this.paymentDate = paymentDate; return this; }
        public RepaymentTransactionBuilder referenceNumber(String referenceNumber) { this.referenceNumber = referenceNumber; return this; }
        public RepaymentTransactionBuilder collectedBy(String collectedBy) { this.collectedBy = collectedBy; return this; }
        public RepaymentTransactionBuilder collectionLatitude(Double collectionLatitude) { this.collectionLatitude = collectionLatitude; return this; }
        public RepaymentTransactionBuilder collectionLongitude(Double collectionLongitude) { this.collectionLongitude = collectionLongitude; return this; }
        public RepaymentTransactionBuilder receiptPhotoUrl(String receiptPhotoUrl) { this.receiptPhotoUrl = receiptPhotoUrl; return this; }
        public RepaymentTransactionBuilder isOfflineEntry(Boolean isOfflineEntry) { this.isOfflineEntry = isOfflineEntry; return this; }
        public RepaymentTransactionBuilder syncedAt(LocalDateTime syncedAt) { this.syncedAt = syncedAt; return this; }
        public RepaymentTransactionBuilder isReversed(Boolean isReversed) { this.isReversed = isReversed; return this; }
        public RepaymentTransactionBuilder reversalReason(String reversalReason) { this.reversalReason = reversalReason; return this; }
        public RepaymentTransactionBuilder branch(Branch branch) { this.branch = branch; return this; }
        public RepaymentTransactionBuilder createdAt(LocalDateTime createdAt) { this.createdAt = createdAt; return this; }

        public RepaymentTransaction build() {
            RepaymentTransaction t = new RepaymentTransaction();
            t.id = this.id;
            t.transactionId = this.transactionId;
            t.loan = this.loan;
            t.borrower = this.borrower;
            t.emiSchedule = this.emiSchedule;
            t.amount = this.amount;
            t.principalPaid = this.principalPaid;
            t.interestPaid = this.interestPaid;
            t.penalInterestPaid = this.penalInterestPaid;
            t.excessAmount = this.excessAmount;
            t.paymentMode = this.paymentMode;
            t.paymentDate = this.paymentDate;
            t.referenceNumber = this.referenceNumber;
            t.collectedBy = this.collectedBy;
            t.collectionLatitude = this.collectionLatitude;
            t.collectionLongitude = this.collectionLongitude;
            t.receiptPhotoUrl = this.receiptPhotoUrl;
            t.isOfflineEntry = this.isOfflineEntry;
            t.syncedAt = this.syncedAt;
            t.isReversed = this.isReversed;
            t.reversalReason = this.reversalReason;
            t.branch = this.branch;
            t.createdAt = this.createdAt;
            return t;
        }
    }
}

