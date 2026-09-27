import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (e) => {
    const selected = e.target.value;
    i18n.changeLanguage(selected);
    localStorage.setItem('app_language', selected);
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: '#09090b',
      border: '1px solid rgba(234, 179, 8, 0.3)',
      padding: '4px 10px',
      borderRadius: '10px'
    }}>
      <Globe size={15} color="#facc15" />
      <select
        value={i18n.language || 'en'}
        onChange={changeLanguage}
        style={{
          background: 'transparent',
          color: '#fef08a',
          border: 'none',
          outline: 'none',
          fontSize: '12.5px',
          fontWeight: '700',
          cursor: 'pointer'
        }}
      >
        <option value="en" style={{ background: '#000', color: '#fef08a' }}>English</option>
        <option value="hi" style={{ background: '#000', color: '#fef08a' }}>हिंदी (Hindi)</option>
        <option value="ta" style={{ background: '#000', color: '#fef08a' }}>தமிழ் (Tamil)</option>
        <option value="te" style={{ background: '#000', color: '#fef08a' }}>తెలుగు (Telugu)</option>
        <option value="kn" style={{ background: '#000', color: '#fef08a' }}>ಕನ್ನಡ (Kannada)</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
