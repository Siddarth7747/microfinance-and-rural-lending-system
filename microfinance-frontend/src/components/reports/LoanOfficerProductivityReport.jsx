import React from 'react';

export const LoanOfficerProductivityReport = () => {
  const data = [
    { officer: 'Ramesh Singh', activeCases: 142, disbursedMonth: '₹8.5 L', turnaroundDays: '2.5 Days', collectionRate: '98.5%' },
    { officer: 'Suresh Kumar', activeCases: 128, disbursedMonth: '₹6.2 L', turnaroundDays: '3.1 Days', collectionRate: '97.2%' }
  ];

  return (
    <div className="glass-card" style={{ padding: '24px' }}>
      <h3 style={{ color: '#f8fafc', marginBottom: '16px' }}>Loan Officer Productivity & Turnaround Time Report</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8' }}>
            <th style={{ padding: '10px' }}>Officer</th>
            <th style={{ padding: '10px' }}>Active Portfolio</th>
            <th style={{ padding: '10px' }}>Disbursed (Month)</th>
            <th style={{ padding: '10px' }}>Avg Turnaround</th>
            <th style={{ padding: '10px' }}>Collection %</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, idx) => (
            <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#f8fafc' }}>
              <td style={{ padding: '10px', fontWeight: '500' }}>{d.officer}</td>
              <td style={{ padding: '10px' }}>{d.activeCases} loans</td>
              <td style={{ padding: '10px', fontWeight: 'bold' }}>{d.disbursedMonth}</td>
              <td style={{ padding: '10px', color: '#6366f1' }}>{d.turnaroundDays}</td>
              <td style={{ padding: '10px', color: '#10b981', fontWeight: 'bold' }}>{d.collectionRate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
