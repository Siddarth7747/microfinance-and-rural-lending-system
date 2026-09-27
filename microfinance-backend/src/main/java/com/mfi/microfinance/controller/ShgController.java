package com.mfi.microfinance.controller;

import com.mfi.microfinance.entity.LoanGroup;
import com.mfi.microfinance.service.ShgGradingService;
import com.mfi.microfinance.service.ShgService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/shg")
@RequiredArgsConstructor
public class ShgController {

    private final ShgService shgService;
    private final ShgGradingService shgGradingService;

    @GetMapping
    public ResponseEntity<List<LoanGroup>> getAllShgs() {
        return ResponseEntity.ok(shgService.getAllShgs());
    }

    @GetMapping("/{id}/grade")
    public ResponseEntity<String> getShgGrade(@PathVariable Long id) {
        return ResponseEntity.ok(shgGradingService.gradeShgGroup(id));
    }
}
