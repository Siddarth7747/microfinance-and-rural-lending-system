import React, { useState } from 'react';

export const NomineeRegistrationForm = () => {
  const [nomineeName, setNomineeName] = useState('Ramesh Kumar');
  const [relationship, setRelationship] = useState('SPOUSE');
  const [aadhaar, setAadhaar] = useState('987654321098');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nominee ${nomineeName} (${relationship}) registered successfully!`);
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card" style={{ padding: '24px' }}>
      <h3 style={{ color: '#f8fafc', marginBottom: '16px' }}>Insurance Policy Nominee Registration</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Nominee Full Name *</label>
          <input className="form-input" required value={nomineeName} onChange={(e) => setNomineeName(e.target.value)} />
        </div>
        <div>
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Relationship with Borrower *</label>
          <select className="form-input" value={relationship} onChange={(e) => setRelationship(e.target.value)}>
            <option value="SPOUSE">Spouse</option>
            <option value="SON">Son</option>
            <option value="DAUGHTER">Daughter</option>
            <option value="PARENT">Parent</option>
          </select>
        </div>
        <div style={{ gridColumn: '1 / -1' }}>
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Nominee Aadhaar Number (12 digits) *</label>
          <input className="form-input" required maxLength={12} value={aadhaar} onChange={(e) => setAadhaar(e.target.value)} />
        </div>
      </div>
      <button type="submit" className="btn-primary" style={{ marginTop: '20px' }}>Register Nominee</button>
    </form>
  );
};
