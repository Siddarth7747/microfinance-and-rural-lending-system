import React from 'react';

export const AuditLogViewer = () => {
  const logs = [
    { timestamp: '2026-09-01 10:15:22', user: 'fo_ramesh', action: 'COLLECT_EMI', entity: 'RepaymentTransaction #TXN-9912', ip: '192.168.1.45' },
    { timestamp: '2026-09-01 09:42:10', user: 'bm_varanasi', action: 'APPROVE_LOAN', entity: 'LoanApplication #APP-884', ip: '192.168.1.10' },
    { timestamp: '2026-08-31 16:30:00', user: 'admin', action: 'UPDATE_PRODUCT', entity: 'LoanProduct #JLG-AGRI-01', ip: '192.168.1.2' }
  ];

  return (
    <div className="glass-card" style={{ padding: '24px' }}>
      <h3 style={{ color: '#f8fafc', marginBottom: '16px' }}>System Audit Trail Viewer</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8' }}>
            <th style={{ padding: '10px' }}>Timestamp</th>
            <th style={{ padding: '10px' }}>User</th>
            <th style={{ padding: '10px' }}>Action</th>
            <th style={{ padding: '10px' }}>Entity Details</th>
            <th style={{ padding: '10px' }}>IP Address</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, idx) => (
            <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#f8fafc' }}>
              <td style={{ padding: '10px', color: '#94a3b8' }}>{log.timestamp}</td>
              <td style={{ padding: '10px', color: '#6366f1', fontWeight: 'bold' }}>{log.user}</td>
              <td style={{ padding: '10px' }}>
                <span style={{ padding: '2px 8px', borderRadius: '4px', background: 'rgba(99,102,241,0.2)', fontSize: '11px' }}>
                  {log.action}
                </span>
              </td>
              <td style={{ padding: '10px' }}>{log.entity}</td>
              <td style={{ padding: '10px', color: '#94a3b8' }}>{log.ip}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
