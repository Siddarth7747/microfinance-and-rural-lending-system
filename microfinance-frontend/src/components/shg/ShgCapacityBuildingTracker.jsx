import React from 'react';

export const ShgCapacityBuildingTracker = () => {
  const trainings = [
    { title: 'Financial Literacy & Bookkeeping', status: 'COMPLETED', date: '15 Jul 2026' },
    { title: 'Digital UPI & Mobile Banking Operations', status: 'COMPLETED', date: '02 Aug 2026' },
    { title: 'Micro-Enterprise & Livelihood Skills', status: 'SCHEDULED', date: '10 Sep 2026' }
  ];

  return (
    <div className="glass-card" style={{ padding: '24px' }}>
      <h3 style={{ color: '#f8fafc', marginBottom: '16px' }}>SHG Member Capacity Building & Training Tracker</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {trainings.map((t, idx) => (
          <div key={idx} style={{ background: 'rgba(15,23,42,0.5)', padding: '12px 16px', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ color: '#f8fafc', fontWeight: 'bold' }}>{t.title}</div>
              <div style={{ color: '#94a3b8', fontSize: '12px' }}>Date: {t.date}</div>
            </div>
            <span style={{ padding: '4px 10px', borderRadius: '12px', fontSize: '11px', background: t.status === 'COMPLETED' ? 'rgba(16,185,129,0.2)' : 'rgba(245,158,11,0.2)', color: t.status === 'COMPLETED' ? '#10b981' : '#f59e0b' }}>
              {t.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
