package com.mfi.microfinance.config;

import com.mfi.microfinance.entity.User;
import com.mfi.microfinance.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Set;

@Component
@RequiredArgsConstructor
@Slf4j
public class DataInitializer implements CommandLineRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        seedUser("super_admin", "admin123", "System Administrator", "super_admin@mfi.com", "ADMIN", Set.of("ADMIN", "USER", "BRANCH_MANAGER", "REGIONAL_MANAGER", "FIELD_OFFICER"));
        seedUser("admin", "admin123", "System Administrator", "admin@mfi.com", "ADMIN", Set.of("ADMIN", "USER", "BRANCH_MANAGER", "REGIONAL_MANAGER", "FIELD_OFFICER"));
        seedUser("field_officer", "officer123", "Rajesh Kumar (Field Officer)", "rajesh.field@mfi.com", "FIELD_OFFICER", Set.of("FIELD_OFFICER", "USER"));
        seedUser("manager", "manager123", "Ananya Sharma (Branch Manager)", "ananya.mgr@mfi.com", "BRANCH_MANAGER", Set.of("BRANCH_MANAGER", "USER"));
    }

    private void seedUser(String username, String rawPassword, String fullName, String email, String designation, Set<String> roles) {
        if (!userRepository.existsByUsername(username)) {
            User user = User.builder()
                    .username(username)
                    .password(passwordEncoder.encode(rawPassword))
                    .fullName(fullName)
                    .email(email)
                    .designation(designation)
                    .roles(roles)
                    .isActive(true)
                    .isAccountLocked(false)
                    .failedLoginAttempts(0)
                    .build();
            userRepository.save(user);
            log.info("Seeded user: {} with roles: {}", username, roles);
        }
    }
}
