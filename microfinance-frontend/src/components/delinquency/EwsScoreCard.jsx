import React from 'react';
import { AlertTriangle } from 'lucide-react';

export const EwsScoreCard = () => (
  <div className="glass-card" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
    <AlertTriangle size={32} color="#f59e0b" />
    <div>
      <h4 style={{ color: '#f8fafc' }}>Early Warning Signals (EWS) Machine Risk Score</h4>
      <div style={{ color: '#f59e0b', fontSize: '14px', marginTop: '4px' }}>Moderate Overdue Risk — 2 consecutive missed centre meetings</div>
    </div>
  </div>
);
