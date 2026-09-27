package com.mfi.microfinance.config;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(prefix = "jwt")
@Getter @Setter
public class JwtConfig {

    private String secret = "microfinance-jwt-secret-key-must-be-at-least-256-bits-long-for-hs256";
    private long accessTokenExpirationMs = 86400000; // 24 hours
    private long refreshTokenExpirationMs = 604800000; // 7 days
    private String tokenPrefix = "Bearer ";
    private String headerName = "Authorization";

    public String getSecret() { return secret; }
    public void setSecret(String secret) { this.secret = secret; }

    public long getAccessTokenExpirationMs() { return accessTokenExpirationMs; }
    public void setAccessTokenExpirationMs(long accessTokenExpirationMs) { this.accessTokenExpirationMs = accessTokenExpirationMs; }

    public long getRefreshTokenExpirationMs() { return refreshTokenExpirationMs; }
    public void setRefreshTokenExpirationMs(long refreshTokenExpirationMs) { this.refreshTokenExpirationMs = refreshTokenExpirationMs; }

    public String getTokenPrefix() { return tokenPrefix; }
    public void setTokenPrefix(String tokenPrefix) { this.tokenPrefix = tokenPrefix; }

    public String getHeaderName() { return headerName; }
    public void setHeaderName(String headerName) { this.headerName = headerName; }
}

