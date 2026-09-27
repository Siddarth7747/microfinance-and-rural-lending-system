import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Home, Users, UsersRound, FileText, CreditCard,
  DollarSign, AlertCircle, Shield, Building2, BarChart3, Settings,
  CheckCircle2, Crown
} from 'lucide-react';

export const Sidebar = ({ isAdminMode }) => {
  const location = useLocation();
  const { t } = useTranslation();

  const menuItems = [
    { label: t('nav.dashboard', 'Dashboard'), icon: Home, path: '/', exact: true },
    { label: t('nav.borrowers', 'Borrowers'), icon: Users, path: '/microfinance?tab=borrowers' },
    { label: t('nav.groups', 'JLG / Groups'), icon: UsersRound, path: '/microfinance?tab=groups' },
    { label: t('nav.applications', 'Applications'), icon: FileText, path: '/microfinance?tab=applications' },
    { label: t('nav.loans', 'Active Loans'), icon: CreditCard, path: '/microfinance?tab=loans' },
    { label: t('nav.collections', 'Collections'), icon: DollarSign, path: '/microfinance?tab=collections' },
    { label: t('nav.delinquency', 'PAR / Delinquency'), icon: AlertCircle, path: '/branch/par' },
    { label: t('nav.shg', 'SHG Module'), icon: Shield, path: '/microfinance?tab=shg' },
    { label: t('nav.disbursements', 'Disbursement'), icon: Building2, path: '/microfinance?tab=disbursements' },
    { label: t('nav.reports', 'MIS Reports'), icon: BarChart3, path: '/microfinance?tab=reports' },
    { label: t('nav.admin', 'Admin Console'), icon: Settings, path: '/admin/users' },
  ];

  const isItemActive = (item) => {
    if (item.exact) {
      return location.pathname === '/' && !location.search;
    }
    if (item.path.includes('?tab=')) {
      const tab = item.path.split('?tab=')[1];
      if (location.pathname === '/microfinance' && location.search.includes(`tab=${tab}`)) {
        return true;
      }
      if (location.pathname === '/microfinance' && !location.search && tab === 'borrowers') {
        return true;
      }
      return false;
    }
    return location.pathname.startsWith(item.path);
  };

  return (
    <aside style={{
      width: '260px',
      background: '#060608',
      borderRight: '1px solid rgba(234, 179, 8, 0.2)',
      padding: '24px 14px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      position: 'relative',
      zIndex: 10
    }}>
      {/* Brand Header */}
      <div style={{
        padding: '0 8px 20px 8px',
        borderBottom: '1px solid rgba(234, 179, 8, 0.15)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        <div style={{
          width: '42px',
          height: '42px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #facc15 0%, #ca8a04 50%, #854d0e 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#09090b',
          boxShadow: '0 4px 20px rgba(234, 179, 8, 0.45)',
          border: '1px solid rgba(254, 240, 138, 0.4)'
        }}>
          <Crown size={24} strokeWidth={2.5} />
        </div>
        <div>
          <h2 style={{
            fontSize: '18px',
            fontWeight: '900',
            letterSpacing: '-0.02em',
            margin: 0,
            background: 'linear-gradient(135deg, #ffffff 0%, #fef08a 50%, #eab308 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            {t('appName', 'MFI CORE')}
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#facc15',
              boxShadow: '0 0 8px #facc15'
            }} />
            <span style={{ fontSize: '11px', color: '#facc15', fontWeight: '700', letterSpacing: '0.05em' }}>
              {isAdminMode ? t('adminConsole', 'GOLD ADMIN') : t('appSubtitle', 'PREMIER RURAL')}
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        flex: 1,
        overflowY: 'auto',
        marginTop: '10px'
      }}>
        {menuItems.map((item, idx) => {
          const Icon = item.icon;
          const active = isItemActive(item);
          return (
            <Link
              key={idx}
              to={item.path}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 14px',
                borderRadius: '10px',
                color: active ? '#fef08a' : '#a1a1aa',
                background: active 
                  ? 'linear-gradient(135deg, rgba(234, 179, 8, 0.22) 0%, rgba(202, 138, 4, 0.08) 100%)' 
                  : 'transparent',
                border: active 
                  ? '1px solid rgba(250, 204, 21, 0.5)' 
                  : '1px solid transparent',
                textDecoration: 'none',
                fontSize: '13.5px',
                fontWeight: active ? '700' : '500',
                boxShadow: active ? '0 2px 14px rgba(234, 179, 8, 0.25)' : 'none',
                transition: 'all 0.15s ease',
              }}
            >
              <Icon size={18} color={active ? '#facc15' : '#71717a'} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Compliance Pill */}
      <div style={{
        padding: '12px 14px',
        borderRadius: '12px',
        background: 'rgba(234, 179, 8, 0.06)',
        border: '1px solid rgba(234, 179, 8, 0.2)',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        <CheckCircle2 size={16} color="#facc15" />
        <div style={{ fontSize: '11.5px', color: '#fef08a' }}>
          <strong>{t('rbiDirection', 'RBI Master Direction')}</strong>
          <div style={{ color: '#a1a1aa', fontSize: '10.5px' }}>{t('goldStandard', 'v2026 Gold Standard')}</div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
