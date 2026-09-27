import React, { useState } from 'react';

export const MemberAdditionRemovalForm = ({ groupId = 1 }) => {
  const [borrowerId, setBorrowerId] = useState('');
  const [action, setAction] = useState('ADD');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Member ${borrowerId} ${action === 'ADD' ? 'added to' : 'removed from'} group #${groupId}`);
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card" style={{ padding: '24px' }}>
      <h3 style={{ color: '#f8fafc', marginBottom: '16px' }}>Manage Group Membership</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Borrower ID *</label>
          <input className="form-input" required value={borrowerId} onChange={(e) => setBorrowerId(e.target.value)} placeholder="e.g. 102" />
        </div>
        <div>
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Action *</label>
          <select className="form-input" value={action} onChange={(e) => setAction(e.target.value)}>
            <option value="ADD">Add to Group</option>
            <option value="REMOVE">Remove from Group</option>
          </select>
        </div>
      </div>
      <button type="submit" className="btn-primary" style={{ marginTop: '20px' }}>
        {action === 'ADD' ? 'Add Member' : 'Remove Member'}
      </button>
    </form>
  );
};
