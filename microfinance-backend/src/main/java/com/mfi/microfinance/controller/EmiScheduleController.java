package com.mfi.microfinance.controller;

import com.mfi.microfinance.entity.EmiSchedule;
import com.mfi.microfinance.service.EmiScheduleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/emi-schedules")
@RequiredArgsConstructor
public class EmiScheduleController {

    private final EmiScheduleService emiScheduleService;

    @GetMapping("/loan/{loanId}")
    public ResponseEntity<List<EmiSchedule>> getScheduleByLoanId(@PathVariable Long loanId) {
        return ResponseEntity.ok(emiScheduleService.getScheduleByLoanId(loanId));
    }
}
