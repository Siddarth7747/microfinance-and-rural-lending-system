package com.mfi.microfinance.service;

import com.mfi.microfinance.dto.response.LoanScheduleResponse;
import com.mfi.microfinance.entity.EmiSchedule;
import com.mfi.microfinance.entity.Loan;
import com.mfi.microfinance.repository.EmiScheduleRepository;
import com.mfi.microfinance.util.EmiCalculatorUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class EmiScheduleService {

    private final EmiScheduleRepository emiScheduleRepository;

    @Transactional
    public List<EmiSchedule> generateEmiSchedule(Loan loan, LocalDate firstDueDate) {
        List<LoanScheduleResponse.InstallmentDetail> details = EmiCalculatorUtil.generateSchedule(
                loan.getSanctionedAmount(),
                loan.getInterestRate(),
                loan.getTenureMonths(),
                loan.getLoanProduct().getInterestMethod(),
                firstDueDate.minusMonths(1)
        );

        List<EmiSchedule> schedules = details.stream().map(d -> EmiSchedule.builder()
                .loan(loan)
                .installmentNumber(d.getInstallmentNumber())
                .dueDate(d.getDueDate())
                .principalComponent(d.getPrincipalComponent())
                .interestComponent(d.getInterestComponent())
                .emiAmount(d.getEmiAmount())
                .outstandingAfter(d.getOutstandingAfter())
                .isPaid(false)
                .isOverdue(false)
                .build()
        ).toList();

        return emiScheduleRepository.saveAll(schedules);
    }

    public List<EmiSchedule> getScheduleByLoanId(Long loanId) {
        return emiScheduleRepository.findByLoanIdOrderByInstallmentNumberAsc(loanId);
    }
}
