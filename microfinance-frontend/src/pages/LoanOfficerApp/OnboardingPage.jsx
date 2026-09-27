import React from 'react';
import { BorrowerRegistrationForm } from '../../components/borrower/BorrowerRegistrationForm';
import { KycVerificationPanel } from '../../components/borrower/KycVerificationPanel';
import { DocumentUploadPanel } from '../../components/borrower/DocumentUploadPanel';

export const OnboardingPage = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <div className="glass-card" style={{ padding: '20px' }}>
      <h2 style={{ color: '#f8fafc' }}>Borrower Onboarding & KYC Hub</h2>
      <p style={{ color: '#94a3b8', fontSize: '13px' }}>Register rural borrowers, verify Aadhaar eKYC, and upload supporting documents.</p>
    </div>

    <BorrowerRegistrationForm />
    
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
      <KycVerificationPanel />
      <DocumentUploadPanel />
    </div>
  </div>
);

export default OnboardingPage;
