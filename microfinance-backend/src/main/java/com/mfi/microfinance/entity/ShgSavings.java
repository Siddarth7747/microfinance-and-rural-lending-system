package com.mfi.microfinance.entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "shg_savings")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
@EntityListeners(AuditingEntityListener.class)
public class ShgSavings {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "group_id", nullable = false)
    private LoanGroup group;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id", nullable = false)
    private Borrower member;

    @Column(nullable = false, length = 20)
    private String transactionType; // DEPOSIT, WITHDRAWAL, INTERNAL_LOAN, INTERNAL_REPAYMENT

    @Column(nullable = false, precision = 12, scale = 2)
    private BigDecimal amount;

    @Column(nullable = false)
    private LocalDate transactionDate;

    @Column(precision = 12, scale = 2)
    private BigDecimal balanceAfter;

    @Column(length = 255)
    private String remarks;

    @Column(length = 100)
    private String recordedBy;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "branch_id")
    private Branch branch;

    @CreatedDate
    @Column(updatable = false)
    private LocalDateTime createdAt;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public LoanGroup getGroup() { return group; }
    public void setGroup(LoanGroup group) { this.group = group; }

    public Borrower getMember() { return member; }
    public void setMember(Borrower member) { this.member = member; }

    public String getTransactionType() { return transactionType; }
    public void setTransactionType(String transactionType) { this.transactionType = transactionType; }

    public BigDecimal getAmount() { return amount; }
    public void setAmount(BigDecimal amount) { this.amount = amount; }

    public LocalDate getTransactionDate() { return transactionDate; }
    public void setTransactionDate(LocalDate transactionDate) { this.transactionDate = transactionDate; }

    public BigDecimal getBalanceAfter() { return balanceAfter; }
    public void setBalanceAfter(BigDecimal balanceAfter) { this.balanceAfter = balanceAfter; }

    public String getRemarks() { return remarks; }
    public void setRemarks(String remarks) { this.remarks = remarks; }

    public String getRecordedBy() { return recordedBy; }
    public void setRecordedBy(String recordedBy) { this.recordedBy = recordedBy; }

    public Branch getBranch() { return branch; }
    public void setBranch(Branch branch) { this.branch = branch; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public static ShgSavingsBuilder builder() { return new ShgSavingsBuilder(); }

    public static class ShgSavingsBuilder {
        private Long id;
        private LoanGroup group;
        private Borrower member;
        private String transactionType;
        private BigDecimal amount;
        private LocalDate transactionDate;
        private BigDecimal balanceAfter;
        private String remarks;
        private String recordedBy;
        private Branch branch;
        private LocalDateTime createdAt;

        public ShgSavingsBuilder id(Long id) { this.id = id; return this; }
        public ShgSavingsBuilder group(LoanGroup group) { this.group = group; return this; }
        public ShgSavingsBuilder member(Borrower member) { this.member = member; return this; }
        public ShgSavingsBuilder transactionType(String transactionType) { this.transactionType = transactionType; return this; }
        public ShgSavingsBuilder amount(BigDecimal amount) { this.amount = amount; return this; }
        public ShgSavingsBuilder transactionDate(LocalDate transactionDate) { this.transactionDate = transactionDate; return this; }
        public ShgSavingsBuilder balanceAfter(BigDecimal balanceAfter) { this.balanceAfter = balanceAfter; return this; }
        public ShgSavingsBuilder remarks(String remarks) { this.remarks = remarks; return this; }
        public ShgSavingsBuilder recordedBy(String recordedBy) { this.recordedBy = recordedBy; return this; }
        public ShgSavingsBuilder branch(Branch branch) { this.branch = branch; return this; }
        public ShgSavingsBuilder createdAt(LocalDateTime createdAt) { this.createdAt = createdAt; return this; }

        public ShgSavings build() {
            ShgSavings s = new ShgSavings();
            s.id = this.id;
            s.group = this.group;
            s.member = this.member;
            s.transactionType = this.transactionType;
            s.amount = this.amount;
            s.transactionDate = this.transactionDate;
            s.balanceAfter = this.balanceAfter;
            s.remarks = this.remarks;
            s.recordedBy = this.recordedBy;
            s.branch = this.branch;
            s.createdAt = this.createdAt;
            return s;
        }
    }
}

