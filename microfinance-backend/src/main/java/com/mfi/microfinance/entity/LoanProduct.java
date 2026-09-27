package com.mfi.microfinance.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.mfi.microfinance.entity.enums.InterestMethod;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "loan_products")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class LoanProduct {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 20)
    private String productCode;

    @Column(nullable = false, length = 100)
    private String productName;

    @Column(length = 500)
    private String description;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private InterestMethod interestMethod;

    @Column(nullable = false, precision = 5, scale = 2)
    private BigDecimal interestRatePerAnnum;

    @Column(nullable = false, precision = 12, scale = 2)
    private BigDecimal minLoanAmount;

    @Column(nullable = false, precision = 12, scale = 2)
    private BigDecimal maxLoanAmount;

    @Column(nullable = false)
    private Integer minTenureMonths;

    @Column(nullable = false)
    private Integer maxTenureMonths;

    @Column(nullable = false, length = 20)
    private String repaymentFrequency; // WEEKLY, FORTNIGHTLY, MONTHLY

    private Integer gracePeriodDays;

    @Column(precision = 5, scale = 2)
    private BigDecimal processingFeePercent;

    @Column(precision = 12, scale = 2)
    private BigDecimal processingFeeFlat;

    @Column(precision = 5, scale = 2)
    private BigDecimal insurancePremiumPercent;

    @Column(precision = 5, scale = 2)
    private BigDecimal penalInterestRate;

    private Integer minGroupSize;
    private Integer maxGroupSize;

    private Integer minCibilScore;

    @Column(precision = 12, scale = 2)
    private BigDecimal maxExistingLoanOutstanding;

    private Integer maxExistingLoans;

    @Column(precision = 12, scale = 2)
    private BigDecimal minAnnualIncome;

    private Integer minAge;
    private Integer maxAge;

    @Column(nullable = false)
    @Builder.Default
    private Boolean requiresGrt = true;

    @Column(nullable = false)
    @Builder.Default
    private Boolean requiresCibilCheck = true;

    @Column(nullable = false)
    @Builder.Default
    private Boolean isActive = true;

    @CreatedDate
    @Column(updatable = false)
    private LocalDateTime createdAt;

    @LastModifiedDate
    private LocalDateTime updatedAt;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getProductCode() { return productCode; }
    public void setProductCode(String productCode) { this.productCode = productCode; }

    public String getProductName() { return productName; }
    public void setProductName(String productName) { this.productName = productName; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public InterestMethod getInterestMethod() { return interestMethod; }
    public void setInterestMethod(InterestMethod interestMethod) { this.interestMethod = interestMethod; }

    public BigDecimal getInterestRatePerAnnum() { return interestRatePerAnnum; }
    public void setInterestRatePerAnnum(BigDecimal interestRatePerAnnum) { this.interestRatePerAnnum = interestRatePerAnnum; }

    public BigDecimal getMinLoanAmount() { return minLoanAmount; }
    public void setMinLoanAmount(BigDecimal minLoanAmount) { this.minLoanAmount = minLoanAmount; }

    public BigDecimal getMaxLoanAmount() { return maxLoanAmount; }
    public void setMaxLoanAmount(BigDecimal maxLoanAmount) { this.maxLoanAmount = maxLoanAmount; }

    public Integer getMinTenureMonths() { return minTenureMonths; }
    public void setMinTenureMonths(Integer minTenureMonths) { this.minTenureMonths = minTenureMonths; }

    public Integer getMaxTenureMonths() { return maxTenureMonths; }
    public void setMaxTenureMonths(Integer maxTenureMonths) { this.maxTenureMonths = maxTenureMonths; }

    public String getRepaymentFrequency() { return repaymentFrequency; }
    public void setRepaymentFrequency(String repaymentFrequency) { this.repaymentFrequency = repaymentFrequency; }

    public Integer getGracePeriodDays() { return gracePeriodDays; }
    public void setGracePeriodDays(Integer gracePeriodDays) { this.gracePeriodDays = gracePeriodDays; }

    public BigDecimal getProcessingFeePercent() { return processingFeePercent; }
    public void setProcessingFeePercent(BigDecimal processingFeePercent) { this.processingFeePercent = processingFeePercent; }

    public BigDecimal getProcessingFeeFlat() { return processingFeeFlat; }
    public void setProcessingFeeFlat(BigDecimal processingFeeFlat) { this.processingFeeFlat = processingFeeFlat; }

    public BigDecimal getInsurancePremiumPercent() { return insurancePremiumPercent; }
    public void setInsurancePremiumPercent(BigDecimal insurancePremiumPercent) { this.insurancePremiumPercent = insurancePremiumPercent; }

    public BigDecimal getPenalInterestRate() { return penalInterestRate; }
    public void setPenalInterestRate(BigDecimal penalInterestRate) { this.penalInterestRate = penalInterestRate; }

    public Integer getMinGroupSize() { return minGroupSize; }
    public void setMinGroupSize(Integer minGroupSize) { this.minGroupSize = minGroupSize; }

    public Integer getMaxGroupSize() { return maxGroupSize; }
    public void setMaxGroupSize(Integer maxGroupSize) { this.maxGroupSize = maxGroupSize; }

    public Integer getMinCibilScore() { return minCibilScore; }
    public void setMinCibilScore(Integer minCibilScore) { this.minCibilScore = minCibilScore; }

    public BigDecimal getMaxExistingLoanOutstanding() { return maxExistingLoanOutstanding; }
    public void setMaxExistingLoanOutstanding(BigDecimal maxExistingLoanOutstanding) { this.maxExistingLoanOutstanding = maxExistingLoanOutstanding; }

    public Integer getMaxExistingLoans() { return maxExistingLoans; }
    public void setMaxExistingLoans(Integer maxExistingLoans) { this.maxExistingLoans = maxExistingLoans; }

    public BigDecimal getMinAnnualIncome() { return minAnnualIncome; }
    public void setMinAnnualIncome(BigDecimal minAnnualIncome) { this.minAnnualIncome = minAnnualIncome; }

    public Integer getMinAge() { return minAge; }
    public void setMinAge(Integer minAge) { this.minAge = minAge; }

    public Integer getMaxAge() { return maxAge; }
    public void setMaxAge(Integer maxAge) { this.maxAge = maxAge; }

    public Boolean getRequiresGrt() { return requiresGrt; }
    public void setRequiresGrt(Boolean requiresGrt) { this.requiresGrt = requiresGrt; }

    public Boolean getRequiresCibilCheck() { return requiresCibilCheck; }
    public void setRequiresCibilCheck(Boolean requiresCibilCheck) { this.requiresCibilCheck = requiresCibilCheck; }

    public Boolean getIsActive() { return isActive; }
    public void setIsActive(Boolean isActive) { this.isActive = isActive; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }
}

