import React from 'react';

export const TrainingRecordsTable = () => {
  const records = [
    { staff: 'Ramesh Singh', course: 'RBI Code of Conduct & Fair Practices', completionDate: '2026-07-12', validTill: '2027-07-12', status: 'CERTIFIED' },
    { staff: 'Suresh Kumar', course: 'AML & Fraud Prevention in Microfinance', completionDate: '2026-06-01', validTill: '2027-06-01', status: 'CERTIFIED' },
    { staff: 'Priya Sharma', course: 'Field Safety & Dispute Resolution', completionDate: '2026-08-15', validTill: '2027-08-15', status: 'CERTIFIED' }
  ];

  return (
    <div className="glass-card" style={{ padding: '24px' }}>
      <h3 style={{ color: '#f8fafc', marginBottom: '16px' }}>Staff Compliance Training & Certification Records</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8' }}>
            <th style={{ padding: '10px' }}>Staff Name</th>
            <th style={{ padding: '10px' }}>Training Module</th>
            <th style={{ padding: '10px' }}>Completed On</th>
            <th style={{ padding: '10px' }}>Certification Status</th>
          </tr>
        </thead>
        <tbody>
          {records.map((r, idx) => (
            <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#f8fafc' }}>
              <td style={{ padding: '10px', fontWeight: '500' }}>{r.staff}</td>
              <td style={{ padding: '10px' }}>{r.course}</td>
              <td style={{ padding: '10px', color: '#94a3b8' }}>{r.completionDate}</td>
              <td style={{ padding: '10px' }}>
                <span style={{ padding: '4px 10px', borderRadius: '12px', fontSize: '11px', background: 'rgba(16,185,129,0.2)', color: '#10b981' }}>
                  {r.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
