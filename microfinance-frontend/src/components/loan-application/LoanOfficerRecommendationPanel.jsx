import React from 'react';

export const LoanOfficerRecommendationPanel = ({ onRecommend }) => (
  <div className="glass-card" style={{ padding: '20px' }}>
    <h4 style={{ color: '#f8fafc' }}>Field Officer Recommendation</h4>
    <p style={{ color: '#94a3b8', fontSize: '13px', marginTop: '4px' }}>Verify house visit & cash flow assessment.</p>
    <button onClick={onRecommend} className="btn-primary" style={{ marginTop: '12px' }}>Recommend for Sanction</button>
  </div>
);
