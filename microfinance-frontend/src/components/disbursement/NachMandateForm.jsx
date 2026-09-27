import React, { useState } from 'react';

export const NachMandateForm = () => {
  const [bankAcc, setBankAcc] = useState('501002341904');
  const [ifsc, setIfsc] = useState('HDFC0000240');
  const [maxAmount, setMaxAmount] = useState('5000');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`e-NACH Mandate for A/C ${bankAcc} registered! Max debit limit: ₹${maxAmount}`);
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card" style={{ padding: '24px' }}>
      <h3 style={{ color: '#f8fafc', marginBottom: '16px' }}>e-NACH / UPI Auto-Debit Mandate Registration</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Bank Account Number *</label>
          <input className="form-input" required value={bankAcc} onChange={(e) => setBankAcc(e.target.value)} />
        </div>
        <div>
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>IFSC Code *</label>
          <input className="form-input" required value={ifsc} onChange={(e) => setIfsc(e.target.value)} />
        </div>
        <div style={{ gridColumn: '1 / -1' }}>
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Max Monthly Auto-Debit Limit (₹) *</label>
          <input className="form-input" type="number" required value={maxAmount} onChange={(e) => setMaxAmount(e.target.value)} />
        </div>
      </div>
      <button type="submit" className="btn-primary" style={{ marginTop: '20px' }}>Register e-NACH Mandate</button>
    </form>
  );
};
