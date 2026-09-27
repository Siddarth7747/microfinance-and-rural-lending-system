import React from 'react';

export const BranchManagerApprovalQueue = ({ onApprove }) => (
  <div className="glass-card" style={{ padding: '20px' }}>
    <h4 style={{ color: '#f8fafc' }}>Branch Manager Approval Queue</h4>
    <div style={{ marginTop: '12px', display: 'flex', gap: '12px' }}>
      <button onClick={() => onApprove(1)} className="btn-primary" style={{ background: '#10b981' }}>Approve Sanction</button>
      <button className="btn-secondary" style={{ color: '#ef4444' }}>Reject Application</button>
    </div>
  </div>
);
