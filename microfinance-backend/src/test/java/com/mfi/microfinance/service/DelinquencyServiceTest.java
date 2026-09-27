package com.mfi.microfinance.service;

import com.mfi.microfinance.dto.response.ParReportResponse;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class DelinquencyServiceTest {

    @Autowired
    private DelinquencyService delinquencyService;

    @Test
    public void testGenerateParReport() {
        ParReportResponse report = delinquencyService.generateParReport(1L);
        assertNotNull(report);
        assertNotNull(report.getParBuckets());
    }
}
