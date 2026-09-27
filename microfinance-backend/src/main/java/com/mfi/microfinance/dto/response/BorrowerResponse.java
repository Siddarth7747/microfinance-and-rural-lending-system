package com.mfi.microfinance.dto.response;

import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class BorrowerResponse {
    private Long id;
    private String brn;
    private String firstName;
    private String middleName;
    private String lastName;
    private String fullName;
    private LocalDate dateOfBirth;
    private String gender;
    private String aadhaarNumberMasked;
    private String mobileNumber;
    private String village;
    private String district;
    private String state;
    private String pincode;
    private String occupation;
    private BigDecimal annualHouseholdIncome;
    private String kycStatus;
    private Integer cibilScore;
    private String bankName;
    private String bankAccountNumberMasked;
    private String branchName;
    private Boolean isActive;
    private Integer activeLoans;
    private BigDecimal totalOutstanding;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getBrn() { return brn; }
    public void setBrn(String brn) { this.brn = brn; }

    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }

    public String getMiddleName() { return middleName; }
    public void setMiddleName(String middleName) { this.middleName = middleName; }

    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }

    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }

    public LocalDate getDateOfBirth() { return dateOfBirth; }
    public void setDateOfBirth(LocalDate dateOfBirth) { this.dateOfBirth = dateOfBirth; }

    public String getGender() { return gender; }
    public void setGender(String gender) { this.gender = gender; }

    public String getAadhaarNumberMasked() { return aadhaarNumberMasked; }
    public void setAadhaarNumberMasked(String aadhaarNumberMasked) { this.aadhaarNumberMasked = aadhaarNumberMasked; }

    public String getMobileNumber() { return mobileNumber; }
    public void setMobileNumber(String mobileNumber) { this.mobileNumber = mobileNumber; }

    public String getVillage() { return village; }
    public void setVillage(String village) { this.village = village; }

    public String getDistrict() { return district; }
    public void setDistrict(String district) { this.district = district; }

    public String getState() { return state; }
    public void setState(String state) { this.state = state; }

    public String getPincode() { return pincode; }
    public void setPincode(String pincode) { this.pincode = pincode; }

    public String getOccupation() { return occupation; }
    public void setOccupation(String occupation) { this.occupation = occupation; }

    public BigDecimal getAnnualHouseholdIncome() { return annualHouseholdIncome; }
    public void setAnnualHouseholdIncome(BigDecimal annualHouseholdIncome) { this.annualHouseholdIncome = annualHouseholdIncome; }

    public String getKycStatus() { return kycStatus; }
    public void setKycStatus(String kycStatus) { this.kycStatus = kycStatus; }

    public Integer getCibilScore() { return cibilScore; }
    public void setCibilScore(Integer cibilScore) { this.cibilScore = cibilScore; }

    public String getBankName() { return bankName; }
    public void setBankName(String bankName) { this.bankName = bankName; }

    public String getBankAccountNumberMasked() { return bankAccountNumberMasked; }
    public void setBankAccountNumberMasked(String bankAccountNumberMasked) { this.bankAccountNumberMasked = bankAccountNumberMasked; }

    public String getBranchName() { return branchName; }
    public void setBranchName(String branchName) { this.branchName = branchName; }

    public Boolean getIsActive() { return isActive; }
    public void setIsActive(Boolean isActive) { this.isActive = isActive; }

    public Integer getActiveLoans() { return activeLoans; }
    public void setActiveLoans(Integer activeLoans) { this.activeLoans = activeLoans; }

    public BigDecimal getTotalOutstanding() { return totalOutstanding; }
    public void setTotalOutstanding(BigDecimal totalOutstanding) { this.totalOutstanding = totalOutstanding; }

    public static BorrowerResponseBuilder builder() { return new BorrowerResponseBuilder(); }

    public static class BorrowerResponseBuilder {
        private Long id;
        private String brn;
        private String firstName;
        private String middleName;
        private String lastName;
        private String fullName;
        private LocalDate dateOfBirth;
        private String gender;
        private String aadhaarNumberMasked;
        private String mobileNumber;
        private String village;
        private String district;
        private String state;
        private String pincode;
        private String occupation;
        private BigDecimal annualHouseholdIncome;
        private String kycStatus;
        private Integer cibilScore;
        private String bankName;
        private String bankAccountNumberMasked;
        private String branchName;
        private Boolean isActive;
        private Integer activeLoans;
        private BigDecimal totalOutstanding;

        public BorrowerResponseBuilder id(Long id) { this.id = id; return this; }
        public BorrowerResponseBuilder brn(String brn) { this.brn = brn; return this; }
        public BorrowerResponseBuilder firstName(String firstName) { this.firstName = firstName; return this; }
        public BorrowerResponseBuilder middleName(String middleName) { this.middleName = middleName; return this; }
        public BorrowerResponseBuilder lastName(String lastName) { this.lastName = lastName; return this; }
        public BorrowerResponseBuilder fullName(String fullName) { this.fullName = fullName; return this; }
        public BorrowerResponseBuilder dateOfBirth(LocalDate dateOfBirth) { this.dateOfBirth = dateOfBirth; return this; }
        public BorrowerResponseBuilder gender(String gender) { this.gender = gender; return this; }
        public BorrowerResponseBuilder aadhaarNumberMasked(String aadhaarNumberMasked) { this.aadhaarNumberMasked = aadhaarNumberMasked; return this; }
        public BorrowerResponseBuilder mobileNumber(String mobileNumber) { this.mobileNumber = mobileNumber; return this; }
        public BorrowerResponseBuilder village(String village) { this.village = village; return this; }
        public BorrowerResponseBuilder district(String district) { this.district = district; return this; }
        public BorrowerResponseBuilder state(String state) { this.state = state; return this; }
        public BorrowerResponseBuilder pincode(String pincode) { this.pincode = pincode; return this; }
        public BorrowerResponseBuilder occupation(String occupation) { this.occupation = occupation; return this; }
        public BorrowerResponseBuilder annualHouseholdIncome(BigDecimal annualHouseholdIncome) { this.annualHouseholdIncome = annualHouseholdIncome; return this; }
        public BorrowerResponseBuilder kycStatus(String kycStatus) { this.kycStatus = kycStatus; return this; }
        public BorrowerResponseBuilder cibilScore(Integer cibilScore) { this.cibilScore = cibilScore; return this; }
        public BorrowerResponseBuilder bankName(String bankName) { this.bankName = bankName; return this; }
        public BorrowerResponseBuilder bankAccountNumberMasked(String bankAccountNumberMasked) { this.bankAccountNumberMasked = bankAccountNumberMasked; return this; }
        public BorrowerResponseBuilder branchName(String branchName) { this.branchName = branchName; return this; }
        public BorrowerResponseBuilder isActive(Boolean isActive) { this.isActive = isActive; return this; }
        public BorrowerResponseBuilder activeLoans(Integer activeLoans) { this.activeLoans = activeLoans; return this; }
        public BorrowerResponseBuilder totalOutstanding(BigDecimal totalOutstanding) { this.totalOutstanding = totalOutstanding; return this; }

        public BorrowerResponse build() {
            BorrowerResponse r = new BorrowerResponse();
            r.id = this.id;
            r.brn = this.brn;
            r.firstName = this.firstName;
            r.middleName = this.middleName;
            r.lastName = this.lastName;
            r.fullName = this.fullName;
            r.dateOfBirth = this.dateOfBirth;
            r.gender = this.gender;
            r.aadhaarNumberMasked = this.aadhaarNumberMasked;
            r.mobileNumber = this.mobileNumber;
            r.village = this.village;
            r.district = this.district;
            r.state = this.state;
            r.pincode = this.pincode;
            r.occupation = this.occupation;
            r.annualHouseholdIncome = this.annualHouseholdIncome;
            r.kycStatus = this.kycStatus;
            r.cibilScore = this.cibilScore;
            r.bankName = this.bankName;
            r.bankAccountNumberMasked = this.bankAccountNumberMasked;
            r.branchName = this.branchName;
            r.isActive = this.isActive;
            r.activeLoans = this.activeLoans;
            r.totalOutstanding = this.totalOutstanding;
            return r;
        }
    }
}


