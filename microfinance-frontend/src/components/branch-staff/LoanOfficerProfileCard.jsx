import React from 'react';

export const LoanOfficerProfileCard = ({ name = 'Officer Rahul Kumar' }) => (
  <div className="glass-card" style={{ padding: '20px' }}>
    <h4 style={{ color: '#f8fafc' }}>{name}</h4>
    <div style={{ color: '#94a3b8', fontSize: '13px', marginTop: '4px' }}>Designation: Senior Field Officer | Branch: Varanasi Main</div>
  </div>
);
