package com.mfi.microfinance.controller;

import com.mfi.microfinance.dto.response.ParReportResponse;
import com.mfi.microfinance.entity.Loan;
import com.mfi.microfinance.service.DelinquencyService;
import com.mfi.microfinance.service.NpaClassificationService;
import com.mfi.microfinance.service.RestructuringService;
import com.mfi.microfinance.service.WriteOffRecoveryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/delinquency")
@RequiredArgsConstructor
public class DelinquencyController {

    private final DelinquencyService delinquencyService;
    private final NpaClassificationService npaClassificationService;
    private final RestructuringService restructuringService;
    private final WriteOffRecoveryService writeOffRecoveryService;

    @GetMapping("/par-report")
    public ResponseEntity<ParReportResponse> getParReport(@RequestParam(required = false) Long branchId) {
        return ResponseEntity.ok(delinquencyService.generateParReport(branchId));
    }

    @PostMapping("/recalculate")
    public ResponseEntity<String> recalculateDpd() {
        delinquencyService.updateAllLoansDpd();
        npaClassificationService.classifyNpaLoans();
        return ResponseEntity.ok("DPD and NPA classification updated successfully");
    }

    @PostMapping("/loans/{id}/restructure")
    public ResponseEntity<Loan> restructureLoan(@PathVariable Long id, @RequestBody Map<String, Object> body) {
        int months = (Integer) body.get("additionalTenureMonths");
        String reason = (String) body.get("reason");
        return ResponseEntity.ok(restructuringService.restructureLoan(id, months, reason));
    }

    @PostMapping("/loans/{id}/write-off")
    public ResponseEntity<Loan> writeOffLoan(@PathVariable Long id, @RequestBody Map<String, String> body) {
        return ResponseEntity.ok(writeOffRecoveryService.writeOffLoan(id, body.get("reason")));
    }
}
