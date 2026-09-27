import React, { useState } from 'react';

export const EligibilityCriteriaEditor = () => {
  const [rules, setRules] = useState([
    { id: 1, parameter: 'Annual Household Income (Rural)', condition: 'LESS_THAN_EQUAL', threshold: '300000', mandatory: true },
    { id: 2, parameter: 'Borrower Age', condition: 'BETWEEN', threshold: '18 - 60 years', mandatory: true },
    { id: 3, parameter: 'CIBIL / Equifax Bureau Score', condition: 'GREATER_THAN_EQUAL', threshold: '600', mandatory: false },
    { id: 4, parameter: 'Maximum Microfinance Indebtedness', condition: 'LESS_THAN_EQUAL', threshold: '₹2,00,000 across max 3 MFIs', mandatory: true }
  ]);

  const toggleMandatory = (id) => {
    setRules(rules.map(r => r.id === id ? { ...r, mandatory: !r.mandatory } : r));
  };

  return (
    <div className="glass-card" style={{ padding: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ color: '#f8fafc' }}>RBI & Product Eligibility Criteria Rules</h3>
        <button className="btn-secondary" style={{ fontSize: '12px' }}>+ Add Rule</button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {rules.map(rule => (
          <div key={rule.id} style={{ background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ color: '#f8fafc', fontWeight: '600', fontSize: '14px' }}>{rule.parameter}</div>
              <div style={{ color: '#94a3b8', fontSize: '12px', marginTop: '2px' }}>
                Condition: <span style={{ color: '#6366f1' }}>{rule.condition}</span> | Threshold: <span style={{ color: '#10b981' }}>{rule.threshold}</span>
              </div>
            </div>
            <button 
              onClick={() => toggleMandatory(rule.id)}
              style={{
                padding: '6px 12px',
                borderRadius: '20px',
                fontSize: '12px',
                border: 'none',
                cursor: 'pointer',
                background: rule.mandatory ? 'rgba(16, 185, 129, 0.2)' : 'rgba(148, 163, 184, 0.2)',
                color: rule.mandatory ? '#10b981' : '#94a3b8'
              }}
            >
              {rule.mandatory ? 'Mandatory (RBI)' : 'Optional'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
