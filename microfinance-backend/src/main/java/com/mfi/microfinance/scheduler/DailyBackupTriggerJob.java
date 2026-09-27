package com.mfi.microfinance.scheduler;

import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class DailyBackupTriggerJob {

    private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(DailyBackupTriggerJob.class);

    @Scheduled(cron = "0 0 3 * * ?") // Daily at 3:00 AM
    public void execute() {
        log.info("Triggering automated database backup snapshot...");
    }
}
