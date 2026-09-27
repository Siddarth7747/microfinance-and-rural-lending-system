package com.mfi.microfinance.service;

import com.mfi.microfinance.dto.request.OfflineSyncBatchRequest;
import com.mfi.microfinance.dto.request.RepaymentRequest;
import com.mfi.microfinance.repository.RepaymentTransactionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class OfflineSyncService {

    private final RepaymentService repaymentService;

    @Transactional
    public Map<String, Object> syncBatch(OfflineSyncBatchRequest request) {
        int syncedRepayments = 0;
        int failedRepayments = 0;

        if (request.getRepayments() != null) {
            for (RepaymentRequest rep : request.getRepayments()) {
                try {
                    rep.setIsOfflineEntry(true);
                    repaymentService.processRepayment(rep);
                    syncedRepayments++;
                } catch (Exception e) {
                    failedRepayments++;
                }
            }
        }

        Map<String, Object> result = new HashMap<>();
        result.put("status", "SUCCESS");
        result.put("syncedRepayments", syncedRepayments);
        result.put("failedRepayments", failedRepayments);
        result.put("deviceId", request.getDeviceId());
        return result;
    }
}
