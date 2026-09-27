package com.mfi.microfinance.integration.aadhaar;

import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
public class AadhaarEkycClient {

    public Map<String, Object> performEkyc(String aadhaarNumber, String otp) {
        Map<String, Object> result = new HashMap<>();
        result.put("status", "SUCCESS");
        result.put("aadhaarNumber", aadhaarNumber);
        result.put("name", "MOCK AADHAAR HOLDER");
        result.put("dob", "1990-05-15");
        result.put("gender", "F");
        result.put("address", "Village Rampur, District Varanasi, UP - 221001");
        result.put("photoUrl", "https://via.placeholder.com/150");
        return result;
    }
}
