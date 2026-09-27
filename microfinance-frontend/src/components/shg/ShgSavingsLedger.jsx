import React from 'react';

export const ShgSavingsLedger = () => {
  const transactions = [
    { date: '2026-08-01', member: 'Sunita Devi', type: 'DEPOSIT', amount: '₹500', balance: '₹12,500' },
    { date: '2026-08-01', member: 'Radha Devi', type: 'DEPOSIT', amount: '₹500', balance: '₹13,000' },
    { date: '2026-08-15', member: 'Meena Kumari', type: 'WITHDRAWAL', amount: '₹2,000', balance: '₹11,000' }
  ];

  return (
    <div className="glass-card" style={{ padding: '24px' }}>
      <h3 style={{ color: '#f8fafc', marginBottom: '16px' }}>SHG Pooled Savings Ledger</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8' }}>
            <th style={{ padding: '10px' }}>Date</th>
            <th style={{ padding: '10px' }}>Member Name</th>
            <th style={{ padding: '10px' }}>Type</th>
            <th style={{ padding: '10px' }}>Amount</th>
            <th style={{ padding: '10px' }}>Running Balance</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx, idx) => (
            <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#f8fafc' }}>
              <td style={{ padding: '10px' }}>{tx.date}</td>
              <td style={{ padding: '10px' }}>{tx.member}</td>
              <td style={{ padding: '10px', color: tx.type === 'DEPOSIT' ? '#10b981' : '#ef4444' }}>{tx.type}</td>
              <td style={{ padding: '10px', fontWeight: 'bold' }}>{tx.amount}</td>
              <td style={{ padding: '10px', color: '#6366f1' }}>{tx.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
