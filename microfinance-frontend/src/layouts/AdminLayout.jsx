import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/common/Sidebar';
import { NavBar } from '../components/common/NavBar';

export const AdminLayout = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#000000', color: '#fef08a' }}>
      <Sidebar isAdminMode={true} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#000000' }}>
        <NavBar title="System Administration Console" />
        <main style={{ flex: 1, padding: '24px', background: '#000000' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
