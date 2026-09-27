import React from 'react';
import { useOfflineStatus } from '../../hooks/useOfflineStatus';
import { WifiOff } from 'lucide-react';

export const OfflineBanner = () => {
  const isOnline = useOfflineStatus();

  if (isOnline) return null;

  return (
    <div style={{
      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
      color: '#ffffff',
      padding: '10px 24px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontWeight: '600',
      fontSize: '13px'
    }}>
      <WifiOff size={18} />
      <span>You are currently OFFLINE. All collection entries are being saved locally in IndexedDB and will sync automatically when connectivity is restored.</span>
    </div>
  );
};
