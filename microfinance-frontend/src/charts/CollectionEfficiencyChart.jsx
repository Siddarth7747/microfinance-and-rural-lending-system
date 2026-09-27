import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { week: 'W1', efficiency: 98.2 },
  { week: 'W2', efficiency: 97.8 },
  { week: 'W3', efficiency: 99.1 },
  { week: 'W4', efficiency: 98.6 },
];

export const CollectionEfficiencyChart = () => (
  <div style={{ width: '100%', height: 300 }}>
    <ResponsiveContainer>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
        <XAxis dataKey="week" stroke="#94a3b8" />
        <YAxis stroke="#94a3b8" domain={[90, 100]} unit="%" />
        <Tooltip contentStyle={{ background: '#0f172a', borderColor: '#334155' }} />
        <Line type="monotone" dataKey="efficiency" stroke="#10b981" strokeWidth={3} name="Collection Efficiency %" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);
