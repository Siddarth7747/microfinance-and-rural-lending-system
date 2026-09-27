import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from '../components/common/NavBar';
import { Sidebar } from '../components/common/Sidebar';
import { OfflineBanner } from '../components/common/OfflineBanner';
import { LiveFinancialTicker } from '../components/dashboard/LiveFinancialTicker';
import { GoldNotificationContainer } from '../components/common/GoldNotificationContainer';

export const MainLayout = () => {
  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      background: '#000000',
      color: '#fef08a'
    }}>
      <Sidebar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, background: '#000000' }}>
        <NavBar />
        <LiveFinancialTicker />
        <OfflineBanner />
        <GoldNotificationContainer />
        <main style={{ flex: 1, padding: '28px 32px', overflowY: 'auto', background: '#000000' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
