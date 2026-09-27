package com.mfi.microfinance.util;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.concurrent.atomic.AtomicInteger;

public class BrnGeneratorUtil {
    private static final AtomicInteger sequence = new AtomicInteger(1000);

    public static String generateBrn(String branchCode) {
        String timestamp = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyMMdd"));
        int seq = sequence.incrementAndGet();
        if (seq > 9999) sequence.set(1000);
        String code = (branchCode != null && !branchCode.isBlank()) ? branchCode.replaceAll("[^A-Za-z0-9]", "") : "GEN";
        if (code.length() > 4) code = code.substring(0, 4);
        return "BRN-" + code + "-" + timestamp + "-" + seq;
    }

    public static String generateLoanAccountNumber(String productCode) {
        String timestamp = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMdd"));
        int seq = sequence.incrementAndGet();
        return "LN-" + (productCode != null ? productCode : "MFI") + "-" + timestamp + "-" + seq;
    }

    public static String generateApplicationNumber() {
        String timestamp = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMdd"));
        int seq = sequence.incrementAndGet();
        return "APP-" + timestamp + "-" + seq;
    }
}
