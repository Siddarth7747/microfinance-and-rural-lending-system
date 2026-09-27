import React from 'react';

export const NpaClassificationTable = () => {
  const classifications = [
    { category: 'Standard (Current)', dpd: '0 Days', loans: 450, amount: '₹1,25,00,000', provisionPct: '0.25%' },
    { category: 'SMA-0 / PAR 1-30', dpd: '1 - 30 Days', loans: 18, amount: '₹4,50,000', provisionPct: '5.0%' },
    { category: 'SMA-1 / PAR 31-60', dpd: '31 - 60 Days', loans: 8, amount: '₹2,10,000', provisionPct: '10.0%' },
    { category: 'SMA-2 / PAR 61-90', dpd: '61 - 90 Days', loans: 4, amount: '₹1,20,000', provisionPct: '20.0%' },
    { category: 'Sub-Standard (NPA)', dpd: '91 - 180 Days', loans: 3, amount: '₹85,000', provisionPct: '25.0%' },
    { category: 'Doubtful Asset', dpd: '181 - 365 Days', loans: 2, amount: '₹45,000', provisionPct: '50.0%' },
    { category: 'Loss Asset', dpd: '> 365 Days', loans: 1, amount: '₹25,000', provisionPct: '100.0%' }
  ];

  return (
    <div className="glass-card" style={{ padding: '24px' }}>
      <h3 style={{ color: '#f8fafc', marginBottom: '16px' }}>RBI NPA Asset Classification Matrix</h3>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8' }}>
              <th style={{ padding: '10px' }}>Category</th>
              <th style={{ padding: '10px' }}>DPD Range</th>
              <th style={{ padding: '10px' }}>Loan Count</th>
              <th style={{ padding: '10px' }}>Outstanding Amt</th>
              <th style={{ padding: '10px' }}>RBI Provision</th>
            </tr>
          </thead>
          <tbody>
            {classifications.map((item, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#f8fafc' }}>
                <td style={{ padding: '10px', fontWeight: '500' }}>{item.category}</td>
                <td style={{ padding: '10px', color: '#94a3b8' }}>{item.dpd}</td>
                <td style={{ padding: '10px' }}>{item.loans}</td>
                <td style={{ padding: '10px', fontWeight: 'bold' }}>{item.amount}</td>
                <td style={{ padding: '10px', color: '#f59e0b' }}>{item.provisionPct}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
