package com.mfi.microfinance.integration.sms;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

/**
 * Msg91 SMS gateway client for sending transactional SMS messages.
 * Supports templated SMS with DLT-registered template IDs.
 */
@Component
@Slf4j
public class Msg91Client {

    @Value("${msg91.auth.key:mock-auth-key}")
    private String authKey;

    @Value("${msg91.sender.id:MFISVC}")
    private String senderId;

    @Value("${msg91.base.url:https://api.msg91.com/api/v5}")
    private String baseUrl;

    @Value("${msg91.enabled:false}")
    private boolean enabled;

    private final RestTemplate restTemplate = new RestTemplate();

    /**
     * Send SMS via Msg91 API.
     *
     * @param mobile     10-digit mobile number
     * @param templateId DLT-registered template ID
     * @param message    SMS body
     * @return true if sent successfully
     */
    public boolean sendSms(String mobile, String templateId, String message) {
        if (!enabled) {
            log.info("[Msg91 Mock] SMS to {}: {}", mobile, message);
            return true;
        }

        try {
            String url = baseUrl + "/flow/";

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            headers.set("authkey", authKey);

            Map<String, Object> body = new HashMap<>();
            body.put("template_id", templateId);
            body.put("short_url", "0");
            body.put("recipients", new Object[]{
                    Map.of("mobiles", "91" + mobile, "message", message)
            });

            HttpEntity<Map<String, Object>> request = new HttpEntity<>(body, headers);
            ResponseEntity<String> response = restTemplate.postForEntity(url, request, String.class);

            boolean success = response.getStatusCode().is2xxSuccessful();
            log.info("[Msg91] SMS to {} status: {} response: {}", mobile, response.getStatusCode(), response.getBody());
            return success;

        } catch (Exception e) {
            log.error("[Msg91] Failed to send SMS to {}: {}", mobile, e.getMessage());
            return false;
        }
    }

    /**
     * Send OTP via Msg91 OTP API.
     */
    public boolean sendOtp(String mobile, String otp) {
        if (!enabled) {
            log.info("[Msg91 Mock] OTP {} to {}", otp, mobile);
            return true;
        }

        try {
            String url = baseUrl + "/otp?authkey=" + authKey + "&mobile=91" + mobile
                    + "&otp=" + otp + "&sender=" + senderId;

            ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
            return response.getStatusCode().is2xxSuccessful();
        } catch (Exception e) {
            log.error("[Msg91] OTP send failed for {}: {}", mobile, e.getMessage());
            return false;
        }
    }
}
