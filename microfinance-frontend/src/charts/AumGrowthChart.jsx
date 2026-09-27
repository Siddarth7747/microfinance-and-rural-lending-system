import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { quarter: 'Q1 2025', aum: 12.5 },
  { quarter: 'Q2 2025', aum: 18.2 },
  { quarter: 'Q3 2025', aum: 24.8 },
  { quarter: 'Q4 2025', aum: 31.0 },
  { quarter: 'Q1 2026', aum: 42.5 },
];

export const AumGrowthChart = () => (
  <div style={{ width: '100%', height: 300 }}>
    <ResponsiveContainer>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
        <XAxis dataKey="quarter" stroke="#94a3b8" />
        <YAxis stroke="#94a3b8" unit=" Cr" />
        <Tooltip contentStyle={{ background: '#0f172a', borderColor: '#334155' }} />
        <Bar dataKey="aum" fill="#6366f1" radius={[8, 8, 0, 0]} name="AUM (₹ Crores)" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);
