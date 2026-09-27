import React from 'react';

export const BranchPnlReport = () => {
  return (
    <div className="glass-card" style={{ padding: '24px' }}>
      <h3 style={{ color: '#f8fafc', marginBottom: '16px' }}>Branch Profit & Loss (P&L) Financial Statement</h3>
      <div style={{ background: 'rgba(15,23,42,0.5)', padding: '16px', borderRadius: '10px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: '#94a3b8' }}>Interest Income on Loans:</span>
          <span style={{ color: '#10b981', fontWeight: 'bold' }}>+ ₹18,45,000</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: '#94a3b8' }}>Processing Fee Income:</span>
          <span style={{ color: '#10b981', fontWeight: 'bold' }}>+ ₹1,25,000</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: '#94a3b8' }}>Cost of Funds (Borrowing Interest):</span>
          <span style={{ color: '#ef4444' }}>- ₹8,20,000</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: '#94a3b8' }}>Branch Operating Expenses (Opex):</span>
          <span style={{ color: '#ef4444' }}>- ₹4,10,000</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: '#94a3b8' }}>NPA Credit Risk Provisioning:</span>
          <span style={{ color: '#f59e0b' }}>- ₹85,000</span>
        </div>
        <hr style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '16px', fontWeight: 'bold' }}>
          <span style={{ color: '#f8fafc' }}>Net Profit (PAT):</span>
          <span style={{ color: '#10b981' }}>+ ₹6,55,000</span>
        </div>
      </div>
    </div>
  );
};
