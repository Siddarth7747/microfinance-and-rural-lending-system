package com.mfi.microfinance.integration.bureau;

import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class BureauCacheService {

    private final Map<String, Map<String, Object>> cache = new ConcurrentHashMap<>();

    public void cacheReport(String aadhaar, Map<String, Object> report) {
        cache.put(aadhaar, report);
    }

    public Map<String, Object> getCachedReport(String aadhaar) {
        return cache.get(aadhaar);
    }

    public void clearExpiredCache() {
        cache.clear();
    }
}
