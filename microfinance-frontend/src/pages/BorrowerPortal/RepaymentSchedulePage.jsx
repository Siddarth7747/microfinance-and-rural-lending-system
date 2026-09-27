import React from 'react';
import { EmiScheduleTable } from '../../components/loan/EmiScheduleTable';

export const RepaymentSchedulePage = () => (
  <div style={{ padding: '20px' }}>
    <h2>Repayment Schedule</h2>
    <EmiScheduleTable schedule={[
      { installmentNumber: 1, dueDate: '2026-09-10', principalComponent: 2200, interestComponent: 300, emiAmount: 2500, isPaid: true },
      { installmentNumber: 2, dueDate: '2026-10-10', principalComponent: 2230, interestComponent: 270, emiAmount: 2500, isPaid: false }
    ]} />
  </div>
);

export default RepaymentSchedulePage;
