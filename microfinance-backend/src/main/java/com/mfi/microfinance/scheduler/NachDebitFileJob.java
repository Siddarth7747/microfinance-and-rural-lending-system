package com.mfi.microfinance.scheduler;

import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class NachDebitFileJob {

    private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(NachDebitFileJob.class);

    @Scheduled(cron = "0 30 6 * * ?") // Daily at 6:30 AM
    public void execute() {
        log.info("Generating NACH auto-debit file for NPCI clearing...");
    }
}
