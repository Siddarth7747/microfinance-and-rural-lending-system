package com.mfi.microfinance.dto.request;

import lombok.*;

import java.util.List;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class OfflineSyncBatchRequest {

    private List<RepaymentRequest> repayments;
    private List<BorrowerRegistrationRequest> newBorrowers;
    private String deviceId;
    private String syncTimestamp;
    private String fieldOfficerUsername;

    public List<RepaymentRequest> getRepayments() { return repayments; }
    public void setRepayments(List<RepaymentRequest> repayments) { this.repayments = repayments; }

    public List<BorrowerRegistrationRequest> getNewBorrowers() { return newBorrowers; }
    public void setNewBorrowers(List<BorrowerRegistrationRequest> newBorrowers) { this.newBorrowers = newBorrowers; }

    public String getDeviceId() { return deviceId; }
    public void setDeviceId(String deviceId) { this.deviceId = deviceId; }

    public String getSyncTimestamp() { return syncTimestamp; }
    public void setSyncTimestamp(String syncTimestamp) { this.syncTimestamp = syncTimestamp; }

    public String getFieldOfficerUsername() { return fieldOfficerUsername; }
    public void setFieldOfficerUsername(String fieldOfficerUsername) { this.fieldOfficerUsername = fieldOfficerUsername; }
}

