import React, { useState, useEffect } from 'react';
import { CheckCircle2, AlertCircle, Crown, Sparkles, X, ShieldCheck, Zap } from 'lucide-react';
import { goldNotify } from '../../utils/goldNotification';

export const GoldNotificationContainer = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const unsubscribe = goldNotify.subscribe((item) => {
      setNotifications((prev) => [...prev, item]);

      if (item.duration) {
        setTimeout(() => {
          removeNotification(item.id);
        }, item.duration);
      }
    });

    return unsubscribe;
  }, []);

  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  if (notifications.length === 0) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '24px',
      right: '24px',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      maxWidth: '440px',
      width: 'calc(100vw - 48px)',
      pointerEvents: 'none'
    }}>
      {notifications.map((item) => {
        const isCelebrate = item.type === 'celebrate';
        const isError = item.type === 'error';

        return (
          <div
            key={item.id}
            style={{
              pointerEvents: 'auto',
              background: '#050508',
              border: isError ? '1px solid rgba(244, 63, 94, 0.5)' : '1px solid #facc15',
              borderRadius: '16px',
              padding: '16px 18px',
              boxShadow: isError 
                ? '0 10px 40px rgba(244, 63, 94, 0.3)' 
                : '0 10px 45px rgba(250, 204, 21, 0.45), inset 0 1px 0 rgba(254, 240, 138, 0.4)',
              color: '#fef08a',
              display: 'flex',
              gap: '14px',
              alignItems: 'flex-start',
              position: 'relative',
              overflow: 'hidden',
              animation: 'goldCelebrationPop 0.45s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {/* Top Light Sweep line */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '200%',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #ffffff, transparent)',
              animation: 'lightSweep 3s infinite'
            }} />

            {/* Icon Avatar */}
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: isError 
                ? 'rgba(244, 63, 94, 0.15)' 
                : 'linear-gradient(135deg, #fef08a 0%, #facc15 50%, #ca8a04 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxShadow: isError ? 'none' : '0 2px 14px rgba(250, 204, 21, 0.5)',
              border: isError ? '1px solid rgba(244, 63, 94, 0.3)' : '1px solid #ffffff'
            }}>
              {isError ? (
                <AlertCircle size={22} color="#fb7185" />
              ) : isCelebrate ? (
                <Crown size={22} color="#000000" strokeWidth={2.5} />
              ) : (
                <CheckCircle2 size={22} color="#000000" strokeWidth={2.5} />
              )}
            </div>

            {/* Content Text */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
                <span className={isError ? 'badge badge-rose' : 'badge badge-gold'} style={{ fontSize: '10px', padding: '1px 6px' }}>
                  {item.badge || (isError ? 'SYSTEM ALERT' : 'CORE VERIFIED')}
                </span>
              </div>
              <h4 style={{
                fontSize: '14.5px',
                fontWeight: '900',
                color: isError ? '#fb7185' : '#fef08a',
                margin: '2px 0 0 0'
              }}>
                {item.title}
              </h4>
              {item.message && (
                <p style={{
                  fontSize: '12px',
                  color: '#d4d4d8',
                  marginTop: '3px',
                  lineHeight: '1.4'
                }}>
                  {item.message}
                </p>
              )}
            </div>

            {/* Dismiss Button */}
            <button
              onClick={() => removeNotification(item.id)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#a1a1aa',
                cursor: 'pointer',
                padding: '2px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <X size={16} />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default GoldNotificationContainer;
