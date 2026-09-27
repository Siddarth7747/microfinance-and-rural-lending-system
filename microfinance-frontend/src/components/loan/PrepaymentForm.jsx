import React, { useState } from 'react';

export const PrepaymentForm = ({ onSuccess }) => {
  const [loanAccountNumber, setLoanAccountNumber] = useState('LN-MFI-2026-1001');
  const [prepaymentAmount, setPrepaymentAmount] = useState('5000');
  const [paymentMode, setPaymentMode] = useState('UPI');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Partial Prepayment of ₹${prepaymentAmount} logged for ${loanAccountNumber}! Outstanding balance recalculated.`);
    if (onSuccess) onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card" style={{ padding: '24px' }}>
      <h3 style={{ color: '#f8fafc', marginBottom: '16px' }}>Partial Prepayment Entry</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Loan Account Number *</label>
          <input className="form-input" required value={loanAccountNumber} onChange={(e) => setLoanAccountNumber(e.target.value)} />
        </div>
        <div>
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Prepayment Amount (₹) *</label>
          <input className="form-input" type="number" required value={prepaymentAmount} onChange={(e) => setPrepaymentAmount(e.target.value)} />
        </div>
        <div style={{ gridColumn: '1 / -1' }}>
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Payment Mode</label>
          <select className="form-input" value={paymentMode} onChange={(e) => setPaymentMode(e.target.value)}>
            <option value="UPI">UPI</option>
            <option value="NEFT">NEFT / Net Banking</option>
            <option value="CASH">Cash at Branch</option>
          </select>
        </div>
      </div>
      <button type="submit" className="btn-primary" style={{ marginTop: '20px' }}>
        Process Partial Prepayment
      </button>
    </form>
  );
};
