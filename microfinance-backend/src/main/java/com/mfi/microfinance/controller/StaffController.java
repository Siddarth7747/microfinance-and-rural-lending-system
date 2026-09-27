package com.mfi.microfinance.controller;

import com.mfi.microfinance.service.IncentiveCalculationService;
import com.mfi.microfinance.service.StaffPerformanceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.Map;

@RestController
@RequestMapping("/api/staff")
@RequiredArgsConstructor
public class StaffController {

    private final StaffPerformanceService performanceService;
    private final IncentiveCalculationService incentiveService;

    @GetMapping("/performance/{officerName}")
    public ResponseEntity<Map<String, Object>> getPerformance(@PathVariable String officerName) {
        return ResponseEntity.ok(performanceService.getOfficerPerformance(officerName));
    }

    @GetMapping("/incentive")
    public ResponseEntity<BigDecimal> calculateIncentive(
            @RequestParam String officerName,
            @RequestParam BigDecimal totalCollected,
            @RequestParam double collectionRate) {
        return ResponseEntity.ok(incentiveService.calculateMonthlyIncentive(officerName, totalCollected, collectionRate));
    }
}
