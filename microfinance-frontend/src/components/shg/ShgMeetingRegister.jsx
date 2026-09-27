import React from 'react';

export const ShgMeetingRegister = () => {
  const meetings = [
    { date: '2026-08-25', attendance: '12/12 (100%)', savings: '₹6,000', resolution: 'Approved internal loan to Meena Kumari for tailoring shop.' },
    { date: '2026-08-11', attendance: '11/12 (91%)', savings: '₹5,500', resolution: 'Reviewed monthly bank linkage repayment.' }
  ];

  return (
    <div className="glass-card" style={{ padding: '24px' }}>
      <h3 style={{ color: '#f8fafc', marginBottom: '16px' }}>SHG Meeting & Resolution Minutes Register</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {meetings.map((m, idx) => (
          <div key={idx} style={{ background: 'rgba(15,23,42,0.5)', padding: '14px', borderRadius: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
              <span style={{ color: '#6366f1', fontWeight: 'bold' }}>📅 {m.date}</span>
              <span style={{ color: '#10b981', fontSize: '12px' }}>Attendance: {m.attendance}</span>
            </div>
            <p style={{ color: '#f8fafc', fontSize: '13px', margin: '4px 0' }}>Resolution: {m.resolution}</p>
            <div style={{ color: '#94a3b8', fontSize: '12px' }}>Savings Collected: {m.savings}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
