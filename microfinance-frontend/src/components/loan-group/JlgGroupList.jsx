import React from 'react';

export const JlgGroupList = ({ groups = [] }) => (
  <div className="glass-card" style={{ padding: '20px' }}>
    <h4 style={{ color: '#f8fafc', marginBottom: '12px' }}>Registered JLG Groups</h4>
    {groups.length === 0 ? (
      <div style={{ color: '#94a3b8', fontSize: '14px' }}>No JLG groups registered in this branch.</div>
    ) : (
      groups.map((g) => (
        <div key={g.id} style={{ padding: '12px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between' }}>
          <span>{g.groupName} ({g.groupCode})</span>
          <span style={{ color: '#10b981' }}>Cohesion: {g.cohesionScore || 85}%</span>
        </div>
      ))
    )}
  </div>
);
