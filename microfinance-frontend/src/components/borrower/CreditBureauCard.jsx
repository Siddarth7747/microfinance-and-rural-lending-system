import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const CreditBureauCard = ({ score = 735, activeLoans = 1 }) => (
  <div className="glass-card" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '20px' }}>
    <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '16px', borderRadius: '14px', color: '#10b981' }}>
      <ShieldCheck size={32} />
    </div>
    <div>
      <h4 style={{ color: '#f8fafc' }}>HighMark / CIBIL Credit Bureau Report</h4>
      <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#10b981', marginTop: '4px' }}>
        {score} <span style={{ fontSize: '12px', color: '#94a3b8' }}>(Low Credit Risk)</span>
      </div>
      <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>Active MFI Loans Across Industry: {activeLoans}</div>
    </div>
  </div>
);
