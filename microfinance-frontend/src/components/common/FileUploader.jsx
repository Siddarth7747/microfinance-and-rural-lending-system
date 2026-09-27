import React from 'react';
import { Upload } from 'lucide-react';

export const FileUploader = ({ label = 'Upload Document', onFileSelect }) => (
  <div style={{
    border: '2px dashed rgba(255, 255, 255, 0.15)',
    borderRadius: '12px', padding: '20px', textAlign: 'center', cursor: 'pointer',
    background: 'rgba(15, 23, 42, 0.4)'
  }}>
    <Upload size={24} color="#6366f1" style={{ marginBottom: '8px' }} />
    <div style={{ color: '#f8fafc', fontSize: '14px', fontWeight: '500' }}>{label}</div>
    <div style={{ color: '#64748b', fontSize: '12px', marginTop: '4px' }}>PNG, JPG or PDF up to 5MB</div>
  </div>
);
