package com.mfi.microfinance.service;

import com.mfi.microfinance.entity.Loan;
import com.mfi.microfinance.entity.enums.InterestMethod;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.math.BigDecimal;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class InterestCalculationServiceTest {

    @Autowired
    private InterestCalculationService interestService;

    @Test
    public void testCalculateReducingEmi() {
        BigDecimal principal = new BigDecimal("30000");
        BigDecimal annualRate = new BigDecimal("18.0");
        int tenureMonths = 12;

        BigDecimal emi = interestService.calculateEmi(principal, annualRate, tenureMonths, InterestMethod.REDUCING_BALANCE);
        assertNotNull(emi);
        assertTrue(emi.compareTo(BigDecimal.ZERO) > 0);
    }

    @Test
    public void testCalculateDailyInterest() {
        BigDecimal principal = new BigDecimal("10000");
        BigDecimal annualRate = new BigDecimal("12.0");

        BigDecimal dailyInterest = interestService.calculateDailyInterest(principal, annualRate);
        assertNotNull(dailyInterest);
        assertTrue(dailyInterest.compareTo(BigDecimal.ZERO) > 0);
    }
}
