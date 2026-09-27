import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Award, TrendingUp, AlertCircle, RefreshCw, CheckCircle2 } from 'lucide-react';

export const CibilScoreGauge = () => {
  const { t } = useTranslation();
  
  const sampleProfiles = [
    { name: 'Sunita Devi (BRN-1001)', score: 748, risk: 'Prime Rural', color: '#facc15', onTime: '100%', inquiries: 1, activeLoans: 1 },
    { name: 'Meena Kumari (BRN-1002)', score: 685, risk: 'Good Standing', color: '#fde047', onTime: '98.2%', inquiries: 2, activeLoans: 2 },
    { name: 'Radha Yadav (BRN-1003)', score: 792, risk: 'Super Prime', color: '#34d399', onTime: '100%', inquiries: 0, activeLoans: 1 },
    { name: 'Sanjay Maurya (BRN-1004)', score: 580, risk: 'Moderate Risk', color: '#f97316', onTime: '91.5%', inquiries: 4, activeLoans: 3 }
  ];

  const [selectedProfileIndex, setSelectedProfileIndex] = useState(0);
  const current = sampleProfiles[selectedProfileIndex];

  // Score mapping: 300 to 900 -> 0 to 180 degrees
  const minScore = 300;
  const maxScore = 900;
  const clampedScore = Math.max(minScore, Math.min(maxScore, current.score));
  const angle = ((clampedScore - minScore) / (maxScore - minScore)) * 180 - 90; // -90 deg to +90 deg

  const getScoreRating = (score) => {
    if (score >= 750) return { label: 'SUPER PRIME (Grade A+)', color: '#34d399', desc: 'Pre-approved for maximum rural loan limits' };
    if (score >= 650) return { label: 'PRIME RURAL (Grade A)', color: '#facc15', desc: 'Eligible for preferential micro-interest rates' };
    if (score >= 550) return { label: 'MODERATE RISK (Grade B)', color: '#fde047', desc: 'Standard JLG group co-guarantee required' };
    return { label: 'HIGH RISK (Grade C)', color: '#f87171', desc: 'Enhanced field officer verification needed' };
  };

  const rating = getScoreRating(current.score);

  return (
    <div className="glass-card" style={{ padding: '24px 28px', position: 'relative' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px', flexWrap: 'wrap', gap: '10px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="badge badge-gold">
              <Award size={13} /> HighMark / CIBIL Bureau
            </span>
            <span style={{ fontSize: '12px', color: '#a1a1aa' }}>Live API Pull</span>
          </div>
          <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#fef08a', marginTop: '4px', margin: 0 }}>
            Credit Bureau Radial Scorecard (300 - 900)
          </h3>
        </div>

        {/* Profile Switcher */}
        <div style={{ display: 'flex', gap: '6px' }}>
          {sampleProfiles.map((p, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedProfileIndex(idx)}
              style={{
                padding: '5px 10px',
                borderRadius: '8px',
                fontSize: '11.5px',
                fontWeight: '700',
                background: selectedProfileIndex === idx ? 'linear-gradient(135deg, #facc15 0%, #ca8a04 100%)' : '#0e0e13',
                color: selectedProfileIndex === idx ? '#000000' : '#fde047',
                border: selectedProfileIndex === idx ? '1px solid #fef08a' : '1px solid rgba(234, 179, 8, 0.25)',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              {p.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', alignItems: 'center' }}>
        
        {/* SVG Radial Gauge */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
          <svg width="260" height="150" viewBox="0 0 260 150" style={{ overflow: 'visible' }}>
            <defs>
              <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="35%" stopColor="#f59e0b" />
                <stop offset="70%" stopColor="#facc15" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
              <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Background Arc Track */}
            <path
              d="M 25 135 A 105 105 0 0 1 235 135"
              fill="none"
              stroke="#18181f"
              strokeWidth="20"
              strokeLinecap="round"
            />

            {/* Colored Segment Arc */}
            <path
              d="M 25 135 A 105 105 0 0 1 235 135"
              fill="none"
              stroke="url(#gaugeGradient)"
              strokeWidth="16"
              strokeLinecap="round"
              filter="url(#goldGlow)"
            />

            {/* Tick Markers */}
            <text x="25" y="152" fill="#ef4444" fontSize="11" fontWeight="700" textAnchor="middle">300</text>
            <text x="80" y="55" fill="#f59e0b" fontSize="11" fontWeight="700" textAnchor="middle">550</text>
            <text x="130" y="24" fill="#facc15" fontSize="11" fontWeight="700" textAnchor="middle">650</text>
            <text x="185" y="55" fill="#34d399" fontSize="11" fontWeight="700" textAnchor="middle">750</text>
            <text x="235" y="152" fill="#10b981" fontSize="11" fontWeight="700" textAnchor="middle">900</text>

            {/* Center Pivot Base */}
            <circle cx="130" cy="135" r="14" fill="#ca8a04" stroke="#fef08a" strokeWidth="2" />
            <circle cx="130" cy="135" r="6" fill="#000000" />

            {/* Needle */}
            <g transform={`rotate(${angle} 130 135)`} style={{ transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
              <polygon points="127,135 133,135 130,35" fill="#ffffff" filter="drop-shadow(0 0 4px #facc15)" />
              <circle cx="130" cy="35" r="3" fill="#facc15" />
            </g>
          </svg>

          {/* Large Center Score Value */}
          <div style={{ textAlign: 'center', marginTop: '-12px' }}>
            <div style={{
              fontSize: '44px',
              fontWeight: '900',
              letterSpacing: '-0.03em',
              color: rating.color,
              textShadow: `0 0 24px ${rating.color}66`
            }}>
              {current.score}
            </div>
            <div style={{
              fontSize: '13px',
              fontWeight: '800',
              color: rating.color,
              background: 'rgba(0,0,0,0.7)',
              padding: '3px 14px',
              borderRadius: '12px',
              border: `1px solid ${rating.color}55`,
              display: 'inline-block'
            }}>
              {rating.label}
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          
          <div style={{
            background: 'rgba(12, 12, 18, 0.8)',
            border: '1px solid rgba(234, 179, 8, 0.25)',
            borderRadius: '12px',
            padding: '12px 16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <span style={{ fontSize: '11px', color: '#a1a1aa', textTransform: 'uppercase' }}>Applicant Name</span>
              <div style={{ fontSize: '14px', fontWeight: '800', color: '#fef08a' }}>{current.name}</div>
            </div>
            <span className="badge badge-emerald">
              <CheckCircle2 size={12} /> Aadhaar Linked
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div style={{
              background: 'rgba(12, 12, 18, 0.8)',
              border: '1px solid rgba(234, 179, 8, 0.2)',
              borderRadius: '12px',
              padding: '12px',
              textAlign: 'center'
            }}>
              <span style={{ fontSize: '11px', color: '#a1a1aa' }}>On-Time Repayment</span>
              <div style={{ fontSize: '18px', fontWeight: '800', color: '#34d399', marginTop: '3px' }}>
                {current.onTime}
              </div>
            </div>

            <div style={{
              background: 'rgba(12, 12, 18, 0.8)',
              border: '1px solid rgba(234, 179, 8, 0.2)',
              borderRadius: '12px',
              padding: '12px',
              textAlign: 'center'
            }}>
              <span style={{ fontSize: '11px', color: '#a1a1aa' }}>Active Credit Lines</span>
              <div style={{ fontSize: '18px', fontWeight: '800', color: '#facc15', marginTop: '3px' }}>
                {current.activeLoans} JLG Loan
              </div>
            </div>
          </div>

          <div style={{
            background: 'rgba(234, 179, 8, 0.08)',
            border: '1px dashed rgba(234, 179, 8, 0.4)',
            borderRadius: '10px',
            padding: '10px 14px',
            fontSize: '12px',
            color: '#fef08a',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <ShieldCheck size={18} color="#facc15" style={{ flexShrink: 0 }} />
            <span>{rating.desc}</span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default CibilScoreGauge;
