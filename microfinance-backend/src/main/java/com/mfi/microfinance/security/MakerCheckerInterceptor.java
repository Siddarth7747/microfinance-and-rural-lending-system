package com.mfi.microfinance.security;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

@Component
public class MakerCheckerInterceptor implements HandlerInterceptor {

    private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(MakerCheckerInterceptor.class);

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        // Maker-Checker pattern: For sensitive operations (loan approval, disbursement),
        // ensure the approver is different from the maker (creator).
        // This is enforced at the service layer via business logic checks.
        // The interceptor logs all maker-checker relevant operations for audit.
        String method = request.getMethod();
        String uri = request.getRequestURI();

        if (isMakerCheckerOperation(method, uri)) {
            log.info("Maker-Checker operation detected: {} {} by user: {}",
                    method, uri, request.getUserPrincipal() != null ? request.getUserPrincipal().getName() : "anonymous");
        }

        return true;
    }

    private boolean isMakerCheckerOperation(String method, String uri) {
        if (!"PUT".equals(method) && !"POST".equals(method)) return false;
        return uri.contains("/approve") || uri.contains("/reject") ||
               uri.contains("/disburse") || uri.contains("/write-off") ||
               uri.contains("/restructure");
    }
}
