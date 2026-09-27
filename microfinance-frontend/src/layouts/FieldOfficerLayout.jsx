import React from 'react';
import { Outlet } from 'react-router-dom';
import { OfflineBanner } from '../components/common/OfflineBanner';
import { Wifi, MapPin } from 'lucide-react';

export const FieldOfficerLayout = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#0f172a', paddingBottom: '70px' }}>
      <header style={{ background: '#1e293b', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontSize: '18px', color: '#f8fafc' }}>📱 Officer Field Mode</h2>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '12px', color: '#10b981' }}>
          <MapPin size={16} /> GPS Active
        </div>
      </header>
      <OfflineBanner />
      <div style={{ padding: '16px' }}>
        <Outlet />
      </div>
    </div>
  );
};
