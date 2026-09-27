import React from 'react';

export const IncentiveCalculationPanel = () => {
  const incentives = [
    { officer: 'Ramesh Singh', collectionBonus: '₹2,260', zeroParBonus: '₹2,000', newBorrowerBonus: '₹800', total: '₹5,060' },
    { officer: 'Suresh Kumar', collectionBonus: '₹1,905', zeroParBonus: '₹0', newBorrowerBonus: '₹600', total: '₹2,505' },
    { officer: 'Priya Sharma', collectionBonus: '₹3,250', zeroParBonus: '₹2,000', newBorrowerBonus: '₹1,200', total: '₹6,450' }
  ];

  return (
    <div className="glass-card" style={{ padding: '24px' }}>
      <h3 style={{ color: '#f8fafc', marginBottom: '16px' }}>Monthly Incentive Calculation & Payout Breakdown</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8' }}>
            <th style={{ padding: '10px' }}>Officer Name</th>
            <th style={{ padding: '10px' }}>Collection Bonus</th>
            <th style={{ padding: '10px' }}>Zero-PAR Bonus</th>
            <th style={{ padding: '10px' }}>Acquisition Bonus</th>
            <th style={{ padding: '10px' }}>Total Payout</th>
          </tr>
        </thead>
        <tbody>
          {incentives.map((i, idx) => (
            <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#f8fafc' }}>
              <td style={{ padding: '10px', fontWeight: '500' }}>{i.officer}</td>
              <td style={{ padding: '10px' }}>{i.collectionBonus}</td>
              <td style={{ padding: '10px' }}>{i.zeroParBonus}</td>
              <td style={{ padding: '10px' }}>{i.newBorrowerBonus}</td>
              <td style={{ padding: '10px', color: '#10b981', fontWeight: 'bold' }}>{i.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
