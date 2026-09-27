import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', par30: 2.1, par60: 0.8, par90: 0.3 },
  { month: 'Feb', par30: 2.4, par60: 0.9, par90: 0.4 },
  { month: 'Mar', par30: 1.9, par60: 0.7, par90: 0.3 },
  { month: 'Apr', par30: 1.5, par60: 0.5, par90: 0.2 },
  { month: 'May', par30: 1.8, par60: 0.6, par90: 0.2 },
];

export const ParTrendChart = () => (
  <div style={{ width: '100%', height: 300 }}>
    <ResponsiveContainer>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
        <XAxis dataKey="month" stroke="#94a3b8" />
        <YAxis stroke="#94a3b8" unit="%" />
        <Tooltip contentStyle={{ background: '#0f172a', borderColor: '#334155' }} />
        <Area type="monotone" dataKey="par30" stroke="#f59e0b" fill="rgba(245, 158, 11, 0.2)" name="PAR 30 DPD %" />
        <Area type="monotone" dataKey="par90" stroke="#ef4444" fill="rgba(239, 68, 68, 0.2)" name="PAR 90 DPD (NPA) %" />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);
