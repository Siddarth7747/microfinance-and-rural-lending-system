import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AumGrowthChart } from '../charts/AumGrowthChart';
import { CollectionEfficiencyChart } from '../charts/CollectionEfficiencyChart';
import { CibilScoreGauge } from '../components/analytics/CibilScoreGauge';
import { RuralVillageClusterMap } from '../components/analytics/RuralVillageClusterMap';
import { AiUnderwritingAnalyzer } from '../components/loan-application/AiUnderwritingAnalyzer';
import { VirtualGoldPassbookModal } from '../components/borrower/VirtualGoldPassbookModal';
import { 
  Users, CreditCard, DollarSign, TrendingUp, 
  ArrowUpRight, ArrowRight, Crown, BookOpen, Sparkles
} from 'lucide-react';
import { formatCurrency } from '../utils/formatters';
import { Link } from 'react-router-dom';

export const Home = () => {
  const { t } = useTranslation();
  const [demoPassbookOpen, setDemoPassbookOpen] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '26px', maxWidth: '1440px', margin: '0 auto' }}>
      
      {/* Welcome Banner */}
      <div className="glass-card" style={{
        padding: '28px 32px',
        background: 'linear-gradient(135deg, rgba(234, 179, 8, 0.16) 0%, rgba(202, 138, 4, 0.08) 50%, rgba(16, 185, 129, 0.06) 100%)',
        border: '1px solid rgba(250, 204, 21, 0.4)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span className="badge badge-gold">
              <Crown size={13} /> {t('welcomeBannerTag', 'Gold Standard Branch Portal')}
            </span>
            <span style={{ color: '#d4d4d8', fontSize: '13px' }}>• {t('fiscalYear', 'Fiscal Year 2026–27')}</span>
          </div>
          <h2 style={{
            fontSize: '26px',
            fontWeight: '900',
            margin: 0,
            background: 'linear-gradient(135deg, #ffffff 0%, #fef08a 40%, #facc15 80%, #ca8a04 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            {t('execTitle', 'Rural Lending & Micro-Credit Executive Terminal')}
          </h2>
          <p style={{ color: '#d4d4d8', fontSize: '14px', marginTop: '6px', maxWidth: '640px' }}>
            {t('execSubtitle', 'Real-time monitoring of Joint Liability Groups (JLG), Self Help Groups (SHG), daily doorstep recovery, and RBI PAR limits.')}
          </p>
        </div>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button 
            onClick={() => setDemoPassbookOpen(true)}
            className="btn-secondary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            <BookOpen size={16} /> Digital Passbook Preview
          </button>
          <Link to="/microfinance?tab=borrowers" className="btn-secondary">
            {t('registerBorrower', 'Register Borrower')}
          </Link>
          <Link to="/microfinance?tab=collections" className="btn-primary">
            {t('todaysCollections', "Today's Collections")} <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* KPI Stat Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
        
        {/* Active Borrowers */}
        <div className="glass-card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <span style={{ color: '#fde047', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {t('activeBorrowers', 'Active Borrowers')}
            </span>
            <div style={{
              width: '42px', height: '42px', borderRadius: '12px',
              background: 'rgba(234, 179, 8, 0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#facc15', border: '1px solid rgba(234, 179, 8, 0.3)'
            }}>
              <Users size={20} />
            </div>
          </div>
          <div style={{ fontSize: '34px', fontWeight: '900', color: '#fef08a', marginTop: '12px', letterSpacing: '-0.02em' }}>
            1,248
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '8px' }}>
            <span className="badge badge-emerald">
              <ArrowUpRight size={12} /> +12.4%
            </span>
            <span style={{ fontSize: '12px', color: '#a1a1aa' }}>{t('vsLastMonth', 'vs last month')}</span>
          </div>
        </div>

        {/* Total AUM Portfolio */}
        <div className="glass-card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <span style={{ color: '#fde047', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {t('totalPortfolio', 'Total Portfolio (AUM)')}
            </span>
            <div style={{
              width: '42px', height: '42px', borderRadius: '12px',
              background: 'rgba(16, 185, 129, 0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#34d399', border: '1px solid rgba(16, 185, 129, 0.3)'
            }}>
              <CreditCard size={20} />
            </div>
          </div>
          <div style={{ fontSize: '34px', fontWeight: '900', color: '#fef08a', marginTop: '12px', letterSpacing: '-0.02em' }}>
            {formatCurrency(42500000)}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '8px' }}>
            <span className="badge badge-emerald">
              <ArrowUpRight size={12} /> +18.2%
            </span>
            <span style={{ fontSize: '12px', color: '#a1a1aa' }}>{t('yoyGrowth', 'YOY Growth')}</span>
          </div>
        </div>

        {/* Today's Collection */}
        <div className="glass-card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <span style={{ color: '#fde047', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {t('todaysDemand', "Today's Recovery Demand")}
            </span>
            <div style={{
              width: '42px', height: '42px', borderRadius: '12px',
              background: 'rgba(234, 179, 8, 0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#facc15', border: '1px solid rgba(234, 179, 8, 0.3)'
            }}>
              <DollarSign size={20} />
            </div>
          </div>
          <div style={{ fontSize: '34px', fontWeight: '900', color: '#fef08a', marginTop: '12px', letterSpacing: '-0.02em' }}>
            {formatCurrency(185000)}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '8px' }}>
            <span className="badge badge-gold">
              98.4% Efficiency
            </span>
            <span style={{ fontSize: '12px', color: '#a1a1aa' }}>{t('doorstepSynced', 'Doorstep synced')}</span>
          </div>
        </div>

        {/* PAR 30 DPD Ratio */}
        <div className="glass-card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <span style={{ color: '#fde047', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {t('par30Ratio', 'Portfolio at Risk (PAR 30)')}
            </span>
            <div style={{
              width: '42px', height: '42px', borderRadius: '12px',
              background: 'rgba(6, 182, 212, 0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#22d3ee', border: '1px solid rgba(6, 182, 212, 0.3)'
            }}>
              <TrendingUp size={20} />
            </div>
          </div>
          <div style={{ fontSize: '34px', fontWeight: '900', color: '#34d399', marginTop: '12px', letterSpacing: '-0.02em' }}>
            1.45%
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '8px' }}>
            <span className="badge badge-emerald">
              {t('rbiCompliant', 'RBI Compliant')}
            </span>
            <span style={{ fontSize: '12px', color: '#a1a1aa' }}>{t('ceilingLimit', 'Ceiling: 3.0%')}</span>
          </div>
        </div>

      </div>

      {/* Feature Section: Credit Bureau Radial Scorecard & Rural Cluster Map */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))', gap: '24px' }}>
        <CibilScoreGauge />
        <RuralVillageClusterMap />
      </div>

      {/* Feature Section: AI Rural Credit Underwriting Engine */}
      <div>
        <AiUnderwritingAnalyzer />
      </div>

      {/* Analytics Charts */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))', gap: '24px' }}>
        
        <div className="glass-card" style={{ padding: '28px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div>
              <h3 style={{ fontSize: '17px', fontWeight: '800', color: '#fef08a', margin: 0 }}>
                {t('portfolioTrendTitle', 'Portfolio Growth Trend (AUM ₹ Cr)')}
              </h3>
              <p style={{ fontSize: '13px', color: '#a1a1aa', marginTop: '3px' }}>
                {t('portfolioTrendSubtitle', 'Disbursement performance across fiscal periods')}
              </p>
            </div>
            <span className="badge badge-gold">{t('monthlyTrend', 'Monthly Trend')}</span>
          </div>
          <AumGrowthChart />
        </div>

        <div className="glass-card" style={{ padding: '28px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div>
              <h3 style={{ fontSize: '17px', fontWeight: '800', color: '#fef08a', margin: 0 }}>
                {t('collectionTrendTitle', 'Collection Efficiency Trend (%)')}
              </h3>
              <p style={{ fontSize: '13px', color: '#a1a1aa', marginTop: '3px' }}>
                {t('collectionTrendSubtitle', 'Doorstep on-time recovery vs monthly targets')}
              </p>
            </div>
            <span className="badge badge-emerald">{t('realTime', 'Real-time')}</span>
          </div>
          <CollectionEfficiencyChart />
        </div>

      </div>

      {/* Demo Passbook Modal */}
      {demoPassbookOpen && (
        <VirtualGoldPassbookModal
          borrower={{
            fullName: 'Sunita Devi',
            brn: 'BRN-VAR-2026-1001',
            village: 'Shivpur Sector 1',
            annualHouseholdIncome: 180000
          }}
          onClose={() => setDemoPassbookOpen(false)}
        />
      )}

    </div>
  );
};

export default Home;
