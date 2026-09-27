import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const PennyDropVerificationPanel = () => (
  <div className="glass-card" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
    <CheckCircle2 size={32} color="#10b981" />
    <div>
      <h4 style={{ color: '#f8fafc' }}>Penny Drop Account Name Match Verification</h4>
      <div style={{ color: '#10b981', fontSize: '13px', marginTop: '2px' }}>Account Holder Name Matched with Aadhaar (Match Score 98%)</div>
    </div>
  </div>
);
