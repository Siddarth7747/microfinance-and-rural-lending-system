import React from 'react';
import { useGpsLocation } from '../../hooks/useGpsLocation';
import { MapPin } from 'lucide-react';

export const GpsCaptureWidget = () => {
  const { latitude, longitude, error } = useGpsLocation();

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#10b981', background: 'rgba(16,185,129,0.1)', padding: '10px', borderRadius: '8px' }}>
      <MapPin size={16} />
      {latitude && longitude ? (
        <span>GPS Captured: Lat {latitude.toFixed(4)}, Lng {longitude.toFixed(4)}</span>
      ) : (
        <span>Capturing GPS Coordinates... {error && `(${error})`}</span>
      )}
    </div>
  );
};
