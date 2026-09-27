package com.mfi.microfinance.util;

import java.io.ByteArrayOutputStream;
import java.nio.charset.StandardCharsets;
import java.util.List;

public class FileExportUtil {

    public static byte[] exportToCsv(List<String> headers, List<List<String>> rows) {
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        StringBuilder sb = new StringBuilder();

        sb.append(String.join(",", headers)).append("\n");
        for (List<String> row : rows) {
            sb.append(String.join(",", row)).append("\n");
        }

        try {
            out.write(sb.toString().getBytes(StandardCharsets.UTF_8));
        } catch (Exception e) {
            throw new RuntimeException("CSV Export Error", e);
        }
        return out.toByteArray();
    }
}
