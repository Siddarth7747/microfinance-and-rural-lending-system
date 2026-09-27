import React from 'react';

export const LegalNoticeWorkflow = () => {
  const steps = [
    { stage: '1. Soft Reminder', status: 'COMPLETED', date: '10 Aug 2026' },
    { stage: '2. Demand Notice', status: 'COMPLETED', date: '20 Aug 2026' },
    { stage: '3. Legal Notice (Sec 138)', status: 'IN_PROGRESS', date: '01 Sep 2026' },
    { stage: '4. Lok Adalat / Arbitration', status: 'PENDING', date: '-' }
  ];

  return (
    <div className="glass-card" style={{ padding: '24px' }}>
      <h3 style={{ color: '#f8fafc', marginBottom: '16px' }}>Legal Recovery Notice Workflow (Section 138 / Arbitration)</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {steps.map((item, idx) => (
          <div key={idx} style={{ background: 'rgba(15,23,42,0.5)', padding: '12px 16px', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ color: '#f8fafc', fontWeight: 'bold' }}>{item.stage}</div>
              <div style={{ color: '#94a3b8', fontSize: '12px' }}>Date: {item.date}</div>
            </div>
            <span style={{
              padding: '4px 12px', borderRadius: '12px', fontSize: '11px', fontWeight: '600',
              background: item.status === 'COMPLETED' ? 'rgba(16,185,129,0.2)' : item.status === 'IN_PROGRESS' ? 'rgba(245,158,11,0.2)' : 'rgba(148,163,184,0.1)',
              color: item.status === 'COMPLETED' ? '#10b981' : item.status === 'IN_PROGRESS' ? '#f59e0b' : '#94a3b8'
            }}>
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
