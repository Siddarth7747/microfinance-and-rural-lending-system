import React, { useState } from 'react';
import { Shield, Sparkles, CheckCircle2 } from 'lucide-react';
import { goldNotify } from '../../utils/goldNotification';

export const ShgRegistrationForm = () => {
  const [groupCode, setGroupCode] = useState('SHG-VAR-105');
  const [groupName, setGroupName] = useState('Jai Santoshi Maa SHG');
  const [district, setDistrict] = useState('Shivpur Sector 1, Varanasi');
  const [membersCount, setMembersCount] = useState('14');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    goldNotify.celebrate(
      `Self Help Group Registered!`,
      `"${groupName}" (${groupCode}) enrolled with ${membersCount} women members in ${district}. NABARD Linkage initiated.`,
      'SHG ENROLLMENT SUCCESS'
    );
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card" style={{ padding: '28px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
        <Shield size={20} color="#facc15" />
        <h3 style={{ color: '#fef08a', margin: 0, fontSize: '18px' }}>Register New Self Help Group (SHG)</h3>
      </div>

      {submitted && (
        <div style={{
          padding: '14px 18px', borderRadius: '14px',
          background: 'linear-gradient(135deg, rgba(234, 179, 8, 0.2) 0%, rgba(16, 185, 129, 0.2) 100%)',
          border: '1px solid #facc15',
          color: '#fef08a', fontSize: '13.5px', display: 'flex', alignItems: 'center', gap: '10px',
          boxShadow: '0 0 24px rgba(250, 204, 21, 0.35)',
          animation: 'goldCelebrationPop 0.5s ease',
          marginBottom: '20px'
        }}>
          <CheckCircle2 size={20} color="#34d399" />
          <span><strong>Success!</strong> SHG "{groupName}" officially enrolled in Panchasutra Register.</span>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
        <div>
          <label>SHG Group Reference Code *</label>
          <input className="form-input" required value={groupCode} onChange={(e) => setGroupCode(e.target.value)} />
        </div>
        <div>
          <label>SHG Group Official Name *</label>
          <input className="form-input" required value={groupName} onChange={(e) => setGroupName(e.target.value)} />
        </div>
        <div>
          <label>District / Village Center *</label>
          <input className="form-input" required value={district} onChange={(e) => setDistrict(e.target.value)} />
        </div>
        <div>
          <label>Initial Women Members Count *</label>
          <input className="form-input" type="number" required value={membersCount} onChange={(e) => setMembersCount(e.target.value)} />
        </div>
      </div>

      <button type="submit" className="btn-primary" style={{ marginTop: '22px', padding: '12px 24px' }}>
        <Sparkles size={16} /> Register SHG & Issue Passbook
      </button>
    </form>
  );
};

export default ShgRegistrationForm;
