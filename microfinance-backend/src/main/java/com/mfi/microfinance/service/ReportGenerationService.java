package com.mfi.microfinance.service;

import com.mfi.microfinance.entity.Loan;
import com.mfi.microfinance.entity.RepaymentTransaction;
import com.mfi.microfinance.entity.enums.LoanStatus;
import com.mfi.microfinance.repository.LoanRepository;
import com.mfi.microfinance.repository.RepaymentTransactionRepository;
import com.mfi.microfinance.util.FileExportUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;

/**
 * Report generation service producing daily portfolio, branch performance,
 * and operational reports in CSV, Excel, and PDF formats.
 */
@Service
@RequiredArgsConstructor
public class ReportGenerationService {

    private final LoanRepository loanRepository;
    private final RepaymentTransactionRepository repaymentRepository;

    /**
     * Generate daily portfolio report as CSV bytes.
     */
    public byte[] generateDailyPortfolioReportCsv() {
        List<Loan> activeLoans = loanRepository.findByStatusIn(
                List.of(LoanStatus.ACTIVE, LoanStatus.OVERDUE, LoanStatus.NPA));

        // Group by branch
        Map<String, List<Loan>> byBranch = activeLoans.stream()
                .collect(Collectors.groupingBy(l ->
                        l.getBranch() != null ? l.getBranch().getBranchName() : "Unassigned"));

        List<String> headers = List.of("Branch", "Active Loans", "Total Portfolio (₹)", "Collection Efficiency (%)", "PAR30 (%)");
        List<List<String>> rows = new ArrayList<>();

        for (Map.Entry<String, List<Loan>> entry : byBranch.entrySet()) {
            List<Loan> branchLoans = entry.getValue();
            BigDecimal totalPortfolio = branchLoans.stream()
                    .map(Loan::getOutstandingPrincipal).filter(Objects::nonNull)
                    .reduce(BigDecimal.ZERO, BigDecimal::add);

            long par30Count = branchLoans.stream()
                    .filter(l -> l.getDpd() != null && l.getDpd() > 30).count();

            BigDecimal par30Pct = branchLoans.isEmpty() ? BigDecimal.ZERO :
                    BigDecimal.valueOf(par30Count * 100.0 / branchLoans.size()).setScale(1, RoundingMode.HALF_UP);

            BigDecimal totalRepaid = branchLoans.stream()
                    .map(Loan::getTotalRepaid).filter(Objects::nonNull)
                    .reduce(BigDecimal.ZERO, BigDecimal::add);
            BigDecimal totalExpected = branchLoans.stream()
                    .map(l -> l.getEmiAmount() != null && l.getPaidEmis() != null ?
                            l.getEmiAmount().multiply(BigDecimal.valueOf(l.getPaidEmis())) : BigDecimal.ZERO)
                    .reduce(BigDecimal.ZERO, BigDecimal::add);
            BigDecimal collectionEff = totalExpected.compareTo(BigDecimal.ZERO) > 0 ?
                    totalRepaid.multiply(BigDecimal.valueOf(100)).divide(totalExpected, 1, RoundingMode.HALF_UP) :
                    BigDecimal.valueOf(100);

            rows.add(List.of(
                    entry.getKey(),
                    String.valueOf(branchLoans.size()),
                    totalPortfolio.setScale(0, RoundingMode.HALF_UP).toString(),
                    collectionEff.toString(),
                    par30Pct.toString()
            ));
        }

        return FileExportUtil.exportToCsv(headers, rows);
    }

    /**
     * Generate daily portfolio report data as a list of maps (for JSON/PDF rendering).
     */
    public List<Map<String, Object>> generateDailyPortfolioReportData() {
        List<Loan> activeLoans = loanRepository.findByStatusIn(
                List.of(LoanStatus.ACTIVE, LoanStatus.OVERDUE, LoanStatus.NPA));

        Map<String, List<Loan>> byBranch = activeLoans.stream()
                .collect(Collectors.groupingBy(l ->
                        l.getBranch() != null ? l.getBranch().getBranchName() : "Unassigned"));

        List<Map<String, Object>> reportData = new ArrayList<>();
        for (Map.Entry<String, List<Loan>> entry : byBranch.entrySet()) {
            List<Loan> branchLoans = entry.getValue();
            Map<String, Object> row = new HashMap<>();
            row.put("branchName", entry.getKey());
            row.put("activeLoans", branchLoans.size());
            row.put("totalPortfolio", branchLoans.stream()
                    .map(Loan::getOutstandingPrincipal).filter(Objects::nonNull)
                    .reduce(BigDecimal.ZERO, BigDecimal::add));
            row.put("par30Count", branchLoans.stream()
                    .filter(l -> l.getDpd() != null && l.getDpd() > 30).count());
            row.put("npaCount", branchLoans.stream()
                    .filter(l -> l.getDpd() != null && l.getDpd() > 90).count());
            row.put("reportDate", LocalDate.now().toString());
            reportData.add(row);
        }
        return reportData;
    }

    /**
     * Generate officer-level loan productivity report.
     */
    public List<Map<String, Object>> generateLoanOfficerProductivityReport() {
        List<Loan> allLoans = loanRepository.findAll();

        // Group by loan officer (collected by field)
        Map<String, List<Loan>> byOfficer = allLoans.stream()
                .filter(l -> l.getLoanApplication() != null)
                .collect(Collectors.groupingBy(l ->
                        l.getBranch() != null ? l.getBranch().getBranchName() : "Unknown"));

        List<Map<String, Object>> report = new ArrayList<>();
        for (Map.Entry<String, List<Loan>> entry : byOfficer.entrySet()) {
            Map<String, Object> row = new HashMap<>();
            row.put("officerBranch", entry.getKey());
            row.put("totalLoansHandled", entry.getValue().size());
            row.put("activeLoans", entry.getValue().stream()
                    .filter(l -> l.getStatus() == LoanStatus.ACTIVE).count());
            row.put("totalDisbursed", entry.getValue().stream()
                    .map(Loan::getDisbursedAmount).filter(Objects::nonNull)
                    .reduce(BigDecimal.ZERO, BigDecimal::add));
            report.add(row);
        }
        return report;
    }
}
