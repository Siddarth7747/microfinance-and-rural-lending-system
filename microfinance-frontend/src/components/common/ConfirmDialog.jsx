import React from 'react';

export const ConfirmDialog = ({ isOpen, title, message, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
    }}>
      <div className="glass-card" style={{ padding: '24px', maxWidth: '400px', width: '100%' }}>
        <h3 style={{ color: '#f8fafc', fontSize: '18px' }}>{title}</h3>
        <p style={{ color: '#94a3b8', marginTop: '8px', fontSize: '14px' }}>{message}</p>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '20px' }}>
          <button onClick={onCancel} className="btn-secondary">Cancel</button>
          <button onClick={onConfirm} className="btn-primary" style={{ background: '#ef4444' }}>Confirm</button>
        </div>
      </div>
    </div>
  );
};
