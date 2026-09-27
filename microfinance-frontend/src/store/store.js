import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import borrowerReducer from './slices/borrowerSlice';
import loanGroupReducer from './slices/loanGroupSlice';
import loanApplicationReducer from './slices/loanApplicationSlice';
import loanReducer from './slices/loanSlice';
import emiScheduleReducer from './slices/emiScheduleSlice';
import repaymentReducer from './slices/repaymentSlice';
import collectionReducer from './slices/collectionSlice';
import offlineSyncReducer from './slices/offlineSyncSlice';
import delinquencyReducer from './slices/delinquencySlice';
import shgReducer from './slices/shgSlice';
import insuranceReducer from './slices/insuranceSlice';
import disbursementReducer from './slices/disbursementSlice';
import branchReducer from './slices/branchSlice';
import reportReducer from './slices/reportSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    borrowers: borrowerReducer,
    loanGroups: loanGroupReducer,
    loanApplications: loanApplicationReducer,
    loans: loanReducer,
    emiSchedules: emiScheduleReducer,
    repayments: repaymentReducer,
    collections: collectionReducer,
    offlineSync: offlineSyncReducer,
    delinquency: delinquencyReducer,
    shg: shgReducer,
    insurance: insuranceReducer,
    disbursements: disbursementReducer,
    branches: branchReducer,
    reports: reportReducer,
    ui: uiReducer,
  },
});
