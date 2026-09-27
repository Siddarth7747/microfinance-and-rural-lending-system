package com.mfi.microfinance.integration;

import com.mfi.microfinance.integration.aadhaar.AadhaarEkycClient;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class AadhaarEkycIntegrationTest {

    @Autowired
    private AadhaarEkycClient aadhaarClient;

    @Test
    public void testVerifyAadhaarOtp() {
        assertNotNull(aadhaarClient);
    }
}
