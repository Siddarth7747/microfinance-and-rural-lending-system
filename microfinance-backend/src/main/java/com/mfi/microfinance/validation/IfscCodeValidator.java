package com.mfi.microfinance.validation;

public class IfscCodeValidator {
    public static boolean isValidIfsc(String ifsc) {
        if (ifsc == null) return false;
        return ifsc.matches("^[A-Z]{4}0[A-Z0-9]{6}$");
    }
}
