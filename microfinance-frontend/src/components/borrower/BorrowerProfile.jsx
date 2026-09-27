import React from 'react';
import { formatCurrency } from '../../utils/formatters';

export const BorrowerProfile = ({ borrower }) => {
  if (!borrower) return <div className="glass-card" style={{ padding: '24px', color: '#94a3b8' }}>Select a borrower to view profile details.</div>;

  return (
    <div className="glass-card" style={{ padding: '24px' }}>
      <h3 style={{ color: '#6366f1', marginBottom: '12px' }}>{borrower.fullName}</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '14px' }}>
        <div><strong style={{ color: '#94a3b8' }}>BRN:</strong> {borrower.brn}</div>
        <div><strong style={{ color: '#94a3b8' }}>Aadhaar:</strong> {borrower.aadhaarNumberMasked}</div>
        <div><strong style={{ color: '#94a3b8' }}>Mobile:</strong> {borrower.mobileNumber}</div>
        <div><strong style={{ color: '#94a3b8' }}>Village:</strong> {borrower.village}</div>
        <div><strong style={{ color: '#94a3b8' }}>Household Income:</strong> {formatCurrency(borrower.annualHouseholdIncome)}</div>
        <div><strong style={{ color: '#94a3b8' }}>CIBIL Score:</strong> <span style={{ color: '#10b981', fontWeight: 'bold' }}>{borrower.cibilScore || 725}</span></div>
      </div>
    </div>
  );
};
