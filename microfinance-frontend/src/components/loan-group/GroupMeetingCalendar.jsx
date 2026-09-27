import React from 'react';

export const GroupMeetingCalendar = () => {
  const meetings = [
    { date: '2026-09-02', centre: 'Centre #12 - Village Rampur', time: '09:00 AM', status: 'UPCOMING' },
    { date: '2026-09-04', centre: 'Centre #08 - Village Shivpur', time: '10:30 AM', status: 'UPCOMING' },
    { date: '2026-09-07', centre: 'Centre #04 - Village Belwa', time: '08:30 AM', status: 'SCHEDULED' }
  ];

  return (
    <div className="glass-card" style={{ padding: '24px' }}>
      <h3 style={{ color: '#f8fafc', marginBottom: '16px' }}>Centre Weekly Meeting Calendar</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {meetings.map((m, idx) => (
          <div key={idx} style={{ background: 'rgba(15,23,42,0.5)', padding: '12px 16px', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ color: '#f8fafc', fontWeight: '600' }}>{m.centre}</div>
              <div style={{ color: '#94a3b8', fontSize: '12px' }}>📅 {m.date} at {m.time}</div>
            </div>
            <span style={{ padding: '4px 10px', borderRadius: '12px', fontSize: '11px', background: 'rgba(99,102,241,0.2)', color: '#6366f1' }}>
              {m.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
