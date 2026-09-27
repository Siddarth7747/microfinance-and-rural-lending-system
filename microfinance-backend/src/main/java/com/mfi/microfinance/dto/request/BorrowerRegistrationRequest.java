package com.mfi.microfinance.dto.request;

import jakarta.validation.constraints.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class BorrowerRegistrationRequest {

    @NotBlank(message = "First name is required")
    @Size(max = 100)
    private String firstName;

    @Size(max = 100)
    private String middleName;

    @NotBlank(message = "Last name is required")
    @Size(max = 100)
    private String lastName;

    @NotNull(message = "Date of birth is required")
    private LocalDate dateOfBirth;

    @NotBlank(message = "Gender is required")
    private String gender;

    @NotBlank(message = "Aadhaar number is required")
    @Size(min = 12, max = 12, message = "Aadhaar number must be 12 digits")
    private String aadhaarNumber;

    @Size(min = 10, max = 10, message = "PAN must be 10 characters")
    private String panNumber;

    private String voterId;

    @NotBlank(message = "Mobile number is required")
    @Pattern(regexp = "^[6-9]\\d{9}$", message = "Invalid mobile number")
    private String mobileNumber;

    private String alternateMobile;
    private String email;

    @NotBlank(message = "Address is required")
    private String addressLine1;
    private String addressLine2;

    @NotBlank(message = "Village is required")
    private String village;

    @NotBlank(message = "Taluka is required")
    private String taluka;

    @NotBlank(message = "District is required")
    private String district;

    @NotBlank(message = "State is required")
    private String state;

    @NotBlank(message = "Pincode is required")
    @Pattern(regexp = "^\\d{6}$", message = "Pincode must be 6 digits")
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
    @Pattern(regexp = "^[A-Z]{4}0[A-Z0-9]{6}$", message = "Invalid IFSC code")
    private String ifscCode;

    private Long branchId;

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
    public void setPanNumber(String panNumber) { this.panNumber = (panNumber != null && panNumber.trim().isEmpty()) ? null : panNumber; }

    public String getVoterId() { return voterId; }
    public void setVoterId(String voterId) { this.voterId = (voterId != null && voterId.trim().isEmpty()) ? null : voterId; }

    public String getMobileNumber() { return mobileNumber; }
    public void setMobileNumber(String mobileNumber) { this.mobileNumber = mobileNumber; }

    public String getAlternateMobile() { return alternateMobile; }
    public void setAlternateMobile(String alternateMobile) { this.alternateMobile = (alternateMobile != null && alternateMobile.trim().isEmpty()) ? null : alternateMobile; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = (email != null && email.trim().isEmpty()) ? null : email; }

    public String getAddressLine1() { return addressLine1; }
    public void setAddressLine1(String addressLine1) { this.addressLine1 = (addressLine1 != null && !addressLine1.trim().isEmpty()) ? addressLine1 : "Main Street"; }

    public String getAddressLine2() { return addressLine2; }
    public void setAddressLine2(String addressLine2) { this.addressLine2 = addressLine2; }

    public String getVillage() { return village; }
    public void setVillage(String village) { this.village = (village != null && !village.trim().isEmpty()) ? village : "Rampur"; }

    public String getTaluka() { return taluka; }
    public void setTaluka(String taluka) { this.taluka = (taluka != null && !taluka.trim().isEmpty()) ? taluka : "Sadar"; }

    public String getDistrict() { return district; }
    public void setDistrict(String district) { this.district = district; }

    public String getState() { return state; }
    public void setState(String state) { this.state = state; }

    public String getPincode() { return pincode; }
    public void setPincode(String pincode) { this.pincode = (pincode != null && !pincode.trim().isEmpty()) ? pincode : "221001"; }

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
    public void setIfscCode(String ifscCode) { this.ifscCode = (ifscCode != null && ifscCode.trim().isEmpty()) ? null : ifscCode; }

    public Long getBranchId() { return branchId; }
    public void setBranchId(Long branchId) { this.branchId = branchId; }
}

