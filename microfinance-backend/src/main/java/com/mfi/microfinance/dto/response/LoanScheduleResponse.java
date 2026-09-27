package com.mfi.microfinance.dto.response;

import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class LoanScheduleResponse {
    private String loanAccountNumber;
    private String borrowerName;
    private String productName;
    private BigDecimal sanctionedAmount;
    private BigDecimal interestRate;
    private String interestMethod;
    private Integer tenureMonths;
    private BigDecimal emiAmount;
    private BigDecimal totalInterest;
    private BigDecimal totalPayable;
    private List<InstallmentDetail> installments;

    public String getLoanAccountNumber() { return loanAccountNumber; }
    public void setLoanAccountNumber(String loanAccountNumber) { this.loanAccountNumber = loanAccountNumber; }

    public String getBorrowerName() { return borrowerName; }
    public void setBorrowerName(String borrowerName) { this.borrowerName = borrowerName; }

    public String getProductName() { return productName; }
    public void setProductName(String productName) { this.productName = productName; }

    public BigDecimal getSanctionedAmount() { return sanctionedAmount; }
    public void setSanctionedAmount(BigDecimal sanctionedAmount) { this.sanctionedAmount = sanctionedAmount; }

    public BigDecimal getInterestRate() { return interestRate; }
    public void setInterestRate(BigDecimal interestRate) { this.interestRate = interestRate; }

    public String getInterestMethod() { return interestMethod; }
    public void setInterestMethod(String interestMethod) { this.interestMethod = interestMethod; }

    public Integer getTenureMonths() { return tenureMonths; }
    public void setTenureMonths(Integer tenureMonths) { this.tenureMonths = tenureMonths; }

    public BigDecimal getEmiAmount() { return emiAmount; }
    public void setEmiAmount(BigDecimal emiAmount) { this.emiAmount = emiAmount; }

    public BigDecimal getTotalInterest() { return totalInterest; }
    public void setTotalInterest(BigDecimal totalInterest) { this.totalInterest = totalInterest; }

    public BigDecimal getTotalPayable() { return totalPayable; }
    public void setTotalPayable(BigDecimal totalPayable) { this.totalPayable = totalPayable; }

    public List<InstallmentDetail> getInstallments() { return installments; }
    public void setInstallments(List<InstallmentDetail> installments) { this.installments = installments; }

    public static LoanScheduleResponseBuilder builder() { return new LoanScheduleResponseBuilder(); }

    public static class LoanScheduleResponseBuilder {
        private String loanAccountNumber;
        private String borrowerName;
        private String productName;
        private BigDecimal sanctionedAmount;
        private BigDecimal interestRate;
        private String interestMethod;
        private Integer tenureMonths;
        private BigDecimal emiAmount;
        private BigDecimal totalInterest;
        private BigDecimal totalPayable;
        private List<InstallmentDetail> installments;

        public LoanScheduleResponseBuilder loanAccountNumber(String loanAccountNumber) { this.loanAccountNumber = loanAccountNumber; return this; }
        public LoanScheduleResponseBuilder borrowerName(String borrowerName) { this.borrowerName = borrowerName; return this; }
        public LoanScheduleResponseBuilder productName(String productName) { this.productName = productName; return this; }
        public LoanScheduleResponseBuilder sanctionedAmount(BigDecimal sanctionedAmount) { this.sanctionedAmount = sanctionedAmount; return this; }
        public LoanScheduleResponseBuilder interestRate(BigDecimal interestRate) { this.interestRate = interestRate; return this; }
        public LoanScheduleResponseBuilder interestMethod(String interestMethod) { this.interestMethod = interestMethod; return this; }
        public LoanScheduleResponseBuilder tenureMonths(Integer tenureMonths) { this.tenureMonths = tenureMonths; return this; }
        public LoanScheduleResponseBuilder emiAmount(BigDecimal emiAmount) { this.emiAmount = emiAmount; return this; }
        public LoanScheduleResponseBuilder totalInterest(BigDecimal totalInterest) { this.totalInterest = totalInterest; return this; }
        public LoanScheduleResponseBuilder totalPayable(BigDecimal totalPayable) { this.totalPayable = totalPayable; return this; }
        public LoanScheduleResponseBuilder installments(List<InstallmentDetail> installments) { this.installments = installments; return this; }

        public LoanScheduleResponse build() {
            LoanScheduleResponse r = new LoanScheduleResponse();
            r.loanAccountNumber = this.loanAccountNumber;
            r.borrowerName = this.borrowerName;
            r.productName = this.productName;
            r.sanctionedAmount = this.sanctionedAmount;
            r.interestRate = this.interestRate;
            r.interestMethod = this.interestMethod;
            r.tenureMonths = this.tenureMonths;
            r.emiAmount = this.emiAmount;
            r.totalInterest = this.totalInterest;
            r.totalPayable = this.totalPayable;
            r.installments = this.installments;
            return r;
        }
    }

    @Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
    public static class InstallmentDetail {
        private Integer installmentNumber;
        private LocalDate dueDate;
        private BigDecimal principalComponent;
        private BigDecimal interestComponent;
        private BigDecimal emiAmount;
        private BigDecimal outstandingAfter;
        private Boolean isPaid;
        private LocalDate paidDate;
        private BigDecimal paidAmount;

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

        public Boolean getIsPaid() { return isPaid; }
        public void setIsPaid(Boolean isPaid) { this.isPaid = isPaid; }

        public LocalDate getPaidDate() { return paidDate; }
        public void setPaidDate(LocalDate paidDate) { this.paidDate = paidDate; }

        public BigDecimal getPaidAmount() { return paidAmount; }
        public void setPaidAmount(BigDecimal paidAmount) { this.paidAmount = paidAmount; }

        public static InstallmentDetailBuilder builder() { return new InstallmentDetailBuilder(); }

        public static class InstallmentDetailBuilder {
            private Integer installmentNumber;
            private LocalDate dueDate;
            private BigDecimal principalComponent;
            private BigDecimal interestComponent;
            private BigDecimal emiAmount;
            private BigDecimal outstandingAfter;
            private Boolean isPaid;
            private LocalDate paidDate;
            private BigDecimal paidAmount;

            public InstallmentDetailBuilder installmentNumber(Integer installmentNumber) { this.installmentNumber = installmentNumber; return this; }
            public InstallmentDetailBuilder dueDate(LocalDate dueDate) { this.dueDate = dueDate; return this; }
            public InstallmentDetailBuilder principalComponent(BigDecimal principalComponent) { this.principalComponent = principalComponent; return this; }
            public InstallmentDetailBuilder interestComponent(BigDecimal interestComponent) { this.interestComponent = interestComponent; return this; }
            public InstallmentDetailBuilder emiAmount(BigDecimal emiAmount) { this.emiAmount = emiAmount; return this; }
            public InstallmentDetailBuilder outstandingAfter(BigDecimal outstandingAfter) { this.outstandingAfter = outstandingAfter; return this; }
            public InstallmentDetailBuilder isPaid(Boolean isPaid) { this.isPaid = isPaid; return this; }
            public InstallmentDetailBuilder paidDate(LocalDate paidDate) { this.paidDate = paidDate; return this; }
            public InstallmentDetailBuilder paidAmount(BigDecimal paidAmount) { this.paidAmount = paidAmount; return this; }

            public InstallmentDetail build() {
                InstallmentDetail d = new InstallmentDetail();
                d.installmentNumber = this.installmentNumber;
                d.dueDate = this.dueDate;
                d.principalComponent = this.principalComponent;
                d.interestComponent = this.interestComponent;
                d.emiAmount = this.emiAmount;
                d.outstandingAfter = this.outstandingAfter;
                d.isPaid = this.isPaid;
                d.paidDate = this.paidDate;
                d.paidAmount = this.paidAmount;
                return d;
            }
        }
    }
}


