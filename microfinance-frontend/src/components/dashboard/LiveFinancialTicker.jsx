import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  TrendingUp, ShieldCheck, Zap, CheckCircle2, 
  ArrowUpRight, Radio, Award
} from 'lucide-react';

export const LiveFinancialTicker = () => {
  const { t } = useTranslation();
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString('en-IN', { hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const tickerItems = [
    {
      id: 1,
      icon: Zap,
      badge: 'LIVE DBT',
      text: 'SHG Pragati Group (Varanasi #104) Disbursed ₹1,80,000 via PFMS/DBT',
      color: '#facc15',
      trend: '+₹1.8L'
    },
    {
      id: 2,
      icon: CheckCircle2,
      badge: 'RECOVERY',
      text: 'Doorstep Collection: Sunita Devi ₹2,850 credited (UPI Ref #904821)',
      color: '#34d399',
      trend: '100% On-Time'
    },
    {
      id: 3,
      icon: ShieldCheck,
      badge: 'RBI PAR-30',
      text: 'Portfolio at Risk maintained at 1.45% (Ceiling: 3.00% Limit)',
      color: '#38bdf8',
      trend: 'COMPLIANT'
    },
    {
      id: 4,
      icon: Award,
      badge: 'e-KYC VERIFIED',
      text: 'Radha Yadav (BRN-VAR-1003) biometric UIDAI authentication cleared',
      color: '#fde047',
      trend: '100% KYC'
    },
    {
      id: 5,
      icon: TrendingUp,
      badge: 'FIELD SYNC',
      text: 'Officer Vikram Singh completed 18 village doorstep center meetings in Shivpur',
      color: '#facc15',
      trend: '99.2% Sync'
    },
    {
      id: 6,
      icon: Zap,
      badge: 'JLG SANCTION',
      text: 'Mahila Shakti JLG Group (5 Members) Approved ₹2,50,000 @ 18% p.a.',
      color: '#fbbf24',
      trend: 'SANCTIONED'
    }
  ];

  return (
    <div style={{
      background: 'linear-gradient(90deg, #020203 0%, #08080c 50%, #020203 100%)',
      borderBottom: '1px solid rgba(234, 179, 8, 0.25)',
      borderTop: '1px solid rgba(234, 179, 8, 0.15)',
      padding: '7px 0',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      fontSize: '12.5px',
      position: 'relative',
      zIndex: 15
    }}>
      {/* Fixed Left Live Badge */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '0 16px',
        background: '#000000',
        borderRight: '1px solid rgba(234, 179, 8, 0.3)',
        zIndex: 2,
        flexShrink: 0,
        boxShadow: '4px 0 16px rgba(0, 0, 0, 0.9)'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          background: 'rgba(234, 179, 8, 0.15)',
          padding: '2px 8px',
          borderRadius: '20px',
          border: '1px solid rgba(250, 204, 21, 0.5)'
        }}>
          <Radio size={12} color="#facc15" className="animate-pulse" />
          <span style={{
            fontSize: '10.5px',
            fontWeight: '900',
            letterSpacing: '0.08em',
            color: '#fde047'
          }}>
            LIVE FEED
          </span>
        </div>
        <span style={{
          fontFamily: 'monospace',
          color: '#facc15',
          fontSize: '11px',
          fontWeight: '700'
        }}>
          {timeStr}
        </span>
      </div>

      {/* Marquee Content Container */}
      <div style={{
        display: 'flex',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: '100%',
        maskImage: 'linear-gradient(to right, transparent, black 20px, black 95%, transparent)'
      }}>
        <div style={{
          display: 'inline-flex',
          gap: '36px',
          animation: 'tickerScroll 35s linear infinite',
          paddingLeft: '20px'
        }}>
          {tickerItems.concat(tickerItems).map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '9px',
                  cursor: 'default'
                }}
              >
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  background: 'rgba(234, 179, 8, 0.12)',
                  border: '1px solid rgba(234, 179, 8, 0.35)',
                  padding: '1px 7px',
                  borderRadius: '6px',
                  fontSize: '10px',
                  fontWeight: '800',
                  color: item.color
                }}>
                  <Icon size={11} color={item.color} />
                  {item.badge}
                </span>

                <span style={{ color: '#fef08a', fontWeight: '500', fontSize: '12px' }}>
                  {item.text}
                </span>

                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '2px',
                  color: '#facc15',
                  fontWeight: '800',
                  fontSize: '11px',
                  background: 'rgba(0,0,0,0.6)',
                  padding: '1px 5px',
                  borderRadius: '4px',
                  border: '1px solid rgba(250, 204, 21, 0.2)'
                }}>
                  <ArrowUpRight size={11} />
                  {item.trend}
                </span>

                <span style={{ color: 'rgba(234, 179, 8, 0.4)', margin: '0 8px' }}>•</span>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes tickerScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .tickerScroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default LiveFinancialTicker;
