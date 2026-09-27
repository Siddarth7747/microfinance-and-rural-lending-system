import React, { useState } from 'react';

export const RecoveryActionPlanForm = () => {
  const [loanAccount, setLoanAccount] = useState('LN-MFI-2026-1042');
  const [actionType, setActionType] = useState('HOME_VISIT');
  const [remarks, setRemarks] = useState('');
  const [nextFollowUpDate, setNextFollowUpDate] = useState('2026-09-05');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Recovery Action (${actionType}) logged for ${loanAccount}!`);
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card" style={{ padding: '24px' }}>
      <h3 style={{ color: '#f8fafc', marginBottom: '16px' }}>Field Recovery Action Plan Logging</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Loan Account Number *</label>
          <input className="form-input" required value={loanAccount} onChange={(e) => setLoanAccount(e.target.value)} />
        </div>
        <div>
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Action Type *</label>
          <select className="form-input" value={actionType} onChange={(e) => setActionType(e.target.value)}>
            <option value="HOME_VISIT">Home Visit by Loan Officer</option>
            <option value="CENTRE_MEETING_COUNSELING">Centre Meeting Counseling</option>
            <option value="GUARANTOR_CONTACT">JLG Cross-Guarantor Contact</option>
            <option value="DEMAND_LETTER">Issued Demand Notice</option>
          </select>
        </div>
        <div>
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Next Follow-Up Date *</label>
          <input className="form-input" type="date" required value={nextFollowUpDate} onChange={(e) => setNextFollowUpDate(e.target.value)} />
        </div>
        <div style={{ gridColumn: '1 / -1' }}>
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Field Officer Remarks *</label>
          <input className="form-input" required value={remarks} onChange={(e) => setRemarks(e.target.value)} placeholder="Enter details of conversation and agreed commitment date..." />
        </div>
      </div>
      <button type="submit" className="btn-primary" style={{ marginTop: '20px' }}>Log Recovery Action</button>
    </form>
  );
};
