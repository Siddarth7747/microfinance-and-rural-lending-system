import React from 'react';
import { FileUploader } from '../common/FileUploader';

export const DocumentUploadPanel = () => (
  <div className="glass-card" style={{ padding: '20px' }}>
    <h4 style={{ color: '#f8fafc', marginBottom: '12px' }}>Borrower Document Vault</h4>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
      <FileUploader label="Upload Aadhaar Front/Back" />
      <FileUploader label="Upload Bank Passbook / Cheque" />
    </div>
  </div>
);
