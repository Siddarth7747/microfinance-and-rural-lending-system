package com.mfi.microfinance.scheduler;

import com.mfi.microfinance.service.DelinquencyService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DailyDpdCalculationJob {

    private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(DailyDpdCalculationJob.class);

    private final DelinquencyService delinquencyService;

    @Scheduled(cron = "0 0 1 * * ?") // Daily at 1:00 AM
    public void execute() {
        log.info("Starting Daily DPD calculation job...");
        delinquencyService.updateAllLoansDpd();
        log.info("Daily DPD calculation completed.");
    }
}
