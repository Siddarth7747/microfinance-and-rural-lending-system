import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Cpu, ShieldCheck, AlertTriangle, CheckCircle2, 
  TrendingUp, Sparkles, Award, ArrowRight, DollarSign, RefreshCw 
} from 'lucide-react';
import { formatCurrency } from '../../utils/formatters';
import { goldNotify } from '../../utils/goldNotification';

export const AiUnderwritingAnalyzer = () => {
  const { t } = useTranslation();

  const [annualIncome, setAnnualIncome] = useState(180000);
  const [requestedAmount, setRequestedAmount] = useState(40000);
  const [tenureMonths, setTenureMonths] = useState(12);
  const [existingMonthlyDebt, setExistingMonthlyDebt] = useState(1200);
  const [interestRate, setInterestRate] = useState(18); // 18% p.a.

  // Computations
  const monthlyIncome = annualIncome / 12;
  const monthlyRate = interestRate / 12 / 100;
  // EMI = P * r * (1+r)^n / ((1+r)^n - 1)
  const proposedEmi = Math.round(
    (requestedAmount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
    (Math.pow(1 + monthlyRate, tenureMonths) - 1)
  );

  const totalMonthlyObligation = proposedEmi + Number(existingMonthlyDebt);
  const foir = monthlyIncome > 0 ? ((totalMonthlyObligation / monthlyIncome) * 100).toFixed(1) : 0;
  
  // RBI Compliance Rules:
  // 1. Annual Household Income <= 300,000 (3 Lakhs)
  // 2. FOIR <= 50%
  const isIncomeEligible = annualIncome <= 300000;
  const isFoirEligible = parseFloat(foir) <= 50.0;
  const isApproved = isIncomeEligible && isFoirEligible;

  return (
    <div className="glass-card" style={{ padding: '26px 28px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '22px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="badge badge-gold">
              <Cpu size={13} /> AI Algorithmic Underwriter
            </span>
            <span style={{ fontSize: '12px', color: '#d4d4d8' }}>RBI Master Direction Cap Validator</span>
          </div>
          <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#fef08a', marginTop: '4px', margin: 0 }}>
            Automated Credit Risk & Debt-Cap Underwriting Engine
          </h3>
        </div>

        <span className="badge badge-emerald">
          <Sparkles size={12} /> Real-Time Decisioning
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '26px' }}>
        
        {/* Interactive Parameter Controls */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          
          {/* Annual Income */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
              <label style={{ margin: 0 }}>Annual Household Income</label>
              <span style={{ color: '#facc15', fontWeight: '800', fontSize: '14px' }}>
                {formatCurrency(annualIncome)} / yr
              </span>
            </div>
            <input
              type="range"
              min="50000"
              max="450000"
              step="10000"
              value={annualIncome}
              onChange={(e) => setAnnualIncome(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#facc15', cursor: 'pointer' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#a1a1aa', marginTop: '3px' }}>
              <span>₹50,000</span>
              <span style={{ color: annualIncome > 300000 ? '#f87171' : '#34d399', fontWeight: '700' }}>
                RBI Limit: ₹3,00,000 {annualIncome > 300000 ? '(EXCEEDED)' : '(OK)'}
              </span>
              <span>₹4,50,000</span>
            </div>
          </div>

          {/* Requested Loan Amount */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
              <label style={{ margin: 0 }}>Requested Loan Amount</label>
              <span style={{ color: '#34d399', fontWeight: '800', fontSize: '14px' }}>
                {formatCurrency(requestedAmount)}
              </span>
            </div>
            <input
              type="range"
              min="10000"
              max="150000"
              step="5000"
              value={requestedAmount}
              onChange={(e) => setRequestedAmount(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#34d399', cursor: 'pointer' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#a1a1aa', marginTop: '3px' }}>
              <span>₹10,000</span>
              <span>₹1,50,000</span>
            </div>
          </div>

          {/* Tenure & Existing Debt */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <div>
              <label>Tenure (Months)</label>
              <select
                value={tenureMonths}
                onChange={(e) => setTenureMonths(Number(e.target.value))}
                className="form-input"
                style={{ padding: '8px 12px' }}
              >
                <option value={6}>6 Months</option>
                <option value={12}>12 Months (1 Year)</option>
                <option value={18}>18 Months</option>
                <option value={24}>24 Months (2 Years)</option>
              </select>
            </div>

            <div>
              <label>Existing Monthly EMIs</label>
              <input
                type="number"
                value={existingMonthlyDebt}
                onChange={(e) => setExistingMonthlyDebt(Number(e.target.value))}
                className="form-input"
                style={{ padding: '8px 12px' }}
              />
            </div>
          </div>

        </div>

        {/* AI Underwriting Recommendation Card */}
        <div style={{
          background: isApproved 
            ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(8, 8, 12, 0.95) 100%)' 
            : 'linear-gradient(135deg, rgba(239, 68, 68, 0.12) 0%, rgba(8, 8, 12, 0.95) 100%)',
          border: isApproved ? '2px solid rgba(52, 211, 153, 0.5)' : '2px solid rgba(239, 68, 68, 0.5)',
          borderRadius: '18px',
          padding: '22px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: isApproved ? '0 0 35px rgba(16, 185, 129, 0.25)' : '0 0 35px rgba(239, 68, 68, 0.25)'
        }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', color: '#a1a1aa', fontWeight: '700', textTransform: 'uppercase' }}>
                Underwriting Decision
              </span>
              <span className={`badge ${isApproved ? 'badge-emerald' : 'badge-rose'}`}>
                {isApproved ? <CheckCircle2 size={12} /> : <AlertTriangle size={12} />}
                {isApproved ? 'SANCTION RECOMMENDED' : 'SANCTION RESTRICTED'}
              </span>
            </div>

            {/* Calculated Proposed EMI & FOIR */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', margin: '16px 0' }}>
              <div style={{ background: '#050508', padding: '12px', borderRadius: '12px', border: '1px solid rgba(234, 179, 8, 0.2)' }}>
                <span style={{ fontSize: '11px', color: '#a1a1aa' }}>Proposed Monthly EMI</span>
                <div style={{ fontSize: '20px', fontWeight: '900', color: '#fef08a', marginTop: '2px' }}>
                  {formatCurrency(proposedEmi)}
                </div>
                <span style={{ fontSize: '10px', color: '#ca8a04' }}>@ 18% Reducing p.a.</span>
              </div>

              <div style={{ background: '#050508', padding: '12px', borderRadius: '12px', border: '1px solid rgba(234, 179, 8, 0.2)' }}>
                <span style={{ fontSize: '11px', color: '#a1a1aa' }}>FOIR Debt Ratio</span>
                <div style={{
                  fontSize: '20px',
                  fontWeight: '900',
                  color: isFoirEligible ? '#34d399' : '#f87171',
                  marginTop: '2px'
                }}>
                  {foir}%
                </div>
                <span style={{ fontSize: '10px', color: isFoirEligible ? '#34d399' : '#f87171' }}>
                  {isFoirEligible ? 'Within 50% Cap' : 'Exceeds 50% Cap'}
                </span>
              </div>
            </div>

            {/* Compliance Matrix Checklist */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: isIncomeEligible ? '#34d399' : '#f87171' }}>
                {isIncomeEligible ? <CheckCircle2 size={14} /> : <AlertTriangle size={14} />}
                <span>Annual Household Income ₹{annualIncome.toLocaleString('en-IN')} ≤ ₹3,00,000 (RBI Threshold)</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: isFoirEligible ? '#34d399' : '#f87171' }}>
                {isFoirEligible ? <CheckCircle2 size={14} /> : <AlertTriangle size={14} />}
                <span>Total Debt Obligation ({foir}%) does not exceed 50% of monthly household cashflow</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#facc15' }}>
                <CheckCircle2 size={14} />
                <span>JLG Peer Guarantee Mutual Risk Rating: 96 / 100 (Prime)</span>
              </div>
            </div>
          </div>

          <button
            disabled={!isApproved}
            className="btn-primary"
            style={{
              marginTop: '16px',
              width: '100%',
              opacity: isApproved ? 1 : 0.4,
              cursor: isApproved ? 'pointer' : 'not-allowed'
            }}
            onClick={() => goldNotify.celebrate(
              'AI Sanction Note Generated!',
              `Loan Sanction Note of ${formatCurrency(requestedAmount)} approved with ${foir}% FOIR. Ready for Branch Manager digital sign-off.`,
              'CREDIT SANCTION APPROVED'
            )}
          >
            <Award size={16} /> Generate AI Sanction Note
          </button>
        </div>

      </div>
    </div>
  );
};

export default AiUnderwritingAnalyzer;
