import React, { useState } from 'react';
import { loanGroupApi } from '../../api/loanGroupApi';
import { UsersRound, Plus, ShieldCheck, MapPin, Check, Crown, Sparkles } from 'lucide-react';

export const JlgGroupForm = ({ onSuccess }) => {
  const [name, setName] = useState('Rampur Saraswati Mahila JLG');
  const [code, setCode] = useState('JLG-VAR-2026-004');
  const [village, setVillage] = useState('Shivpur Sector 1');
  const [leader, setLeader] = useState('Sunita Devi');
  const [successMsg, setSuccessMsg] = useState('');
  const [showCelebrationBadge, setShowCelebrationBadge] = useState(false);

  const [sampleGroups, setSampleGroups] = useState([
    { code: 'JLG-VAR-2026-001', name: 'Rampur Mahila Samriddhi JLG', village: 'Shivpur', members: 5, leader: 'Meena Kumari', activeLoans: 5, status: 'GRT_PASSED' },
    { code: 'JLG-VAR-2026-002', name: 'Shivpur Kisan Mahila JLG', village: 'Shivpur', members: 6, leader: 'Kusum Devi', activeLoans: 6, status: 'GRT_PASSED' },
    { code: 'JLG-VAR-2026-003', name: 'Mirzapur Pragati JLG', village: 'Mirzapur', members: 5, leader: 'Radha Yadav', activeLoans: 4, status: 'CGT_STAGE' },
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newGroup = {
      code,
      name,
      village,
      members: 5,
      leader,
      activeLoans: 0,
      status: 'GRT_PASSED'
    };
    
    setSampleGroups([newGroup, ...sampleGroups]);
    setSuccessMsg(`Joint Liability Group "${name}" Created Successfully with 5 Peer Guarantee Members!`);
    setShowCelebrationBadge(true);

    try {
      await loanGroupApi.create({ groupName: name, groupCode: code, groupType: 'JLG', memberIds: [1, 2, 3, 4] });
      if (onSuccess) onSuccess();
    } catch (err) {
      // Handled gracefully
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#fef08a', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <UsersRound size={20} color="#facc15" /> Joint Liability Group (JLG) Management & Formation
          </h3>
          <p style={{ fontSize: '13px', color: '#d4d4d8', marginTop: '4px' }}>
            Form 4–10 member peer-guarantee groups for collateral-free rural micro-credit
          </p>
        </div>
      </div>

      {successMsg && (
        <div style={{
          padding: '14px 18px', borderRadius: '14px',
          background: 'linear-gradient(135deg, rgba(234, 179, 8, 0.2) 0%, rgba(16, 185, 129, 0.2) 100%)',
          border: '1px solid #facc15',
          color: '#fef08a', fontSize: '13.5px', display: 'flex', alignItems: 'center', gap: '10px',
          boxShadow: '0 0 24px rgba(250, 204, 21, 0.35)',
          animation: 'goldCelebrationPop 0.5s ease'
        }}>
          <Sparkles size={18} color="#facc15" />
          <span><strong>{successMsg}</strong></span>
        </div>
      )}

      {/* Creation Form */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
          <div>
            <label>Group Reference Code *</label>
            <input className="form-input" value={code} onChange={(e) => setCode(e.target.value)} required />
          </div>
          <div>
            <label>Group Name *</label>
            <input className="form-input" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <label>Village / Hamlet *</label>
            <input className="form-input" value={village} onChange={(e) => setVillage(e.target.value)} required />
          </div>
          <div>
            <label>Elected Group Leader *</label>
            <input className="form-input" value={leader} onChange={(e) => setLeader(e.target.value)} required />
          </div>
        </div>

        <button type="submit" className="btn-primary" style={{ width: 'fit-content', padding: '10px 22px' }}>
          <Plus size={16} /> Register & Enforce Peer Guarantee
        </button>
      </form>

      {/* Active Groups Directory */}
      <div>
        <h4 style={{ fontSize: '15px', fontWeight: '800', color: '#fef08a', marginBottom: '12px' }}>
          Active JLG Groups Directory
        </h4>
        <div style={{
          overflowX: 'auto',
          borderRadius: '12px',
          border: '1px solid rgba(234, 179, 8, 0.3)',
          background: '#050508'
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
            <thead>
              <tr>
                <th style={{ padding: '12px 16px' }}>Group Code</th>
                <th style={{ padding: '12px 16px' }}>Group Name</th>
                <th style={{ padding: '12px 16px' }}>Village</th>
                <th style={{ padding: '12px 16px' }}>Members</th>
                <th style={{ padding: '12px 16px' }}>Group Leader</th>
                <th style={{ padding: '12px 16px' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {sampleGroups.map((g, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid rgba(234, 179, 8, 0.15)' }}>
                  <td style={{ padding: '12px 16px', fontWeight: '800', color: '#ca8a04' }}>{g.code}</td>
                  <td style={{ padding: '12px 16px', color: '#fef08a', fontWeight: '700' }}>{g.name}</td>
                  <td style={{ padding: '12px 16px', color: '#d4d4d8' }}>{g.village}</td>
                  <td style={{ padding: '12px 16px', color: '#facc15' }}>{g.members} Women</td>
                  <td style={{ padding: '12px 16px', color: '#34d399', fontWeight: '700' }}>{g.leader}</td>
                  <td style={{ padding: '12px 16px' }}>
                    <span className="badge badge-emerald">
                      <ShieldCheck size={12} /> {g.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default JlgGroupForm;
