import React from 'react';

export const MfinReportPanel = () => {
  return (
    <div className="glass-card" style={{ padding: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ color: '#f8fafc' }}>MFIN Monthly Return Regulatory Submission</h3>
        <button className="btn-primary" onClick={() => alert('MFIN Monthly Return CSV exported!')}>
          📥 Export MFIN Return (CSV)
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
        <div style={{ background: 'rgba(15,23,42,0.5)', padding: '14px', borderRadius: '10px' }}>
          <div style={{ color: '#94a3b8', fontSize: '12px' }}>Active Borrowers</div>
          <div style={{ color: '#f8fafc', fontWeight: 'bold', fontSize: '18px', marginTop: '4px' }}>1,050</div>
        </div>
        <div style={{ background: 'rgba(15,23,42,0.5)', padding: '14px', borderRadius: '10px' }}>
          <div style={{ color: '#94a3b8', fontSize: '12px' }}>Gross Loan Portfolio</div>
          <div style={{ color: '#10b981', fontWeight: 'bold', fontSize: '18px', marginTop: '4px' }}>₹2.85 Cr</div>
        </div>
        <div style={{ background: 'rgba(15,23,42,0.5)', padding: '14px', borderRadius: '10px' }}>
          <div style={{ color: '#94a3b8', fontSize: '12px' }}>PAR30 Ratio</div>
          <div style={{ color: '#f59e0b', fontWeight: 'bold', fontSize: '18px', marginTop: '4px' }}>1.8%</div>
        </div>
        <div style={{ background: 'rgba(15,23,42,0.5)', padding: '14px', borderRadius: '10px' }}>
          <div style={{ color: '#94a3b8', fontSize: '12px' }}>NPA (&gt;90 DPD)</div>
          <div style={{ color: '#ef4444', fontWeight: 'bold', fontSize: '18px', marginTop: '4px' }}>0.5%</div>
        </div>
      </div>
    </div>
  );
};
