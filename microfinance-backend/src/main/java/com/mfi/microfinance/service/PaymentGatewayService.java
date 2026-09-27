package com.mfi.microfinance.service;

import com.mfi.microfinance.integration.payment.NachMandateClient;
import com.mfi.microfinance.integration.payment.NeftRtgsClient;
import com.mfi.microfinance.integration.payment.PennyDropVerificationClient;
import com.mfi.microfinance.integration.payment.UpiClient;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;

/**
 * Orchestrates payment operations across multiple payment rails (NEFT, UPI, NACH).
 * Routes disbursements and collections based on payment mode.
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class PaymentGatewayService {

    private final NeftRtgsClient neftRtgsClient;
    private final UpiClient upiClient;
    private final NachMandateClient nachMandateClient;
    private final PennyDropVerificationClient pennyDropClient;

    /**
     * Verify bank account via penny drop before disbursement.
     */
    public boolean verifyPennyDrop(String bankAcc, String ifsc) {
        if (bankAcc == null || bankAcc.length() < 8 || ifsc == null || ifsc.length() != 11) {
            return false;
        }
        return pennyDropClient.verify(bankAcc, ifsc);
    }

    /**
     * Initiate a disbursement transfer via NEFT/RTGS.
     */
    public Map<String, Object> initiateNeftTransfer(String bankAccount, String ifscCode,
                                                      BigDecimal amount, String beneficiaryName, String remarks) {
        log.info("[NEFT] Initiating transfer of Rs. {} to A/C {} IFSC {}", amount, bankAccount, ifscCode);
        String utr = neftRtgsClient.initiateTransfer(bankAccount, ifscCode, amount, beneficiaryName, remarks);

        Map<String, Object> result = new HashMap<>();
        result.put("utr", utr);
        result.put("paymentMode", "NEFT");
        result.put("status", "INITIATED");
        result.put("amount", amount);
        result.put("beneficiaryAccount", bankAccount);
        return result;
    }

    /**
     * Initiate a UPI collect request for repayment.
     */
    public Map<String, Object> initiateUpiPayment(String upiId, BigDecimal amount, String remarks) {
        log.info("[UPI] Initiating collect request of Rs. {} to VPA {}", amount, upiId);
        String txnRef = upiClient.initiateCollect(upiId, amount, remarks);

        Map<String, Object> result = new HashMap<>();
        result.put("transactionRef", txnRef);
        result.put("paymentMode", "UPI");
        result.put("status", "PENDING");
        result.put("amount", amount);
        result.put("upiId", upiId);
        return result;
    }

    /**
     * Register an e-NACH auto-debit mandate for recurring EMI collection.
     */
    public Map<String, Object> registerNachMandate(String bankAccount, String ifscCode,
                                                     BigDecimal maxAmount, String frequency) {
        log.info("[NACH] Registering mandate for A/C {} max Rs. {} freq {}", bankAccount, maxAmount, frequency);
        String umrn = nachMandateClient.registerMandate(bankAccount, ifscCode, maxAmount, frequency);

        Map<String, Object> result = new HashMap<>();
        result.put("umrn", umrn);
        result.put("paymentMode", "NACH");
        result.put("status", "MANDATE_REGISTERED");
        result.put("maxDebitAmount", maxAmount);
        result.put("frequency", frequency);
        return result;
    }

    /**
     * Route disbursement to the appropriate payment rail based on mode.
     */
    public Map<String, Object> routeDisbursement(String paymentMode, String bankAccount, String ifscCode,
                                                   BigDecimal amount, String beneficiaryName) {
        return switch (paymentMode.toUpperCase()) {
            case "NEFT", "RTGS" -> initiateNeftTransfer(bankAccount, ifscCode, amount, beneficiaryName, "Loan Disbursement");
            case "UPI" -> initiateUpiPayment(bankAccount, amount, "Loan Disbursement");
            default -> {
                Map<String, Object> result = new HashMap<>();
                result.put("status", "CASH_DISBURSEMENT");
                result.put("amount", amount);
                result.put("paymentMode", "CASH");
                yield result;
            }
        };
    }

    /**
     * Check transaction status for a given UTR / transaction reference.
     */
    public Map<String, Object> checkTransactionStatus(String transactionRef, String paymentMode) {
        Map<String, Object> status = new HashMap<>();
        status.put("transactionRef", transactionRef);
        status.put("paymentMode", paymentMode);
        // In production, this would call the respective payment rail's status API
        status.put("status", "COMPLETED");
        status.put("message", "Transaction processed successfully");
        return status;
    }
}
