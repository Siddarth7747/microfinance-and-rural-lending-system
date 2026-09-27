import React from 'react';

export const ShgFederationView = () => {
  return (
    <div className="glass-card" style={{ padding: '24px' }}>
      <h3 style={{ color: '#f8fafc', marginBottom: '16px' }}>SHG Federation & Cluster Structure</h3>
      <div style={{ background: 'rgba(15,23,42,0.5)', padding: '16px', borderRadius: '10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ color: '#6366f1', fontWeight: 'bold' }}>🏢 District Apex Federation (Varanasi Nari Shakti Mahasangh)</div>
        <div style={{ paddingLeft: '20px', borderLeft: '2px solid #6366f1', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ color: '#10b981', fontWeight: '600' }}>📌 Cluster Level Federation #04 (Kashi Cluster)</div>
          <div style={{ paddingLeft: '20px', borderLeft: '2px solid #10b981', color: '#94a3b8', fontSize: '13px' }}>
            ├── Jai Santoshi Maa SHG (12 Members)<br />
            ├── Mahila Utthan SHG (15 Members)<br />
            └── Saraswati Bachat Gat (10 Members)
          </div>
        </div>
      </div>
    </div>
  );
};
