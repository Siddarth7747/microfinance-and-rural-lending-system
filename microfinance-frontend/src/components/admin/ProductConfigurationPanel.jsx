import React from 'react';

export const ProductConfigurationPanel = () => {
  const products = [
    { code: 'JLG-AGRI-01', name: 'Agricultural Group Microloan', rate: '18.5% p.a.', method: 'REDUCING', tenure: '6 - 24 Months' },
    { code: 'SHG-LIV-02', name: 'SHG Livelihood Expansion', rate: '16.0% p.a.', method: 'REDUCING', tenure: '12 - 36 Months' },
    { code: 'IND-MSME-03', name: 'Individual MSME Enterprise', rate: '20.0% p.a.', method: 'REDUCING', tenure: '12 - 48 Months' }
  ];

  return (
    <div className="glass-card" style={{ padding: '24px' }}>
      <h3 style={{ color: '#f8fafc', marginBottom: '16px' }}>Loan Product Parameter Configuration</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8' }}>
            <th style={{ padding: '10px' }}>Code</th>
            <th style={{ padding: '10px' }}>Product Name</th>
            <th style={{ padding: '10px' }}>Interest Rate</th>
            <th style={{ padding: '10px' }}>Method</th>
            <th style={{ padding: '10px' }}>Tenure Range</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, idx) => (
            <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#f8fafc' }}>
              <td style={{ padding: '10px', color: '#6366f1', fontWeight: 'bold' }}>{p.code}</td>
              <td style={{ padding: '10px' }}>{p.name}</td>
              <td style={{ padding: '10px', color: '#10b981', fontWeight: 'bold' }}>{p.rate}</td>
              <td style={{ padding: '10px' }}>{p.method}</td>
              <td style={{ padding: '10px', color: '#94a3b8' }}>{p.tenure}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
