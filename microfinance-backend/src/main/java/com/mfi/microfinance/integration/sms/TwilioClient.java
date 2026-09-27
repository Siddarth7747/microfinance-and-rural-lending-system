package com.mfi.microfinance.integration.sms;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

/**
 * Twilio SMS gateway client using REST API (without Twilio SDK dependency).
 * Supports sending transactional SMS via Twilio's Messages API.
 */
@Component
@Slf4j
public class TwilioClient {

    @Value("${twilio.account.sid:mock-account-sid}")
    private String accountSid;

    @Value("${twilio.auth.token:mock-auth-token}")
    private String authToken;

    @Value("${twilio.from.number:+15555555555}")
    private String fromNumber;

    @Value("${twilio.enabled:false}")
    private boolean enabled;

    private final RestTemplate restTemplate = new RestTemplate();

    /**
     * Send SMS via Twilio Messages API.
     *
     * @param toNumber Destination mobile number (with country code)
     * @param message  SMS body content
     * @return true if message was sent successfully
     */
    public boolean sendSms(String toNumber, String message) {
        if (!enabled) {
            log.info("[Twilio Mock] SMS to {}: {}", toNumber, message);
            return true;
        }

        try {
            // Format number with country code if not present
            String formattedTo = toNumber.startsWith("+") ? toNumber : "+91" + toNumber;

            String url = "https://api.twilio.com/2010-04-01/Accounts/" + accountSid + "/Messages.json";

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
            String credentials = accountSid + ":" + authToken;
            headers.set("Authorization", "Basic " + Base64.getEncoder().encodeToString(credentials.getBytes()));

            String body = "To=" + formattedTo + "&From=" + fromNumber + "&Body=" + message;

            HttpEntity<String> request = new HttpEntity<>(body, headers);
            ResponseEntity<String> response = restTemplate.postForEntity(url, request, String.class);

            boolean success = response.getStatusCode().is2xxSuccessful();
            log.info("[Twilio] SMS to {} status: {}", toNumber, response.getStatusCode());
            return success;

        } catch (Exception e) {
            log.error("[Twilio] Failed to send SMS to {}: {}", toNumber, e.getMessage());
            return false;
        }
    }
}
