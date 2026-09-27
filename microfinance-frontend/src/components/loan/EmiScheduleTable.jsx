import React from 'react';
import { formatCurrency } from '../../utils/formatters';

export const EmiScheduleTable = ({ schedule = [] }) => (
  <div className="glass-card" style={{ padding: '20px' }}>
    <h4 style={{ color: '#f8fafc', marginBottom: '12px' }}>Repayment & EMI Installment Schedule</h4>
    <table style={{ width: '100%', fontSize: '13px', color: '#f8fafc' }}>
      <thead>
        <tr style={{ color: '#94a3b8', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <th style={{ padding: '8px' }}>#</th>
          <th style={{ padding: '8px' }}>Due Date</th>
          <th style={{ padding: '8px' }}>Principal</th>
          <th style={{ padding: '8px' }}>Interest</th>
          <th style={{ padding: '8px' }}>EMI Amount</th>
          <th style={{ padding: '8px' }}>Status</th>
        </tr>
      </thead>
      <tbody>
        {schedule.map((s, idx) => (
          <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <td style={{ padding: '8px' }}>{s.installmentNumber}</td>
            <td style={{ padding: '8px' }}>{s.dueDate}</td>
            <td style={{ padding: '8px' }}>{formatCurrency(s.principalComponent)}</td>
            <td style={{ padding: '8px' }}>{formatCurrency(s.interestComponent)}</td>
            <td style={{ padding: '8px' }}>{formatCurrency(s.emiAmount)}</td>
            <td style={{ padding: '8px', color: s.isPaid ? '#10b981' : '#f59e0b' }}>{s.isPaid ? 'PAID' : 'PENDING'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
