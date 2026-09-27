package com.mfi.microfinance.service;

import com.mfi.microfinance.integration.sms.Msg91Client;
import com.mfi.microfinance.integration.sms.TwilioClient;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.security.SecureRandom;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Notification service for sending SMS/OTP alerts to borrowers and staff.
 * Supports OTP generation/validation, repayment reminders, overdue notices,
 * and disbursement confirmations via Msg91 or Twilio providers.
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class NotificationService {

    private final Msg91Client msg91Client;
    private final TwilioClient twilioClient;

    @Value("${notification.sms.provider:msg91}")
    private String smsProvider;

    // In-memory OTP store (use Redis in production)
    private final Map<String, String> otpStore = new ConcurrentHashMap<>();
    private final SecureRandom secureRandom = new SecureRandom();

    /**
     * Generate and send OTP to mobile number.
     */
    public boolean sendOtp(String mobileNumber, String borrowerName) {
        String otp = String.format("%06d", secureRandom.nextInt(999999));
        otpStore.put(mobileNumber, otp);

        String message = loadTemplate("otp.txt")
                .replace("{borrowerName}", borrowerName != null ? borrowerName : "Customer")
                .replace("{otp}", otp);

        log.info("[OTP] Generated OTP {} for mobile {}", otp, mobileNumber);
        return sendSms(mobileNumber, message);
    }

    /**
     * Validate OTP for a mobile number.
     */
    public boolean validateOtp(String mobileNumber, String otp) {
        String storedOtp = otpStore.get(mobileNumber);
        if (storedOtp != null && storedOtp.equals(otp)) {
            otpStore.remove(mobileNumber);
            return true;
        }
        return false;
    }

    /**
     * Send repayment reminder SMS.
     */
    public boolean sendRepaymentReminder(String mobileNumber, String borrowerName,
                                          String emiAmount, String loanAccountNumber, String dueDate) {
        String message = loadTemplate("repayment_reminder.txt")
                .replace("{borrowerName}", borrowerName)
                .replace("{emiAmount}", emiAmount)
                .replace("{loanAccountNumber}", loanAccountNumber)
                .replace("{dueDate}", dueDate);

        log.info("[SMS Reminder] Sending to {} for loan {}", mobileNumber, loanAccountNumber);
        return sendSms(mobileNumber, message);
    }

    /**
     * Send overdue notice SMS.
     */
    public boolean sendOverdueNotice(String mobileNumber, String borrowerName, String emiAmount,
                                      String loanAccountNumber, int dpdDays,
                                      String officerName, String officerMobile) {
        String message = loadTemplate("overdue_notice.txt")
                .replace("{borrowerName}", borrowerName)
                .replace("{emiAmount}", emiAmount)
                .replace("{loanAccountNumber}", loanAccountNumber)
                .replace("{dpdDays}", String.valueOf(dpdDays))
                .replace("{officerName}", officerName != null ? officerName : "your branch")
                .replace("{officerMobile}", officerMobile != null ? officerMobile : "");

        log.info("[SMS Overdue] Sending overdue notice to {} DPD={}", mobileNumber, dpdDays);
        return sendSms(mobileNumber, message);
    }

    /**
     * Send disbursement confirmation SMS.
     */
    public boolean sendDisbursementAlert(String mobileNumber, String borrowerName, String amount,
                                          String bankAccount, String loanAccountNumber,
                                          String emiAmount, String firstEmiDate) {
        String message = loadTemplate("disbursement_confirmation.txt")
                .replace("{borrowerName}", borrowerName)
                .replace("{amount}", amount)
                .replace("{bankAccount}", maskBankAccount(bankAccount))
                .replace("{loanAccountNumber}", loanAccountNumber)
                .replace("{emiAmount}", emiAmount)
                .replace("{firstEmiDate}", firstEmiDate);

        log.info("[SMS Disbursement] Confirmation sent to {} for loan {}", mobileNumber, loanAccountNumber);
        return sendSms(mobileNumber, message);
    }

    /**
     * Send SMS via the configured provider (Msg91 or Twilio).
     */
    private boolean sendSms(String mobileNumber, String message) {
        try {
            if ("twilio".equalsIgnoreCase(smsProvider)) {
                return twilioClient.sendSms(mobileNumber, message);
            } else {
                return msg91Client.sendSms(mobileNumber, "default", message);
            }
        } catch (Exception e) {
            log.error("Failed to send SMS to {}: {}", mobileNumber, e.getMessage());
            return false;
        }
    }

    /**
     * Load SMS template from classpath resources.
     */
    private String loadTemplate(String templateName) {
        try {
            ClassPathResource resource = new ClassPathResource("templates/sms-templates/" + templateName);
            return new String(resource.getInputStream().readAllBytes(), StandardCharsets.UTF_8).trim();
        } catch (IOException e) {
            log.warn("SMS template '{}' not found, using default message", templateName);
            return "MFI Services notification";
        }
    }

    /**
     * Mask bank account number for security (show last 4 digits only).
     */
    private String maskBankAccount(String account) {
        if (account == null || account.length() <= 4) return account;
        return "XXXX" + account.substring(account.length() - 4);
    }
}
