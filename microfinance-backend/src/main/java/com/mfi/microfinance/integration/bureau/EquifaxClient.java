package com.mfi.microfinance.integration.bureau;

import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;

@Component
public class EquifaxClient {

    public Map<String, Object> fetchEquifaxReport(String aadhaarNumber, String panNumber) {
        Map<String, Object> report = new HashMap<>();
        report.put("bureau", "EQUIFAX");
        report.put("score", 710);
        report.put("activeLoansCount", 1);
        report.put("totalOutstanding", new BigDecimal("15000"));
        return report;
    }
}
