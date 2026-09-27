package com.mfi.microfinance.integration;

import com.mfi.microfinance.integration.bureau.CibilClient;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class CibilBureauIntegrationTest {

    @Autowired
    private CibilClient cibilClient;

    @Test
    public void testFetchCibilScore() {
        assertNotNull(cibilClient);
    }
}
