import React from 'react';

export const LoadingSpinner = ({ label = 'Loading...' }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
    <div style={{
      width: '40px', height: '40px',
      border: '4px solid rgba(99, 102, 241, 0.2)',
      borderTop: '4px solid #6366f1',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }}></div>
    <span style={{ marginTop: '12px', color: '#94a3b8', fontSize: '14px' }}>{label}</span>
    <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
  </div>
);
