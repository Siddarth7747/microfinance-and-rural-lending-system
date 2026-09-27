import React, { useState } from 'react';

export const InsuranceEnrolmentPanel = () => {
  const [coverageType, setCoverageType] = useState('LIFE_AND_DISABILITY');
  const [loanAmount, setLoanAmount] = useState('30000');
  const premiumRate = coverageType === 'LIFE_AND_DISABILITY' ? 0.018 : 0.015;
  const premium = Number(loanAmount) * premiumRate;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Insurance policy enrolled! Premium: ₹${premium.toFixed(2)} (${coverageType})`);
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card" style={{ padding: '24px' }}>
      <h3 style={{ color: '#f8fafc', marginBottom: '16px' }}>Credit Life & Disability Insurance Enrolment</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Coverage Type *</label>
          <select className="form-input" value={coverageType} onChange={(e) => setCoverageType(e.target.value)}>
            <option value="LIFE_AND_DISABILITY">Life + Permanent Disability (1.8%)</option>
            <option value="LIFE_ONLY">Life Only (1.5%)</option>
          </select>
        </div>
        <div>
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Sanctioned Loan Amount (₹) *</label>
          <input className="form-input" type="number" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} />
        </div>
      </div>
      <div style={{ marginTop: '16px', background: 'rgba(15,23,42,0.5)', padding: '12px', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: '#94a3b8', fontSize: '13px' }}>Calculated Premium:</span>
        <span style={{ color: '#10b981', fontWeight: 'bold', fontSize: '16px' }}>₹{premium.toFixed(2)}</span>
      </div>
      <button type="submit" className="btn-primary" style={{ marginTop: '20px' }}>Enrol Borrower in Policy</button>
    </form>
  );
};
