package com.mfi.microfinance.dto.response;

import lombok.*;
import java.math.BigDecimal;
import java.util.Map;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class ParReportResponse {
    private String reportDate;
    private String branchName;
    private BigDecimal totalPortfolio;
    private BigDecimal totalOutstanding;
    private Integer totalActiveLoans;
    private Integer totalOverdueLoans;
    private Map<String, ParBucket> parBuckets;
    private BigDecimal parPercentage;
    private BigDecimal npaPercentage;
    private BigDecimal collectionEfficiency;

    public String getReportDate() { return reportDate; }
    public void setReportDate(String reportDate) { this.reportDate = reportDate; }

    public String getBranchName() { return branchName; }
    public void setBranchName(String branchName) { this.branchName = branchName; }

    public BigDecimal getTotalPortfolio() { return totalPortfolio; }
    public void setTotalPortfolio(BigDecimal totalPortfolio) { this.totalPortfolio = totalPortfolio; }

    public BigDecimal getTotalOutstanding() { return totalOutstanding; }
    public void setTotalOutstanding(BigDecimal totalOutstanding) { this.totalOutstanding = totalOutstanding; }

    public Integer getTotalActiveLoans() { return totalActiveLoans; }
    public void setTotalActiveLoans(Integer totalActiveLoans) { this.totalActiveLoans = totalActiveLoans; }

    public Integer getTotalOverdueLoans() { return totalOverdueLoans; }
    public void setTotalOverdueLoans(Integer totalOverdueLoans) { this.totalOverdueLoans = totalOverdueLoans; }

    public Map<String, ParBucket> getParBuckets() { return parBuckets; }
    public void setParBuckets(Map<String, ParBucket> parBuckets) { this.parBuckets = parBuckets; }

    public BigDecimal getParPercentage() { return parPercentage; }
    public void setParPercentage(BigDecimal parPercentage) { this.parPercentage = parPercentage; }

    public BigDecimal getNpaPercentage() { return npaPercentage; }
    public void setNpaPercentage(BigDecimal npaPercentage) { this.npaPercentage = npaPercentage; }

    public BigDecimal getCollectionEfficiency() { return collectionEfficiency; }
    public void setCollectionEfficiency(BigDecimal collectionEfficiency) { this.collectionEfficiency = collectionEfficiency; }

    public static ParReportResponseBuilder builder() { return new ParReportResponseBuilder(); }

    public static class ParReportResponseBuilder {
        private String reportDate;
        private String branchName;
        private BigDecimal totalPortfolio;
        private BigDecimal totalOutstanding;
        private Integer totalActiveLoans;
        private Integer totalOverdueLoans;
        private Map<String, ParBucket> parBuckets;
        private BigDecimal parPercentage;
        private BigDecimal npaPercentage;
        private BigDecimal collectionEfficiency;

        public ParReportResponseBuilder reportDate(String reportDate) { this.reportDate = reportDate; return this; }
        public ParReportResponseBuilder branchName(String branchName) { this.branchName = branchName; return this; }
        public ParReportResponseBuilder totalPortfolio(BigDecimal totalPortfolio) { this.totalPortfolio = totalPortfolio; return this; }
        public ParReportResponseBuilder totalOutstanding(BigDecimal totalOutstanding) { this.totalOutstanding = totalOutstanding; return this; }
        public ParReportResponseBuilder totalActiveLoans(Integer totalActiveLoans) { this.totalActiveLoans = totalActiveLoans; return this; }
        public ParReportResponseBuilder totalOverdueLoans(Integer totalOverdueLoans) { this.totalOverdueLoans = totalOverdueLoans; return this; }
        public ParReportResponseBuilder parBuckets(Map<String, ParBucket> parBuckets) { this.parBuckets = parBuckets; return this; }
        public ParReportResponseBuilder parPercentage(BigDecimal parPercentage) { this.parPercentage = parPercentage; return this; }
        public ParReportResponseBuilder npaPercentage(BigDecimal npaPercentage) { this.npaPercentage = npaPercentage; return this; }
        public ParReportResponseBuilder collectionEfficiency(BigDecimal collectionEfficiency) { this.collectionEfficiency = collectionEfficiency; return this; }

        public ParReportResponse build() {
            ParReportResponse r = new ParReportResponse();
            r.reportDate = this.reportDate;
            r.branchName = this.branchName;
            r.totalPortfolio = this.totalPortfolio;
            r.totalOutstanding = this.totalOutstanding;
            r.totalActiveLoans = this.totalActiveLoans;
            r.totalOverdueLoans = this.totalOverdueLoans;
            r.parBuckets = this.parBuckets;
            r.parPercentage = this.parPercentage;
            r.npaPercentage = this.npaPercentage;
            r.collectionEfficiency = this.collectionEfficiency;
            return r;
        }
    }

    @Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
    public static class ParBucket {
        private String classification;
        private Integer loanCount;
        private BigDecimal outstandingAmount;
        private BigDecimal percentage;

        public String getClassification() { return classification; }
        public void setClassification(String classification) { this.classification = classification; }

        public Integer getLoanCount() { return loanCount; }
        public void setLoanCount(Integer loanCount) { this.loanCount = loanCount; }

        public BigDecimal getOutstandingAmount() { return outstandingAmount; }
        public void setOutstandingAmount(BigDecimal outstandingAmount) { this.outstandingAmount = outstandingAmount; }

        public BigDecimal getPercentage() { return percentage; }
        public void setPercentage(BigDecimal percentage) { this.percentage = percentage; }

        public static ParBucketBuilder builder() { return new ParBucketBuilder(); }

        public static class ParBucketBuilder {
            private String classification;
            private Integer loanCount;
            private BigDecimal outstandingAmount;
            private BigDecimal percentage;

            public ParBucketBuilder classification(String classification) { this.classification = classification; return this; }
            public ParBucketBuilder loanCount(Integer loanCount) { this.loanCount = loanCount; return this; }
            public ParBucketBuilder outstandingAmount(BigDecimal outstandingAmount) { this.outstandingAmount = outstandingAmount; return this; }
            public ParBucketBuilder percentage(BigDecimal percentage) { this.percentage = percentage; return this; }

            public ParBucket build() {
                ParBucket b = new ParBucket();
                b.classification = this.classification;
                b.loanCount = this.loanCount;
                b.outstandingAmount = this.outstandingAmount;
                b.percentage = this.percentage;
                return b;
            }
        }
    }
}


