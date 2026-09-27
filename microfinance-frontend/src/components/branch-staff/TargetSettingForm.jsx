import React, { useState } from 'react';

export const TargetSettingForm = () => {
  const [officerName, setOfficerName] = useState('Ramesh Singh');
  const [disbursementTarget, setDisbursementTarget] = useState('500000');
  const [collectionTarget, setCollectionTarget] = useState('450000');
  const [newBorrowersTarget, setNewBorrowersTarget] = useState('15');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Targets updated for ${officerName}! Disbursement: ₹${disbursementTarget}, Collection: ₹${collectionTarget}`);
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card" style={{ padding: '24px' }}>
      <h3 style={{ color: '#f8fafc', marginBottom: '16px' }}>Loan Officer Monthly Target Configuration</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Loan Officer *</label>
          <input className="form-input" required value={officerName} onChange={(e) => setOfficerName(e.target.value)} />
        </div>
        <div>
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Disbursement Target (₹) *</label>
          <input className="form-input" type="number" required value={disbursementTarget} onChange={(e) => setDisbursementTarget(e.target.value)} />
        </div>
        <div>
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Collection Target (₹) *</label>
          <input className="form-input" type="number" required value={collectionTarget} onChange={(e) => setCollectionTarget(e.target.value)} />
        </div>
        <div>
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>New Borrower Target (Count) *</label>
          <input className="form-input" type="number" required value={newBorrowersTarget} onChange={(e) => setNewBorrowersTarget(e.target.value)} />
        </div>
      </div>
      <button type="submit" className="btn-primary" style={{ marginTop: '20px' }}>Save Monthly Targets</button>
    </form>
  );
};
