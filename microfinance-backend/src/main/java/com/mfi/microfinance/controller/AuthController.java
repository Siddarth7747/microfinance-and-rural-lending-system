package com.mfi.microfinance.controller;

import com.mfi.microfinance.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Set;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody Map<String, String> request) {
        return ResponseEntity.ok(authService.login(request.get("username"), request.get("password")));
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Map<String, Object> request) {
        String username = (String) request.get("username");
        String password = (String) request.get("password");
        String fullName = (String) request.get("fullName");
        String email = (String) request.get("email");
        String designation = (String) request.get("designation");
        @SuppressWarnings("unchecked")
        java.util.List<String> rolesList = (java.util.List<String>) request.get("roles");
        Set<String> roles = (rolesList != null && !rolesList.isEmpty()) ? new java.util.HashSet<>(rolesList) : Set.of("USER");
        return ResponseEntity.ok(authService.registerUser(username, password, fullName, email, designation, roles));
    }
}
