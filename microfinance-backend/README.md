# Microfinance & Rural Lending Management System — Backend

Spring Boot 3.x enterprise backend for rural microfinance operations, compliance with RBI/MFIN rules, JLG/SHG lending models, collections, and delinquency tracking.

## Technology Stack
- Java 17+
- Spring Boot 3.2.5
- Spring Security + JWT
- Spring Data JPA
- H2 (Dev) / PostgreSQL (Prod)
- Flyway Database Migrations
- Lombok & MapStruct
- SpringDoc OpenAPI (Swagger UI at `/swagger-ui.html`)

## How to Run

### Development Mode (H2 Database)
```bash
mvn spring-boot:run -Dspring-boot.run.profiles=dev
```
- Server URL: `http://localhost:8080`
- Swagger Docs: `http://localhost:8080/swagger-ui.html`
- H2 Console: `http://localhost:8080/h2-console` (JDBC URL: `jdbc:h2:mem:microfinancedb`, User: `sa`, Pass: `password`)

### Production Mode (PostgreSQL)
```bash
mvn spring-boot:run -Dspring-boot.run.profiles=prod
```
