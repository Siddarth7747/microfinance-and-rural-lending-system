package com.mfi.microfinance.scheduler;

import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class SmsReminderJob {

    private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(SmsReminderJob.class);

    @Scheduled(cron = "0 0 9 * * ?") // Daily at 9:00 AM
    public void execute() {
        log.info("Sending upcoming EMI payment SMS reminders...");
    }
}
