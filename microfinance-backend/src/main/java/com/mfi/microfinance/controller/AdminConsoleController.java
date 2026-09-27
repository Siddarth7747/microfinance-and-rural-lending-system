package com.mfi.microfinance.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
public class AdminConsoleController {

    @GetMapping("/system-status")
    public ResponseEntity<Map<String, Object>> getSystemStatus() {
        Map<String, Object> status = new HashMap<>();
        status.put("status", "HEALTHY");
        status.put("activeDatabase", "H2 (Dev) / PostgreSQL (Prod)");
        status.put("version", "1.0.0-SNAPSHOT");
        status.put("uptime", "Running");
        return ResponseEntity.ok(status);
    }
}
