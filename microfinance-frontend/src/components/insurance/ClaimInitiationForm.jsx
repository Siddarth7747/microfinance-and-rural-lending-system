import React, { useState } from 'react';
import { insuranceApi } from '../../api/insuranceApi';

export const ClaimInitiationForm = () => {
  const [claimType, setClaimType] = useState('DEATH');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await insuranceApi.fileClaim({ loanId: 1, borrowerId: 1, policyNumber: 'POL-2026-99', claimType, claimAmount: 30000 });
      alert('Insurance Claim Submitted Successfully to Underwriters!');
    } catch (err) {
      alert('Error submitting claim');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card" style={{ padding: '20px' }}>
      <h4 style={{ color: '#f8fafc', marginBottom: '12px' }}>Initiate Insurance Claim (Death / Disability)</h4>
      <select className="form-input" value={claimType} onChange={(e) => setClaimType(e.target.value)}>
        <option value="DEATH">BORROWER DEATH CLAIM</option>
        <option value="DISABILITY">PERMANENT DISABILITY CLAIM</option>
        <option value="SPOUSE_DEATH">CO-BORROWER / SPOUSE DEATH</option>
      </select>
      <button type="submit" className="btn-primary" style={{ marginTop: '12px' }}>File Insurance Claim</button>
    </form>
  );
};
