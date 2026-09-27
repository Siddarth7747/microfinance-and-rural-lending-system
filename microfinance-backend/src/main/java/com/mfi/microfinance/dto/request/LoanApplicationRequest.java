package com.mfi.microfinance.dto.request;

import jakarta.validation.constraints.*;
import lombok.*;

import java.math.BigDecimal;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class LoanApplicationRequest {

    @NotNull(message = "Borrower ID is required")
    private Long borrowerId;

    @NotNull(message = "Loan product ID is required")
    private Long loanProductId;

    private Long loanGroupId;

    @NotNull(message = "Requested amount is required")
    @DecimalMin(value = "1000", message = "Minimum loan amount is 1000")
    private BigDecimal requestedAmount;

    @NotNull(message = "Requested tenure is required")
    @Min(value = 1, message = "Minimum tenure is 1 month")
    private Integer requestedTenureMonths;

    @NotBlank(message = "Loan purpose is required")
    @Size(max = 255)
    private String loanPurpose;

    private Long branchId;

    public Long getBorrowerId() { return borrowerId; }
    public void setBorrowerId(Long borrowerId) { this.borrowerId = borrowerId; }

    public Long getLoanProductId() { return loanProductId; }
    public void setLoanProductId(Long loanProductId) { this.loanProductId = loanProductId; }

    public Long getLoanGroupId() { return loanGroupId; }
    public void setLoanGroupId(Long loanGroupId) { this.loanGroupId = loanGroupId; }

    public BigDecimal getRequestedAmount() { return requestedAmount; }
    public void setRequestedAmount(BigDecimal requestedAmount) { this.requestedAmount = requestedAmount; }

    public Integer getRequestedTenureMonths() { return requestedTenureMonths; }
    public void setRequestedTenureMonths(Integer requestedTenureMonths) { this.requestedTenureMonths = requestedTenureMonths; }

    public String getLoanPurpose() { return loanPurpose; }
    public void setLoanPurpose(String loanPurpose) { this.loanPurpose = loanPurpose; }

    public Long getBranchId() { return branchId; }
    public void setBranchId(Long branchId) { this.branchId = branchId; }
}

