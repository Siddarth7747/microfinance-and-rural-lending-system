import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../store/slices/authSlice';
import { Crown, ShieldCheck, ArrowRight } from 'lucide-react';

export const Login = () => {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin123');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      const mockUserData = {
        token: 'mock-jwt-token-2026',
        username,
        fullName: username === 'admin' ? 'System Administrator' : 'Rajesh Kumar (Field Officer)',
        roles: username === 'admin' ? ['ADMIN', 'BRANCH_MANAGER'] : ['FIELD_OFFICER'],
        designation: username === 'admin' ? 'Branch Manager' : 'Senior Field Officer',
      };
      dispatch(loginSuccess(mockUserData));
      setIsLoading(false);
      navigate('/');
    }, 300);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'radial-gradient(at 50% 0%, rgba(234, 179, 8, 0.2) 0px, transparent 60%), #050507',
      padding: '24px'
    }}>
      <div 
        className="glass-card" 
        style={{
          padding: '48px 40px',
          width: '100%',
          maxWidth: '430px',
          border: '1px solid rgba(250, 204, 21, 0.35)',
          boxShadow: '0 24px 64px -12px rgba(0, 0, 0, 0.9), 0 0 30px rgba(234, 179, 8, 0.2)'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{
            display: 'inline-flex',
            padding: '16px',
            borderRadius: '18px',
            background: 'linear-gradient(135deg, #facc15 0%, #ca8a04 50%, #854d0e 100%)',
            color: '#09090b',
            boxShadow: '0 8px 24px rgba(234, 179, 8, 0.5)',
            border: '1px solid rgba(254, 240, 138, 0.4)'
          }}>
            <Crown size={36} strokeWidth={2.5} />
          </div>
          <h2 style={{
            fontSize: '24px',
            fontWeight: '900',
            marginTop: '18px',
            letterSpacing: '-0.02em',
            background: 'linear-gradient(135deg, #ffffff 0%, #fef08a 40%, #facc15 80%, #ca8a04 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            MFI Core Banking
          </h2>
          <p style={{ color: '#d4d4d8', fontSize: '13.5px', marginTop: '6px' }}>
            Rural Lending & Micro-Finance Portal
          </p>
        </div>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label>Username / Employee ID</label>
            <input 
              className="form-input" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              placeholder="e.g. admin or field_officer"
              required 
            />
          </div>

          <div>
            <label>Password</label>
            <input 
              className="form-input" 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="••••••••"
              required 
            />
          </div>

          <div style={{
            padding: '12px 14px',
            borderRadius: '12px',
            background: 'rgba(234, 179, 8, 0.06)',
            border: '1px solid rgba(234, 179, 8, 0.2)',
            fontSize: '11.5px',
            color: '#fef08a',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <ShieldCheck size={16} color="#facc15" />
            <span>256-Bit SSL Encrypted Core Vault Connection</span>
          </div>

          <button 
            type="submit" 
            className="btn-primary" 
            style={{ width: '100%', marginTop: '4px', padding: '14px', fontSize: '15px' }}
            disabled={isLoading}
          >
            {isLoading ? 'Authenticating...' : (
              <>Sign In to System <ArrowRight size={18} /></>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
