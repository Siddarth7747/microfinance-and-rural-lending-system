import React from 'react';

export const BranchConfigurationPanel = () => {
  const branches = [
    { code: 'VNS-01', name: 'Main Branch Varanasi', manager: 'Rajesh Verma', district: 'Varanasi', status: 'ACTIVE' },
    { code: 'VNS-02', name: 'Rural Branch North', manager: 'Sunil Mehta', district: 'Varanasi', status: 'ACTIVE' },
    { code: 'GZP-01', name: 'Ghazipur Regional Branch', manager: 'Alok Singh', district: 'Ghazipur', status: 'ACTIVE' }
  ];

  return (
    <div className="glass-card" style={{ padding: '24px' }}>
      <h3 style={{ color: '#f8fafc', marginBottom: '16px' }}>Branch Office Network Configuration</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8' }}>
            <th style={{ padding: '10px' }}>Branch Code</th>
            <th style={{ padding: '10px' }}>Branch Name</th>
            <th style={{ padding: '10px' }}>Manager</th>
            <th style={{ padding: '10px' }}>District</th>
            <th style={{ padding: '10px' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {branches.map((b, idx) => (
            <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#f8fafc' }}>
              <td style={{ padding: '10px', color: '#6366f1', fontWeight: 'bold' }}>{b.code}</td>
              <td style={{ padding: '10px' }}>{b.name}</td>
              <td style={{ padding: '10px' }}>{b.manager}</td>
              <td style={{ padding: '10px', color: '#94a3b8' }}>{b.district}</td>
              <td style={{ padding: '10px' }}>
                <span style={{ padding: '4px 10px', borderRadius: '12px', fontSize: '11px', background: 'rgba(16,185,129,0.2)', color: '#10b981' }}>
                  {b.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
