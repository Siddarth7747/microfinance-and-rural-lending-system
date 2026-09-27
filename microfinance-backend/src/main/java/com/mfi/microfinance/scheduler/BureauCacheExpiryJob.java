package com.mfi.microfinance.scheduler;

import com.mfi.microfinance.integration.bureau.BureauCacheService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class BureauCacheExpiryJob {

    private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(BureauCacheExpiryJob.class);

    private final BureauCacheService bureauCacheService;

    @Scheduled(cron = "0 0 2 * * ?") // Daily at 2:00 AM
    public void execute() {
        log.info("Flushing expired credit bureau cached responses...");
        bureauCacheService.clearExpiredCache();
    }
}
