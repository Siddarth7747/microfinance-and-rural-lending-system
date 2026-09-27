import React from 'react';

export const PaymentHistoryPage = () => {
  const history = [
    { txnId: 'TXN-9912', date: '2026-08-15', amount: '₹2,750', mode: 'CASH', officer: 'Ramesh Singh', status: 'SUCCESS' },
    { txnId: 'TXN-8841', date: '2026-07-15', amount: '₹2,750', mode: 'UPI', officer: 'Self (App)', status: 'SUCCESS' },
    { txnId: 'TXN-7702', date: '2026-06-15', amount: '₹2,750', mode: 'NACH AUTO-DEBIT', officer: 'Auto-Debit', status: 'SUCCESS' }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div className="glass-card" style={{ padding: '24px' }}>
        <h2 style={{ color: '#f8fafc', marginBottom: '4px' }}>Borrower Payment Passbook & History</h2>
        <p style={{ color: '#94a3b8', fontSize: '13px' }}>Loan Account: LN-MFI-2026-1001 (Sunita Devi)</p>
      </div>

      <div className="glass-card" style={{ padding: '24px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8' }}>
              <th style={{ padding: '10px' }}>Transaction ID</th>
              <th style={{ padding: '10px' }}>Date</th>
              <th style={{ padding: '10px' }}>Amount Paid</th>
              <th style={{ padding: '10px' }}>Mode</th>
              <th style={{ padding: '10px' }}>Collected By</th>
              <th style={{ padding: '10px' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {history.map((h, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#f8fafc' }}>
                <td style={{ padding: '10px', color: '#6366f1', fontWeight: 'bold' }}>{h.txnId}</td>
                <td style={{ padding: '10px' }}>{h.date}</td>
                <td style={{ padding: '10px', color: '#10b981', fontWeight: 'bold' }}>{h.amount}</td>
                <td style={{ padding: '10px' }}>{h.mode}</td>
                <td style={{ padding: '10px', color: '#94a3b8' }}>{h.officer}</td>
                <td style={{ padding: '10px' }}>
                  <span style={{ padding: '4px 10px', borderRadius: '12px', fontSize: '11px', background: 'rgba(16,185,129,0.2)', color: '#10b981' }}>
                    {h.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistoryPage;
