package com.mfi.microfinance.repository;

import com.mfi.microfinance.entity.ShgSavings;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;

@Repository
public interface ShgSavingsRepository extends JpaRepository<ShgSavings, Long> {

    List<ShgSavings> findByGroupIdOrderByTransactionDateDesc(Long groupId);

    List<ShgSavings> findByMemberIdOrderByTransactionDateDesc(Long memberId);

    @Query("SELECT SUM(CASE WHEN s.transactionType = 'DEPOSIT' THEN s.amount ELSE -s.amount END) " +
           "FROM ShgSavings s WHERE s.group.id = :groupId")
    BigDecimal calculateGroupBalance(@Param("groupId") Long groupId);

    @Query("SELECT SUM(CASE WHEN s.transactionType = 'DEPOSIT' THEN s.amount ELSE -s.amount END) " +
           "FROM ShgSavings s WHERE s.member.id = :memberId AND s.group.id = :groupId")
    BigDecimal calculateMemberBalance(@Param("memberId") Long memberId, @Param("groupId") Long groupId);
}
