package com.mfi.microfinance.controller;

import com.mfi.microfinance.service.RegulatoryReportService;
import com.mfi.microfinance.service.ReportGenerationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/reports")
@RequiredArgsConstructor
public class ReportController {

    private final ReportGenerationService reportGenerationService;
    private final RegulatoryReportService regulatoryReportService;

    @GetMapping("/portfolio/csv")
    public ResponseEntity<byte[]> exportPortfolioCsv() {
        byte[] csv = reportGenerationService.generateDailyPortfolioReportCsv();
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=portfolio_report.csv")
                .contentType(MediaType.parseMediaType("text/csv"))
                .body(csv);
    }

    @GetMapping("/rbi-psl")
    public ResponseEntity<Map<String, Object>> getRbiReport() {
        return ResponseEntity.ok(regulatoryReportService.generateRbiPrioritySectorReturn());
    }
}
