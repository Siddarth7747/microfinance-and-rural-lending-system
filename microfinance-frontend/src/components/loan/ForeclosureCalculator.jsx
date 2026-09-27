import React, { useState } from 'react';

export const ForeclosureCalculator = () => {
  const [outstandingPrincipal, setOutstandingPrincipal] = useState(25000);
  const [accruedInterest, setAccruedInterest] = useState(450);
  const [foreclosureFeePercent, setForeclosureFeePercent] = useState(2.0);

  const feeAmount = (outstandingPrincipal * foreclosureFeePercent) / 100;
  const totalSettlement = outstandingPrincipal + accruedInterest + feeAmount;

  return (
    <div className="glass-card" style={{ padding: '24px' }}>
      <h3 style={{ color: '#f8fafc', marginBottom: '16px' }}>Loan Foreclosure Settlement Calculator</h3>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
        <div>
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Outstanding Principal (₹)</label>
          <input className="form-input" type="number" value={outstandingPrincipal} onChange={(e) => setOutstandingPrincipal(Number(e.target.value))} />
        </div>
        <div>
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Accrued Interest till Date (₹)</label>
          <input className="form-input" type="number" value={accruedInterest} onChange={(e) => setAccruedInterest(Number(e.target.value))} />
        </div>
      </div>

      <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px' }}>
          <span style={{ color: '#94a3b8' }}>Principal Balance:</span>
          <span style={{ color: '#f8fafc' }}>₹{outstandingPrincipal.toLocaleString()}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px' }}>
          <span style={{ color: '#94a3b8' }}>Interest Accrual:</span>
          <span style={{ color: '#f8fafc' }}>₹{accruedInterest.toLocaleString()}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '14px' }}>
          <span style={{ color: '#94a3b8' }}>Foreclosure Charges ({foreclosureFeePercent}%):</span>
          <span style={{ color: '#f59e0b' }}>₹{feeAmount.toLocaleString()}</span>
        </div>
        <hr style={{ borderColor: 'rgba(255,255,255,0.1)', marginBottom: '12px' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '16px', fontWeight: 'bold' }}>
          <span style={{ color: '#f8fafc' }}>Total Settlement Amount:</span>
          <span style={{ color: '#10b981' }}>₹{totalSettlement.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};
