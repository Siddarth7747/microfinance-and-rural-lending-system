package com.mfi.microfinance.controller;

import com.mfi.microfinance.dto.request.OfflineSyncBatchRequest;
import com.mfi.microfinance.service.OfflineSyncService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/offline-sync")
@RequiredArgsConstructor
public class OfflineSyncController {

    private final OfflineSyncService offlineSyncService;

    @PostMapping("/batch")
    public ResponseEntity<Map<String, Object>> syncBatch(@RequestBody OfflineSyncBatchRequest request) {
        return ResponseEntity.ok(offlineSyncService.syncBatch(request));
    }
}
