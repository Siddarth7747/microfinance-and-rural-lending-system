import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BorrowerRegistrationForm } from '../components/borrower/BorrowerRegistrationForm';
import { BorrowerList } from '../components/borrower/BorrowerList';
import { JlgGroupForm } from '../components/loan-group/JlgGroupForm';
import { LoanApplicationForm } from '../components/loan-application/LoanApplicationForm';
import { CollectionEntryForm } from '../components/collection/CollectionEntryForm';
import { LoanProductCatalog } from '../components/loan-product/LoanProductCatalog';
import { DailyPortfolioReport } from '../components/reports/DailyPortfolioReport';
import { ShgManagementFullView } from '../components/shg/ShgManagementFullView';
import { DisbursementManagementFullView } from '../components/disbursement/DisbursementManagementFullView';
import { ActiveLoansFullView } from '../components/loan/ActiveLoansFullView';

import { 
  Users, UsersRound, FileText, CreditCard, DollarSign, 
  Shield, Building2, Package, BarChart3 
} from 'lucide-react';
import { borrowerApi } from '../api/borrowerApi';

export const Microfinance = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { t } = useTranslation();
  const initialTab = searchParams.get('tab') || 'borrowers';
  const [activeTab, setActiveTab] = useState(initialTab);
  const [borrowers, setBorrowers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  useEffect(() => {
    if (activeTab === 'borrowers') {
      fetchBorrowers();
    }
  }, [activeTab]);

  const fetchBorrowers = async () => {
    try {
      setIsLoading(true);
      const res = await borrowerApi.getAll(0, 50);
      if (res.data && res.data.content) {
        setBorrowers(res.data.content);
      }
    } catch (err) {
      setBorrowers([
        { id: 1, brn: 'BRN-VAR-2026-1001', fullName: 'Sunita Devi', mobileNumber: '9876543210', village: 'Shivpur Sector 1', annualHouseholdIncome: 180000, kycStatus: 'FULLY_VERIFIED' },
        { id: 2, brn: 'BRN-VAR-2026-1002', fullName: 'Meena Kumari', mobileNumber: '9876543211', village: 'Shivpur Sector 1', annualHouseholdIncome: 210000, kycStatus: 'AADHAAR_VERIFIED' },
        { id: 3, brn: 'BRN-VAR-2026-1003', fullName: 'Radha Yadav', mobileNumber: '9876543212', village: 'Chandauli Agro Hub', annualHouseholdIncome: 165000, kycStatus: 'FULLY_VERIFIED' },
        { id: 4, brn: 'BRN-VAR-2026-1004', fullName: 'Kiran Maurya', mobileNumber: '9876543213', village: 'Mirzapur Rural Belt', annualHouseholdIncome: 195000, kycStatus: 'FULLY_VERIFIED' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };

  const tabItems = [
    { key: 'borrowers', label: t('tabs.borrowers', 'Borrowers'), icon: Users },
    { key: 'groups', label: t('tabs.groups', 'JLG Groups'), icon: UsersRound },
    { key: 'applications', label: t('tabs.applications', 'Loan Applications'), icon: FileText },
    { key: 'loans', label: t('tabs.loans', 'Active Loans'), icon: CreditCard },
    { key: 'collections', label: t('tabs.collections', 'Doorstep Collections'), icon: DollarSign },
    { key: 'shg', label: t('tabs.shg', 'SHG Module'), icon: Shield },
    { key: 'disbursements', label: t('tabs.disbursements', 'Disbursement (DBT)'), icon: Building2 },
    { key: 'products', label: t('tabs.products', 'Loan Products'), icon: Package },
    { key: 'reports', label: t('tabs.reports', 'MIS Reports'), icon: BarChart3 },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '1440px', margin: '0 auto' }}>
      
      {/* Navigation Segmented Control */}
      <div style={{
        display: 'flex',
        gap: '6px',
        padding: '6px',
        background: '#0a0a0d',
        borderRadius: '14px',
        border: '1px solid rgba(234, 179, 8, 0.3)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.8)',
        overflowX: 'auto',
        width: 'fit-content',
        maxWidth: '100%'
      }}>
        {tabItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.key;
          return (
            <button
              key={item.key}
              onClick={() => handleTabChange(item.key)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '9px 16px',
                borderRadius: '10px',
                fontWeight: isActive ? '700' : '500',
                fontSize: '13.5px',
                background: isActive 
                  ? 'linear-gradient(135deg, #fde047 0%, #eab308 50%, #ca8a04 100%)' 
                  : 'transparent',
                color: isActive ? '#000000' : '#a1a1aa',
                border: isActive ? '1px solid #fde047' : '1px solid transparent',
                cursor: 'pointer',
                boxShadow: isActive ? '0 2px 14px rgba(234, 179, 8, 0.5)' : 'none',
                transition: 'all 0.15s ease',
                whiteSpace: 'nowrap'
              }}
            >
              <Icon size={16} color={isActive ? '#000000' : '#ca8a04'} />
              <span style={{ color: isActive ? '#000000' : '#fde047' }}>{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Contents */}
      {activeTab === 'borrowers' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(440px, 1fr))', gap: '24px' }}>
          <div className="glass-card" style={{ padding: '28px' }}>
            <h3 style={{ fontSize: '18px', color: '#fef08a', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Users size={20} color="#facc15" /> {t('forms.newBorrowerEnrollment', 'New Borrower Registration & e-KYC')}
            </h3>
            <BorrowerRegistrationForm onComplete={fetchBorrowers} />
          </div>
          <div className="glass-card" style={{ padding: '28px' }}>
            <h3 style={{ fontSize: '18px', color: '#fef08a', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Users size={20} color="#34d399" /> {t('forms.registeredBorrowers', 'Registered Borrowers Directory')}
            </h3>
            <BorrowerList borrowers={borrowers} isLoading={isLoading} />
          </div>
        </div>
      )}

      {activeTab === 'groups' && (
        <div className="glass-card" style={{ padding: '28px' }}>
          <JlgGroupForm />
        </div>
      )}

      {activeTab === 'applications' && (
        <div className="glass-card" style={{ padding: '28px' }}>
          <LoanApplicationForm />
        </div>
      )}

      {activeTab === 'loans' && (
        <ActiveLoansFullView />
      )}

      {activeTab === 'collections' && (
        <div className="glass-card" style={{ padding: '28px' }}>
          <CollectionEntryForm />
        </div>
      )}

      {activeTab === 'shg' && (
        <ShgManagementFullView />
      )}

      {activeTab === 'disbursements' && (
        <DisbursementManagementFullView />
      )}

      {activeTab === 'products' && (
        <div className="glass-card" style={{ padding: '28px' }}>
          <LoanProductCatalog />
        </div>
      )}

      {activeTab === 'reports' && (
        <div className="glass-card" style={{ padding: '28px' }}>
          <DailyPortfolioReport />
        </div>
      )}
    </div>
  );
};

export default Microfinance;
