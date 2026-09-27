import React from 'react';

export const ClaimTrackingTable = () => {
  const claims = [
    { claimId: 'CLM-8810', policy: 'POL-99201', borrower: 'Sunita Devi', type: 'DEATH_CLAIM', amount: '₹30,000', status: 'FILED', date: '2026-08-20' },
    { claimId: 'CLM-8794', policy: 'POL-98442', borrower: 'Phoolan Devi', type: 'PERMANENT_DISABILITY', amount: '₹25,000', status: 'SETTLED', date: '2026-08-05' }
  ];

  return (
    <div className="glass-card" style={{ padding: '24px' }}>
      <h3 style={{ color: '#f8fafc', marginBottom: '16px' }}>Insurance Claim Tracking & Settlement</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8' }}>
            <th style={{ padding: '10px' }}>Claim ID</th>
            <th style={{ padding: '10px' }}>Policy / Borrower</th>
            <th style={{ padding: '10px' }}>Claim Type</th>
            <th style={{ padding: '10px' }}>Amount</th>
            <th style={{ padding: '10px' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {claims.map((c, idx) => (
            <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#f8fafc' }}>
              <td style={{ padding: '10px', color: '#6366f1', fontWeight: 'bold' }}>{c.claimId}</td>
              <td style={{ padding: '10px' }}>
                <div>{c.borrower}</div>
                <div style={{ fontSize: '11px', color: '#94a3b8' }}>{c.policy}</div>
              </td>
              <td style={{ padding: '10px' }}>{c.type}</td>
              <td style={{ padding: '10px', fontWeight: 'bold' }}>{c.amount}</td>
              <td style={{ padding: '10px' }}>
                <span style={{ padding: '4px 10px', borderRadius: '12px', fontSize: '11px', background: c.status === 'SETTLED' ? 'rgba(16,185,129,0.2)' : 'rgba(245,158,11,0.2)', color: c.status === 'SETTLED' ? '#10b981' : '#f59e0b' }}>
                  {c.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
