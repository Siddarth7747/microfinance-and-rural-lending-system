import React, { useState } from 'react';
import { loanGroupApi } from '../../api/loanGroupApi';

export const GrtSchedulingPanel = ({ groupId }) => {
  const [remarks, setRemarks] = useState('');

  const handleCompleteGrt = async () => {
    try {
      await loanGroupApi.completeGrt(groupId || 1, remarks || 'All 5 members answered cross-guarantee rules successfully.');
      alert('Group Readiness Test (GRT) Verified & Passed!');
    } catch (err) {
      alert('Error completing GRT');
    }
  };

  return (
    <div className="glass-card" style={{ padding: '20px' }}>
      <h4 style={{ color: '#f8fafc' }}>GRT (Group Readiness Test) Verification</h4>
      <p style={{ color: '#94a3b8', fontSize: '13px', margin: '8px 0' }}>Verify group discipline, member cross-guarantees, and compulsory group training (CGT).</p>
      <input className="form-input" placeholder="GRT Field Remarks..." value={remarks} onChange={(e) => setRemarks(e.target.value)} />
      <button onClick={handleCompleteGrt} className="btn-primary" style={{ marginTop: '12px' }}>Pass & Signoff GRT</button>
    </div>
  );
};
