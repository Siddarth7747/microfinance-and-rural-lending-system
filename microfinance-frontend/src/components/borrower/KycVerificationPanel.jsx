import React, { useState } from 'react';
import { kycApi } from '../../api/kycApi';
import { CheckCircle2 } from 'lucide-react';

export const KycVerificationPanel = ({ borrowerId }) => {
  const [status, setStatus] = useState('PENDING');

  const handleVerify = async (type) => {
    try {
      await kycApi.verify({ borrowerId: borrowerId || 1, documentType: type, documentNumber: '123456789012' });
      setStatus('FULLY_VERIFIED');
      alert(`${type} eKYC Verification Completed Successfully!`);
    } catch (err) {
      alert('KYC verification error: ' + (err.detail || err.message));
    }
  };

  return (
    <div className="glass-card" style={{ padding: '20px' }}>
      <h4 style={{ color: '#f8fafc', marginBottom: '12px' }}>eKYC Verification Engine (Aadhaar / PAN)</h4>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <button onClick={() => handleVerify('AADHAAR')} className="btn-primary">Verify Aadhaar (OTP / Biometric)</button>
        <button onClick={() => handleVerify('PAN')} className="btn-secondary">Verify PAN</button>
        {status === 'FULLY_VERIFIED' && <span style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={18} /> Fully Verified</span>}
      </div>
    </div>
  );
};
