import React, { useState } from 'react';

export const BureauSubmissionFilePanel = () => {
  const [bureau, setBureau] = useState('CIBIL');

  const handleGenerate = () => {
    alert(`Monthly data submission file for ${bureau} generated in text/CSV format!`);
  };

  return (
    <div className="glass-card" style={{ padding: '24px' }}>
      <h3 style={{ color: '#f8fafc', marginBottom: '16px' }}>Credit Bureau Data Batch File Generator</h3>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
        <select className="form-input" style={{ width: '220px' }} value={bureau} onChange={(e) => setBureau(e.target.value)}>
          <option value="CIBIL">CIBIL Consumer File Format</option>
          <option value="EQUIFAX">Equifax Microfinance Format</option>
          <option value="EXPERIAN">Experian MFI Format</option>
          <option value="HIGHMARK">CRIF High Mark Format</option>
        </select>
        <button className="btn-primary" onClick={handleGenerate}>
          ⚡ Generate {bureau} Batch File
        </button>
      </div>
      <p style={{ color: '#94a3b8', fontSize: '12px' }}>
        Generates standard RBI-mandated monthly credit bureau data feed containing active loan balances, DPD status, and borrower identifiers.
      </p>
    </div>
  );
};
