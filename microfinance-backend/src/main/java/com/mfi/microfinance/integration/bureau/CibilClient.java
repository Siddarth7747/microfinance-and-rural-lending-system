package com.mfi.microfinance.integration.bureau;

import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;

@Component
public class CibilClient {

    public Map<String, Object> fetchCibilReport(String aadhaarNumber, String panNumber) {
        Map<String, Object> report = new HashMap<>();
        report.put("bureau", "CIBIL");
        report.put("score", 725);
        report.put("activeLoansCount", 1);
        report.put("totalOutstanding", new BigDecimal("15000"));
        report.put("overdueCount", 0);
        return report;
    }
}
