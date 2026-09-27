package com.mfi.microfinance.scheduler;

import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class DailyCollectionSheetJob {

    private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(DailyCollectionSheetJob.class);

    @Scheduled(cron = "0 0 5 * * ?") // Daily at 5:00 AM
    public void execute() {
        log.info("Generating daily collection sheets for all field officers...");
    }
}
