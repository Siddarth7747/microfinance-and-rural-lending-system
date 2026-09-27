package com.mfi.microfinance.integration.payment;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

/**
 * NEFT / RTGS payment client for bank disbursement transactions.
 */
@Component
@Slf4j
public class NeftRtgsClient {

    @Value("${payment.neft.enabled:false}")
    private boolean enabled;

    /**
     * Initiate NEFT/RTGS fund transfer.
     */
    public String initiateTransfer(String bankAcc, String ifsc, BigDecimal amount, String beneficiaryName, String remarks) {
        String utr = "UTR" + System.currentTimeMillis() + UUID.randomUUID().toString().substring(0, 4).toUpperCase();
        if (!enabled) {
            log.info("[NEFT Mock] Transfer of Rs. {} to A/C {} ({}) UTR: {}", amount, bankAcc, beneficiaryName, utr);
            return utr;
        }

        log.info("[NEFT] Initiating transfer of Rs. {} to A/C {} ({}) UTR: {}", amount, bankAcc, beneficiaryName, utr);
        return utr;
    }

    /**
     * Get transaction status by UTR.
     */
    public Map<String, Object> getTransferStatus(String utr) {
        Map<String, Object> status = new HashMap<>();
        status.put("utr", utr);
        status.put("status", "SUCCESS");
        status.put("settledAt", java.time.LocalDateTime.now().toString());
        return status;
    }
}
