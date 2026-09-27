import React, { useState } from 'react';

export const RestructuringForm = () => {
  const [loanAccount, setLoanAccount] = useState('LN-MFI-2026-804');
  const [additionalMonths, setAdditionalMonths] = useState('6');
  const [reason, setReason] = useState('Crop Failure due to Drought');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Restructuring request submitted for ${loanAccount}. Extended tenure by ${additionalMonths} months.`);
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card" style={{ padding: '24px' }}>
      <h3 style={{ color: '#f8fafc', marginBottom: '16px' }}>Loan Restructuring & Rescheduling Request</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Overdue Loan Account *</label>
          <input className="form-input" required value={loanAccount} onChange={(e) => setLoanAccount(e.target.value)} />
        </div>
        <div>
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Additional Tenure Extension (Months) *</label>
          <input className="form-input" type="number" required value={additionalMonths} onChange={(e) => setAdditionalMonths(e.target.value)} />
        </div>
        <div style={{ gridColumn: '1 / -1' }}>
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Restructuring Reason *</label>
          <input className="form-input" required value={reason} onChange={(e) => setReason(e.target.value)} />
        </div>
      </div>
      <button type="submit" className="btn-primary" style={{ marginTop: '20px' }}>Submit Restructuring Proposal</button>
    </form>
  );
};
