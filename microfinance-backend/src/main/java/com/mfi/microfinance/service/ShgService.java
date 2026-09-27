package com.mfi.microfinance.service;

import com.mfi.microfinance.entity.Borrower;
import com.mfi.microfinance.entity.LoanGroup;
import com.mfi.microfinance.entity.enums.GroupType;
import com.mfi.microfinance.repository.BorrowerRepository;
import com.mfi.microfinance.repository.LoanGroupRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;

/**
 * SHG (Self Help Group) service managing group registration, member management,
 * meeting records, internal lending, and federation hierarchy.
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class ShgService {

    private final LoanGroupRepository loanGroupRepository;
    private final BorrowerRepository borrowerRepository;

    /**
     * Get all active SHGs.
     */
    public List<LoanGroup> getAllShgs() {
        return loanGroupRepository.findByGroupTypeAndIsActiveTrue(GroupType.SHG);
    }

    /**
     * Register a new SHG group.
     */
    @Transactional
    public LoanGroup registerShg(String groupCode, String groupName, Long branchId,
                                   String formedBy, LocalDate formationDate) {
        if (loanGroupRepository.existsByGroupCode(groupCode)) {
            throw new RuntimeException("SHG with code " + groupCode + " already exists");
        }

        LoanGroup shg = LoanGroup.builder()
                .groupCode(groupCode)
                .groupName(groupName)
                .groupType(GroupType.SHG)
                .formationDate(formationDate != null ? formationDate : LocalDate.now())
                .isActive(true)
                .cohesionScore(0)
                .build();

        log.info("[SHG] Registered new SHG: {} - {}", groupCode, groupName);
        return loanGroupRepository.save(shg);
    }

    /**
     * Add a member to an SHG group.
     */
    @Transactional
    public LoanGroup addMember(Long groupId, Long borrowerId) {
        LoanGroup group = loanGroupRepository.findById(groupId)
                .orElseThrow(() -> new RuntimeException("SHG group not found"));
        Borrower borrower = borrowerRepository.findById(borrowerId)
                .orElseThrow(() -> new RuntimeException("Borrower not found"));

        if (group.getMembers() == null) {
            group.setMembers(new ArrayList<>());
        }

        // Check if already a member
        boolean alreadyMember = group.getMembers().stream()
                .anyMatch(m -> m.getId().equals(borrowerId));
        if (alreadyMember) {
            throw new RuntimeException("Borrower is already a member of this SHG");
        }

        group.getMembers().add(borrower);

        log.info("[SHG] Added member {} to group {}", borrowerId, group.getGroupCode());
        return loanGroupRepository.save(group);
    }

    /**
     * Remove a member from an SHG group.
     */
    @Transactional
    public LoanGroup removeMember(Long groupId, Long borrowerId) {
        LoanGroup group = loanGroupRepository.findById(groupId)
                .orElseThrow(() -> new RuntimeException("SHG group not found"));

        if (group.getMembers() != null) {
            group.getMembers().removeIf(m -> m.getId().equals(borrowerId));
        }

        log.info("[SHG] Removed member {} from group {}", borrowerId, group.getGroupCode());
        return loanGroupRepository.save(group);
    }

    /**
     * Record a meeting for the SHG group.
     */
    public Map<String, Object> recordMeeting(Long groupId, LocalDate meetingDate,
                                               int membersPresent, int totalMembers,
                                               String minutesSummary, BigDecimal savingsCollected) {
        LoanGroup group = loanGroupRepository.findById(groupId)
                .orElseThrow(() -> new RuntimeException("SHG group not found"));

        double attendanceRate = totalMembers > 0 ? (membersPresent * 100.0 / totalMembers) : 0;

        Map<String, Object> meeting = new HashMap<>();
        meeting.put("groupId", groupId);
        meeting.put("groupName", group.getGroupName());
        meeting.put("meetingDate", meetingDate.toString());
        meeting.put("membersPresent", membersPresent);
        meeting.put("totalMembers", totalMembers);
        meeting.put("attendanceRate", String.format("%.1f%%", attendanceRate));
        meeting.put("minutesSummary", minutesSummary);
        meeting.put("savingsCollected", savingsCollected);
        meeting.put("recordedAt", LocalDateTime.now().toString());

        log.info("[SHG Meeting] Group {} on {} - Attendance: {}/{}", group.getGroupCode(),
                meetingDate, membersPresent, totalMembers);
        return meeting;
    }

    /**
     * Issue an internal loan within the SHG from pooled savings.
     */
    public Map<String, Object> issueInternalLoan(Long groupId, Long borrowerId,
                                                    BigDecimal amount, int tenureMonths,
                                                    BigDecimal interestRate, String purpose) {
        LoanGroup group = loanGroupRepository.findById(groupId)
                .orElseThrow(() -> new RuntimeException("SHG group not found"));

        String internalLoanId = "SHG-IL-" + System.currentTimeMillis();

        Map<String, Object> internalLoan = new HashMap<>();
        internalLoan.put("internalLoanId", internalLoanId);
        internalLoan.put("groupId", groupId);
        internalLoan.put("groupName", group.getGroupName());
        internalLoan.put("borrowerId", borrowerId);
        internalLoan.put("amount", amount);
        internalLoan.put("tenureMonths", tenureMonths);
        internalLoan.put("interestRate", interestRate + "%");
        internalLoan.put("purpose", purpose);
        internalLoan.put("issueDate", LocalDate.now().toString());
        internalLoan.put("status", "ACTIVE");

        log.info("[SHG Internal Loan] {} issued Rs. {} to member {} from group {}",
                internalLoanId, amount, borrowerId, group.getGroupCode());
        return internalLoan;
    }

    /**
     * Get SHG group by ID with full details.
     */
    public LoanGroup getShgById(Long id) {
        return loanGroupRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("SHG group not found with id: " + id));
    }
}
