import React from 'react';

export const StaffPerformanceDashboard = () => {
  const staff = [
    { name: 'Ramesh Singh', branch: 'Main Branch', aum: '₹45.2 L', collection: '98.5%', par30: 1, rank: 1 },
    { name: 'Suresh Kumar', branch: 'Rural North', aum: '₹38.1 L', collection: '97.2%', par30: 2, rank: 2 },
    { name: 'Priya Sharma', branch: 'Rural East', aum: '₹32.5 L', collection: '99.1%', par30: 0, rank: 3 }
  ];

  return (
    <div className="glass-card" style={{ padding: '24px' }}>
      <h3 style={{ color: '#f8fafc', marginBottom: '16px' }}>Branch Staff KPI Performance Leaderboard</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8' }}>
            <th style={{ padding: '10px' }}>Rank</th>
            <th style={{ padding: '10px' }}>Officer Name</th>
            <th style={{ padding: '10px' }}>Branch</th>
            <th style={{ padding: '10px' }}>AUM Managed</th>
            <th style={{ padding: '10px' }}>Collection %</th>
            <th style={{ padding: '10px' }}>PAR30</th>
          </tr>
        </thead>
        <tbody>
          {staff.map((s, idx) => (
            <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#f8fafc' }}>
              <td style={{ padding: '10px', fontWeight: 'bold', color: s.rank === 1 ? '#f59e0b' : '#94a3b8' }}>#{s.rank}</td>
              <td style={{ padding: '10px', fontWeight: '500' }}>{s.name}</td>
              <td style={{ padding: '10px', color: '#94a3b8' }}>{s.branch}</td>
              <td style={{ padding: '10px' }}>{s.aum}</td>
              <td style={{ padding: '10px', color: '#10b981', fontWeight: 'bold' }}>{s.collection}</td>
              <td style={{ padding: '10px', color: s.par30 === 0 ? '#10b981' : '#f59e0b' }}>{s.par30}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
