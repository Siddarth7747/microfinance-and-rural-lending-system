package com.mfi.microfinance.exception;

import com.mfi.microfinance.dto.response.ApiErrorResponse;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiErrorResponse> handleValidation(MethodArgumentNotValidException ex, HttpServletRequest request) {
        Map<String, String> fieldErrors = new HashMap<>();
        for (FieldError error : ex.getBindingResult().getFieldErrors()) {
            fieldErrors.put(error.getField(), error.getDefaultMessage());
        }
        return ResponseEntity.badRequest().body(ApiErrorResponse.builder()
                .type("about:blank")
                .title("Validation Failed")
                .status(400)
                .detail("One or more fields have invalid values")
                .instance(request.getRequestURI())
                .timestamp(LocalDateTime.now())
                .fieldErrors(fieldErrors)
                .build());
    }

    @ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity<ApiErrorResponse> handleBadCredentials(BadCredentialsException ex, HttpServletRequest request) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(ApiErrorResponse.builder()
                .type("about:blank").title("Authentication Failed").status(401)
                .detail("Invalid username or password")
                .instance(request.getRequestURI()).timestamp(LocalDateTime.now()).build());
    }

    @ExceptionHandler(AccessDeniedException.class)
    public ResponseEntity<ApiErrorResponse> handleAccessDenied(AccessDeniedException ex, HttpServletRequest request) {
        return ResponseEntity.status(HttpStatus.FORBIDDEN).body(ApiErrorResponse.builder()
                .type("about:blank").title("Access Denied").status(403)
                .detail("You do not have permission to access this resource")
                .instance(request.getRequestURI()).timestamp(LocalDateTime.now()).build());
    }

    @ExceptionHandler(OverIndebtednessException.class)
    public ResponseEntity<ApiErrorResponse> handleOverIndebtedness(OverIndebtednessException ex, HttpServletRequest request) {
        return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(ApiErrorResponse.builder()
                .type("about:blank").title("Over-Indebtedness Check Failed").status(422)
                .detail(ex.getMessage()).instance(request.getRequestURI()).timestamp(LocalDateTime.now()).build());
    }

    @ExceptionHandler({InsufficientGroupSizeException.class, KycVerificationException.class,
                        LoanAlreadyDisbursedException.class, DisbursementFailedException.class,
                        OfflineSyncConflictException.class})
    public ResponseEntity<ApiErrorResponse> handleBusinessException(RuntimeException ex, HttpServletRequest request) {
        return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(ApiErrorResponse.builder()
                .type("about:blank").title("Business Rule Violation").status(422)
                .detail(ex.getMessage()).instance(request.getRequestURI()).timestamp(LocalDateTime.now()).build());
    }

    @ExceptionHandler(BureauApiTimeoutException.class)
    public ResponseEntity<ApiErrorResponse> handleBureauTimeout(BureauApiTimeoutException ex, HttpServletRequest request) {
        return ResponseEntity.status(HttpStatus.GATEWAY_TIMEOUT).body(ApiErrorResponse.builder()
                .type("about:blank").title("External Service Timeout").status(504)
                .detail(ex.getMessage()).instance(request.getRequestURI()).timestamp(LocalDateTime.now()).build());
    }

    @ExceptionHandler(org.springframework.http.converter.HttpMessageNotReadableException.class)
    public ResponseEntity<ApiErrorResponse> handleNotReadable(org.springframework.http.converter.HttpMessageNotReadableException ex, HttpServletRequest request) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ApiErrorResponse.builder()
                .type("about:blank").title("Invalid Payload Format").status(400)
                .detail("Invalid JSON payload or date format (expected YYYY-MM-DD)")
                .instance(request.getRequestURI()).timestamp(LocalDateTime.now()).build());
    }

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<ApiErrorResponse> handleRuntime(RuntimeException ex, HttpServletRequest request) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ApiErrorResponse.builder()
                .type("about:blank").title("Registration Error").status(400)
                .detail(ex.getMessage() != null ? ex.getMessage() : "Request could not be processed")
                .instance(request.getRequestURI()).timestamp(LocalDateTime.now()).build());
    }
}
