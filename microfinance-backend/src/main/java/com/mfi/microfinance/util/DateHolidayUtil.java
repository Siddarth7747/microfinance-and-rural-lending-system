package com.mfi.microfinance.util;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.Set;

public class DateHolidayUtil {

    private static final Set<LocalDate> FIXED_HOLIDAYS_2026 = Set.of(
            LocalDate.of(2026, 1, 26),  // Republic Day
            LocalDate.of(2026, 8, 15),  // Independence Day
            LocalDate.of(2026, 10, 2)   // Gandhi Jayanti
    );

    public static boolean isHoliday(LocalDate date) {
        if (date == null) return false;
        return date.getDayOfWeek() == DayOfWeek.SUNDAY || FIXED_HOLIDAYS_2026.contains(date);
    }

    public static LocalDate getNextWorkingDay(LocalDate date) {
        LocalDate current = date;
        while (isHoliday(current)) {
            current = current.plusDays(1);
        }
        return current;
    }
}
