import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Shield, Users, DollarSign, Award, Calendar, CheckCircle2, 
  ArrowUpRight, Plus, BookOpen, ChevronRight, TrendingUp, Sparkles 
} from 'lucide-react';
import { formatCurrency } from '../../utils/formatters';
import { goldNotify } from '../../utils/goldNotification';
import { ShgRegistrationForm } from './ShgRegistrationForm';
import { ShgGradingPanel } from './ShgGradingPanel';
import { ShgSavingsLedger } from './ShgSavingsLedger';

export const ShgManagementFullView = () => {
  const { t } = useTranslation();
  const [activeSubTab, setActiveSubTab] = useState('directory');
  const [selectedShg, setSelectedShg] = useState({
    code: 'SHG-VAR-101',
    name: 'Jai Santoshi Maa Mahila SHG',
    village: 'Shivpur Sector 1',
    membersCount: 14,
    grade: 'GRADE_A',
    score: 94,
    totalSavings: 185000,
    internalLoansDisbursed: 140000,
    bankLinkageStatus: 'SANCTIONED',
    bankLoanAmount: 400000,
    establishedYear: '2023'
  });

  const shgList = [
    {
      code: 'SHG-VAR-101',
      name: 'Jai Santoshi Maa Mahila SHG',
      village: 'Shivpur Sector 1',
      membersCount: 14,
      grade: 'GRADE_A',
      score: 94,
      totalSavings: 185000,
      internalLoansDisbursed: 140000,
      bankLinkageStatus: 'SANCTIONED',
      bankLoanAmount: 400000,
      president: 'Sunita Devi'
    },
    {
      code: 'SHG-VAR-102',
      name: 'Pragati Mahila Swavlamban SHG',
      village: 'Mirzapur Rural Belt',
      membersCount: 16,
      grade: 'GRADE_A',
      score: 91,
      totalSavings: 230000,
      internalLoansDisbursed: 195000,
      bankLinkageStatus: 'SANCTIONED',
      bankLoanAmount: 500000,
      president: 'Kiran Maurya'
    },
    {
      code: 'SHG-VAR-103',
      name: 'Ujala Gramin SHG Federation',
      village: 'Chandauli Agro Hub',
      membersCount: 12,
      grade: 'GRADE_A+',
      score: 97,
      totalSavings: 160000,
      internalLoansDisbursed: 125000,
      bankLinkageStatus: 'SANCTIONED',
      bankLoanAmount: 350000,
      president: 'Radha Yadav'
    },
    {
      code: 'SHG-VAR-104',
      name: 'Kashi Vishwanath Craft SHG',
      village: 'Ramnagar Handloom Cluster',
      membersCount: 15,
      grade: 'GRADE_B',
      score: 78,
      totalSavings: 110000,
      internalLoansDisbursed: 85000,
      bankLinkageStatus: 'IN_REVIEW',
      bankLoanAmount: 250000,
      president: 'Savitri Devi'
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
      
      {/* Top Banner & KPI Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
        
        <div className="glass-card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <span style={{ color: '#fde047', fontSize: '11.5px', fontWeight: '700', textTransform: 'uppercase' }}>
              Active SHG Groups
            </span>
            <div style={{
              width: '36px', height: '36px', borderRadius: '10px',
              background: 'rgba(234, 179, 8, 0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#facc15', border: '1px solid rgba(234, 179, 8, 0.3)'
            }}>
              <Shield size={18} />
            </div>
          </div>
          <div style={{ fontSize: '28px', fontWeight: '900', color: '#fef08a', marginTop: '8px' }}>
            84 Groups
          </div>
          <div style={{ fontSize: '11.5px', color: '#34d399', marginTop: '4px', fontWeight: '700' }}>
            1,120 Women Members
          </div>
        </div>

        <div className="glass-card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <span style={{ color: '#fde047', fontSize: '11.5px', fontWeight: '700', textTransform: 'uppercase' }}>
              Mobilized Savings Pot
            </span>
            <div style={{
              width: '36px', height: '36px', borderRadius: '10px',
              background: 'rgba(16, 185, 129, 0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#34d399', border: '1px solid rgba(16, 185, 129, 0.3)'
            }}>
              <DollarSign size={18} />
            </div>
          </div>
          <div style={{ fontSize: '28px', fontWeight: '900', color: '#fef08a', marginTop: '8px' }}>
            {formatCurrency(12450000)}
          </div>
          <div style={{ fontSize: '11.5px', color: '#34d399', marginTop: '4px', fontWeight: '700' }}>
            +14.8% Thrift Growth
          </div>
        </div>

        <div className="glass-card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <span style={{ color: '#fde047', fontSize: '11.5px', fontWeight: '700', textTransform: 'uppercase' }}>
              NRLM Bank Linkage AUM
            </span>
            <div style={{
              width: '36px', height: '36px', borderRadius: '10px',
              background: 'rgba(234, 179, 8, 0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#facc15', border: '1px solid rgba(234, 179, 8, 0.3)'
            }}>
              <TrendingUp size={18} />
            </div>
          </div>
          <div style={{ fontSize: '28px', fontWeight: '900', color: '#fef08a', marginTop: '8px' }}>
            {formatCurrency(28500000)}
          </div>
          <div style={{ fontSize: '11.5px', color: '#facc15', marginTop: '4px', fontWeight: '700' }}>
            100% NABARD Compliance
          </div>
        </div>

        <div className="glass-card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <span style={{ color: '#fde047', fontSize: '11.5px', fontWeight: '700', textTransform: 'uppercase' }}>
              Panchasutra Rating
            </span>
            <div style={{
              width: '36px', height: '36px', borderRadius: '10px',
              background: 'rgba(16, 185, 129, 0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#34d399', border: '1px solid rgba(16, 185, 129, 0.3)'
            }}>
              <Award size={18} />
            </div>
          </div>
          <div style={{ fontSize: '28px', fontWeight: '900', color: '#34d399', marginTop: '8px' }}>
            94.5% Grade A
          </div>
          <div style={{ fontSize: '11.5px', color: '#a1a1aa', marginTop: '4px' }}>
            Zero NPA in Group Pool
          </div>
        </div>

      </div>

      {/* Sub-Tabs Control */}
      <div style={{
        display: 'flex',
        gap: '8px',
        borderBottom: '1px solid rgba(234, 179, 8, 0.25)',
        paddingBottom: '12px'
      }}>
        <button
          onClick={() => setActiveSubTab('directory')}
          style={{
            padding: '8px 16px',
            borderRadius: '10px',
            fontSize: '13px',
            fontWeight: activeSubTab === 'directory' ? '800' : '600',
            background: activeSubTab === 'directory' ? 'linear-gradient(135deg, #facc15 0%, #ca8a04 100%)' : '#0a0a0e',
            color: activeSubTab === 'directory' ? '#000000' : '#fef08a',
            border: activeSubTab === 'directory' ? '1px solid #fef08a' : '1px solid rgba(234, 179, 8, 0.2)',
            cursor: 'pointer'
          }}
        >
          SHG Directory & Federations
        </button>

        <button
          onClick={() => setActiveSubTab('register')}
          style={{
            padding: '8px 16px',
            borderRadius: '10px',
            fontSize: '13px',
            fontWeight: activeSubTab === 'register' ? '800' : '600',
            background: activeSubTab === 'register' ? 'linear-gradient(135deg, #facc15 0%, #ca8a04 100%)' : '#0a0a0e',
            color: activeSubTab === 'register' ? '#000000' : '#fef08a',
            border: activeSubTab === 'register' ? '1px solid #fef08a' : '1px solid rgba(234, 179, 8, 0.2)',
            cursor: 'pointer'
          }}
        >
          + Register New SHG
        </button>

        <button
          onClick={() => setActiveSubTab('ledger')}
          style={{
            padding: '8px 16px',
            borderRadius: '10px',
            fontSize: '13px',
            fontWeight: activeSubTab === 'ledger' ? '800' : '600',
            background: activeSubTab === 'ledger' ? 'linear-gradient(135deg, #facc15 0%, #ca8a04 100%)' : '#0a0a0e',
            color: activeSubTab === 'ledger' ? '#000000' : '#fef08a',
            border: activeSubTab === 'ledger' ? '1px solid #fef08a' : '1px solid rgba(234, 179, 8, 0.2)',
            cursor: 'pointer'
          }}
        >
          Internal Thrift & Lending Ledger
        </button>
      </div>

      {/* Tab: Directory */}
      {activeSubTab === 'directory' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '22px' }}>
          
          {/* List Table */}
          <div className="glass-card" style={{ padding: '24px' }}>
            <h3 style={{ fontSize: '17px', color: '#fef08a', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Shield size={18} color="#facc15" /> Active SHG Groups Directory
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {shgList.map((group) => {
                const isSelected = selectedShg?.code === group.code;
                return (
                  <div
                    key={group.code}
                    onClick={() => setSelectedShg(group)}
                    style={{
                      background: isSelected ? 'rgba(234, 179, 8, 0.16)' : '#07070a',
                      border: isSelected ? '1px solid #facc15' : '1px solid rgba(234, 179, 8, 0.2)',
                      borderRadius: '12px',
                      padding: '14px 16px',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '11px', color: '#ca8a04', fontWeight: '800' }}>{group.code}</span>
                        <span className="badge badge-gold" style={{ fontSize: '10px', padding: '1px 6px' }}>{group.grade}</span>
                      </div>
                      <div style={{ fontSize: '14px', fontWeight: '800', color: '#fef08a', marginTop: '3px' }}>
                        {group.name}
                      </div>
                      <div style={{ fontSize: '12px', color: '#a1a1aa' }}>
                        {group.village} • {group.membersCount} Members • Lead: {group.president}
                      </div>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '14px', fontWeight: '900', color: '#34d399' }}>
                        {formatCurrency(group.totalSavings)}
                      </div>
                      <div style={{ fontSize: '10.5px', color: '#ca8a04' }}>Savings Pot</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Selected SHG Panchasutra & NABARD Scorecard */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <ShgGradingPanel grade={selectedShg.grade} score={selectedShg.score} />

            <div className="glass-card" style={{ padding: '22px' }}>
              <h4 style={{ fontSize: '15px', color: '#fef08a', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Sparkles size={16} color="#facc15" /> NRLM Bank Linkage Credit Facility
              </h4>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div style={{ background: '#050508', padding: '10px 12px', borderRadius: '10px', border: '1px solid rgba(234, 179, 8, 0.2)' }}>
                  <span style={{ fontSize: '11px', color: '#a1a1aa' }}>Sanctioned Bank Credit</span>
                  <div style={{ fontSize: '16px', fontWeight: '900', color: '#34d399', marginTop: '2px' }}>
                    {formatCurrency(selectedShg.bankLoanAmount)}
                  </div>
                </div>

                <div style={{ background: '#050508', padding: '10px 12px', borderRadius: '10px', border: '1px solid rgba(234, 179, 8, 0.2)' }}>
                  <span style={{ fontSize: '11px', color: '#a1a1aa' }}>Internal Loans Outstanding</span>
                  <div style={{ fontSize: '16px', fontWeight: '900', color: '#facc15', marginTop: '2px' }}>
                    {formatCurrency(selectedShg.internalLoansDisbursed)}
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '14px', display: 'flex', gap: '10px' }}>
                <button
                  className="btn-primary"
                  style={{ width: '100%', fontSize: '13px', padding: '9px 14px' }}
                  onClick={() => goldNotify.celebrate(
                    'NRLM Bank Tranche Released!',
                    `Direct Benefit Transfer of ${formatCurrency(selectedShg.bankLoanAmount)} credited to ${selectedShg.name} account.`,
                    'DBT LINKAGE CLEARED'
                  )}
                >
                  Authorize Bank Tranche (DBT)
                </button>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* Tab: Register */}
      {activeSubTab === 'register' && (
        <ShgRegistrationForm />
      )}

      {/* Tab: Ledger */}
      {activeSubTab === 'ledger' && (
        <ShgSavingsLedger />
      )}

    </div>
  );
};

export default ShgManagementFullView;
