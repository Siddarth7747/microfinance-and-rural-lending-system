import React, { useState } from 'react';

export const CashReconciliationPanel = () => {
  const [cashCollected, setCashCollected] = useState('45000');
  const [bankDeposited, setBankDeposited] = useState('45000');
  const variance = Number(cashCollected) - Number(bankDeposited);

  return (
    <div className="glass-card" style={{ padding: '24px' }}>
      <h3 style={{ color: '#f8fafc', marginBottom: '16px' }}>Field Cash vs Branch Deposit Reconciliation</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
        <div>
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Total Field Cash Collected (₹)</label>
          <input className="form-input" type="number" value={cashCollected} onChange={(e) => setCashCollected(e.target.value)} />
        </div>
        <div>
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Branch Bank Slip Deposit (₹)</label>
          <input className="form-input" type="number" value={bankDeposited} onChange={(e) => setBankDeposited(e.target.value)} />
        </div>
      </div>

      <div style={{ background: 'rgba(15,23,42,0.5)', padding: '16px', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ color: '#94a3b8', fontSize: '12px' }}>Reconciliation Status</div>
          <div style={{ fontWeight: 'bold', fontSize: '16px', color: variance === 0 ? '#10b981' : '#ef4444', marginTop: '2px' }}>
            {variance === 0 ? 'BALANCED' : `VARIANCE: ₹${variance}`}
          </div>
        </div>
        <button className="btn-primary" onClick={() => alert('Reconciliation submitted!')}>Confirm & Submit Slip</button>
      </div>
    </div>
  );
};
