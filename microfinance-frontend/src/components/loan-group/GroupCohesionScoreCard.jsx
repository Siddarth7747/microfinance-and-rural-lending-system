import React from 'react';

export const GroupCohesionScoreCard = ({ score = 88, groupName = 'Mahila Utthan JLG' }) => {
  const getBadgeColor = (s) => s >= 85 ? '#10b981' : s >= 70 ? '#f59e0b' : '#ef4444';

  return (
    <div className="glass-card" style={{ padding: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <div>
          <h3 style={{ color: '#f8fafc' }}>Group Cohesion Score</h3>
          <p style={{ color: '#94a3b8', fontSize: '12px' }}>{groupName}</p>
        </div>
        <div style={{ fontSize: '28px', fontWeight: 'bold', color: getBadgeColor(score) }}>
          {score}/100
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
        <div style={{ background: 'rgba(15,23,42,0.5)', padding: '10px', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ color: '#94a3b8', fontSize: '11px' }}>Meeting Attendance</div>
          <div style={{ color: '#10b981', fontWeight: 'bold', fontSize: '16px', marginTop: '2px' }}>96%</div>
        </div>
        <div style={{ background: 'rgba(15,23,42,0.5)', padding: '10px', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ color: '#94a3b8', fontSize: '11px' }}>Peer Support Index</div>
          <div style={{ color: '#6366f1', fontWeight: 'bold', fontSize: '16px', marginTop: '2px' }}>High</div>
        </div>
        <div style={{ background: 'rgba(15,23,42,0.5)', padding: '10px', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ color: '#94a3b8', fontSize: '11px' }}>On-Time Repayment</div>
          <div style={{ color: '#10b981', fontWeight: 'bold', fontSize: '16px', marginTop: '2px' }}>99%</div>
        </div>
      </div>
    </div>
  );
};
