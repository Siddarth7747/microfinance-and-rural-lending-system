import React from 'react';
import { formatCurrency } from '../../utils/formatters';

export const DailyCollectionSheet = ({ sheet }) => (
  <div className="glass-card" style={{ padding: '20px' }}>
    <h4 style={{ color: '#f8fafc', marginBottom: '12px' }}>Daily Field Officer Collection Sheet</h4>
    <div style={{ display: 'flex', gap: '20px', fontSize: '14px', marginBottom: '16px' }}>
      <div>Total Expected: <strong style={{ color: '#6366f1' }}>{formatCurrency(sheet?.totalExpected || 25000)}</strong></div>
      <div>Collected: <strong style={{ color: '#10b981' }}>{formatCurrency(sheet?.totalCollected || 24500)}</strong></div>
    </div>
  </div>
);
