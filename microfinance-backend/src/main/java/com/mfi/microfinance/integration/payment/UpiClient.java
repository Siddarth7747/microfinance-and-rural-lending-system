package com.mfi.microfinance.integration.payment;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

/**
 * UPI integration client for push payouts and collect requests.
 */
@Component
@Slf4j
public class UpiClient {

    @Value("${payment.upi.enabled:false}")
    private boolean enabled;

    /**
     * Initiate UPI collect request.
     */
    public String initiateCollect(String upiId, BigDecimal amount, String remarks) {
        String txnRef = "UPI" + System.currentTimeMillis() + UUID.randomUUID().toString().substring(0, 4).toUpperCase();
        if (!enabled) {
            log.info("[UPI Mock] Collect request of Rs. {} from VPA {} TxnRef: {}", amount, upiId, txnRef);
            return txnRef;
        }

        log.info("[UPI] Collect request of Rs. {} from VPA {} TxnRef: {}", amount, upiId, txnRef);
        return txnRef;
    }

    /**
     * Verify UPI VPA address.
     */
    public boolean verifyVpa(String upiId) {
        return upiId != null && upiId.contains("@");
    }
}
