import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { branch: 'Varanasi', par: 1.2 },
  { branch: 'Rampur', par: 2.8 },
  { branch: 'Mirzapur', par: 0.9 },
  { branch: 'Jaunpur', par: 3.4 },
];

export const DelinquencyByBranchChart = () => (
  <div style={{ width: '100%', height: 300 }}>
    <ResponsiveContainer>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
        <XAxis dataKey="branch" stroke="#94a3b8" />
        <YAxis stroke="#94a3b8" unit="%" />
        <Tooltip contentStyle={{ background: '#0f172a', borderColor: '#334155' }} />
        <Bar dataKey="par" fill="#f59e0b" radius={[6, 6, 0, 0]} name="PAR %" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);
