import React from 'react';

export const PortfolioInsuranceSummary = () => {
  return (
    <div className="glass-card" style={{ padding: '24px' }}>
      <h3 style={{ color: '#f8fafc', marginBottom: '16px' }}>Portfolio Insurance Protection Overview</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
        <div style={{ background: 'rgba(15,23,42,0.5)', padding: '16px', borderRadius: '12px' }}>
          <div style={{ color: '#94a3b8', fontSize: '12px' }}>Active Covered Lives</div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#6366f1', marginTop: '4px' }}>1,050</div>
        </div>
        <div style={{ background: 'rgba(15,23,42,0.5)', padding: '16px', borderRadius: '12px' }}>
          <div style={{ color: '#94a3b8', fontSize: '12px' }}>Total Sum Assured</div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#10b981', marginTop: '4px' }}>₹2.85 Cr</div>
        </div>
        <div style={{ background: 'rgba(15,23,42,0.5)', padding: '16px', borderRadius: '12px' }}>
          <div style={{ color: '#94a3b8', fontSize: '12px' }}>Settled Claims YTD</div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#f59e0b', marginTop: '4px' }}>14 (100%)</div>
        </div>
      </div>
    </div>
  );
};
