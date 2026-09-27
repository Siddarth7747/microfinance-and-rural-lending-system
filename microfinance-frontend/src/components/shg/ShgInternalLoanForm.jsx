import React, { useState } from 'react';
import { goldNotify } from '../../utils/goldNotification';
import { formatCurrency } from '../../utils/formatters';
import { Shield, Sparkles } from 'lucide-react';

export const ShgInternalLoanForm = () => {
  const [borrowerName, setBorrowerName] = useState('Radha Devi');
  const [amount, setAmount] = useState('3000');
  const [tenure, setTenure] = useState('6');

  const handleSubmit = (e) => {
    e.preventDefault();
    goldNotify.celebrate(
      'SHG Internal Loan Sanctioned!',
      `Inter-loan of ${formatCurrency(Number(amount))} disbursed to ${borrowerName} for ${tenure} months from pooled thrift savings.`,
      'THRIFT REVOLVING LOAN'
    );
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card" style={{ padding: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
        <Shield size={18} color="#facc15" />
        <h3 style={{ color: '#fef08a', margin: 0 }}>SHG Inter-Loaning & Savings Rotation</h3>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label>Borrower Member Name *</label>
          <input className="form-input" required value={borrowerName} onChange={(e) => setBorrowerName(e.target.value)} />
        </div>
        <div>
          <label>Internal Loan Amount (₹) *</label>
          <input className="form-input" type="number" required value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <div style={{ gridColumn: '1 / -1' }}>
          <label>Tenure (Months)</label>
          <input className="form-input" type="number" value={tenure} onChange={(e) => setTenure(e.target.value)} />
        </div>
      </div>
      <button type="submit" className="btn-primary" style={{ marginTop: '20px', padding: '11px 22px' }}>
        <Sparkles size={15} /> Issue Internal Loan from Savings
      </button>
    </form>
  );
};

export default ShgInternalLoanForm;
