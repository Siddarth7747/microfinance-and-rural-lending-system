import React from 'react';

export const ApplicationStatusTracker = ({ currentStage = 3 }) => {
  const stages = [
    { id: 1, label: 'Application Submitted' },
    { id: 2, label: 'KYC & Credit Bureau' },
    { id: 3, label: 'Group Test (GRT)' },
    { id: 4, label: 'Manager Approval' },
    { id: 5, label: 'Disbursement' }
  ];

  return (
    <div className="glass-card" style={{ padding: '24px' }}>
      <h4 style={{ color: '#f8fafc', marginBottom: '20px' }}>Loan Application Processing Pipeline</h4>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>
        {stages.map((stage) => {
          const isDone = stage.id <= currentStage;
          const isCurrent = stage.id === currentStage;
          return (
            <div key={stage.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1, flex: 1 }}>
              <div style={{
                width: '36px', height: '36px', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 'bold', fontSize: '14px',
                background: isCurrent ? '#6366f1' : isDone ? '#10b981' : 'rgba(255,255,255,0.1)',
                color: isDone || isCurrent ? '#fff' : '#94a3b8',
                border: isCurrent ? '3px solid rgba(99, 102, 241, 0.4)' : 'none'
              }}>
                {stage.id}
              </div>
              <div style={{
                marginTop: '8px', fontSize: '12px', textAlign: 'center',
                color: isCurrent ? '#6366f1' : isDone ? '#10b981' : '#94a3b8',
                fontWeight: isCurrent || isDone ? '600' : 'normal'
              }}>
                {stage.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
