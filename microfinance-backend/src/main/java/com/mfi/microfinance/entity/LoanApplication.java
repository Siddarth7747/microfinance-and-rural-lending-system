package com.mfi.microfinance.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.mfi.microfinance.entity.enums.LoanStatus;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "loan_applications")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class LoanApplication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 30)
    private String applicationNumber;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "borrower_id", nullable = false)
    private Borrower borrower;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "loan_product_id", nullable = false)
    private LoanProduct loanProduct;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "loan_group_id")
    private LoanGroup loanGroup;

    @Column(nullable = false, precision = 12, scale = 2)
    private BigDecimal requestedAmount;

    @Column(precision = 12, scale = 2)
    private BigDecimal approvedAmount;

    @Column(nullable = false)
    private Integer requestedTenureMonths;

    private Integer approvedTenureMonths;

    @Column(nullable = false, length = 255)
    private String loanPurpose;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    @Builder.Default
    private LoanStatus status = LoanStatus.DRAFT;

    // Field Officer
    @Column(length = 100)
    private String fieldOfficerName;

    @Column(length = 500)
    private String fieldOfficerRemarks;

    private LocalDate fieldOfficerRecommendationDate;

    // Branch Manager
    @Column(length = 100)
    private String branchManagerName;

    @Column(length = 500)
    private String branchManagerRemarks;

    private LocalDate branchManagerApprovalDate;

    // Credit Committee
    @Column(length = 100)
    private String creditCommitteeApprover;

    @Column(length = 500)
    private String creditCommitteeRemarks;

    private LocalDate creditCommitteeApprovalDate;

    // Rejection
    @Column(length = 500)
    private String rejectionReason;

    private LocalDate rejectionDate;

    // Documents
    @Column(length = 500)
    private String signedAgreementUrl;

    @Builder.Default
    private Boolean bureauCheckCompleted = false;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "branch_id")
    private Branch branch;

    @CreatedDate
    @Column(updatable = false)
    private LocalDateTime createdAt;

    @LastModifiedDate
    private LocalDateTime updatedAt;

    @CreatedBy
    @Column(updatable = false, length = 100)
    private String createdBy;

    // Getters & Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getApplicationNumber() { return applicationNumber; }
    public void setApplicationNumber(String applicationNumber) { this.applicationNumber = applicationNumber; }

    public Borrower getBorrower() { return borrower; }
    public void setBorrower(Borrower borrower) { this.borrower = borrower; }

    public LoanProduct getLoanProduct() { return loanProduct; }
    public void setLoanProduct(LoanProduct loanProduct) { this.loanProduct = loanProduct; }

    public LoanGroup getLoanGroup() { return loanGroup; }
    public void setLoanGroup(LoanGroup loanGroup) { this.loanGroup = loanGroup; }

    public BigDecimal getRequestedAmount() { return requestedAmount; }
    public void setRequestedAmount(BigDecimal requestedAmount) { this.requestedAmount = requestedAmount; }

    public BigDecimal getApprovedAmount() { return approvedAmount; }
    public void setApprovedAmount(BigDecimal approvedAmount) { this.approvedAmount = approvedAmount; }

    public Integer getRequestedTenureMonths() { return requestedTenureMonths; }
    public void setRequestedTenureMonths(Integer requestedTenureMonths) { this.requestedTenureMonths = requestedTenureMonths; }

    public Integer getApprovedTenureMonths() { return approvedTenureMonths; }
    public void setApprovedTenureMonths(Integer approvedTenureMonths) { this.approvedTenureMonths = approvedTenureMonths; }

    public String getLoanPurpose() { return loanPurpose; }
    public void setLoanPurpose(String loanPurpose) { this.loanPurpose = loanPurpose; }

    public LoanStatus getStatus() { return status; }
    public void setStatus(LoanStatus status) { this.status = status; }

    public String getFieldOfficerName() { return fieldOfficerName; }
    public void setFieldOfficerName(String fieldOfficerName) { this.fieldOfficerName = fieldOfficerName; }

    public String getFieldOfficerRemarks() { return fieldOfficerRemarks; }
    public void setFieldOfficerRemarks(String fieldOfficerRemarks) { this.fieldOfficerRemarks = fieldOfficerRemarks; }

    public LocalDate getFieldOfficerRecommendationDate() { return fieldOfficerRecommendationDate; }
    public void setFieldOfficerRecommendationDate(LocalDate fieldOfficerRecommendationDate) { this.fieldOfficerRecommendationDate = fieldOfficerRecommendationDate; }

    public String getBranchManagerName() { return branchManagerName; }
    public void setBranchManagerName(String branchManagerName) { this.branchManagerName = branchManagerName; }

    public String getBranchManagerRemarks() { return branchManagerRemarks; }
    public void setBranchManagerRemarks(String branchManagerRemarks) { this.branchManagerRemarks = branchManagerRemarks; }

    public LocalDate getBranchManagerApprovalDate() { return branchManagerApprovalDate; }
    public void setBranchManagerApprovalDate(LocalDate branchManagerApprovalDate) { this.branchManagerApprovalDate = branchManagerApprovalDate; }

    public String getCreditCommitteeApprover() { return creditCommitteeApprover; }
    public void setCreditCommitteeApprover(String creditCommitteeApprover) { this.creditCommitteeApprover = creditCommitteeApprover; }

    public String getCreditCommitteeRemarks() { return creditCommitteeRemarks; }
    public void setCreditCommitteeRemarks(String creditCommitteeRemarks) { this.creditCommitteeRemarks = creditCommitteeRemarks; }

    public LocalDate getCreditCommitteeApprovalDate() { return creditCommitteeApprovalDate; }
    public void setCreditCommitteeApprovalDate(LocalDate creditCommitteeApprovalDate) { this.creditCommitteeApprovalDate = creditCommitteeApprovalDate; }

    public String getRejectionReason() { return rejectionReason; }
    public void setRejectionReason(String rejectionReason) { this.rejectionReason = rejectionReason; }

    public LocalDate getRejectionDate() { return rejectionDate; }
    public void setRejectionDate(LocalDate rejectionDate) { this.rejectionDate = rejectionDate; }

    public String getSignedAgreementUrl() { return signedAgreementUrl; }
    public void setSignedAgreementUrl(String signedAgreementUrl) { this.signedAgreementUrl = signedAgreementUrl; }

    public Boolean getBureauCheckCompleted() { return bureauCheckCompleted; }
    public void setBureauCheckCompleted(Boolean bureauCheckCompleted) { this.bureauCheckCompleted = bureauCheckCompleted; }

    public Branch getBranch() { return branch; }
    public void setBranch(Branch branch) { this.branch = branch; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }

    public String getCreatedBy() { return createdBy; }
    public void setCreatedBy(String createdBy) { this.createdBy = createdBy; }

    public static LoanApplicationBuilder builder() { return new LoanApplicationBuilder(); }

    public static class LoanApplicationBuilder {
        private Long id;
        private String applicationNumber;
        private Borrower borrower;
        private LoanProduct loanProduct;
        private LoanGroup loanGroup;
        private BigDecimal requestedAmount;
        private BigDecimal approvedAmount;
        private Integer requestedTenureMonths;
        private Integer approvedTenureMonths;
        private String loanPurpose;
        private LoanStatus status = LoanStatus.DRAFT;
        private String fieldOfficerName;
        private String fieldOfficerRemarks;
        private LocalDate fieldOfficerRecommendationDate;
        private String branchManagerName;
        private String branchManagerRemarks;
        private LocalDate branchManagerApprovalDate;
        private String creditCommitteeApprover;
        private String creditCommitteeRemarks;
        private LocalDate creditCommitteeApprovalDate;
        private String rejectionReason;
        private LocalDate rejectionDate;
        private String signedAgreementUrl;
        private Boolean bureauCheckCompleted = false;
        private Branch branch;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;
        private String createdBy;

        public LoanApplicationBuilder id(Long id) { this.id = id; return this; }
        public LoanApplicationBuilder applicationNumber(String applicationNumber) { this.applicationNumber = applicationNumber; return this; }
        public LoanApplicationBuilder borrower(Borrower borrower) { this.borrower = borrower; return this; }
        public LoanApplicationBuilder loanProduct(LoanProduct loanProduct) { this.loanProduct = loanProduct; return this; }
        public LoanApplicationBuilder loanGroup(LoanGroup loanGroup) { this.loanGroup = loanGroup; return this; }
        public LoanApplicationBuilder requestedAmount(BigDecimal requestedAmount) { this.requestedAmount = requestedAmount; return this; }
        public LoanApplicationBuilder approvedAmount(BigDecimal approvedAmount) { this.approvedAmount = approvedAmount; return this; }
        public LoanApplicationBuilder requestedTenureMonths(Integer requestedTenureMonths) { this.requestedTenureMonths = requestedTenureMonths; return this; }
        public LoanApplicationBuilder approvedTenureMonths(Integer approvedTenureMonths) { this.approvedTenureMonths = approvedTenureMonths; return this; }
        public LoanApplicationBuilder loanPurpose(String loanPurpose) { this.loanPurpose = loanPurpose; return this; }
        public LoanApplicationBuilder status(LoanStatus status) { this.status = status; return this; }
        public LoanApplicationBuilder fieldOfficerName(String fieldOfficerName) { this.fieldOfficerName = fieldOfficerName; return this; }
        public LoanApplicationBuilder fieldOfficerRemarks(String fieldOfficerRemarks) { this.fieldOfficerRemarks = fieldOfficerRemarks; return this; }
        public LoanApplicationBuilder fieldOfficerRecommendationDate(LocalDate fieldOfficerRecommendationDate) { this.fieldOfficerRecommendationDate = fieldOfficerRecommendationDate; return this; }
        public LoanApplicationBuilder branchManagerName(String branchManagerName) { this.branchManagerName = branchManagerName; return this; }
        public LoanApplicationBuilder branchManagerRemarks(String branchManagerRemarks) { this.branchManagerRemarks = branchManagerRemarks; return this; }
        public LoanApplicationBuilder branchManagerApprovalDate(LocalDate branchManagerApprovalDate) { this.branchManagerApprovalDate = branchManagerApprovalDate; return this; }
        public LoanApplicationBuilder creditCommitteeApprover(String creditCommitteeApprover) { this.creditCommitteeApprover = creditCommitteeApprover; return this; }
        public LoanApplicationBuilder creditCommitteeRemarks(String creditCommitteeRemarks) { this.creditCommitteeRemarks = creditCommitteeRemarks; return this; }
        public LoanApplicationBuilder creditCommitteeApprovalDate(LocalDate creditCommitteeApprovalDate) { this.creditCommitteeApprovalDate = creditCommitteeApprovalDate; return this; }
        public LoanApplicationBuilder rejectionReason(String rejectionReason) { this.rejectionReason = rejectionReason; return this; }
        public LoanApplicationBuilder rejectionDate(LocalDate rejectionDate) { this.rejectionDate = rejectionDate; return this; }
        public LoanApplicationBuilder signedAgreementUrl(String signedAgreementUrl) { this.signedAgreementUrl = signedAgreementUrl; return this; }
        public LoanApplicationBuilder bureauCheckCompleted(Boolean bureauCheckCompleted) { this.bureauCheckCompleted = bureauCheckCompleted; return this; }
        public LoanApplicationBuilder branch(Branch branch) { this.branch = branch; return this; }
        public LoanApplicationBuilder createdAt(LocalDateTime createdAt) { this.createdAt = createdAt; return this; }
        public LoanApplicationBuilder updatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; return this; }
        public LoanApplicationBuilder createdBy(String createdBy) { this.createdBy = createdBy; return this; }

        public LoanApplication build() {
            LoanApplication a = new LoanApplication();
            a.id = this.id;
            a.applicationNumber = this.applicationNumber;
            a.borrower = this.borrower;
            a.loanProduct = this.loanProduct;
            a.loanGroup = this.loanGroup;
            a.requestedAmount = this.requestedAmount;
            a.approvedAmount = this.approvedAmount;
            a.requestedTenureMonths = this.requestedTenureMonths;
            a.approvedTenureMonths = this.approvedTenureMonths;
            a.loanPurpose = this.loanPurpose;
            a.status = this.status;
            a.fieldOfficerName = this.fieldOfficerName;
            a.fieldOfficerRemarks = this.fieldOfficerRemarks;
            a.fieldOfficerRecommendationDate = this.fieldOfficerRecommendationDate;
            a.branchManagerName = this.branchManagerName;
            a.branchManagerRemarks = this.branchManagerRemarks;
            a.branchManagerApprovalDate = this.branchManagerApprovalDate;
            a.creditCommitteeApprover = this.creditCommitteeApprover;
            a.creditCommitteeRemarks = this.creditCommitteeRemarks;
            a.creditCommitteeApprovalDate = this.creditCommitteeApprovalDate;
            a.rejectionReason = this.rejectionReason;
            a.rejectionDate = this.rejectionDate;
            a.signedAgreementUrl = this.signedAgreementUrl;
            a.bureauCheckCompleted = this.bureauCheckCompleted;
            a.branch = this.branch;
            a.createdAt = this.createdAt;
            a.updatedAt = this.updatedAt;
            a.createdBy = this.createdBy;
            return a;
        }
    }
}


