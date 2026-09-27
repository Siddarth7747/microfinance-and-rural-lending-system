package com.mfi.microfinance.util;

import com.mfi.microfinance.entity.enums.ParClassification;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

public class DpdCalculatorUtil {

    public static int calculateDpd(LocalDate oldestUnpaidDueDate, LocalDate currentDate) {
        if (oldestUnpaidDueDate == null || currentDate == null || !currentDate.isAfter(oldestUnpaidDueDate)) {
            return 0;
        }
        return (int) ChronoUnit.DAYS.between(oldestUnpaidDueDate, currentDate);
    }

    public static ParClassification classifyPar(int dpd) {
        if (dpd <= 0) return ParClassification.CURRENT;
        if (dpd <= 30) return ParClassification.PAR_1_30;
        if (dpd <= 60) return ParClassification.PAR_31_60;
        if (dpd <= 90) return ParClassification.PAR_61_90;
        if (dpd <= 180) return ParClassification.PAR_91_180;
        return ParClassification.PAR_180_PLUS;
    }
}
