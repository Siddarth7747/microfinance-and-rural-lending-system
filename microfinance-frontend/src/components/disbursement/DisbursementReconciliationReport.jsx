import React from 'react';

export const DisbursementReconciliationReport = () => {
  const records = [
    { loanAcc: 'LN-MFI-2026-1001', amount: '₹30,000', mode: 'NEFT', utr: 'UTR88492019', status: 'SUCCESS', bankMatched: true },
    { loanAcc: 'LN-MFI-2026-1002', amount: '₹25,000', mode: 'UPI', utr: 'UPI99401294', status: 'SUCCESS', bankMatched: true },
    { loanAcc: 'LN-MFI-2026-1003', amount: '₹40,000', mode: 'NEFT', utr: 'UTR88492020', status: 'PENDING', bankMatched: false }
  ];

  return (
    <div className="glass-card" style={{ padding: '24px' }}>
      <h3 style={{ color: '#f8fafc', marginBottom: '16px' }}>Disbursement vs Bank Statement Reconciliation</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8' }}>
            <th style={{ padding: '10px' }}>Loan A/C</th>
            <th style={{ padding: '10px' }}>Amount</th>
            <th style={{ padding: '10px' }}>Mode</th>
            <th style={{ padding: '10px' }}>UTR / Reference</th>
            <th style={{ padding: '10px' }}>Bank Match</th>
          </tr>
        </thead>
        <tbody>
          {records.map((r, idx) => (
            <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#f8fafc' }}>
              <td style={{ padding: '10px', color: '#6366f1' }}>{r.loanAcc}</td>
              <td style={{ padding: '10px', fontWeight: 'bold' }}>{r.amount}</td>
              <td style={{ padding: '10px' }}>{r.mode}</td>
              <td style={{ padding: '10px', color: '#94a3b8' }}>{r.utr}</td>
              <td style={{ padding: '10px' }}>
                <span style={{ padding: '4px 10px', borderRadius: '12px', fontSize: '11px', background: r.bankMatched ? 'rgba(16,185,129,0.2)' : 'rgba(239,68,68,0.2)', color: r.bankMatched ? '#10b981' : '#ef4444' }}>
                  {r.bankMatched ? 'MATCHED' : 'UNRECONCILED'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
