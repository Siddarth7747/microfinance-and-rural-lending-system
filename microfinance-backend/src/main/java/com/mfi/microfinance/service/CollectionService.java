package com.mfi.microfinance.service;

import com.mfi.microfinance.dto.response.CollectionSheetResponse;
import com.mfi.microfinance.entity.EmiSchedule;
import com.mfi.microfinance.repository.EmiScheduleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CollectionService {

    private final EmiScheduleRepository emiScheduleRepository;

    public CollectionSheetResponse generateCollectionSheet(Long branchId, LocalDate date) {
        List<EmiSchedule> dueSchedules = emiScheduleRepository.findDueOnDate(date);

        List<CollectionSheetResponse.CollectionEntry> entries = dueSchedules.stream().map(s ->
            CollectionSheetResponse.CollectionEntry.builder()
                    .borrowerName(s.getLoan().getBorrower().getFirstName() + " " + s.getLoan().getBorrower().getLastName())
                    .brn(s.getLoan().getBorrower().getBrn())
                    .loanAccountNumber(s.getLoan().getLoanAccountNumber())
                    .groupName(s.getLoan().getLoanGroup() != null ? s.getLoan().getLoanGroup().getGroupName() : "INDIVIDUAL")
                    .installmentNumber(s.getInstallmentNumber())
                    .emiAmount(s.getEmiAmount())
                    .paidAmount(s.getPaidAmount() != null ? s.getPaidAmount() : BigDecimal.ZERO)
                    .isPaid(s.getIsPaid())
                    .dpd(s.getLoan().getDpd())
                    .build()
        ).toList();

        BigDecimal totalExpected = dueSchedules.stream()
                .map(EmiSchedule::getEmiAmount)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        return CollectionSheetResponse.builder()
                .collectionDate(date)
                .branchName("Main Branch")
                .totalExpected(totalExpected)
                .totalCollected(BigDecimal.ZERO)
                .collectionRate(BigDecimal.ZERO)
                .entries(entries)
                .build();
    }
}
