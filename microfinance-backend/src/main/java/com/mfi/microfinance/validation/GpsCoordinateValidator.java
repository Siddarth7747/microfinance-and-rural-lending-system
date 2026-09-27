package com.mfi.microfinance.validation;

public class GpsCoordinateValidator {
    public static boolean isValidLatitude(Double lat) {
        return lat != null && lat >= -90.0 && lat <= 90.0;
    }

    public static boolean isValidLongitude(Double lng) {
        return lng != null && lng >= -180.0 && lng <= 180.0;
    }
}
