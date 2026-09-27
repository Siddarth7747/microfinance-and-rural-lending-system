export const validateAadhaar = (aadhaar) => /^\d{12}$/.test(aadhaar);
export const validateIfsc = (ifsc) => /^[A-Z]{4}0[A-Z0-9]{6}$/.test(ifsc);
export const validateMobile = (mobile) => /^[6-9]\d{9}$/.test(mobile);
export const validatePan = (pan) => /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan);
