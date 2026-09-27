package com.mfi.microfinance.repository;

import com.mfi.microfinance.entity.EmiSchedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface EmiScheduleRepository extends JpaRepository<EmiSchedule, Long> {

    List<EmiSchedule> findByLoanIdOrderByInstallmentNumberAsc(Long loanId);

    List<EmiSchedule> findByLoanIdAndIsPaidFalseOrderByDueDateAsc(Long loanId);

    @Query("SELECT e FROM EmiSchedule e WHERE e.dueDate = :date AND e.isPaid = false")
    List<EmiSchedule> findDueOnDate(@Param("date") LocalDate date);

    @Query("SELECT e FROM EmiSchedule e WHERE e.dueDate < :date AND e.isPaid = false")
    List<EmiSchedule> findOverdueAsOf(@Param("date") LocalDate date);

    @Query("SELECT e FROM EmiSchedule e WHERE e.loan.id = :loanId AND e.isPaid = false ORDER BY e.dueDate ASC")
    List<EmiSchedule> findNextDueInstallments(@Param("loanId") Long loanId);
}
