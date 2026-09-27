package com.mfi.microfinance.validation;

public class MobileNumberValidator {
    public static boolean isValidMobile(String mobile) {
        if (mobile == null) return false;
        return mobile.matches("^[6-9]\\d{9}$");
    }
}
