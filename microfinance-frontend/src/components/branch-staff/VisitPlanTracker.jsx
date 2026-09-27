import React from 'react';

export const VisitPlanTracker = () => {
  const visits = [
    { time: '09:00 AM', centre: 'Centre #12 (Rampur)', task: 'Weekly EMI Collection', status: 'COMPLETED' },
    { time: '11:30 AM', centre: 'Centre #08 (Shivpur)', task: 'GRT Verification & Member Orientation', status: 'COMPLETED' },
    { time: '02:30 PM', centre: 'Village Belwa', task: 'Overdue Borrower Follow-up (PAR30)', status: 'IN_PROGRESS' },
    { time: '04:30 PM', centre: 'Main Branch', task: 'Cash Deposit & Day Closing', status: 'PENDING' }
  ];

  return (
    <div className="glass-card" style={{ padding: '24px' }}>
      <h3 style={{ color: '#f8fafc', marginBottom: '16px' }}>Daily Field Officer Visit Plan & Route</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {visits.map((v, idx) => (
          <div key={idx} style={{ background: 'rgba(15,23,42,0.5)', padding: '12px 16px', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ color: '#6366f1', fontWeight: 'bold' }}>{v.time} — {v.centre}</div>
              <div style={{ color: '#94a3b8', fontSize: '12px' }}>{v.task}</div>
            </div>
            <span style={{
              padding: '4px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: '600',
              background: v.status === 'COMPLETED' ? 'rgba(16,185,129,0.2)' : v.status === 'IN_PROGRESS' ? 'rgba(245,158,11,0.2)' : 'rgba(148,163,184,0.1)',
              color: v.status === 'COMPLETED' ? '#10b981' : v.status === 'IN_PROGRESS' ? '#f59e0b' : '#94a3b8'
            }}>
              {v.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
