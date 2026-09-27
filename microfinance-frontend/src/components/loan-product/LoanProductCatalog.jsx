import React from 'react';
import { formatCurrency } from '../../utils/formatters';
import { Package, Percent, ShieldCheck, Check, Sparkles } from 'lucide-react';

export const LoanProductCatalog = () => {
  const products = [
    { 
      name: 'JLG Income Generation Micro-Credit', 
      code: 'PROD-JLG-AGRI',
      rate: '18.0% p.a.', 
      tenure: '12–24 Months', 
      minAmount: 15000,
      maxAmount: 60000, 
      method: 'Reducing Balance', 
      processingFee: '1.5%',
      features: ['No physical collateral needed', 'Weekly / Bi-weekly doorstep collection', 'Credit Life insurance included', 'Fast 48-hour disbursement'],
      badge: 'Popular JLG'
    },
    { 
      name: 'SHG Federation Enterprise Loan', 
      code: 'PROD-SHG-ENT',
      rate: '15.0% p.a.', 
      tenure: '12–36 Months', 
      minAmount: 50000,
      maxAmount: 200000, 
      method: 'Reducing Balance', 
      processingFee: '1.0%',
      features: ['NRLM / NABARD interest subvention', 'Internal group lending eligible', 'Quarterly grading linked credit', 'Bulk NEFT disbursement'],
      badge: 'Subsidized'
    },
    { 
      name: 'Dairy & Livestock Expansion Loan', 
      code: 'PROD-DAIRY-EXP',
      rate: '16.5% p.a.', 
      tenure: '18–24 Months', 
      minAmount: 25000,
      maxAmount: 100000, 
      method: 'Flat Method', 
      processingFee: '1.25%',
      features: ['Cattle tagging & insurance coverage', 'Milk society tie-up auto-recovery', 'Moratorium period of 45 days', 'Doorstep verification'],
      badge: 'Agri Allied'
    },
    { 
      name: 'Rural Women Micro-Enterprise', 
      code: 'PROD-WOMEN-ENT',
      rate: '14.0% p.a.', 
      tenure: '12–30 Months', 
      minAmount: 20000,
      maxAmount: 80000, 
      method: 'Reducing Balance', 
      processingFee: '1.0%',
      features: ['Exclusive 2% interest rebate for prompt repayment', 'Skill training certification support', 'Digital UPI repayment enabled', 'Zero pre-closure penalty'],
      badge: 'Special Rate'
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#ffffff', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Package size={20} color="#818cf8" /> Loan Product Catalog & Interest Rate Engine
        </h3>
        <p style={{ fontSize: '13px', color: '#94a3b8', marginTop: '4px' }}>
          RBI compliant lending products, interest calculation methods, and loan ceilings
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        {products.map((p, idx) => (
          <div key={idx} className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span className="badge badge-indigo">{p.badge}</span>
                <span style={{ fontSize: '11px', color: '#64748b', fontFamily: 'monospace' }}>{p.code}</span>
              </div>

              <h4 style={{ color: '#ffffff', fontSize: '16px', fontWeight: '700', marginTop: '12px', marginBottom: '8px' }}>
                {p.name}
              </h4>

              <div style={{ fontSize: '24px', fontWeight: '800', color: '#34d399', marginBottom: '14px' }}>
                {p.rate}
                <span style={{ fontSize: '12px', color: '#94a3b8', fontWeight: '500', marginLeft: '6px' }}>({p.method})</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: '#cbd5e1', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#94a3b8' }}>Sanction Range:</span>
                  <strong>{formatCurrency(p.minAmount)} – {formatCurrency(p.maxAmount)}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#94a3b8' }}>Tenure Range:</span>
                  <strong>{p.tenure}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#94a3b8' }}>Processing Fee:</span>
                  <strong>{p.processingFee}</strong>
                </div>
              </div>

              <div style={{ marginTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '12px' }}>
                <div style={{ fontSize: '12px', fontWeight: '600', color: '#818cf8', marginBottom: '8px' }}>Product Highlights:</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {p.features.map((f, fIdx) => (
                    <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#94a3b8' }}>
                      <Check size={13} color="#10b981" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button className="btn-secondary" style={{ width: '100%', marginTop: '20px', padding: '10px' }}>
              Configure Product Rules
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoanProductCatalog;
