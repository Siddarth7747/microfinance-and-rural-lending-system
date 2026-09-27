import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  CheckCircle2, Crown, Sparkles, Award, ShieldCheck, 
  ArrowRight, BookOpen, Printer, X, Check 
} from 'lucide-react';
import { formatCurrency } from '../../utils/formatters';

export const RegistrationSuccessModal = ({ 
  borrowerData, 
  onClose, 
  onOpenPassbook, 
  onRegisterAnother 
}) => {
  const { t } = useTranslation();

  const fullName = borrowerData 
    ? `${borrowerData.firstName || ''} ${borrowerData.lastName || ''}`.trim() 
    : 'Sunita Devi';

  const brn = borrowerData?.brn || `BRN-VAR-2026-${Math.floor(1000 + Math.random() * 9000)}`;
  const village = borrowerData?.village || 'Shivpur Sector 1';
  const aadhaar = borrowerData?.aadhaarNumber 
    ? `XXXX-XXXX-${borrowerData.aadhaarNumber.slice(-4)}` 
    : 'XXXX-XXXX-8921';

  // Confetti particles generator
  const confettiItems = Array.from({ length: 32 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 94}%`,
    top: `${Math.random() * 20 - 30}px`,
    delay: `${Math.random() * 2.5}s`,
    duration: `${2.5 + Math.random() * 2.5}s`,
    size: Math.random() > 0.5 ? '10px' : '6px',
    color: ['#fef08a', '#facc15', '#eab308', '#ca8a04', '#34d399', '#ffffff'][i % 6]
  }));

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.92)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 120,
      padding: '20px',
      overflow: 'hidden'
    }}>
      
      {/* Floating Gold Confetti Rain */}
      {confettiItems.map((c) => (
        <div
          key={c.id}
          style={{
            position: 'absolute',
            left: c.left,
            top: c.top,
            width: c.size,
            height: c.size,
            backgroundColor: c.color,
            borderRadius: Math.random() > 0.5 ? '50%' : '2px',
            animation: `confettiFall ${c.duration} linear infinite`,
            animationDelay: c.delay,
            pointerEvents: 'none',
            boxShadow: `0 0 8px ${c.color}`,
            zIndex: 121
          }}
        />
      ))}

      {/* Main Celebratory Modal Card */}
      <div style={{
        background: '#040407',
        border: '2px solid #facc15',
        borderRadius: '26px',
        width: '100%',
        maxWidth: '620px',
        padding: '36px 32px',
        position: 'relative',
        zIndex: 125,
        boxShadow: '0 0 80px rgba(250, 204, 21, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
        animation: 'goldCelebrationPop 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        overflow: 'hidden'
      }}>
        
        {/* Background Rotating Sunburst Aura */}
        <div style={{
          position: 'absolute',
          top: '-120px',
          width: '380px',
          height: '380px',
          background: 'conic-gradient(from 0deg, transparent 0deg, rgba(250, 204, 21, 0.12) 30deg, transparent 60deg, rgba(250, 204, 21, 0.12) 90deg, transparent 120deg, rgba(250, 204, 21, 0.12) 150deg, transparent 180deg, rgba(250, 204, 21, 0.12) 210deg, transparent 240deg, rgba(250, 204, 21, 0.12) 270deg, transparent 300deg, rgba(250, 204, 21, 0.12) 330deg, transparent 360deg)',
          borderRadius: '50%',
          animation: 'rayRotate 24s linear infinite',
          pointerEvents: 'none'
        }} />

        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            background: 'rgba(250, 204, 21, 0.1)',
            border: '1px solid rgba(250, 204, 21, 0.3)',
            borderRadius: '10px',
            width: '34px',
            height: '34px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#facc15',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          <X size={18} />
        </button>

        {/* Animated Holographic Gold Seal */}
        <div style={{
          position: 'relative',
          width: '90px',
          height: '90px',
          marginBottom: '18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* Pulsing Ripple Rings */}
          <div style={{
            position: 'absolute',
            inset: '-10px',
            borderRadius: '50%',
            border: '2px solid rgba(250, 204, 21, 0.4)',
            animation: 'floatGlow 2s ease-in-out infinite'
          }} />

          {/* Golden Badge Center */}
          <div style={{
            width: '76px',
            height: '76px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #ffffff 0%, #fef08a 25%, #facc15 60%, #ca8a04 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 35px rgba(250, 204, 21, 0.8), inset 0 2px 4px #ffffff',
            border: '3px solid #ffffff',
            animation: 'sealRotatePulse 0.75s cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}>
            <Check size={40} color="#000000" strokeWidth={3.5} />
          </div>
        </div>

        {/* Celebratory Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
          <span className="badge badge-gold" style={{ fontSize: '11px', letterSpacing: '0.08em' }}>
            <Crown size={13} /> OFFICIAL ENROLLMENT SUCCESS
          </span>
        </div>

        <h2 style={{
          fontSize: '26px',
          fontWeight: '900',
          margin: '6px 0 0 0',
          background: 'linear-gradient(135deg, #ffffff 0%, #fef08a 40%, #facc15 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 20px rgba(250, 204, 21, 0.5)'
        }}>
          Borrower Registered & Verified!
        </h2>

        <p style={{ color: '#d4d4d8', fontSize: '13.5px', marginTop: '6px', maxWidth: '460px' }}>
          UIDAI biometric authentication cleared. Borrower is officially linked to the Core Banking Ledger and eligible for rural credit.
        </p>

        {/* Digital Identity Certificate Box */}
        <div style={{
          width: '100%',
          background: 'linear-gradient(135deg, rgba(234, 179, 8, 0.1) 0%, rgba(10, 10, 15, 0.95) 100%)',
          border: '1px solid rgba(250, 204, 21, 0.45)',
          borderRadius: '16px',
          padding: '18px 22px',
          margin: '20px 0',
          textAlign: 'left',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Light sweep ray */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '200%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
            animation: 'lightSweep 4s infinite'
          }} />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(234, 179, 8, 0.25)', paddingBottom: '10px', marginBottom: '12px' }}>
            <div>
              <span style={{ fontSize: '10.5px', color: '#ca8a04', textTransform: 'uppercase', fontWeight: '800' }}>
                Borrower Registration Number
              </span>
              <div style={{ fontSize: '16px', fontWeight: '900', color: '#fef08a', fontFamily: 'monospace' }}>
                {brn}
              </div>
            </div>

            <span className="badge badge-emerald" style={{ fontSize: '10.5px' }}>
              <ShieldCheck size={12} /> e-KYC VERIFIED
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '12.5px' }}>
            <div>
              <span style={{ color: '#a1a1aa', fontSize: '11px' }}>Full Name</span>
              <div style={{ color: '#fef08a', fontWeight: '800', fontSize: '14px' }}>{fullName}</div>
            </div>

            <div>
              <span style={{ color: '#a1a1aa', fontSize: '11px' }}>Aadhaar Number</span>
              <div style={{ color: '#facc15', fontWeight: '700' }}>{aadhaar}</div>
            </div>

            <div>
              <span style={{ color: '#a1a1aa', fontSize: '11px' }}>Village / Center</span>
              <div style={{ color: '#fef08a', fontWeight: '700' }}>{village}</div>
            </div>

            <div>
              <span style={{ color: '#a1a1aa', fontSize: '11px' }}>Credit Limit Eligibility</span>
              <div style={{ color: '#34d399', fontWeight: '800' }}>Up to ₹3,00,000</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '12px', width: '100%', flexWrap: 'wrap' }}>
          {onOpenPassbook && (
            <button
              onClick={onOpenPassbook}
              className="btn-primary"
              style={{ flex: 1, padding: '12px 18px', fontSize: '13.5px' }}
            >
              <BookOpen size={16} /> View Gold Passbook
            </button>
          )}

          {onRegisterAnother && (
            <button
              onClick={onRegisterAnother}
              className="btn-secondary"
              style={{ flex: 1, padding: '12px 18px', fontSize: '13.5px' }}
            >
              <Sparkles size={16} /> + Enroll Another
            </button>
          )}
        </div>

      </div>

    </div>
  );
};

export default RegistrationSuccessModal;
