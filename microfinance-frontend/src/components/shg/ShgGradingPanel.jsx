import React from 'react';

export const ShgGradingPanel = ({ grade = 'GRADE_A', score = 92 }) => {
  return (
    <div className="glass-card" style={{ padding: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ color: '#f8fafc' }}>NABARD SHG Grading Scorecard</h3>
        <span style={{ padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 'bold', background: 'rgba(16,185,129,0.2)', color: '#10b981' }}>
          {grade} ({score}/100)
        </span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div style={{ background: 'rgba(15,23,42,0.5)', padding: '12px', borderRadius: '8px' }}>
          <div style={{ color: '#94a3b8', fontSize: '12px' }}>Regularity of Meetings</div>
          <div style={{ color: '#10b981', fontWeight: 'bold' }}>25 / 25 Points</div>
        </div>
        <div style={{ background: 'rgba(15,23,42,0.5)', padding: '12px', borderRadius: '8px' }}>
          <div style={{ color: '#94a3b8', fontSize: '12px' }}>Savings Mobilization</div>
          <div style={{ color: '#10b981', fontWeight: 'bold' }}>23 / 25 Points</div>
        </div>
        <div style={{ background: 'rgba(15,23,42,0.5)', padding: '12px', borderRadius: '8px' }}>
          <div style={{ color: '#94a3b8', fontSize: '12px' }}>Internal Loan Recovery</div>
          <div style={{ color: '#10b981', fontWeight: 'bold' }}>24 / 25 Points</div>
        </div>
        <div style={{ background: 'rgba(15,23,42,0.5)', padding: '12px', borderRadius: '8px' }}>
          <div style={{ color: '#94a3b8', fontSize: '12px' }}>Bookkeeping & Audit</div>
          <div style={{ color: '#10b981', fontWeight: 'bold' }}>20 / 25 Points</div>
        </div>
      </div>
    </div>
  );
};
