# APPLICATION DEVELOPMENT
## Design and Implementation of a Microfinance and Rural Lending Management System using Spring Boot and React

---

## 1. FOLDER STRUCTURE

```text
MICRO FINANACE RURAL LENDING MANAGEMENT/
├── microfinance-backend/
│   ├── pom.xml
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/mfi/microfinance/
│   │   │   │   ├── MicrofinanceApplication.java
│   │   │   │   ├── config/
│   │   │   │   │   ├── SecurityConfig.java
│   │   │   │   │   ├── CorsConfig.java
│   │   │   │   │   ├── DataInitializer.java
│   │   │   │   │   └── SwaggerOpenApiConfig.java
│   │   │   │   ├── entity/
│   │   │   │   │   ├── Borrower.java
│   │   │   │   │   ├── Loan.java
│   │   │   │   │   ├── LoanGroup.java
│   │   │   │   │   ├── LoanApplication.java
│   │   │   │   │   ├── LoanProduct.java
│   │   │   │   │   ├── EmiSchedule.java
│   │   │   │   │   ├── RepaymentTransaction.java
│   │   │   │   │   ├── ShgGroup.java
│   │   │   │   │   ├── ShgSavings.java
│   │   │   │   │   ├── Disbursement.java
│   │   │   │   │   ├── Branch.java
│   │   │   │   │   ├── User.java
│   │   │   │   │   └── AuditLog.java
│   │   │   │   ├── controller/
│   │   │   │   │   ├── AuthController.java
│   │   │   │   │   ├── BorrowerController.java
│   │   │   │   │   ├── LoanController.java
│   │   │   │   │   ├── LoanGroupController.java
│   │   │   │   │   ├── LoanApplicationController.java
│   │   │   │   │   ├── CollectionController.java
│   │   │   │   │   ├── DisbursementController.java
│   │   │   │   │   └── ReportController.java
│   │   │   │   ├── service/
│   │   │   │   │   ├── AuthService.java
│   │   │   │   │   ├── BorrowerService.java
│   │   │   │   │   ├── LoanService.java
│   │   │   │   │   ├── LoanGroupService.java
│   │   │   │   │   ├── DelinquencyService.java
│   │   │   │   │   ├── EmiScheduleService.java
│   │   │   │   │   └── RepaymentService.java
│   │   │   │   └── repository/
│   │   │   │       ├── BorrowerRepository.java
│   │   │   │       ├── LoanRepository.java
│   │   │   │       ├── LoanGroupRepository.java
│   │   │   │       ├── UserRepository.java
│   │   │   │       └── AuditLogRepository.java
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   │       └── java/com/mfi/microfinance/
│   │           ├── integration/CibilBureauIntegrationTest.java
│   │           ├── integration/AadhaarEkycIntegrationTest.java
│   │           └── service/InterestCalculationServiceTest.java
│   └── mvnw.cmd
│
└── microfinance-frontend/
    ├── package.json
    ├── vite.config.js
    ├── index.html
    └── src/
        ├── main.jsx
        ├── App.jsx
        ├── api/
        │   ├── client.js
        │   ├── authApi.js
        │   ├── borrowerApi.js
        │   ├── loanApi.js
        │   ├── collectionApi.js
        │   └── reportApi.js
        ├── components/
        │   ├── common/
        │   │   ├── NavBar.jsx
        │   │   ├── Sidebar.jsx
        │   │   ├── DataTable.jsx
        │   │   ├── ConfirmDialog.jsx
        │   │   └── LoadingSpinner.jsx
        │   ├── borrower/
        │   │   ├── BorrowerRegistrationForm.jsx
        │   │   └── BorrowerList.jsx
        │   ├── loan-group/
        │   │   └── JlgGroupForm.jsx
        │   ├── loan-application/
        │   │   └── LoanApplicationForm.jsx
        │   └── collection/
        │       └── CollectionEntryForm.jsx
        ├── charts/
        │   ├── AumGrowthChart.jsx
        │   └── CollectionEfficiencyChart.jsx
        ├── pages/
        │   ├── Home.jsx
        │   ├── Login.jsx
        │   ├── Microfinance.jsx
        │   └── AdminConsole/
        ├── layouts/
        │   └── MainLayout.jsx
        ├── store/
        │   ├── index.js
        │   └── slices/authSlice.js
        └── styles/
            └── global.css
```

---

## 2. FRONTEND DOCUMENTATION (REACTJS COMPONENTS)

### `/Common/LoadingSpinner.jsx`
```jsx
import React from 'react';
import { Loader2 } from 'lucide-react';

export const LoadingSpinner = ({ message = 'Loading financial data...' }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4rem 2rem',
      gap: '1rem',
      color: '#6366f1'
    }}>
      <Loader2 size={36} style={{ animation: 'spin 1s linear infinite' }} />
      <p style={{ fontSize: '0.9rem', fontWeight: 600, color: '#94a3b8' }}>{message}</p>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;
```

---

### `/Common/DataTable.jsx`
```jsx
import React from 'react';
import { Inbox } from 'lucide-react';

export const DataTable = ({ columns, data, onRowClick }) => {
  return (
    <div style={{
      overflowX: 'auto',
      borderRadius: '12px',
      border: '1px solid #e2e8f0',
      background: '#ffffff',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.02)'
    }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13.5px' }}>
        <thead>
          <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
            {columns.map((col, idx) => (
              <th key={idx} style={{
                padding: '12px 18px',
                color: '#475569',
                fontWeight: '600',
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.04em'
              }}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((row, rIdx) => (
              <tr
                key={rIdx}
                onClick={() => onRowClick && onRowClick(row)}
                style={{
                  borderBottom: '1px solid #f1f5f9',
                  cursor: onRowClick ? 'pointer' : 'default',
                  transition: 'background 0.15s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#f8fafc'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#ffffff'}
              >
                {columns.map((col, cIdx) => (
                  <td key={cIdx} style={{ padding: '14px 18px', color: '#1e293b' }}>
                    {col.render ? col.render(row) : (row[col.accessor] !== null && row[col.accessor] !== undefined ? String(row[col.accessor]) : '—')}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} style={{ padding: '48px', textAlign: 'center', color: '#64748b' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <Inbox size={32} strokeWidth={1.5} color="#94a3b8" />
                  <span style={{ fontSize: '14px', fontWeight: '500' }}>No records found</span>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
```

---

### `/Borrower/BorrowerRegistrationForm.jsx`
```jsx
import React, { useState } from 'react';
import { borrowerApi } from '../../api/borrowerApi';
import { Sparkles, Check, AlertCircle } from 'lucide-react';

export const BorrowerRegistrationForm = ({ onSuccess, onComplete }) => {
  const [formData, setFormData] = useState({
    firstName: 'Sunita', middleName: '', lastName: 'Devi', dateOfBirth: '1992-04-12',
    gender: 'FEMALE', aadhaarNumber: '987654321012', panNumber: '', mobileNumber: '9876543210',
    addressLine1: 'House No 42, Main Road', village: 'Shivpur', taluka: 'Sadar', district: 'Varanasi',
    state: 'Uttar Pradesh', pincode: '221001', annualHouseholdIncome: '180000',
    occupation: 'Agriculture / Dairy'
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const payload = {
        ...formData,
        panNumber: formData.panNumber ? formData.panNumber.trim() : null,
        middleName: formData.middleName ? formData.middleName.trim() : null,
        annualHouseholdIncome: parseFloat(formData.annualHouseholdIncome) || 180000
      };
      await borrowerApi.register(payload);
      setSuccess(true);
      if (onSuccess) onSuccess();
      if (onComplete) onComplete();
    } catch (err) {
      setError(err.detail || 'Borrower enrollment failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {error && <div className="badge badge-rose">{error}</div>}
      {success && <div className="badge badge-emerald">Enrolled successfully!</div>}
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <input className="form-input" placeholder="First Name" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} required />
        <input className="form-input" placeholder="Last Name" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} required />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <input className="form-input" placeholder="Mobile (10 digits)" value={formData.mobileNumber} onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })} maxLength={10} required />
        <input className="form-input" placeholder="Aadhaar (12 digits)" value={formData.aadhaarNumber} onChange={(e) => setFormData({ ...formData, aadhaarNumber: e.target.value })} maxLength={12} required />
      </div>
      <button type="submit" className="btn-primary" disabled={loading}>
        {loading ? 'Processing...' : 'Register Borrower'}
      </button>
    </form>
  );
};

export default BorrowerRegistrationForm;
```

---

### `/Borrower/BorrowerList.jsx`
```jsx
import React from 'react';
import { DataTable } from '../common/DataTable';
import { formatCurrency } from '../../utils/formatters';

export const BorrowerList = ({ borrowers, onSelect, isLoading }) => {
  const columns = [
    { header: 'BRN', accessor: 'brn' },
    { header: 'Full Name', accessor: 'fullName' },
    { header: 'Mobile', accessor: 'mobileNumber' },
    { header: 'Village', accessor: 'village' },
    { header: 'Income', render: (row) => formatCurrency(row.annualHouseholdIncome) },
    { header: 'KYC Status', render: (row) => {
      const isVerified = row.kycStatus === 'FULLY_VERIFIED' || row.kycStatus === 'AADHAAR_VERIFIED';
      return (
        <span className={`badge ${isVerified ? 'badge-emerald' : 'badge-amber'}`}>
          {row.kycStatus || 'PENDING'}
        </span>
      );
    }},
  ];

  if (isLoading) {
    return <div style={{ padding: '32px', textAlign: 'center', color: '#64748b' }}>Loading borrowers...</div>;
  }

  return <DataTable columns={columns} data={borrowers || []} onRowClick={onSelect} />;
};

export default BorrowerList;
```

---

### `/Layout/Sidebar.jsx`
```jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home, Users, UsersRound, FileText, CreditCard,
  DollarSign, AlertCircle, Shield, Building2, BarChart3, Settings,
  CheckCircle2
} from 'lucide-react';

export const Sidebar = ({ isAdminMode }) => {
  const menuItems = [
    { label: 'Dashboard', icon: Home, path: '/' },
    { label: 'Borrowers', icon: Users, path: '/microfinance?tab=borrowers' },
    { label: 'JLG / Groups', icon: UsersRound, path: '/microfinance?tab=groups' },
    { label: 'Applications', icon: FileText, path: '/microfinance?tab=applications' },
    { label: 'Active Loans', icon: CreditCard, path: '/microfinance?tab=loans' },
    { label: 'Collections', icon: DollarSign, path: '/microfinance?tab=collections' },
    { label: 'PAR / Delinquency', icon: AlertCircle, path: '/branch/par' },
    { label: 'SHG Module', icon: Shield, path: '/microfinance?tab=shg' },
    { label: 'Disbursement', icon: Building2, path: '/microfinance?tab=disbursements' },
    { label: 'MIS Reports', icon: BarChart3, path: '/microfinance?tab=reports' },
    { label: 'Admin Console', icon: Settings, path: '/admin/users' },
  ];

  return (
    <aside style={{
      width: '260px',
      background: '#0f172a',
      borderRight: '1px solid #1e293b',
      padding: '24px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
      <div style={{ padding: '0 8px 20px 8px', borderBottom: '1px solid #1e293b', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          width: '40px', height: '40px', borderRadius: '10px',
          background: 'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff'
        }}>
          <Building2 size={22} />
        </div>
        <div>
          <h2 style={{ fontSize: '17px', fontWeight: '700', color: '#ffffff', margin: 0 }}>MFI Core</h2>
          <span style={{ fontSize: '11px', color: '#10b981', fontWeight: '600' }}>● RURAL LENDING PRO</span>
        </div>
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1, overflowY: 'auto', marginTop: '10px' }}>
        {menuItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={idx}
              to={item.path}
              style={({ isActive }) => ({
                display: 'flex', alignItems: 'center', gap: '12px', padding: '11px 14px', borderRadius: '10px',
                color: isActive ? '#ffffff' : '#94a3b8',
                background: isActive ? 'linear-gradient(135deg, #4f46e5 0%, #4338ca 100%)' : 'transparent',
                textDecoration: 'none', fontSize: '13.5px', fontWeight: isActive ? '600' : '500'
              })}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <div style={{ padding: '12px 14px', borderRadius: '12px', background: '#1e293b', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <CheckCircle2 size={16} color="#10b981" />
        <div style={{ fontSize: '11.5px', color: '#cbd5e1' }}>
          <strong>RBI Master Direction</strong>
          <div style={{ color: '#64748b', fontSize: '10.5px' }}>v2026 Compliant</div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
```

---

### `/Layout/NavBar.jsx`
```jsx
import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { LogOut, Bell, ShieldCheck } from 'lucide-react';

export const NavBar = ({ title }) => {
  const { user, logoutUser } = useAuth();

  return (
    <header style={{
      background: '#ffffff',
      borderBottom: '1px solid #e2e8f0',
      padding: '16px 32px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 20
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <h1 style={{ fontSize: '19px', fontWeight: '700', color: '#0f172a', margin: 0 }}>
          {title || 'Microfinance & Rural Lending System'}
        </h1>
        <span className="badge badge-emerald">
          <ShieldCheck size={13} />
          Core Bank Online
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '10px', padding: '4px 12px 4px 6px',
          borderRadius: '12px', background: '#f8fafc', border: '1px solid #e2e8f0'
        }}>
          <div style={{
            width: '32px', height: '32px', borderRadius: '8px',
            background: 'linear-gradient(135deg, #4f46e5 0%, #059669 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#ffffff', fontWeight: '700', fontSize: '13px'
          }}>
            {user?.fullName ? user.fullName[0].toUpperCase() : 'A'}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '13px', fontWeight: '600', color: '#0f172a' }}>{user?.fullName || 'Administrator'}</span>
            <span style={{ fontSize: '11px', color: '#64748b' }}>{user?.designation || 'Varanasi Central Branch'}</span>
          </div>
        </div>

        <button onClick={logoutUser} title="Sign Out" className="btn-secondary" style={{ padding: '8px 12px' }}>
          <LogOut size={16} />
        </button>
      </div>
    </header>
  );
};

export default NavBar;
```

---

### `/Pages/Login.jsx`
```jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../store/slices/authSlice';
import { Building2, ShieldCheck, ArrowRight } from 'lucide-react';

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
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'linear-gradient(135deg, #f8fafc 0%, #eef2ff 50%, #f0fdf4 100%)', padding: '24px'
    }}>
      <div className="glass-card" style={{ padding: '44px 36px', width: '100%', maxWidth: '420px' }}>
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div style={{
            display: 'inline-flex', padding: '14px', borderRadius: '16px',
            background: 'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)', color: '#ffffff'
          }}>
            <Building2 size={32} />
          </div>
          <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#0f172a', marginTop: '16px' }}>MFI Core Banking</h2>
          <p style={{ color: '#64748b', fontSize: '13.5px', marginTop: '4px' }}>Rural Lending & Micro-Finance Portal</p>
        </div>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <input className="form-input" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
          <input className="form-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
          <button type="submit" className="btn-primary" style={{ width: '100%' }} disabled={isLoading}>
            {isLoading ? 'Signing In...' : <>Sign In to System <ArrowRight size={17} /></>}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
```

---

## 3. INTEGRATION DOCUMENTATION (SPRING BOOT + REACT API CLIENTS)

### `src/api/client.js` (Axios Configuration)
```javascript
import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
    }
    return Promise.reject(error.response ? error.response.data : error);
  }
);

export default api;
```

### `src/api/borrowerApi.js`
```javascript
import api from './client';

export const borrowerApi = {
  register: (data) => api.post('/borrowers', data),
  getById: (id) => api.get(`/borrowers/${id}`),
  getAll: (page = 0, size = 10, query = '') => api.get(`/borrowers?page=${page}&size=${size}&query=${encodeURIComponent(query)}`),
  update: (id, data) => api.put(`/borrowers/${id}`, data),
};
```

---

## 4. BACKEND DOCUMENTATION (SPRING BOOT 3.x + MYSQL)

### `BorrowerController.java`
```java
package com.mfi.microfinance.controller;

import com.mfi.microfinance.dto.request.BorrowerRegistrationRequest;
import com.mfi.microfinance.dto.response.BorrowerResponse;
import com.mfi.microfinance.service.BorrowerService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/borrowers")
@RequiredArgsConstructor
public class BorrowerController {

    private final BorrowerService borrowerService;

    @PostMapping
    public ResponseEntity<BorrowerResponse> registerBorrower(@Valid @RequestBody BorrowerRegistrationRequest request) {
        return ResponseEntity.ok(borrowerService.registerBorrower(request));
    }

    @GetMapping("/{id}")
    public ResponseEntity<BorrowerResponse> getBorrowerById(@PathVariable Long id) {
        return ResponseEntity.ok(borrowerService.getBorrowerById(id));
    }

    @GetMapping
    public ResponseEntity<Page<BorrowerResponse>> getAllBorrowers(
            @RequestParam(defaultValue = "") String query,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        return ResponseEntity.ok(borrowerService.searchBorrowers(query, PageRequest.of(page, size)));
    }
}
```

### `Borrower.java` (JPA Entity)
```java
package com.mfi.microfinance.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.mfi.microfinance.entity.enums.KycStatus;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "borrowers")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Borrower {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 50)
    private String brn; // Borrower Reference Number

    @Column(nullable = false, length = 100)
    private String firstName;

    @Column(nullable = false, length = 100)
    private String lastName;

    @Column(nullable = false, length = 15)
    private String mobileNumber;

    @Column(nullable = false, length = 12)
    private String aadhaarNumber;

    @Column(precision = 12, scale = 2)
    private BigDecimal annualHouseholdIncome;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    @Builder.Default
    private KycStatus kycStatus = KycStatus.PENDING;

    @Column(nullable = false)
    @Builder.Default
    private Boolean isActive = true;

    @CreatedDate
    private LocalDateTime createdAt;
}
```

---

## 5. TERMINAL OUTPUT

### Backend (Spring Boot 3.2.5 on Port 8080)
```text
  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::                (v3.2.5)

2026-09-06T12:30:40.402+05:30  INFO 32592 --- [main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Starting...
2026-09-06T12:30:40.574+05:30  INFO 32592 --- [main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Start completed.
2026-09-06T12:30:42.572+05:30  INFO 32592 --- [main] j.LocalContainerEntityManagerFactoryBean : Initialized JPA EntityManagerFactory for persistence unit 'default'
2026-09-06T12:30:45.262+05:30  INFO 32592 --- [main] c.m.m.MicrofinanceApplication            : Started MicrofinanceApplication in 7.923 seconds (process running for 8.376)
```

### Frontend (Vite + React 18 on Port 5173)
```text
  VITE v5.4.21  ready in 482 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

---

## 6. MYSQL DATABASE USERS OUTPUT

```text
mysql> SELECT id, username, full_name, designation, is_active FROM users;
+----+---------------+----------------------------------+----------------+-----------+
| id | username      | full_name                        | designation    | is_active |
+----+---------------+----------------------------------+----------------+-----------+
|  1 | super_admin   | System Administrator             | ADMIN          |         1 |
|  2 | admin         | System Administrator             | ADMIN          |         1 |
|  3 | field_officer | Rajesh Kumar (Field Officer)     | FIELD_OFFICER  |         1 |
|  4 | manager       | Ananya Sharma (Branch Manager)   | BRANCH_MANAGER |         1 |
+----+---------------+----------------------------------+----------------+-----------+
4 rows in set (0.00 sec)
```
