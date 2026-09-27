import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';
import { LogOut, Bell, ShieldCheck } from 'lucide-react';

export const NavBar = ({ title }) => {
  const { user, logoutUser } = useAuth();
  const { t } = useTranslation();

  return (
    <header style={{
      background: 'rgba(6, 6, 8, 0.92)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(234, 179, 8, 0.2)',
      padding: '14px 28px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 20
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <h1 style={{
          fontSize: '18px',
          fontWeight: '800',
          letterSpacing: '-0.01em',
          background: 'linear-gradient(135deg, #ffffff 0%, #fef08a 40%, #facc15 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          margin: 0
        }}>
          {title || t('systemTitle', 'Microfinance & Rural Lending System')}
        </h1>
        <span className="badge badge-gold">
          <ShieldCheck size={13} />
          {t('coreOnline', 'Core Bank Online')}
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <LanguageSwitcher />

        <button style={{
          background: 'rgba(234, 179, 8, 0.06)',
          border: '1px solid rgba(234, 179, 8, 0.25)',
          borderRadius: '10px',
          width: '38px',
          height: '38px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#facc15',
          cursor: 'pointer',
          position: 'relative',
          transition: 'all 0.15s ease'
        }}>
          <Bell size={18} />
          <span style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            background: '#facc15',
            boxShadow: '0 0 6px #facc15'
          }} />
        </button>

        {/* User Profile Capsule */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '4px 12px 4px 6px',
          borderRadius: '12px',
          background: 'rgba(234, 179, 8, 0.06)',
          border: '1px solid rgba(234, 179, 8, 0.25)'
        }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #facc15 0%, #ca8a04 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#09090b',
            fontWeight: '900',
            fontSize: '13px',
            boxShadow: '0 2px 10px rgba(234, 179, 8, 0.3)'
          }}>
            {user?.fullName ? user.fullName[0].toUpperCase() : 'A'}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '13px', fontWeight: '700', color: '#fef08a' }}>
              {user?.fullName || 'Administrator'}
            </span>
            <span style={{ fontSize: '11px', color: '#a1a1aa' }}>
              {user?.designation || 'Varanasi Central Branch'}
            </span>
          </div>
        </div>

        <button 
          onClick={logoutUser} 
          title="Sign Out"
          style={{
            background: 'rgba(244, 63, 94, 0.12)',
            border: '1px solid rgba(244, 63, 94, 0.3)',
            borderRadius: '10px',
            width: '38px',
            height: '38px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fb7185',
            cursor: 'pointer',
            transition: 'all 0.15s ease'
          }}
        >
          <LogOut size={16} />
        </button>
      </div>
    </header>
  );
};

export default NavBar;
