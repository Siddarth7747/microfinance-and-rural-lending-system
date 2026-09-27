import React from 'react';
import { FileText } from 'lucide-react';

export const DigitalLoanAgreementViewer = () => (
  <div className="glass-card" style={{ padding: '20px' }}>
    <h4 style={{ color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '8px' }}>
      <FileText size={18} color="#6366f1" /> Digital Vernacular Loan Agreement (English / Hindi)
    </h4>
    <p style={{ color: '#94a3b8', fontSize: '13px', marginTop: '6px' }}>Includes Key Fact Statement (KFS) per RBI 2026 Fair Practices Code.</p>
  </div>
);
