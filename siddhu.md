# Folder Structure — Microfinance & Rural Lending Management System (SRS-15)

**Stack:** Spring Boot 3.x (Backend) · React.js + Redux Toolkit (Frontend) · JWT · JPA/Hibernate · PostgreSQL
**Scope:** Structure only — no deployment/DevOps files (no Docker, Kubernetes, CI/CD)

---

## 1. Backend — Spring Boot 3.x (Maven, Java 17+)

```
microfinance-backend/
├── pom.xml
├── src/
│   ├── main/
│   │   ├── java/com/mfi/microfinance/
│   │   │   ├── MicrofinanceApplication.java
│   │   │   │
│   │   │   ├── config/
│   │   │   │   ├── SecurityConfig.java
│   │   │   │   ├── JwtConfig.java
│   │   │   │   ├── CorsConfig.java
│   │   │   │   ├── SwaggerOpenApiConfig.java
│   │   │   │   ├── WebSocketConfig.java
│   │   │   │   ├── AuditorAwareConfig.java
│   │   │   │   └── FlywayConfig.java
│   │   │   │
│   │   │   ├── security/
│   │   │   │   ├── JwtAuthFilter.java
│   │   │   │   ├── JwtTokenProvider.java
│   │   │   │   ├── UserDetailsServiceImpl.java
│   │   │   │   ├── RoleBasedAccessGuard.java
│   │   │   │   └── MakerCheckerInterceptor.java
│   │   │   │
│   │   │   ├── controller/
│   │   │   │   ├── AuthController.java
│   │   │   │   ├── BorrowerController.java
│   │   │   │   ├── KycController.java
│   │   │   │   ├── LoanProductController.java
│   │   │   │   ├── LoanGroupController.java          # JLG
│   │   │   │   ├── LoanApplicationController.java
│   │   │   │   ├── LoanController.java
│   │   │   │   ├── EmiScheduleController.java
│   │   │   │   ├── RepaymentController.java
│   │   │   │   ├── CollectionController.java
│   │   │   │   ├── OfflineSyncController.java
│   │   │   │   ├── DelinquencyController.java        # PAR / NPA
│   │   │   │   ├── ShgController.java
│   │   │   │   ├── ShgSavingsController.java
│   │   │   │   ├── InsuranceClaimController.java
│   │   │   │   ├── DisbursementController.java
│   │   │   │   ├── BranchController.java
│   │   │   │   ├── StaffController.java
│   │   │   │   ├── ReportController.java              # MIS / RBI / MFIN
│   │   │   │   ├── AuditLogController.java
│   │   │   │   └── AdminConsoleController.java
│   │   │   │
│   │   │   ├── service/
│   │   │   │   ├── AuthService.java
│   │   │   │   ├── BorrowerService.java
│   │   │   │   ├── KycService.java
│   │   │   │   ├── LoanProductService.java
│   │   │   │   ├── LoanGroupService.java
│   │   │   │   ├── GrtService.java
│   │   │   │   ├── LoanApplicationService.java
│   │   │   │   ├── LoanApprovalWorkflowService.java
│   │   │   │   ├── LoanService.java
│   │   │   │   ├── EmiScheduleService.java
│   │   │   │   ├── InterestCalculationService.java    # flat/reducing/daily
│   │   │   │   ├── RepaymentService.java
│   │   │   │   ├── PrepaymentForeclosureService.java
│   │   │   │   ├── CollectionService.java
│   │   │   │   ├── OfflineSyncService.java
│   │   │   │   ├── DelinquencyService.java             # DPD/PAR
│   │   │   │   ├── NpaClassificationService.java
│   │   │   │   ├── RestructuringService.java
│   │   │   │   ├── WriteOffRecoveryService.java
│   │   │   │   ├── ShgService.java
│   │   │   │   ├── ShgSavingsService.java
│   │   │   │   ├── ShgGradingService.java
│   │   │   │   ├── InsuranceService.java
│   │   │   │   ├── InsuranceClaimService.java
│   │   │   │   ├── DisbursementService.java
│   │   │   │   ├── PaymentGatewayService.java          # NEFT/UPI/NACH
│   │   │   │   ├── BranchService.java
│   │   │   │   ├── StaffPerformanceService.java
│   │   │   │   ├── IncentiveCalculationService.java
│   │   │   │   ├── ReportGenerationService.java
│   │   │   │   ├── RegulatoryReportService.java        # RBI/MFIN/SIDBI
│   │   │   │   ├── AuditLogService.java
│   │   │   │   └── NotificationService.java            # SMS/OTP alerts
│   │   │   │
│   │   │   ├── integration/
│   │   │   │   ├── aadhaar/
│   │   │   │   │   ├── AadhaarEkycClient.java
│   │   │   │   │   └── AadhaarEsignClient.java
│   │   │   │   ├── bureau/
│   │   │   │   │   ├── CibilClient.java
│   │   │   │   │   ├── EquifaxClient.java
│   │   │   │   │   ├── ExperianClient.java
│   │   │   │   │   └── BureauCacheService.java
│   │   │   │   ├── payment/
│   │   │   │   │   ├── NeftRtgsClient.java
│   │   │   │   │   ├── UpiClient.java
│   │   │   │   │   ├── NachMandateClient.java
│   │   │   │   │   └── PennyDropVerificationClient.java
│   │   │   │   └── sms/
│   │   │   │       ├── Msg91Client.java
│   │   │   │       └── TwilioClient.java
│   │   │   │
│   │   │   ├── repository/
│   │   │   │   ├── BorrowerRepository.java
│   │   │   │   ├── LoanGroupRepository.java
│   │   │   │   ├── LoanProductRepository.java
│   │   │   │   ├── LoanApplicationRepository.java
│   │   │   │   ├── LoanRepository.java
│   │   │   │   ├── EmiScheduleRepository.java
│   │   │   │   ├── RepaymentTransactionRepository.java
│   │   │   │   ├── DisbursementRepository.java
│   │   │   │   ├── ShgSavingsRepository.java
│   │   │   │   ├── InsuranceClaimRepository.java
│   │   │   │   ├── BranchRepository.java
│   │   │   │   ├── UserRepository.java
│   │   │   │   └── AuditLogRepository.java
│   │   │   │
│   │   │   ├── entity/
│   │   │   │   ├── Borrower.java
│   │   │   │   ├── LoanGroup.java
│   │   │   │   ├── LoanProduct.java
│   │   │   │   ├── LoanApplication.java
│   │   │   │   ├── Loan.java
│   │   │   │   ├── EmiSchedule.java
│   │   │   │   ├── RepaymentTransaction.java
│   │   │   │   ├── Disbursement.java
│   │   │   │   ├── ShgSavings.java
│   │   │   │   ├── InsuranceClaim.java
│   │   │   │   ├── Branch.java
│   │   │   │   ├── User.java
│   │   │   │   ├── AuditLog.java
│   │   │   │   └── enums/
│   │   │   │       ├── KycStatus.java
│   │   │   │       ├── LoanStatus.java
│   │   │   │       ├── GroupType.java
│   │   │   │       ├── InterestMethod.java
│   │   │   │       ├── PaymentMode.java
│   │   │   │       ├── ParClassification.java
│   │   │   │       └── ClaimStatus.java
│   │   │   │
│   │   │   ├── dto/
│   │   │   │   ├── request/
│   │   │   │   │   ├── BorrowerRegistrationRequest.java
│   │   │   │   │   ├── KycVerificationRequest.java
│   │   │   │   │   ├── LoanApplicationRequest.java
│   │   │   │   │   ├── RepaymentRequest.java
│   │   │   │   │   ├── DisbursementRequest.java
│   │   │   │   │   ├── ShgSavingsRequest.java
│   │   │   │   │   └── OfflineSyncBatchRequest.java
│   │   │   │   └── response/
│   │   │   │       ├── BorrowerResponse.java
│   │   │   │       ├── LoanScheduleResponse.java
│   │   │   │       ├── ParReportResponse.java
│   │   │   │       ├── CollectionSheetResponse.java
│   │   │   │       └── ApiErrorResponse.java           # RFC 7807
│   │   │   │
│   │   │   ├── mapper/
│   │   │   │   ├── BorrowerMapper.java
│   │   │   │   ├── LoanMapper.java
│   │   │   │   ├── LoanApplicationMapper.java
│   │   │   │   └── ShgMapper.java
│   │   │   │
│   │   │   ├── exception/
│   │   │   │   ├── GlobalExceptionHandler.java
│   │   │   │   ├── OverIndebtednessException.java
│   │   │   │   ├── InsufficientGroupSizeException.java
│   │   │   │   ├── BureauApiTimeoutException.java
│   │   │   │   ├── DisbursementFailedException.java
│   │   │   │   ├── KycVerificationException.java
│   │   │   │   ├── OfflineSyncConflictException.java
│   │   │   │   └── LoanAlreadyDisbursedException.java
│   │   │   │
│   │   │   ├── validation/
│   │   │   │   ├── AadhaarNumberValidator.java         # Verhoeff check
│   │   │   │   ├── IfscCodeValidator.java
│   │   │   │   ├── MobileNumberValidator.java
│   │   │   │   ├── GpsCoordinateValidator.java
│   │   │   │   └── LoanAmountLimitValidator.java
│   │   │   │
│   │   │   ├── util/
│   │   │   │   ├── BrnGeneratorUtil.java
│   │   │   │   ├── EmiCalculatorUtil.java
│   │   │   │   ├── DpdCalculatorUtil.java
│   │   │   │   ├── EncryptionUtil.java                 # AES-256 / SHA-256
│   │   │   │   ├── DateHolidayUtil.java
│   │   │   │   └── FileExportUtil.java                 # PDF/Excel/CSV
│   │   │   │
│   │   │   └── scheduler/
│   │   │       ├── DailyDpdCalculationJob.java
│   │   │       ├── DailyCollectionSheetJob.java
│   │   │       ├── SmsReminderJob.java
│   │   │       ├── NachDebitFileJob.java
│   │   │       ├── DailyBackupTriggerJob.java
│   │   │       └── BureauCacheExpiryJob.java
│   │   │
│   │   └── resources/
│   │       ├── application.yml
│   │       ├── application-dev.yml
│   │       ├── application-prod.yml
│   │       ├── db/migration/                            # Flyway
│   │       │   ├── V1__init_borrowers.sql
│   │       │   ├── V2__init_loan_groups.sql
│   │       │   ├── V3__init_loan_products.sql
│   │       │   ├── V4__init_loan_applications.sql
│   │       │   ├── V5__init_loans.sql
│   │       │   ├── V6__init_emi_schedule.sql
│   │       │   ├── V7__init_repayment_transactions.sql
│   │       │   ├── V8__init_disbursements.sql
│   │       │   ├── V9__init_shg_savings.sql
│   │       │   ├── V10__init_insurance_claims.sql
│   │       │   ├── V11__init_branches.sql
│   │       │   └── V12__init_audit_log.sql
│   │       ├── static/
│   │       └── templates/
│   │           ├── loan-agreement-en.html
│   │           ├── loan-agreement-hi.html
│   │           └── sms-templates/
│   │
│   └── test/
│       └── java/com/mfi/microfinance/
│           ├── controller/
│           ├── service/
│           │   ├── EmiScheduleServiceTest.java
│           │   ├── InterestCalculationServiceTest.java
│           │   ├── DelinquencyServiceTest.java
│           │   └── LoanApplicationServiceTest.java
│           ├── repository/
│           └── integration/
│               ├── AadhaarEkycIntegrationTest.java
│               └── CibilBureauIntegrationTest.java
│
└── README.md
```

---

## 2. Frontend — React.js (Vite/CRA) + Redux Toolkit

```
microfinance-frontend/
├── package.json
├── vite.config.js
├── public/
│   ├── index.html
│   ├── manifest.json                                    # PWA manifest
│   └── locales/                                          # i18n JSON
│       ├── en.json
│       ├── hi.json
│       ├── ta.json
│       ├── te.json
│       └── kn.json
│
├── src/
│   ├── main.jsx
│   ├── App.jsx                                            # JWT interceptor, router, offline banner
│   │
│   ├── router/
│   │   ├── AppRouter.jsx
│   │   └── RoleGuard.jsx
│   │
│   ├── store/
│   │   ├── store.js
│   │   └── slices/
│   │       ├── authSlice.js
│   │       ├── borrowerSlice.js
│   │       ├── loanGroupSlice.js
│   │       ├── loanApplicationSlice.js
│   │       ├── loanSlice.js
│   │       ├── emiScheduleSlice.js
│   │       ├── repaymentSlice.js
│   │       ├── collectionSlice.js
│   │       ├── offlineSyncSlice.js
│   │       ├── delinquencySlice.js
│   │       ├── shgSlice.js
│   │       ├── insuranceSlice.js
│   │       ├── disbursementSlice.js
│   │       ├── branchSlice.js
│   │       ├── reportSlice.js
│   │       └── uiSlice.js
│   │
│   ├── api/
│   │   ├── axiosClient.js
│   │   ├── authApi.js
│   │   ├── borrowerApi.js
│   │   ├── kycApi.js
│   │   ├── loanGroupApi.js
│   │   ├── loanApplicationApi.js
│   │   ├── loanApi.js
│   │   ├── repaymentApi.js
│   │   ├── collectionApi.js
│   │   ├── offlineSyncApi.js
│   │   ├── delinquencyApi.js
│   │   ├── shgApi.js
│   │   ├── insuranceApi.js
│   │   ├── disbursementApi.js
│   │   ├── branchApi.js
│   │   └── reportApi.js
│   │
│   ├── layouts/
│   │   ├── MainLayout.jsx
│   │   ├── FieldOfficerLayout.jsx                         # mobile-first
│   │   └── AdminLayout.jsx
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── NavBar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── OfflineBanner.jsx
│   │   │   ├── LoadingSpinner.jsx
│   │   │   ├── ErrorBoundary.jsx
│   │   │   ├── DataTable.jsx
│   │   │   ├── ConfirmDialog.jsx
│   │   │   ├── FileUploader.jsx
│   │   │   ├── SignaturePad.jsx
│   │   │   └── LanguageSwitcher.jsx
│   │   │
│   │   ├── borrower/
│   │   │   ├── BorrowerRegistrationForm.jsx
│   │   │   ├── BorrowerList.jsx
│   │   │   ├── BorrowerProfile.jsx
│   │   │   ├── KycVerificationPanel.jsx
│   │   │   ├── CreditBureauCard.jsx
│   │   │   └── DocumentUploadPanel.jsx
│   │   │
│   │   ├── loan-group/
│   │   │   ├── JlgGroupForm.jsx
│   │   │   ├── JlgGroupList.jsx
│   │   │   ├── GrtSchedulingPanel.jsx
│   │   │   ├── GroupCohesionScoreCard.jsx
│   │   │   ├── GroupMeetingCalendar.jsx
│   │   │   └── MemberAdditionRemovalForm.jsx
│   │   │
│   │   ├── loan-product/
│   │   │   ├── LoanProductCatalog.jsx
│   │   │   ├── LoanProductForm.jsx
│   │   │   └── EligibilityCriteriaEditor.jsx
│   │   │
│   │   ├── loan-application/
│   │   │   ├── LoanApplicationForm.jsx
│   │   │   ├── ApplicationChecklist.jsx
│   │   │   ├── LoanOfficerRecommendationPanel.jsx
│   │   │   ├── BranchManagerApprovalQueue.jsx
│   │   │   ├── CreditCommitteeReviewPanel.jsx
│   │   │   ├── DigitalLoanAgreementViewer.jsx
│   │   │   └── ApplicationStatusTracker.jsx
│   │   │
│   │   ├── loan/
│   │   │   ├── ActiveLoanList.jsx
│   │   │   ├── LoanDetailPanel.jsx
│   │   │   ├── EmiScheduleTable.jsx
│   │   │   ├── PrepaymentForm.jsx
│   │   │   └── ForeclosureCalculator.jsx
│   │   │
│   │   ├── collection/
│   │   │   ├── DailyCollectionSheet.jsx
│   │   │   ├── CollectionEntryForm.jsx                    # offline-capable
│   │   │   ├── CentreMeetingCollectionMode.jsx
│   │   │   ├── CashReconciliationPanel.jsx
│   │   │   ├── GpsCaptureWidget.jsx
│   │   │   └── ReceiptPhotoCapture.jsx
│   │   │
│   │   ├── delinquency/
│   │   │   ├── ParDashboard.jsx                           # PAR30/60/90
│   │   │   ├── NpaClassificationTable.jsx
│   │   │   ├── EwsScoreCard.jsx
│   │   │   ├── RecoveryActionPlanForm.jsx
│   │   │   ├── LegalNoticeWorkflow.jsx
│   │   │   ├── WriteOffApprovalForm.jsx
│   │   │   └── RestructuringForm.jsx
│   │   │
│   │   ├── shg/
│   │   │   ├── ShgRegistrationForm.jsx
│   │   │   ├── ShgSavingsLedger.jsx
│   │   │   ├── ShgInternalLoanForm.jsx
│   │   │   ├── ShgGradingPanel.jsx
│   │   │   ├── ShgMeetingRegister.jsx
│   │   │   ├── ShgFederationView.jsx
│   │   │   └── ShgCapacityBuildingTracker.jsx
│   │   │
│   │   ├── insurance/
│   │   │   ├── InsuranceEnrolmentPanel.jsx
│   │   │   ├── NomineeRegistrationForm.jsx
│   │   │   ├── ClaimInitiationForm.jsx
│   │   │   ├── ClaimTrackingTable.jsx
│   │   │   └── PortfolioInsuranceSummary.jsx
│   │   │
│   │   ├── disbursement/
│   │   │   ├── DisbursementInitiationForm.jsx
│   │   │   ├── BulkDisbursementUpload.jsx
│   │   │   ├── PennyDropVerificationPanel.jsx
│   │   │   ├── NachMandateForm.jsx
│   │   │   └── DisbursementReconciliationReport.jsx
│   │   │
│   │   ├── branch-staff/
│   │   │   ├── BranchHierarchyTree.jsx
│   │   │   ├── LoanOfficerProfileCard.jsx
│   │   │   ├── TargetSettingForm.jsx
│   │   │   ├── IncentiveCalculationPanel.jsx
│   │   │   ├── StaffPerformanceDashboard.jsx
│   │   │   ├── TrainingRecordsTable.jsx
│   │   │   └── VisitPlanTracker.jsx
│   │   │
│   │   ├── reports/
│   │   │   ├── DailyPortfolioReport.jsx
│   │   │   ├── MfinReportPanel.jsx
│   │   │   ├── RbiPrioritySectorReport.jsx
│   │   │   ├── LoanOfficerProductivityReport.jsx
│   │   │   ├── BranchPnlReport.jsx
│   │   │   ├── BureauSubmissionFilePanel.jsx
│   │   │   └── CustomReportBuilder.jsx
│   │   │
│   │   └── admin/
│   │       ├── UserManagementPanel.jsx
│   │       ├── ProductConfigurationPanel.jsx
│   │       ├── BranchConfigurationPanel.jsx
│   │       ├── IntegrationSettingsPanel.jsx
│   │       └── AuditLogViewer.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx                                        # branch dashboard
│   │   ├── Login.jsx
│   │   ├── Microfinance.jsx                                # tabbed module container
│   │   ├── BorrowerPortal/
│   │   │   ├── LoanStatusPage.jsx
│   │   │   ├── RepaymentSchedulePage.jsx
│   │   │   └── PaymentHistoryPage.jsx
│   │   ├── LoanOfficerApp/
│   │   │   ├── OnboardingPage.jsx
│   │   │   ├── CollectionPage.jsx
│   │   │   └── GroupMeetingPage.jsx
│   │   ├── BranchDashboard/
│   │   │   ├── ParReportPage.jsx
│   │   │   ├── ApprovalQueuePage.jsx
│   │   │   └── OfficerPerformancePage.jsx
│   │   ├── CreditCommittee/
│   │   │   └── LoanReviewPage.jsx
│   │   └── AdminConsole/
│   │       ├── UsersPage.jsx
│   │       ├── ProductsPage.jsx
│   │       └── IntegrationsPage.jsx
│   │
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useOfflineStatus.js
│   │   ├── useIndexedDbSync.js
│   │   ├── useGpsLocation.js
│   │   ├── useDebounce.js
│   │   └── usePagination.js
│   │
│   ├── offline/
│   │   ├── serviceWorker.js
│   │   ├── indexedDbClient.js
│   │   ├── syncQueueManager.js
│   │   └── conflictResolver.js
│   │
│   ├── charts/
│   │   ├── ParTrendChart.jsx
│   │   ├── AumGrowthChart.jsx
│   │   ├── CollectionEfficiencyChart.jsx
│   │   └── DelinquencyByBranchChart.jsx
│   │
│   ├── utils/
│   │   ├── validators.js                                  # Aadhaar/IFSC/mobile
│   │   ├── formatters.js                                  # currency/date
│   │   ├── emiCalculator.js
│   │   ├── constants.js
│   │   └── rolePermissions.js
│   │
│   ├── i18n/
│   │   └── i18nConfig.js
│   │
│   ├── styles/
│   │   ├── theme.js
│   │   └── global.css
│   │
│   └── assets/
│       ├── icons/
│       └── images/
│
├── tests/
│   ├── components/
│   ├── hooks/
│   └── offline/
│
└── README.md
```

---

### Notes
- Structure maps directly to FR1–FR12 in the SRS (Borrower/KYC, Loan Products, JLG, Application Workflow, EMI/Repayment, Field Collection, Delinquency/NPA, SHG, Insurance, MIS/Regulatory Reporting, Branch/Staff, Disbursement).
- `integration/` (backend) and `offline/` (frontend) isolate all external dependencies (Aadhaar, bureaus, payment rails, SMS) and PWA offline-sync logic per the design constraints in Section 2.5.
- Deployment artifacts (Dockerfile, Kubernetes manifests, CI/CD pipelines) are intentionally excluded as requested.