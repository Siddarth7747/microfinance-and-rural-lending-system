import React, { useState } from 'react';
import { Users, UserPlus, Shield, Check, X, Trash2, Edit, Search } from 'lucide-react';

export const UserManagementPanel = () => {
  const [users, setUsers] = useState([
    { id: 1, username: 'admin', name: 'System Administrator', email: 'admin@mfi-rural.com', role: 'ADMIN', branch: 'Central Operations (Pune)', status: 'ACTIVE', registeredDate: 'Aug 10, 2026' },
    { id: 2, username: 'manager', name: 'Ananya Sharma', email: 'ananya.mgr@mfi-rural.com', role: 'BRANCH_MANAGER', branch: 'Varanasi Main Branch', status: 'ACTIVE', registeredDate: 'Aug 12, 2026' },
    { id: 3, username: 'field_officer', name: 'Rajesh Kumar', email: 'rajesh.field@mfi-rural.com', role: 'FIELD_OFFICER', branch: 'Varanasi Field Unit 1', status: 'ACTIVE', registeredDate: 'Aug 15, 2026' },
    { id: 4, username: 'fo_ramesh', name: 'Ramesh Singh', email: 'ramesh.singh@mfi-rural.com', role: 'FIELD_OFFICER', branch: 'Mirzapur Cluster', status: 'ACTIVE', registeredDate: 'Aug 18, 2026' },
    { id: 5, username: 'auditor_priya', name: 'Priya Iyer', email: 'priya.audit@mfi-rural.com', role: 'INTERNAL_AUDITOR', branch: 'Compliance & Risk Dept', status: 'ACTIVE', registeredDate: 'Sep 01, 2026' }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [newUser, setNewUser] = useState({ username: '', name: '', email: '', role: 'FIELD_OFFICER', branch: 'Varanasi Main Branch' });

  const handleCreateUser = (e) => {
    e.preventDefault();
    setUsers([...users, {
      id: users.length + 1,
      ...newUser,
      status: 'ACTIVE',
      registeredDate: 'Sep 06, 2026'
    }]);
    setShowModal(false);
    setNewUser({ username: '', name: '', email: '', role: 'FIELD_OFFICER', branch: 'Varanasi Main Branch' });
  };

  const toggleStatus = (id) => {
    setUsers(users.map(u => u.id === id ? { ...u, status: u.status === 'ACTIVE' ? 'DISABLED' : 'ACTIVE' } : u));
  };

  const filteredUsers = users.filter(u => 
    u.username.toLowerCase().includes(searchQuery.toLowerCase()) || 
    u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    u.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="glass-card" style={{ padding: '28px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#ffffff', margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Shield size={22} color="#818cf8" /> Administrative Operations & Role-Based Access Control (RBAC)
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '13px', marginTop: '4px' }}>
            Manage core banking user credentials, multi-branch assignments, maker-checker roles, and account statuses
          </p>
        </div>

        <button className="btn-primary" onClick={() => setShowModal(true)}>
          <UserPlus size={16} /> Create New User
        </button>
      </div>

      {/* Filter Bar */}
      <div style={{ marginBottom: '20px', display: 'flex', gap: '12px' }}>
        <div style={{ position: 'relative', maxWidth: '360px', width: '100%' }}>
          <Search size={16} color="#64748b" style={{ position: 'absolute', left: '14px', top: '14px' }} />
          <input 
            className="form-input" 
            placeholder="Search username, name, or role..." 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ paddingLeft: '40px' }}
          />
        </div>
      </div>

      {/* User Table */}
      <div style={{
        overflowX: 'auto',
        borderRadius: '14px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        background: 'rgba(9, 14, 26, 0.6)'
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13.5px' }}>
          <thead>
            <tr style={{ background: 'rgba(255, 255, 255, 0.03)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <th style={{ padding: '14px 18px', color: '#94a3b8', fontSize: '12px', textTransform: 'uppercase' }}>User Account</th>
              <th style={{ padding: '14px 18px', color: '#94a3b8', fontSize: '12px', textTransform: 'uppercase' }}>Email</th>
              <th style={{ padding: '14px 18px', color: '#94a3b8', fontSize: '12px', textTransform: 'uppercase' }}>Role Assignment</th>
              <th style={{ padding: '14px 18px', color: '#94a3b8', fontSize: '12px', textTransform: 'uppercase' }}>Assigned Branch</th>
              <th style={{ padding: '14px 18px', color: '#94a3b8', fontSize: '12px', textTransform: 'uppercase' }}>Status</th>
              <th style={{ padding: '14px 18px', color: '#94a3b8', fontSize: '12px', textTransform: 'uppercase' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((u) => (
              <tr key={u.id} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
                <td style={{ padding: '14px 18px' }}>
                  <div style={{ fontWeight: '700', color: '#818cf8' }}>{u.username}</div>
                  <div style={{ fontSize: '12px', color: '#94a3b8' }}>{u.name}</div>
                </td>
                <td style={{ padding: '14px 18px', color: '#cbd5e1' }}>{u.email}</td>
                <td style={{ padding: '14px 18px' }}>
                  <span className={`badge ${
                    u.role === 'ADMIN' ? 'badge-indigo' : 
                    u.role === 'BRANCH_MANAGER' ? 'badge-amber' : 
                    u.role === 'INTERNAL_AUDITOR' ? 'badge-cyan' : 'badge-emerald'
                  }`}>
                    {u.role}
                  </span>
                </td>
                <td style={{ padding: '14px 18px', color: '#94a3b8' }}>{u.branch}</td>
                <td style={{ padding: '14px 18px' }}>
                  <span className={`badge ${u.status === 'ACTIVE' ? 'badge-emerald' : 'badge-rose'}`}>
                    {u.status}
                  </span>
                </td>
                <td style={{ padding: '14px 18px' }}>
                  <button 
                    onClick={() => toggleStatus(u.id)}
                    className="btn-secondary" 
                    style={{ padding: '6px 12px', fontSize: '12px' }}
                  >
                    {u.status === 'ACTIVE' ? 'Disable' : 'Enable'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(0, 0, 0, 0.75)', backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100, padding: '20px'
        }}>
          <div className="glass-card" style={{ maxWidth: '480px', width: '100%', padding: '32px' }}>
            <h3 style={{ fontSize: '18px', marginBottom: '20px', color: '#ffffff' }}>Add New System User</h3>
            <form onSubmit={handleCreateUser} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label>Username / Employee ID *</label>
                <input className="form-input" value={newUser.username} onChange={e => setNewUser({ ...newUser, username: e.target.value })} required />
              </div>
              <div>
                <label>Full Name *</label>
                <input className="form-input" value={newUser.name} onChange={e => setNewUser({ ...newUser, name: e.target.value })} required />
              </div>
              <div>
                <label>Email Address *</label>
                <input className="form-input" type="email" value={newUser.email} onChange={e => setNewUser({ ...newUser, email: e.target.value })} required />
              </div>
              <div>
                <label>Role Assignment *</label>
                <select className="form-input" value={newUser.role} onChange={e => setNewUser({ ...newUser, role: e.target.value })}>
                  <option value="FIELD_OFFICER">FIELD_OFFICER (Doorstep Collection & KYC)</option>
                  <option value="BRANCH_MANAGER">BRANCH_MANAGER (Sanction & Approvals)</option>
                  <option value="INTERNAL_AUDITOR">INTERNAL_AUDITOR (Risk & Inspection)</option>
                  <option value="ADMIN">ADMIN (System Configuration)</option>
                </select>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '12px' }}>
                <button type="button" className="btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="submit" className="btn-primary">Save User</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagementPanel;
