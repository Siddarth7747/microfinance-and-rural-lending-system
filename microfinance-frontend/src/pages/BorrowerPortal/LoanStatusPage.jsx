import React from 'react';
import { BorrowerProfile } from '../../components/borrower/BorrowerProfile';

export const LoanStatusPage = () => (
  <div style={{ padding: '20px' }}>
    <h2>Borrower Loan Status Portal</h2>
    <BorrowerProfile borrower={{ fullName: 'Sunita Devi', brn: 'BRN-VAR-2026-1001', aadhaarNumberMasked: 'XXXX-XXXX-4321', mobileNumber: '9876543210', village: 'Rampur', annualHouseholdIncome: 180000, cibilScore: 735 }} />
  </div>
);

export default LoanStatusPage;
