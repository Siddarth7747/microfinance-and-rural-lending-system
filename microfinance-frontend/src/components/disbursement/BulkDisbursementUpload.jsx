import React from 'react';
import { FileUploader } from '../common/FileUploader';

export const BulkDisbursementUpload = () => (
  <div className="glass-card" style={{ padding: '20px' }}>
    <h4 style={{ color: '#f8fafc', marginBottom: '12px' }}>Bulk Bank Disbursement File Upload (NPCI / NACH / NEFT)</h4>
    <FileUploader label="Upload NEFT/NACH Excel/CSV Batch" />
  </div>
);
