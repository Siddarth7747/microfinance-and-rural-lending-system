import React from 'react';

export const IntegrationSettingsPanel = () => {
  const integrations = [
    { service: 'Aadhaar eKYC Gateway', provider: 'UIDAI / ESP', status: 'ACTIVE', mode: 'PRODUCTION' },
    { service: 'CIBIL Credit Bureau', provider: 'TransUnion CIBIL', status: 'ACTIVE', mode: 'PRODUCTION' },
    { service: 'Msg91 SMS Gateway', provider: 'Msg91 DLT', status: 'ACTIVE', mode: 'PRODUCTION' },
    { service: 'NEFT / RTGS Payouts', provider: 'HDFC Corporate API', status: 'ACTIVE', mode: 'PRODUCTION' },
    { service: 'e-NACH Mandate Gateway', provider: 'NPCI Direct', status: 'ACTIVE', mode: 'PRODUCTION' }
  ];

  return (
    <div className="glass-card" style={{ padding: '24px' }}>
      <h3 style={{ color: '#f8fafc', marginBottom: '16px' }}>Third-Party Integration & API Gateway Settings</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8' }}>
            <th style={{ padding: '10px' }}>Integration Service</th>
            <th style={{ padding: '10px' }}>Provider</th>
            <th style={{ padding: '10px' }}>Mode</th>
            <th style={{ padding: '10px' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {integrations.map((i, idx) => (
            <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#f8fafc' }}>
              <td style={{ padding: '10px', fontWeight: '500' }}>{i.service}</td>
              <td style={{ padding: '10px', color: '#94a3b8' }}>{i.provider}</td>
              <td style={{ padding: '10px', color: '#6366f1' }}>{i.mode}</td>
              <td style={{ padding: '10px' }}>
                <span style={{ padding: '4px 10px', borderRadius: '12px', fontSize: '11px', background: 'rgba(16,185,129,0.2)', color: '#10b981' }}>
                  {i.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
