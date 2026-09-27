import React, { useState } from 'react';

export const WriteOffApprovalForm = () => {
  const [loanAccount, setLoanAccount] = useState('LN-MFI-2026-901');
  const [writeOffAmount, setWriteOffAmount] = useState('18500');
  const [reason, setReason] = useState('Borrower Deceased / Untraceable');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bad Debt Write-Off Request for ₹${writeOffAmount} submitted for Board / Credit Committee Approval.`);
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card" style={{ padding: '24px' }}>
      <h3 style={{ color: '#f8fafc', marginBottom: '16px' }}>Bad Debt Write-Off Approval Panel</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>NPA Loan Account *</label>
          <input className="form-input" required value={loanAccount} onChange={(e) => setLoanAccount(e.target.value)} />
        </div>
        <div>
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Write-Off Amount (₹) *</label>
          <input className="form-input" type="number" required value={writeOffAmount} onChange={(e) => setWriteOffAmount(e.target.value)} />
        </div>
        <div style={{ gridColumn: '1 / -1' }}>
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Write-Off Justification Reason *</label>
          <select className="form-input" value={reason} onChange={(e) => setReason(e.target.value)}>
            <option value="Borrower Deceased / Untraceable">Borrower Deceased / Untraceable</option>
            <option value="Natural Calamity Impact">Natural Calamity Impact</option>
            <option value="Complete Asset Loss">Complete Asset Loss</option>
            <option value="Exhausted All Recovery Options (>365 DPD)">Exhausted All Recovery Options (&gt;365 DPD)</option>
          </select>
        </div>
      </div>
      <button type="submit" className="btn-primary" style={{ marginTop: '20px', background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)' }}>
        Submit Write-Off Recommendation
      </button>
    </form>
  );
};
