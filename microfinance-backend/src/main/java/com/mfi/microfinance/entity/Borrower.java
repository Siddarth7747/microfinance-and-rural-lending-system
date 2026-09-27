package com.mfi.microfinance.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.mfi.microfinance.entity.enums.KycStatus;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "borrowers")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Borrower {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 50)
    private String brn; // Borrower Reference Number

    @Column(nullable = false, length = 100)
    private String firstName;

    @Column(length = 100)
    private String middleName;

    @Column(nullable = false, length = 100)
    private String lastName;

    @Column(nullable = false)
    private LocalDate dateOfBirth;

    @Column(nullable = false, length = 10)
    private String gender;

    @Column(nullable = false, length = 12)
    private String aadhaarNumber;

    @Column(length = 10)
    private String panNumber;

    @Column(length = 20)
    private String voterId;

    @Column(nullable = false, length = 15)
    private String mobileNumber;

    @Column(length = 15)
    private String alternateMobile;

    @Column(length = 255)
    private String email;

    // Address
    @Column(nullable = false, length = 255)
    private String addressLine1;

    @Column(length = 255)
    private String addressLine2;

    @Column(nullable = false, length = 100)
    private String village;

    @Column(nullable = false, length = 100)
    private String taluka;

    @Column(nullable = false, length = 100)
    private String district;

    @Column(nullable = false, length = 100)
    private String state;

    @Column(nullable = false, length = 6)
    private String pincode;

    // GPS coordinates of residence
    private Double latitude;
    private Double longitude;

    // Family details
    @Column(length = 100)
    private String fatherOrSpouseName;

    private Integer familySize;

    @Column(precision = 12, scale = 2)
    private BigDecimal annualHouseholdIncome;

    @Column(length = 100)
    private String occupation;

    @Column(length = 100)
    private String caste;

    @Column(length = 50)
    private String religion;

    // Bank details
    @Column(length = 100)
    private String bankName;

    @Column(length = 20)
    private String bankAccountNumber;

    @Column(length = 11)
    private String ifscCode;

    // KYC
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    @Builder.Default
    private KycStatus kycStatus = KycStatus.PENDING;

    @Column(length = 500)
    private String photoUrl;

    @Column(length = 500)
    private String signatureUrl;

    // Credit bureau
    private Integer cibilScore;
    private LocalDate cibilFetchDate;

    @Column(precision = 12, scale = 2)
    private BigDecimal existingLoanOutstanding;

    private Integer numberOfExistingLoans;

    // Branch association
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "branch_id")
    private Branch branch;

    @Column(nullable = false)
    @Builder.Default
    private Boolean isActive = true;

    // Audit fields
    @CreatedDate
    @Column(updatable = false)
    private LocalDateTime createdAt;

    @LastModifiedDate
    private LocalDateTime updatedAt;

    @CreatedBy
    @Column(updatable = false, length = 100)
    private String createdBy;

    @LastModifiedBy
    @Column(length = 100)
    private String modifiedBy;

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

    public LocalDate getDateOfBirth() { return dateOfBirth; }
    public void setDateOfBirth(LocalDate dateOfBirth) { this.dateOfBirth = dateOfBirth; }

    public String getGender() { return gender; }
    public void setGender(String gender) { this.gender = gender; }

    public String getAadhaarNumber() { return aadhaarNumber; }
    public void setAadhaarNumber(String aadhaarNumber) { this.aadhaarNumber = aadhaarNumber; }

    public String getPanNumber() { return panNumber; }
    public void setPanNumber(String panNumber) { this.panNumber = panNumber; }

    public String getVoterId() { return voterId; }
    public void setVoterId(String voterId) { this.voterId = voterId; }

    public String getMobileNumber() { return mobileNumber; }
    public void setMobileNumber(String mobileNumber) { this.mobileNumber = mobileNumber; }

    public String getAlternateMobile() { return alternateMobile; }
    public void setAlternateMobile(String alternateMobile) { this.alternateMobile = alternateMobile; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getAddressLine1() { return addressLine1; }
    public void setAddressLine1(String addressLine1) { this.addressLine1 = addressLine1; }

    public String getAddressLine2() { return addressLine2; }
    public void setAddressLine2(String addressLine2) { this.addressLine2 = addressLine2; }

    public String getVillage() { return village; }
    public void setVillage(String village) { this.village = village; }

    public String getTaluka() { return taluka; }
    public void setTaluka(String taluka) { this.taluka = taluka; }

    public String getDistrict() { return district; }
    public void setDistrict(String district) { this.district = district; }

    public String getState() { return state; }
    public void setState(String state) { this.state = state; }

    public String getPincode() { return pincode; }
    public void setPincode(String pincode) { this.pincode = pincode; }

    public Double getLatitude() { return latitude; }
    public void setLatitude(Double latitude) { this.latitude = latitude; }

    public Double getLongitude() { return longitude; }
    public void setLongitude(Double longitude) { this.longitude = longitude; }

    public String getFatherOrSpouseName() { return fatherOrSpouseName; }
    public void setFatherOrSpouseName(String fatherOrSpouseName) { this.fatherOrSpouseName = fatherOrSpouseName; }

    public Integer getFamilySize() { return familySize; }
    public void setFamilySize(Integer familySize) { this.familySize = familySize; }

    public BigDecimal getAnnualHouseholdIncome() { return annualHouseholdIncome; }
    public void setAnnualHouseholdIncome(BigDecimal annualHouseholdIncome) { this.annualHouseholdIncome = annualHouseholdIncome; }

    public String getOccupation() { return occupation; }
    public void setOccupation(String occupation) { this.occupation = occupation; }

    public String getCaste() { return caste; }
    public void setCaste(String caste) { this.caste = caste; }

    public String getReligion() { return religion; }
    public void setReligion(String religion) { this.religion = religion; }

    public String getBankName() { return bankName; }
    public void setBankName(String bankName) { this.bankName = bankName; }

    public String getBankAccountNumber() { return bankAccountNumber; }
    public void setBankAccountNumber(String bankAccountNumber) { this.bankAccountNumber = bankAccountNumber; }

    public String getIfscCode() { return ifscCode; }
    public void setIfscCode(String ifscCode) { this.ifscCode = ifscCode; }

    public KycStatus getKycStatus() { return kycStatus; }
    public void setKycStatus(KycStatus kycStatus) { this.kycStatus = kycStatus; }

    public String getPhotoUrl() { return photoUrl; }
    public void setPhotoUrl(String photoUrl) { this.photoUrl = photoUrl; }

    public String getSignatureUrl() { return signatureUrl; }
    public void setSignatureUrl(String signatureUrl) { this.signatureUrl = signatureUrl; }

    public Integer getCibilScore() { return cibilScore; }
    public void setCibilScore(Integer cibilScore) { this.cibilScore = cibilScore; }

    public LocalDate getCibilFetchDate() { return cibilFetchDate; }
    public void setCibilFetchDate(LocalDate cibilFetchDate) { this.cibilFetchDate = cibilFetchDate; }

    public BigDecimal getExistingLoanOutstanding() { return existingLoanOutstanding; }
    public void setExistingLoanOutstanding(BigDecimal existingLoanOutstanding) { this.existingLoanOutstanding = existingLoanOutstanding; }

    public Integer getNumberOfExistingLoans() { return numberOfExistingLoans; }
    public void setNumberOfExistingLoans(Integer numberOfExistingLoans) { this.numberOfExistingLoans = numberOfExistingLoans; }

    public Branch getBranch() { return branch; }
    public void setBranch(Branch branch) { this.branch = branch; }

    public Boolean getIsActive() { return isActive; }
    public void setIsActive(Boolean isActive) { this.isActive = isActive; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }

    public String getCreatedBy() { return createdBy; }
    public void setCreatedBy(String createdBy) { this.createdBy = createdBy; }

    public String getModifiedBy() { return modifiedBy; }
    public void setModifiedBy(String modifiedBy) { this.modifiedBy = modifiedBy; }

    public static BorrowerBuilder builder() { return new BorrowerBuilder(); }

    public static class BorrowerBuilder {
        private Long id;
        private String brn;
        private String firstName;
        private String middleName;
        private String lastName;
        private LocalDate dateOfBirth;
        private String gender;
        private String aadhaarNumber;
        private String panNumber;
        private String voterId;
        private String mobileNumber;
        private String alternateMobile;
        private String email;
        private String addressLine1;
        private String addressLine2;
        private String village;
        private String taluka;
        private String district;
        private String state;
        private String pincode;
        private Double latitude;
        private Double longitude;
        private String fatherOrSpouseName;
        private Integer familySize;
        private BigDecimal annualHouseholdIncome;
        private String occupation;
        private String caste;
        private String religion;
        private String bankName;
        private String bankAccountNumber;
        private String ifscCode;
        private KycStatus kycStatus = KycStatus.PENDING;
        private String photoUrl;
        private String signatureUrl;
        private Integer cibilScore;
        private LocalDate cibilFetchDate;
        private BigDecimal existingLoanOutstanding;
        private Integer numberOfExistingLoans;
        private Branch branch;
        private Boolean isActive = true;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;
        private String createdBy;
        private String modifiedBy;

        public BorrowerBuilder id(Long id) { this.id = id; return this; }
        public BorrowerBuilder brn(String brn) { this.brn = brn; return this; }
        public BorrowerBuilder firstName(String firstName) { this.firstName = firstName; return this; }
        public BorrowerBuilder middleName(String middleName) { this.middleName = middleName; return this; }
        public BorrowerBuilder lastName(String lastName) { this.lastName = lastName; return this; }
        public BorrowerBuilder dateOfBirth(LocalDate dateOfBirth) { this.dateOfBirth = dateOfBirth; return this; }
        public BorrowerBuilder gender(String gender) { this.gender = gender; return this; }
        public BorrowerBuilder aadhaarNumber(String aadhaarNumber) { this.aadhaarNumber = aadhaarNumber; return this; }
        public BorrowerBuilder panNumber(String panNumber) { this.panNumber = panNumber; return this; }
        public BorrowerBuilder voterId(String voterId) { this.voterId = voterId; return this; }
        public BorrowerBuilder mobileNumber(String mobileNumber) { this.mobileNumber = mobileNumber; return this; }
        public BorrowerBuilder alternateMobile(String alternateMobile) { this.alternateMobile = alternateMobile; return this; }
        public BorrowerBuilder email(String email) { this.email = email; return this; }
        public BorrowerBuilder addressLine1(String addressLine1) { this.addressLine1 = addressLine1; return this; }
        public BorrowerBuilder addressLine2(String addressLine2) { this.addressLine2 = addressLine2; return this; }
        public BorrowerBuilder village(String village) { this.village = village; return this; }
        public BorrowerBuilder taluka(String taluka) { this.taluka = taluka; return this; }
        public BorrowerBuilder district(String district) { this.district = district; return this; }
        public BorrowerBuilder state(String state) { this.state = state; return this; }
        public BorrowerBuilder pincode(String pincode) { this.pincode = pincode; return this; }
        public BorrowerBuilder latitude(Double latitude) { this.latitude = latitude; return this; }
        public BorrowerBuilder longitude(Double longitude) { this.longitude = longitude; return this; }
        public BorrowerBuilder fatherOrSpouseName(String fatherOrSpouseName) { this.fatherOrSpouseName = fatherOrSpouseName; return this; }
        public BorrowerBuilder familySize(Integer familySize) { this.familySize = familySize; return this; }
        public BorrowerBuilder annualHouseholdIncome(BigDecimal annualHouseholdIncome) { this.annualHouseholdIncome = annualHouseholdIncome; return this; }
        public BorrowerBuilder occupation(String occupation) { this.occupation = occupation; return this; }
        public BorrowerBuilder caste(String caste) { this.caste = caste; return this; }
        public BorrowerBuilder religion(String religion) { this.religion = religion; return this; }
        public BorrowerBuilder bankName(String bankName) { this.bankName = bankName; return this; }
        public BorrowerBuilder bankAccountNumber(String bankAccountNumber) { this.bankAccountNumber = bankAccountNumber; return this; }
        public BorrowerBuilder ifscCode(String ifscCode) { this.ifscCode = ifscCode; return this; }
        public BorrowerBuilder kycStatus(KycStatus kycStatus) { this.kycStatus = kycStatus; return this; }
        public BorrowerBuilder photoUrl(String photoUrl) { this.photoUrl = photoUrl; return this; }
        public BorrowerBuilder signatureUrl(String signatureUrl) { this.signatureUrl = signatureUrl; return this; }
        public BorrowerBuilder cibilScore(Integer cibilScore) { this.cibilScore = cibilScore; return this; }
        public BorrowerBuilder cibilFetchDate(LocalDate cibilFetchDate) { this.cibilFetchDate = cibilFetchDate; return this; }
        public BorrowerBuilder existingLoanOutstanding(BigDecimal existingLoanOutstanding) { this.existingLoanOutstanding = existingLoanOutstanding; return this; }
        public BorrowerBuilder numberOfExistingLoans(Integer numberOfExistingLoans) { this.numberOfExistingLoans = numberOfExistingLoans; return this; }
        public BorrowerBuilder branch(Branch branch) { this.branch = branch; return this; }
        public BorrowerBuilder isActive(Boolean isActive) { this.isActive = isActive; return this; }
        public BorrowerBuilder createdAt(LocalDateTime createdAt) { this.createdAt = createdAt; return this; }
        public BorrowerBuilder updatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; return this; }
        public BorrowerBuilder createdBy(String createdBy) { this.createdBy = createdBy; return this; }
        public BorrowerBuilder modifiedBy(String modifiedBy) { this.modifiedBy = modifiedBy; return this; }

        public Borrower build() {
            Borrower b = new Borrower();
            b.id = this.id;
            b.brn = this.brn;
            b.firstName = this.firstName;
            b.middleName = this.middleName;
            b.lastName = this.lastName;
            b.dateOfBirth = this.dateOfBirth;
            b.gender = this.gender;
            b.aadhaarNumber = this.aadhaarNumber;
            b.panNumber = this.panNumber;
            b.voterId = this.voterId;
            b.mobileNumber = this.mobileNumber;
            b.alternateMobile = this.alternateMobile;
            b.email = this.email;
            b.addressLine1 = this.addressLine1;
            b.addressLine2 = this.addressLine2;
            b.village = this.village;
            b.taluka = this.taluka;
            b.district = this.district;
            b.state = this.state;
            b.pincode = this.pincode;
            b.latitude = this.latitude;
            b.longitude = this.longitude;
            b.fatherOrSpouseName = this.fatherOrSpouseName;
            b.familySize = this.familySize;
            b.annualHouseholdIncome = this.annualHouseholdIncome;
            b.occupation = this.occupation;
            b.caste = this.caste;
            b.religion = this.religion;
            b.bankName = this.bankName;
            b.bankAccountNumber = this.bankAccountNumber;
            b.ifscCode = this.ifscCode;
            b.kycStatus = this.kycStatus;
            b.photoUrl = this.photoUrl;
            b.signatureUrl = this.signatureUrl;
            b.cibilScore = this.cibilScore;
            b.cibilFetchDate = this.cibilFetchDate;
            b.existingLoanOutstanding = this.existingLoanOutstanding;
            b.numberOfExistingLoans = this.numberOfExistingLoans;
            b.branch = this.branch;
            b.isActive = this.isActive;
            b.createdAt = this.createdAt;
            b.updatedAt = this.updatedAt;
            b.createdBy = this.createdBy;
            b.modifiedBy = this.modifiedBy;
            return b;
        }
    }
}


