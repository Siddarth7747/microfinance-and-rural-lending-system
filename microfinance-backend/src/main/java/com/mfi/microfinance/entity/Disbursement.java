package com.mfi.microfinance.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.mfi.microfinance.entity.enums.PaymentMode;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "disbursements")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Disbursement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 30)
    private String disbursementId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "loan_id", nullable = false)
    private Loan loan;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "borrower_id", nullable = false)
    private Borrower borrower;

    @Column(nullable = false, precision = 12, scale = 2)
    private BigDecimal amount;

    @Column(precision = 12, scale = 2)
    private BigDecimal processingFeeDeducted;

    @Column(precision = 12, scale = 2)
    private BigDecimal insurancePremiumDeducted;

    @Column(nullable = false, precision = 12, scale = 2)
    private BigDecimal netDisbursedAmount;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PaymentMode paymentMode;

    @Column(length = 100)
    private String bankAccountNumber;

    @Column(length = 11)
    private String ifscCode;

    @Column(length = 50)
    private String utrNumber; // Unique Transaction Reference

    @Column(nullable = false)
    private LocalDate disbursementDate;

    @Column(nullable = false, length = 20)
    private String status; // INITIATED, PROCESSING, COMPLETED, FAILED, REVERSED

    @Column(length = 255)
    private String failureReason;

    @Builder.Default
    private Boolean pennyDropVerified = false;

    @Column(length = 100)
    private String approvedBy;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "branch_id")
    private Branch branch;

    @CreatedDate
    @Column(updatable = false)
    private LocalDateTime createdAt;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getDisbursementId() { return disbursementId; }
    public void setDisbursementId(String disbursementId) { this.disbursementId = disbursementId; }

    public Loan getLoan() { return loan; }
    public void setLoan(Loan loan) { this.loan = loan; }

    public Borrower getBorrower() { return borrower; }
    public void setBorrower(Borrower borrower) { this.borrower = borrower; }

    public BigDecimal getAmount() { return amount; }
    public void setAmount(BigDecimal amount) { this.amount = amount; }

    public BigDecimal getProcessingFeeDeducted() { return processingFeeDeducted; }
    public void setProcessingFeeDeducted(BigDecimal processingFeeDeducted) { this.processingFeeDeducted = processingFeeDeducted; }

    public BigDecimal getInsurancePremiumDeducted() { return insurancePremiumDeducted; }
    public void setInsurancePremiumDeducted(BigDecimal insurancePremiumDeducted) { this.insurancePremiumDeducted = insurancePremiumDeducted; }

    public BigDecimal getNetDisbursedAmount() { return netDisbursedAmount; }
    public void setNetDisbursedAmount(BigDecimal netDisbursedAmount) { this.netDisbursedAmount = netDisbursedAmount; }

    public PaymentMode getPaymentMode() { return paymentMode; }
    public void setPaymentMode(PaymentMode paymentMode) { this.paymentMode = paymentMode; }

    public String getBankAccountNumber() { return bankAccountNumber; }
    public void setBankAccountNumber(String bankAccountNumber) { this.bankAccountNumber = bankAccountNumber; }

    public String getIfscCode() { return ifscCode; }
    public void setIfscCode(String ifscCode) { this.ifscCode = ifscCode; }

    public String getUtrNumber() { return utrNumber; }
    public void setUtrNumber(String utrNumber) { this.utrNumber = utrNumber; }

    public LocalDate getDisbursementDate() { return disbursementDate; }
    public void setDisbursementDate(LocalDate disbursementDate) { this.disbursementDate = disbursementDate; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getFailureReason() { return failureReason; }
    public void setFailureReason(String failureReason) { this.failureReason = failureReason; }

    public Boolean getPennyDropVerified() { return pennyDropVerified; }
    public void setPennyDropVerified(Boolean pennyDropVerified) { this.pennyDropVerified = pennyDropVerified; }

    public String getApprovedBy() { return approvedBy; }
    public void setApprovedBy(String approvedBy) { this.approvedBy = approvedBy; }

    public Branch getBranch() { return branch; }
    public void setBranch(Branch branch) { this.branch = branch; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public static DisbursementBuilder builder() { return new DisbursementBuilder(); }

    public static class DisbursementBuilder {
        private Long id;
        private String disbursementId;
        private Loan loan;
        private Borrower borrower;
        private BigDecimal amount;
        private BigDecimal processingFeeDeducted;
        private BigDecimal insurancePremiumDeducted;
        private BigDecimal netDisbursedAmount;
        private PaymentMode paymentMode;
        private String bankAccountNumber;
        private String ifscCode;
        private String utrNumber;
        private LocalDate disbursementDate;
        private String status;
        private String failureReason;
        private Boolean pennyDropVerified = false;
        private String approvedBy;
        private Branch branch;
        private LocalDateTime createdAt;

        public DisbursementBuilder id(Long id) { this.id = id; return this; }
        public DisbursementBuilder disbursementId(String disbursementId) { this.disbursementId = disbursementId; return this; }
        public DisbursementBuilder loan(Loan loan) { this.loan = loan; return this; }
        public DisbursementBuilder borrower(Borrower borrower) { this.borrower = borrower; return this; }
        public DisbursementBuilder amount(BigDecimal amount) { this.amount = amount; return this; }
        public DisbursementBuilder processingFeeDeducted(BigDecimal processingFeeDeducted) { this.processingFeeDeducted = processingFeeDeducted; return this; }
        public DisbursementBuilder insurancePremiumDeducted(BigDecimal insurancePremiumDeducted) { this.insurancePremiumDeducted = insurancePremiumDeducted; return this; }
        public DisbursementBuilder netDisbursedAmount(BigDecimal netDisbursedAmount) { this.netDisbursedAmount = netDisbursedAmount; return this; }
        public DisbursementBuilder paymentMode(PaymentMode paymentMode) { this.paymentMode = paymentMode; return this; }
        public DisbursementBuilder bankAccountNumber(String bankAccountNumber) { this.bankAccountNumber = bankAccountNumber; return this; }
        public DisbursementBuilder ifscCode(String ifscCode) { this.ifscCode = ifscCode; return this; }
        public DisbursementBuilder utrNumber(String utrNumber) { this.utrNumber = utrNumber; return this; }
        public DisbursementBuilder disbursementDate(LocalDate disbursementDate) { this.disbursementDate = disbursementDate; return this; }
        public DisbursementBuilder status(String status) { this.status = status; return this; }
        public DisbursementBuilder failureReason(String failureReason) { this.failureReason = failureReason; return this; }
        public DisbursementBuilder pennyDropVerified(Boolean pennyDropVerified) { this.pennyDropVerified = pennyDropVerified; return this; }
        public DisbursementBuilder approvedBy(String approvedBy) { this.approvedBy = approvedBy; return this; }
        public DisbursementBuilder branch(Branch branch) { this.branch = branch; return this; }
        public DisbursementBuilder createdAt(LocalDateTime createdAt) { this.createdAt = createdAt; return this; }

        public Disbursement build() {
            Disbursement d = new Disbursement();
            d.id = this.id;
            d.disbursementId = this.disbursementId;
            d.loan = this.loan;
            d.borrower = this.borrower;
            d.amount = this.amount;
            d.processingFeeDeducted = this.processingFeeDeducted;
            d.insurancePremiumDeducted = this.insurancePremiumDeducted;
            d.netDisbursedAmount = this.netDisbursedAmount;
            d.paymentMode = this.paymentMode;
            d.bankAccountNumber = this.bankAccountNumber;
            d.ifscCode = this.ifscCode;
            d.utrNumber = this.utrNumber;
            d.disbursementDate = this.disbursementDate;
            d.status = this.status;
            d.failureReason = this.failureReason;
            d.pennyDropVerified = this.pennyDropVerified;
            d.approvedBy = this.approvedBy;
            d.branch = this.branch;
            d.createdAt = this.createdAt;
            return d;
        }
    }
}

