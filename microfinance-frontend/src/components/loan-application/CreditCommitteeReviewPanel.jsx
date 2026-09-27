import React from 'react';

export const CreditCommitteeReviewPanel = ({ application, onApprove, onReject }) => {
  const app = application || {
    id: 'APP-2026-884',
    borrowerName: 'Anita Sharma',
    groupName: 'Radha Krishna JLG',
    requestedAmount: '40,000',
    requestedTenure: '12 Months',
    purpose: 'Cattle Purchase & Dairy Feed',
    cibilScore: 720,
    annualIncome: '₹1,95,000',
    officerRecommendation: 'RECOMMENDED - Strong group cohesion & past 100% repayment record.'
  };

  return (
    <div className="glass-card" style={{ padding: '24px' }}>
      <h3 style={{ color: '#f8fafc', marginBottom: '16px' }}>Credit Committee Decision Review</h3>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
        <div style={{ background: 'rgba(15,23,42,0.5)', padding: '12px', borderRadius: '10px' }}>
          <div style={{ color: '#94a3b8', fontSize: '12px' }}>Applicant Name</div>
          <div style={{ color: '#f8fafc', fontWeight: 'bold' }}>{app.borrowerName}</div>
          <div style={{ color: '#6366f1', fontSize: '12px' }}>{app.groupName}</div>
        </div>
        <div style={{ background: 'rgba(15,23,42,0.5)', padding: '12px', borderRadius: '10px' }}>
          <div style={{ color: '#94a3b8', fontSize: '12px' }}>Loan Amount & Tenure</div>
          <div style={{ color: '#10b981', fontWeight: 'bold' }}>₹{app.requestedAmount}</div>
          <div style={{ color: '#94a3b8', fontSize: '12px' }}>{app.requestedTenure}</div>
        </div>
      </div>

      <div style={{ background: 'rgba(15,23,42,0.5)', padding: '12px', borderRadius: '10px', marginBottom: '20px' }}>
        <div style={{ color: '#94a3b8', fontSize: '12px' }}>Field Officer Recommendation</div>
        <div style={{ color: '#f8fafc', fontSize: '13px', marginTop: '4px' }}>{app.officerRecommendation}</div>
      </div>

      <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
        <button className="btn-secondary" style={{ background: 'rgba(239,68,68,0.2)', color: '#ef4444', border: 'none' }} onClick={() => onReject && onReject(app.id)}>
          Reject Application
        </button>
        <button className="btn-primary" onClick={() => onApprove && onApprove(app.id)}>
          Sanction Loan
        </button>
      </div>
    </div>
  );
};
