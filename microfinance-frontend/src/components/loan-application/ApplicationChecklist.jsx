import React from 'react';
import { CheckSquare } from 'lucide-react';

export const ApplicationChecklist = () => (
  <div className="glass-card" style={{ padding: '20px' }}>
    <h4 style={{ color: '#f8fafc', marginBottom: '12px' }}>Pre-Approval Underwriting Checklist</h4>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: '#94a3b8' }}>
      <div><CheckSquare size={16} color="#10b981" /> Aadhaar eKYC Verified (Verhoeff Passed)</div>
      <div><CheckSquare size={16} color="#10b981" /> HighMark / CIBIL Multi-Lending Check Cleared</div>
      <div><CheckSquare size={16} color="#10b981" /> RBI Household Income Ceiling (&lt; 3 Lakhs) Verified</div>
      <div><CheckSquare size={16} color="#10b981" /> JLG Mutual Guarantee Resolution Signed</div>
    </div>
  </div>
);
