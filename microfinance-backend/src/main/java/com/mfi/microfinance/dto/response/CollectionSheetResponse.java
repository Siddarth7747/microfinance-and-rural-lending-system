package com.mfi.microfinance.dto.response;

import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class CollectionSheetResponse {
    private LocalDate collectionDate;
    private String branchName;
    private String officerName;
    private String centreName;
    private BigDecimal totalExpected;
    private BigDecimal totalCollected;
    private BigDecimal collectionRate;
    private List<CollectionEntry> entries;

    public LocalDate getCollectionDate() { return collectionDate; }
    public void setCollectionDate(LocalDate collectionDate) { this.collectionDate = collectionDate; }

    public String getBranchName() { return branchName; }
    public void setBranchName(String branchName) { this.branchName = branchName; }

    public String getOfficerName() { return officerName; }
    public void setOfficerName(String officerName) { this.officerName = officerName; }

    public String getCentreName() { return centreName; }
    public void setCentreName(String centreName) { this.centreName = centreName; }

    public BigDecimal getTotalExpected() { return totalExpected; }
    public void setTotalExpected(BigDecimal totalExpected) { this.totalExpected = totalExpected; }

    public BigDecimal getTotalCollected() { return totalCollected; }
    public void setTotalCollected(BigDecimal totalCollected) { this.totalCollected = totalCollected; }

    public BigDecimal getCollectionRate() { return collectionRate; }
    public void setCollectionRate(BigDecimal collectionRate) { this.collectionRate = collectionRate; }

    public List<CollectionEntry> getEntries() { return entries; }
    public void setEntries(List<CollectionEntry> entries) { this.entries = entries; }

    public static CollectionSheetResponseBuilder builder() { return new CollectionSheetResponseBuilder(); }

    public static class CollectionSheetResponseBuilder {
        private LocalDate collectionDate;
        private String branchName;
        private String officerName;
        private String centreName;
        private BigDecimal totalExpected;
        private BigDecimal totalCollected;
        private BigDecimal collectionRate;
        private List<CollectionEntry> entries;

        public CollectionSheetResponseBuilder collectionDate(LocalDate collectionDate) { this.collectionDate = collectionDate; return this; }
        public CollectionSheetResponseBuilder branchName(String branchName) { this.branchName = branchName; return this; }
        public CollectionSheetResponseBuilder officerName(String officerName) { this.officerName = officerName; return this; }
        public CollectionSheetResponseBuilder centreName(String centreName) { this.centreName = centreName; return this; }
        public CollectionSheetResponseBuilder totalExpected(BigDecimal totalExpected) { this.totalExpected = totalExpected; return this; }
        public CollectionSheetResponseBuilder totalCollected(BigDecimal totalCollected) { this.totalCollected = totalCollected; return this; }
        public CollectionSheetResponseBuilder collectionRate(BigDecimal collectionRate) { this.collectionRate = collectionRate; return this; }
        public CollectionSheetResponseBuilder entries(List<CollectionEntry> entries) { this.entries = entries; return this; }

        public CollectionSheetResponse build() {
            CollectionSheetResponse r = new CollectionSheetResponse();
            r.collectionDate = this.collectionDate;
            r.branchName = this.branchName;
            r.officerName = this.officerName;
            r.centreName = this.centreName;
            r.totalExpected = this.totalExpected;
            r.totalCollected = this.totalCollected;
            r.collectionRate = this.collectionRate;
            r.entries = this.entries;
            return r;
        }
    }

    @Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
    public static class CollectionEntry {
        private String borrowerName;
        private String brn;
        private String loanAccountNumber;
        private String groupName;
        private Integer installmentNumber;
        private BigDecimal emiAmount;
        private BigDecimal paidAmount;
        private String paymentMode;
        private Boolean isPaid;
        private Integer dpd;

        public String getBorrowerName() { return borrowerName; }
        public void setBorrowerName(String borrowerName) { this.borrowerName = borrowerName; }

        public String getBrn() { return brn; }
        public void setBrn(String brn) { this.brn = brn; }

        public String getLoanAccountNumber() { return loanAccountNumber; }
        public void setLoanAccountNumber(String loanAccountNumber) { this.loanAccountNumber = loanAccountNumber; }

        public String getGroupName() { return groupName; }
        public void setGroupName(String groupName) { this.groupName = groupName; }

        public Integer getInstallmentNumber() { return installmentNumber; }
        public void setInstallmentNumber(Integer installmentNumber) { this.installmentNumber = installmentNumber; }

        public BigDecimal getEmiAmount() { return emiAmount; }
        public void setEmiAmount(BigDecimal emiAmount) { this.emiAmount = emiAmount; }

        public BigDecimal getPaidAmount() { return paidAmount; }
        public void setPaidAmount(BigDecimal paidAmount) { this.paidAmount = paidAmount; }

        public String getPaymentMode() { return paymentMode; }
        public void setPaymentMode(String paymentMode) { this.paymentMode = paymentMode; }

        public Boolean getIsPaid() { return isPaid; }
        public void setIsPaid(Boolean isPaid) { this.isPaid = isPaid; }

        public Integer getDpd() { return dpd; }
        public void setDpd(Integer dpd) { this.dpd = dpd; }

        public static CollectionEntryBuilder builder() { return new CollectionEntryBuilder(); }

        public static class CollectionEntryBuilder {
            private String borrowerName;
            private String brn;
            private String loanAccountNumber;
            private String groupName;
            private Integer installmentNumber;
            private BigDecimal emiAmount;
            private BigDecimal paidAmount;
            private String paymentMode;
            private Boolean isPaid;
            private Integer dpd;

            public CollectionEntryBuilder borrowerName(String borrowerName) { this.borrowerName = borrowerName; return this; }
            public CollectionEntryBuilder brn(String brn) { this.brn = brn; return this; }
            public CollectionEntryBuilder loanAccountNumber(String loanAccountNumber) { this.loanAccountNumber = loanAccountNumber; return this; }
            public CollectionEntryBuilder groupName(String groupName) { this.groupName = groupName; return this; }
            public CollectionEntryBuilder installmentNumber(Integer installmentNumber) { this.installmentNumber = installmentNumber; return this; }
            public CollectionEntryBuilder emiAmount(BigDecimal emiAmount) { this.emiAmount = emiAmount; return this; }
            public CollectionEntryBuilder paidAmount(BigDecimal paidAmount) { this.paidAmount = paidAmount; return this; }
            public CollectionEntryBuilder paymentMode(String paymentMode) { this.paymentMode = paymentMode; return this; }
            public CollectionEntryBuilder isPaid(Boolean isPaid) { this.isPaid = isPaid; return this; }
            public CollectionEntryBuilder dpd(Integer dpd) { this.dpd = dpd; return this; }

            public CollectionEntry build() {
                CollectionEntry e = new CollectionEntry();
                e.borrowerName = this.borrowerName;
                e.brn = this.brn;
                e.loanAccountNumber = this.loanAccountNumber;
                e.groupName = this.groupName;
                e.installmentNumber = this.installmentNumber;
                e.emiAmount = this.emiAmount;
                e.paidAmount = this.paidAmount;
                e.paymentMode = this.paymentMode;
                e.isPaid = this.isPaid;
                e.dpd = this.dpd;
                return e;
            }
        }
    }
}


