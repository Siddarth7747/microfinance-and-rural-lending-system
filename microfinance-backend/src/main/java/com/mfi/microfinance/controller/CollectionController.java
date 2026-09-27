package com.mfi.microfinance.controller;

import com.mfi.microfinance.dto.response.CollectionSheetResponse;
import com.mfi.microfinance.service.CollectionService;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@RestController
@RequestMapping("/api/collections")
@RequiredArgsConstructor
public class CollectionController {

    private final CollectionService collectionService;

    @GetMapping("/sheet")
    public ResponseEntity<CollectionSheetResponse> getCollectionSheet(
            @RequestParam Long branchId,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date) {
        if (date == null) date = LocalDate.now();
        return ResponseEntity.ok(collectionService.generateCollectionSheet(branchId, date));
    }
}
