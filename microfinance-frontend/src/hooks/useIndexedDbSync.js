import { useEffect } from 'react';
import { useOfflineStatus } from './useOfflineStatus';

export const useIndexedDbSync = () => {
  const isOnline = useOfflineStatus();

  useEffect(() => {
    if (isOnline) {
      // Auto-trigger sync when connection is restored
    }
  }, [isOnline]);

  return { isOnline };
};
