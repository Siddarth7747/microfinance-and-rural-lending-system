import React from 'react';
import { formatCurrency } from '../../utils/formatters';

export const ActiveLoanList = ({ loans = [], onSelect }) => (
  <div className="glass-card" style={{ padding: '20px' }}>
    <h4 style={{ color: '#f8fafc', marginBottom: '12px' }}>Active Loan Portfolio</h4>
    {loans.length === 0 ? (
      <div style={{ color: '#94a3b8', fontSize: '14px' }}>No active loans found.</div>
    ) : (
      loans.map((l) => (
        <div key={l.id} onClick={() => onSelect && onSelect(l)} style={{ padding: '12px', borderBottom: '1px solid rgba(255,255,255,0.05)', cursor: 'pointer' }}>
          <div style={{ fontWeight: '600', color: '#6366f1' }}>{l.loanAccountNumber}</div>
          <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '4px' }}>
            Sanctioned: {formatCurrency(l.sanctionedAmount)} | EMI: {formatCurrency(l.emiAmount)} | DPD: <span style={{ color: l.dpd > 0 ? '#ef4444' : '#10b981' }}>{l.dpd || 0} Days</span>
          </div>
        </div>
      ))
    )}
  </div>
);
