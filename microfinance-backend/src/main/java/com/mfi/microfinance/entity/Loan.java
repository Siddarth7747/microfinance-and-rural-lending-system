package com.mfi.microfinance.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.mfi.microfinance.entity.enums.LoanStatus;
import com.mfi.microfinance.entity.enums.ParClassification;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "loans")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Loan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 30)
    private String loanAccountNumber;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "loan_application_id", nullable = false)
    private LoanApplication loanApplication;

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
    private BigDecimal sanctionedAmount;

    @Column(nullable = false, precision = 12, scale = 2)
    private BigDecimal disbursedAmount;

    @Column(nullable = false, precision = 12, scale = 2)
    private BigDecimal outstandingPrincipal;

    @Column(nullable = false, precision = 12, scale = 2)
    private BigDecimal outstandingInterest;

    @Column(precision = 12, scale = 2)
    private BigDecimal overdueAmount;

    @Column(nullable = false, precision = 5, scale = 2)
    private BigDecimal interestRate;

    @Column(nullable = false)
    private Integer tenureMonths;

    @Column(nullable = false, precision = 12, scale = 2)
    private BigDecimal emiAmount;

    private Integer totalEmis;
    private Integer paidEmis;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private LoanStatus status;

    @Enumerated(EnumType.STRING)
    private ParClassification parClassification;

    private Integer dpd; // Days Past Due

    private LocalDate disbursementDate;
    private LocalDate firstEmiDate;
    private LocalDate lastEmiDate;
    private LocalDate maturityDate;
    private LocalDate closureDate;

    @Column(precision = 12, scale = 2)
    private BigDecimal processingFee;

    @Column(precision = 12, scale = 2)
    private BigDecimal insurancePremium;

    @Column(precision = 12, scale = 2)
    private BigDecimal totalRepaid;

    @Column(precision = 12, scale = 2)
    private BigDecimal penalInterestAccrued;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "branch_id")
    private Branch branch;

    @Column(length = 100)
    private String assignedOfficer;

    @Column(nullable = false)
    @Builder.Default
    private Boolean isRestructured = false;

    @Column(nullable = false)
    @Builder.Default
    private Boolean isWrittenOff = false;

    @CreatedDate
    @Column(updatable = false)
    private LocalDateTime createdAt;

    @LastModifiedDate
    private LocalDateTime updatedAt;

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getLoanAccountNumber() { return loanAccountNumber; }
    public void setLoanAccountNumber(String loanAccountNumber) { this.loanAccountNumber = loanAccountNumber; }

    public LoanApplication getLoanApplication() { return loanApplication; }
    public void setLoanApplication(LoanApplication loanApplication) { this.loanApplication = loanApplication; }

    public Borrower getBorrower() { return borrower; }
    public void setBorrower(Borrower borrower) { this.borrower = borrower; }

    public LoanProduct getLoanProduct() { return loanProduct; }
    public void setLoanProduct(LoanProduct loanProduct) { this.loanProduct = loanProduct; }

    public LoanGroup getLoanGroup() { return loanGroup; }
    public void setLoanGroup(LoanGroup loanGroup) { this.loanGroup = loanGroup; }

    public BigDecimal getSanctionedAmount() { return sanctionedAmount; }
    public void setSanctionedAmount(BigDecimal sanctionedAmount) { this.sanctionedAmount = sanctionedAmount; }

    public BigDecimal getDisbursedAmount() { return disbursedAmount; }
    public void setDisbursedAmount(BigDecimal disbursedAmount) { this.disbursedAmount = disbursedAmount; }

    public BigDecimal getOutstandingPrincipal() { return outstandingPrincipal; }
    public void setOutstandingPrincipal(BigDecimal outstandingPrincipal) { this.outstandingPrincipal = outstandingPrincipal; }

    public BigDecimal getOutstandingInterest() { return outstandingInterest; }
    public void setOutstandingInterest(BigDecimal outstandingInterest) { this.outstandingInterest = outstandingInterest; }

    public BigDecimal getOverdueAmount() { return overdueAmount; }
    public void setOverdueAmount(BigDecimal overdueAmount) { this.overdueAmount = overdueAmount; }

    public BigDecimal getInterestRate() { return interestRate; }
    public void setInterestRate(BigDecimal interestRate) { this.interestRate = interestRate; }

    public Integer getTenureMonths() { return tenureMonths; }
    public void setTenureMonths(Integer tenureMonths) { this.tenureMonths = tenureMonths; }

    public BigDecimal getEmiAmount() { return emiAmount; }
    public void setEmiAmount(BigDecimal emiAmount) { this.emiAmount = emiAmount; }

    public Integer getTotalEmis() { return totalEmis; }
    public void setTotalEmis(Integer totalEmis) { this.totalEmis = totalEmis; }

    public Integer getPaidEmis() { return paidEmis; }
    public void setPaidEmis(Integer paidEmis) { this.paidEmis = paidEmis; }

    public LoanStatus getStatus() { return status; }
    public void setStatus(LoanStatus status) { this.status = status; }

    public ParClassification getParClassification() { return parClassification; }
    public void setParClassification(ParClassification parClassification) { this.parClassification = parClassification; }

    public Integer getDpd() { return dpd; }
    public void setDpd(Integer dpd) { this.dpd = dpd; }

    public LocalDate getDisbursementDate() { return disbursementDate; }
    public void setDisbursementDate(LocalDate disbursementDate) { this.disbursementDate = disbursementDate; }

    public LocalDate getFirstEmiDate() { return firstEmiDate; }
    public void setFirstEmiDate(LocalDate firstEmiDate) { this.firstEmiDate = firstEmiDate; }

    public LocalDate getLastEmiDate() { return lastEmiDate; }
    public void setLastEmiDate(LocalDate lastEmiDate) { this.lastEmiDate = lastEmiDate; }

    public LocalDate getMaturityDate() { return maturityDate; }
    public void setMaturityDate(LocalDate maturityDate) { this.maturityDate = maturityDate; }

    public LocalDate getClosureDate() { return closureDate; }
    public void setClosureDate(LocalDate closureDate) { this.closureDate = closureDate; }

    public BigDecimal getProcessingFee() { return processingFee; }
    public void setProcessingFee(BigDecimal processingFee) { this.processingFee = processingFee; }

    public BigDecimal getInsurancePremium() { return insurancePremium; }
    public void setInsurancePremium(BigDecimal insurancePremium) { this.insurancePremium = insurancePremium; }

    public BigDecimal getTotalRepaid() { return totalRepaid; }
    public void setTotalRepaid(BigDecimal totalRepaid) { this.totalRepaid = totalRepaid; }

    public BigDecimal getPenalInterestAccrued() { return penalInterestAccrued; }
    public void setPenalInterestAccrued(BigDecimal penalInterestAccrued) { this.penalInterestAccrued = penalInterestAccrued; }

    public Branch getBranch() { return branch; }
    public void setBranch(Branch branch) { this.branch = branch; }

    public String getAssignedOfficer() { return assignedOfficer; }
    public void setAssignedOfficer(String assignedOfficer) { this.assignedOfficer = assignedOfficer; }

    public Boolean getIsRestructured() { return isRestructured; }
    public void setIsRestructured(Boolean isRestructured) { this.isRestructured = isRestructured; }

    public Boolean getIsWrittenOff() { return isWrittenOff; }
    public void setIsWrittenOff(Boolean isWrittenOff) { this.isWrittenOff = isWrittenOff; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }

    public static LoanBuilder builder() { return new LoanBuilder(); }

    public static class LoanBuilder {
        private Long id;
        private String loanAccountNumber;
        private LoanApplication loanApplication;
        private Borrower borrower;
        private LoanProduct loanProduct;
        private LoanGroup loanGroup;
        private BigDecimal sanctionedAmount;
        private BigDecimal disbursedAmount;
        private BigDecimal outstandingPrincipal;
        private BigDecimal outstandingInterest;
        private BigDecimal overdueAmount;
        private BigDecimal interestRate;
        private Integer tenureMonths;
        private BigDecimal emiAmount;
        private Integer totalEmis;
        private Integer paidEmis;
        private LoanStatus status;
        private ParClassification parClassification;
        private Integer dpd;
        private LocalDate disbursementDate;
        private LocalDate firstEmiDate;
        private LocalDate lastEmiDate;
        private LocalDate maturityDate;
        private LocalDate closureDate;
        private BigDecimal processingFee;
        private BigDecimal insurancePremium;
        private BigDecimal totalRepaid;
        private BigDecimal penalInterestAccrued;
        private Branch branch;
        private String assignedOfficer;
        private Boolean isRestructured = false;
        private Boolean isWrittenOff = false;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;

        public LoanBuilder id(Long id) { this.id = id; return this; }
        public LoanBuilder loanAccountNumber(String loanAccountNumber) { this.loanAccountNumber = loanAccountNumber; return this; }
        public LoanBuilder loanApplication(LoanApplication loanApplication) { this.loanApplication = loanApplication; return this; }
        public LoanBuilder borrower(Borrower borrower) { this.borrower = borrower; return this; }
        public LoanBuilder loanProduct(LoanProduct loanProduct) { this.loanProduct = loanProduct; return this; }
        public LoanBuilder loanGroup(LoanGroup loanGroup) { this.loanGroup = loanGroup; return this; }
        public LoanBuilder sanctionedAmount(BigDecimal sanctionedAmount) { this.sanctionedAmount = sanctionedAmount; return this; }
        public LoanBuilder disbursedAmount(BigDecimal disbursedAmount) { this.disbursedAmount = disbursedAmount; return this; }
        public LoanBuilder outstandingPrincipal(BigDecimal outstandingPrincipal) { this.outstandingPrincipal = outstandingPrincipal; return this; }
        public LoanBuilder outstandingInterest(BigDecimal outstandingInterest) { this.outstandingInterest = outstandingInterest; return this; }
        public LoanBuilder overdueAmount(BigDecimal overdueAmount) { this.overdueAmount = overdueAmount; return this; }
        public LoanBuilder interestRate(BigDecimal interestRate) { this.interestRate = interestRate; return this; }
        public LoanBuilder tenureMonths(Integer tenureMonths) { this.tenureMonths = tenureMonths; return this; }
        public LoanBuilder emiAmount(BigDecimal emiAmount) { this.emiAmount = emiAmount; return this; }
        public LoanBuilder totalEmis(Integer totalEmis) { this.totalEmis = totalEmis; return this; }
        public LoanBuilder paidEmis(Integer paidEmis) { this.paidEmis = paidEmis; return this; }
        public LoanBuilder status(LoanStatus status) { this.status = status; return this; }
        public LoanBuilder parClassification(ParClassification parClassification) { this.parClassification = parClassification; return this; }
        public LoanBuilder dpd(Integer dpd) { this.dpd = dpd; return this; }
        public LoanBuilder disbursementDate(LocalDate disbursementDate) { this.disbursementDate = disbursementDate; return this; }
        public LoanBuilder firstEmiDate(LocalDate firstEmiDate) { this.firstEmiDate = firstEmiDate; return this; }
        public LoanBuilder lastEmiDate(LocalDate lastEmiDate) { this.lastEmiDate = lastEmiDate; return this; }
        public LoanBuilder maturityDate(LocalDate maturityDate) { this.maturityDate = maturityDate; return this; }
        public LoanBuilder closureDate(LocalDate closureDate) { this.closureDate = closureDate; return this; }
        public LoanBuilder processingFee(BigDecimal processingFee) { this.processingFee = processingFee; return this; }
        public LoanBuilder insurancePremium(BigDecimal insurancePremium) { this.insurancePremium = insurancePremium; return this; }
        public LoanBuilder totalRepaid(BigDecimal totalRepaid) { this.totalRepaid = totalRepaid; return this; }
        public LoanBuilder penalInterestAccrued(BigDecimal penalInterestAccrued) { this.penalInterestAccrued = penalInterestAccrued; return this; }
        public LoanBuilder branch(Branch branch) { this.branch = branch; return this; }
        public LoanBuilder assignedOfficer(String assignedOfficer) { this.assignedOfficer = assignedOfficer; return this; }
        public LoanBuilder isRestructured(Boolean isRestructured) { this.isRestructured = isRestructured; return this; }
        public LoanBuilder isWrittenOff(Boolean isWrittenOff) { this.isWrittenOff = isWrittenOff; return this; }
        public LoanBuilder createdAt(LocalDateTime createdAt) { this.createdAt = createdAt; return this; }
        public LoanBuilder updatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; return this; }

        public Loan build() {
            Loan l = new Loan();
            l.id = this.id;
            l.loanAccountNumber = this.loanAccountNumber;
            l.loanApplication = this.loanApplication;
            l.borrower = this.borrower;
            l.loanProduct = this.loanProduct;
            l.loanGroup = this.loanGroup;
            l.sanctionedAmount = this.sanctionedAmount;
            l.disbursedAmount = this.disbursedAmount;
            l.outstandingPrincipal = this.outstandingPrincipal;
            l.outstandingInterest = this.outstandingInterest;
            l.overdueAmount = this.overdueAmount;
            l.interestRate = this.interestRate;
            l.tenureMonths = this.tenureMonths;
            l.emiAmount = this.emiAmount;
            l.totalEmis = this.totalEmis;
            l.paidEmis = this.paidEmis;
            l.status = this.status;
            l.parClassification = this.parClassification;
            l.dpd = this.dpd;
            l.disbursementDate = this.disbursementDate;
            l.firstEmiDate = this.firstEmiDate;
            l.lastEmiDate = this.lastEmiDate;
            l.maturityDate = this.maturityDate;
            l.closureDate = this.closureDate;
            l.processingFee = this.processingFee;
            l.insurancePremium = this.insurancePremium;
            l.totalRepaid = this.totalRepaid;
            l.penalInterestAccrued = this.penalInterestAccrued;
            l.branch = this.branch;
            l.assignedOfficer = this.assignedOfficer;
            l.isRestructured = this.isRestructured;
            l.isWrittenOff = this.isWrittenOff;
            l.createdAt = this.createdAt;
            l.updatedAt = this.updatedAt;
            return l;
        }
    }
}


