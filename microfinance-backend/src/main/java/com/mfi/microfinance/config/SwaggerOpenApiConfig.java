package com.mfi.microfinance.config;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import io.swagger.v3.oas.models.servers.Server;
import io.swagger.v3.oas.models.tags.Tag;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class SwaggerOpenApiConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
            .info(new Info()
                .title("Microfinance & Rural Lending Management API")
                .version("1.0.0")
                .description("Comprehensive REST API for managing microfinance operations including borrower onboarding, " +
                             "KYC verification, loan applications, loan origination, EMI schedule generation, repayment collection, " +
                             "delinquency tracking, Self-Help Group (SHG) operations, insurance claim processing, and regulatory compliance reporting.")
                .contact(new Contact()
                    .name("MFI Technical Support")
                    .email("support@mfi-rurallending.com")
                    .url("https://mfi-rurallending.com"))
                .license(new License()
                    .name("Apache 2.0")
                    .url("https://www.apache.org/licenses/LICENSE-2.0")))
            .servers(List.of(
                new Server().url("http://localhost:8080").description("Local Development Server")
            ))
            .tags(List.of(
                new Tag().name("Authentication").description("User Registration, Login, Token Refresh, and Auth Services"),
                new Tag().name("Borrowers").description("Borrower Profile Management & Onboarding"),
                new Tag().name("KYC Verification").description("KYC Document Upload and Verification"),
                new Tag().name("Loans").description("Loan Origination, Approvals, and Management"),
                new Tag().name("Loan Applications").description("Loan Application Lifecycle"),
                new Tag().name("Loan Products").description("Microfinance Product Management"),
                new Tag().name("EMI Schedules").description("Repayment Schedule Generation & Status Tracking"),
                new Tag().name("Repayments").description("EMI Payment Collection & Receipt Processing"),
                new Tag().name("Disbursements").description("Loan Fund Disbursement Services"),
                new Tag().name("Collections").description("Field Officer Collection Records"),
                new Tag().name("Delinquency").description("NPA & Overdue Recovery Tracking"),
                new Tag().name("SHG Operations").description("Self-Help Group (SHG) & Joint Liability Group (JLG) Management"),
                new Tag().name("SHG Savings").description("Group Savings & Internal Lending Accounts"),
                new Tag().name("Insurance Claims").description("Credit Life & Crop Insurance Claims Processing"),
                new Tag().name("Branches").description("Branch Office & Region Management"),
                new Tag().name("Staff Management").description("Field Officers & Staff Assignment"),
                new Tag().name("Reports").description("NABARD / RBI Regulatory & Operational Reports"),
                new Tag().name("Audit Logs").description("System Security & Action Audit Trail"),
                new Tag().name("Offline Sync").description("Field Officer Mobile App Data Sync"),
                new Tag().name("Admin Console").description("Administrative Management Services")
            ))
            .addSecurityItem(new SecurityRequirement().addList("Bearer Authentication"))
            .components(new Components()
                .addSecuritySchemes("Bearer Authentication",
                    new SecurityScheme()
                        .name("Bearer Authentication")
                        .type(SecurityScheme.Type.HTTP)
                        .scheme("bearer")
                        .bearerFormat("JWT")
                        .description("Enter JWT Bearer token to authorize requests (e.g. obtain token from /api/auth/login)")));
    }
}

