package com.mfi.microfinance.entity.enums;

public enum ParClassification {
    CURRENT,        // 0 DPD
    PAR_1_30,       // 1-30 DPD
    PAR_31_60,      // 31-60 DPD
    PAR_61_90,      // 61-90 DPD
    PAR_91_180,     // 91-180 DPD
    PAR_180_PLUS,   // 180+ DPD
    SUB_STANDARD,   // NPA sub-standard
    DOUBTFUL,       // NPA doubtful
    LOSS            // NPA loss
}
