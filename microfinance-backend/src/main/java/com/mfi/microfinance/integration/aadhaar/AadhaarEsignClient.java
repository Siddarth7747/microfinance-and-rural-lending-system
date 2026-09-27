package com.mfi.microfinance.integration.aadhaar;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

/**
 * Aadhaar eSign gateway client for digitally signing loan agreements.
 * Integrates with UIDAI-approved eSign Service Providers (ESP).
 */
@Component
@Slf4j
public class AadhaarEsignClient {

    @Value("${aadhaar.esign.base.url:https://esign.gateway.gov.in/api}")
    private String baseUrl;

    @Value("${aadhaar.esign.asp.id:mock-asp-id}")
    private String aspId;

    @Value("${aadhaar.esign.enabled:false}")
    private boolean enabled;

    /**
     * Generate an eSign URL for signing a document.
     *
     * @param documentId    Internal document identifier
     * @param aadhaarNumber Signer's 12-digit Aadhaar number
     * @return eSign redirect URL or mock URL in development
     */
    public String generateEsignUrl(String documentId, String aadhaarNumber) {
        String txnId = "ESIGN-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase();

        if (!enabled) {
            String mockUrl = baseUrl + "/mock-sign?docId=" + documentId + "&txnId=" + txnId;
            log.info("[Aadhaar eSign Mock] Generated eSign URL for doc {} txn {}", documentId, txnId);
            return mockUrl;
        }

        log.info("[Aadhaar eSign] Generating eSign URL for doc {} aadhaar {}****", documentId,
                aadhaarNumber != null ? aadhaarNumber.substring(0, 4) : "XXXX");

        // In production: POST to ESP API with document hash, redirect URL, ASP credentials
        return baseUrl + "/esign/init?aspId=" + aspId + "&docId=" + documentId + "&txnId=" + txnId;
    }

    /**
     * Verify the status of an eSign transaction.
     */
    public Map<String, Object> verifyEsignStatus(String transactionId) {
        Map<String, Object> status = new HashMap<>();
        status.put("transactionId", transactionId);

        if (!enabled) {
            status.put("status", "SIGNED");
            status.put("signedAt", java.time.LocalDateTime.now().toString());
            status.put("signatureValid", true);
            return status;
        }

        // In production: GET status from ESP API
        status.put("status", "PENDING");
        return status;
    }

    /**
     * Download the signed document PDF.
     */
    public byte[] downloadSignedDocument(String transactionId) {
        log.info("[Aadhaar eSign] Downloading signed doc for txn {}", transactionId);
        // In production: retrieve signed PDF from ESP
        return new byte[0]; // Placeholder
    }
}
