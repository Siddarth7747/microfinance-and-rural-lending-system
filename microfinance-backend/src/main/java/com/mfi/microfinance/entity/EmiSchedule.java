package com.mfi.microfinance.entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "emi_schedule")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
@EntityListeners(AuditingEntityListener.class)
public class EmiSchedule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "loan_id", nullable = false)
    private Loan loan;

    @Column(nullable = false)
    private Integer installmentNumber;

    @Column(nullable = false)
    private LocalDate dueDate;

    @Column(nullable = false, precision = 12, scale = 2)
    private BigDecimal principalComponent;

    @Column(nullable = false, precision = 12, scale = 2)
    private BigDecimal interestComponent;

    @Column(nullable = false, precision = 12, scale = 2)
    private BigDecimal emiAmount;

    @Column(precision = 12, scale = 2)
    private BigDecimal outstandingAfter;

    @Column(precision = 12, scale = 2)
    private BigDecimal paidAmount;

    private LocalDate paidDate;

    @Column(precision = 12, scale = 2)
    private BigDecimal penalInterest;

    @Column(nullable = false)
    @Builder.Default
    private Boolean isPaid = false;

    @Column(nullable = false)
    @Builder.Default
    private Boolean isOverdue = false;

    private Integer dpdAtPayment;

    // Getters & Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Loan getLoan() { return loan; }
    public void setLoan(Loan loan) { this.loan = loan; }

    public Integer getInstallmentNumber() { return installmentNumber; }
    public void setInstallmentNumber(Integer installmentNumber) { this.installmentNumber = installmentNumber; }

    public LocalDate getDueDate() { return dueDate; }
    public void setDueDate(LocalDate dueDate) { this.dueDate = dueDate; }

    public BigDecimal getPrincipalComponent() { return principalComponent; }
    public void setPrincipalComponent(BigDecimal principalComponent) { this.principalComponent = principalComponent; }

    public BigDecimal getInterestComponent() { return interestComponent; }
    public void setInterestComponent(BigDecimal interestComponent) { this.interestComponent = interestComponent; }

    public BigDecimal getEmiAmount() { return emiAmount; }
    public void setEmiAmount(BigDecimal emiAmount) { this.emiAmount = emiAmount; }

    public BigDecimal getOutstandingAfter() { return outstandingAfter; }
    public void setOutstandingAfter(BigDecimal outstandingAfter) { this.outstandingAfter = outstandingAfter; }

    public BigDecimal getPaidAmount() { return paidAmount; }
    public void setPaidAmount(BigDecimal paidAmount) { this.paidAmount = paidAmount; }

    public LocalDate getPaidDate() { return paidDate; }
    public void setPaidDate(LocalDate paidDate) { this.paidDate = paidDate; }

    public BigDecimal getPenalInterest() { return penalInterest; }
    public void setPenalInterest(BigDecimal penalInterest) { this.penalInterest = penalInterest; }

    public Boolean getIsPaid() { return isPaid; }
    public void setIsPaid(Boolean isPaid) { this.isPaid = isPaid; }

    public Boolean getIsOverdue() { return isOverdue; }
    public void setIsOverdue(Boolean isOverdue) { this.isOverdue = isOverdue; }

    public Integer getDpdAtPayment() { return dpdAtPayment; }
    public void setDpdAtPayment(Integer dpdAtPayment) { this.dpdAtPayment = dpdAtPayment; }

    public static EmiScheduleBuilder builder() { return new EmiScheduleBuilder(); }

    public static class EmiScheduleBuilder {
        private Long id;
        private Loan loan;
        private Integer installmentNumber;
        private LocalDate dueDate;
        private BigDecimal principalComponent;
        private BigDecimal interestComponent;
        private BigDecimal emiAmount;
        private BigDecimal outstandingAfter;
        private BigDecimal paidAmount;
        private LocalDate paidDate;
        private BigDecimal penalInterest;
        private Boolean isPaid = false;
        private Boolean isOverdue = false;
        private Integer dpdAtPayment;

        public EmiScheduleBuilder id(Long id) { this.id = id; return this; }
        public EmiScheduleBuilder loan(Loan loan) { this.loan = loan; return this; }
        public EmiScheduleBuilder installmentNumber(Integer installmentNumber) { this.installmentNumber = installmentNumber; return this; }
        public EmiScheduleBuilder dueDate(LocalDate dueDate) { this.dueDate = dueDate; return this; }
        public EmiScheduleBuilder principalComponent(BigDecimal principalComponent) { this.principalComponent = principalComponent; return this; }
        public EmiScheduleBuilder interestComponent(BigDecimal interestComponent) { this.interestComponent = interestComponent; return this; }
        public EmiScheduleBuilder emiAmount(BigDecimal emiAmount) { this.emiAmount = emiAmount; return this; }
        public EmiScheduleBuilder outstandingAfter(BigDecimal outstandingAfter) { this.outstandingAfter = outstandingAfter; return this; }
        public EmiScheduleBuilder paidAmount(BigDecimal paidAmount) { this.paidAmount = paidAmount; return this; }
        public EmiScheduleBuilder paidDate(LocalDate paidDate) { this.paidDate = paidDate; return this; }
        public EmiScheduleBuilder penalInterest(BigDecimal penalInterest) { this.penalInterest = penalInterest; return this; }
        public EmiScheduleBuilder isPaid(Boolean isPaid) { this.isPaid = isPaid; return this; }
        public EmiScheduleBuilder isOverdue(Boolean isOverdue) { this.isOverdue = isOverdue; return this; }
        public EmiScheduleBuilder dpdAtPayment(Integer dpdAtPayment) { this.dpdAtPayment = dpdAtPayment; return this; }

        public EmiSchedule build() {
            EmiSchedule s = new EmiSchedule();
            s.id = this.id;
            s.loan = this.loan;
            s.installmentNumber = this.installmentNumber;
            s.dueDate = this.dueDate;
            s.principalComponent = this.principalComponent;
            s.interestComponent = this.interestComponent;
            s.emiAmount = this.emiAmount;
            s.outstandingAfter = this.outstandingAfter;
            s.paidAmount = this.paidAmount;
            s.paidDate = this.paidDate;
            s.penalInterest = this.penalInterest;
            s.isPaid = this.isPaid;
            s.isOverdue = this.isOverdue;
            s.dpdAtPayment = this.dpdAtPayment;
            return s;
        }
    }
}


