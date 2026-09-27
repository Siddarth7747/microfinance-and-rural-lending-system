import { useState, useEffect } from 'react';

export const useGpsLocation = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null, error: null });

  const getLocation = () => {
    if (!navigator.geolocation) {
      setLocation((prev) => ({ ...prev, error: 'Geolocation not supported by browser' }));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => setLocation({ latitude: pos.coords.latitude, longitude: pos.coords.longitude, error: null }),
      (err) => setLocation((prev) => ({ ...prev, error: err.message })),
      { enableHighAccuracy: true }
    );
  };

  useEffect(() => {
    getLocation();
  }, []);

  return { ...location, refetch: getLocation };
};
