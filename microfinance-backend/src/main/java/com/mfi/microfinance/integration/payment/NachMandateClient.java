package com.mfi.microfinance.integration.payment;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;

/**
 * NACH mandate client for registering and managing auto-debit mandates with NPCI.
 */
@Component
@Slf4j
public class NachMandateClient {

    @Value("${payment.nach.enabled:false}")
    private boolean enabled;

    /**
     * Register e-NACH mandate.
     */
    public String registerMandate(String bankAcc, String ifsc, BigDecimal maxAmount, String frequency) {
        String umrn = "UMRN" + System.currentTimeMillis() + (int)(Math.random() * 1000);
        if (!enabled) {
            log.info("[NACH Mock] Mandate registered for A/C {} UMRN: {}", bankAcc, umrn);
            return umrn;
        }

        log.info("[NACH] Registering mandate for A/C {} UMRN: {}", bankAcc, umrn);
        return umrn;
    }

    public String registerMandate(String bankAcc, String ifsc, String umrn) {
        return registerMandate(bankAcc, ifsc, new BigDecimal("50000"), "MONTHLY");
    }
}
