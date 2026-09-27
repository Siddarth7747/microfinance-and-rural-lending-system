package com.mfi.microfinance.entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "users")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
@EntityListeners(AuditingEntityListener.class)
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 50)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false, length = 100)
    private String fullName;

    @Column(nullable = false, unique = true, length = 255)
    private String email;

    @Column(length = 15)
    private String mobile;

    @Column(length = 20)
    private String employeeId;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "user_roles", joinColumns = @JoinColumn(name = "user_id"))
    @Column(name = "role")
    @Builder.Default
    private Set<String> roles = new HashSet<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "branch_id")
    private Branch branch;

    @Column(length = 50)
    private String designation; // FIELD_OFFICER, BRANCH_MANAGER, CREDIT_COMMITTEE, ADMIN, REGIONAL_MANAGER

    @Column(nullable = false)
    @Builder.Default
    private Boolean isActive = true;

    private LocalDateTime lastLoginAt;

    @Column(nullable = false)
    @Builder.Default
    private Boolean isAccountLocked = false;

    @Builder.Default
    private Integer failedLoginAttempts = 0;

    @CreatedDate
    @Column(updatable = false)
    private LocalDateTime createdAt;

    @LastModifiedDate
    private LocalDateTime updatedAt;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getMobile() { return mobile; }
    public void setMobile(String mobile) { this.mobile = mobile; }

    public String getEmployeeId() { return employeeId; }
    public void setEmployeeId(String employeeId) { this.employeeId = employeeId; }

    public Set<String> getRoles() { return roles; }
    public void setRoles(Set<String> roles) { this.roles = roles; }

    public Branch getBranch() { return branch; }
    public void setBranch(Branch branch) { this.branch = branch; }

    public String getDesignation() { return designation; }
    public void setDesignation(String designation) { this.designation = designation; }

    public Boolean getIsActive() { return isActive; }
    public void setIsActive(Boolean isActive) { this.isActive = isActive; }

    public LocalDateTime getLastLoginAt() { return lastLoginAt; }
    public void setLastLoginAt(LocalDateTime lastLoginAt) { this.lastLoginAt = lastLoginAt; }

    public Boolean getIsAccountLocked() { return isAccountLocked; }
    public void setIsAccountLocked(Boolean isAccountLocked) { this.isAccountLocked = isAccountLocked; }

    public Integer getFailedLoginAttempts() { return failedLoginAttempts; }
    public void setFailedLoginAttempts(Integer failedLoginAttempts) { this.failedLoginAttempts = failedLoginAttempts; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }

    public static UserBuilder builder() { return new UserBuilder(); }

    public static class UserBuilder {
        private Long id;
        private String username;
        private String password;
        private String fullName;
        private String email;
        private String mobile;
        private String employeeId;
        private Set<String> roles = new HashSet<>();
        private Branch branch;
        private String designation;
        private Boolean isActive = true;
        private LocalDateTime lastLoginAt;
        private Boolean isAccountLocked = false;
        private Integer failedLoginAttempts = 0;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;

        public UserBuilder id(Long id) { this.id = id; return this; }
        public UserBuilder username(String username) { this.username = username; return this; }
        public UserBuilder password(String password) { this.password = password; return this; }
        public UserBuilder fullName(String fullName) { this.fullName = fullName; return this; }
        public UserBuilder email(String email) { this.email = email; return this; }
        public UserBuilder mobile(String mobile) { this.mobile = mobile; return this; }
        public UserBuilder employeeId(String employeeId) { this.employeeId = employeeId; return this; }
        public UserBuilder roles(Set<String> roles) { this.roles = roles; return this; }
        public UserBuilder branch(Branch branch) { this.branch = branch; return this; }
        public UserBuilder designation(String designation) { this.designation = designation; return this; }
        public UserBuilder isActive(Boolean isActive) { this.isActive = isActive; return this; }
        public UserBuilder lastLoginAt(LocalDateTime lastLoginAt) { this.lastLoginAt = lastLoginAt; return this; }
        public UserBuilder isAccountLocked(Boolean isAccountLocked) { this.isAccountLocked = isAccountLocked; return this; }
        public UserBuilder failedLoginAttempts(Integer failedLoginAttempts) { this.failedLoginAttempts = failedLoginAttempts; return this; }
        public UserBuilder createdAt(LocalDateTime createdAt) { this.createdAt = createdAt; return this; }
        public UserBuilder updatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; return this; }

        public User build() {
            User u = new User();
            u.id = this.id;
            u.username = this.username;
            u.password = this.password;
            u.fullName = this.fullName;
            u.email = this.email;
            u.mobile = this.mobile;
            u.employeeId = this.employeeId;
            u.roles = this.roles;
            u.branch = this.branch;
            u.designation = this.designation;
            u.isActive = this.isActive;
            u.lastLoginAt = this.lastLoginAt;
            u.isAccountLocked = this.isAccountLocked;
            u.failedLoginAttempts = this.failedLoginAttempts;
            u.createdAt = this.createdAt;
            u.updatedAt = this.updatedAt;
            return u;
        }
    }
}


