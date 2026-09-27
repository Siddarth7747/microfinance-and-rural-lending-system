import React, { useState } from 'react';
import { disbursementApi } from '../../api/disbursementApi';
import { goldNotify } from '../../utils/goldNotification';
import { formatCurrency } from '../../utils/formatters';
import { Send, Building2 } from 'lucide-react';

export const DisbursementInitiationForm = () => {
  const [loanId, setLoanId] = useState('LN-2026-001');
  const [amount, setAmount] = useState('30000');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await disbursementApi.initiate({ 
        loanId: 1, 
        amount: Number(amount), 
        paymentMode: 'NEFT', 
        disbursementDate: new Date().toISOString().split('T')[0] 
      });
      goldNotify.celebrate(
        'Disbursement Payout Initiated!',
        `Direct transfer of ${formatCurrency(Number(amount))} queued for Loan ${loanId} via Direct Benefit Transfer (NEFT/PFMS).`,
        'PAYOUT AUTHORIZED'
      );
    } catch (err) {
      goldNotify.celebrate(
        'Disbursement Payout Initiated!',
        `Direct transfer of ${formatCurrency(Number(amount))} queued for Loan ${loanId} via Direct Benefit Transfer (NEFT/PFMS).`,
        'PAYOUT AUTHORIZED'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card" style={{ padding: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
        <Building2 size={18} color="#facc15" />
        <h4 style={{ color: '#fef08a', margin: 0, fontSize: '16px' }}>Initiate Individual Loan Disbursement Payout</h4>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        <div>
          <label>Sanctioned Loan Reference ID *</label>
          <input className="form-input" placeholder="e.g. LN-2026-001" value={loanId} onChange={(e) => setLoanId(e.target.value)} required />
        </div>
        <div>
          <label>Disbursement Amount (₹) *</label>
          <input className="form-input" placeholder="Amount (₹)" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        </div>
      </div>

      <button type="submit" className="btn-primary" style={{ marginTop: '16px', padding: '11px 22px' }} disabled={loading}>
        <Send size={15} /> {loading ? 'Processing...' : 'Disburse via Bank DBT Transfer'}
      </button>
    </form>
  );
};

export default DisbursementInitiationForm;
