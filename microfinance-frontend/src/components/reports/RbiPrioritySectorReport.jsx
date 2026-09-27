import React from 'react';

export const RbiPrioritySectorReport = () => {
  return (
    <div className="glass-card" style={{ padding: '24px' }}>
      <h3 style={{ color: '#f8fafc', marginBottom: '16px' }}>RBI Priority Sector Lending (PSL) Compliance Return</h3>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
        <div style={{ background: 'rgba(15,23,42,0.5)', padding: '16px', borderRadius: '10px' }}>
          <div style={{ color: '#94a3b8', fontSize: '12px' }}>Qualifying Microfinance Assets</div>
          <div style={{ color: '#10b981', fontWeight: 'bold', fontSize: '20px', marginTop: '4px' }}>88.5%</div>
          <div style={{ color: '#94a3b8', fontSize: '11px', marginTop: '4px' }}>Min RBI Threshold: 75.0% (COMPLIANT)</div>
        </div>
        <div style={{ background: 'rgba(15,23,42,0.5)', padding: '16px', borderRadius: '10px' }}>
          <div style={{ color: '#94a3b8', fontSize: '12px' }}>Household Income Compliance</div>
          <div style={{ color: '#6366f1', fontWeight: 'bold', fontSize: '20px', marginTop: '4px' }}>100.0%</div>
          <div style={{ color: '#94a3b8', fontSize: '11px', marginTop: '4px' }}>Ceiling: ₹3,00,000 p.a. (COMPLIANT)</div>
        </div>
      </div>
    </div>
  );
};
