package com.mfi.microfinance.integration.bureau;

import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;

@Component
public class ExperianClient {

    public Map<String, Object> fetchExperianReport(String aadhaarNumber, String panNumber) {
        Map<String, Object> report = new HashMap<>();
        report.put("bureau", "EXPERIAN");
        report.put("score", 730);
        report.put("activeLoansCount", 1);
        report.put("totalOutstanding", new BigDecimal("15000"));
        return report;
    }
}
