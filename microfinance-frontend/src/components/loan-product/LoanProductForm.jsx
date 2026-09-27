import React, { useState } from 'react';

export const LoanProductForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    productCode: 'JLG-AGRI-01',
    productName: 'Agricultural Group Microloan',
    minAmount: '10000',
    maxAmount: '50000',
    minTenureMonths: '6',
    maxTenureMonths: '24',
    interestRatePerAnnum: '18.5',
    interestMethod: 'REDUCING',
    processingFeePercent: '1.0',
    repaymentFrequency: 'MONTHLY'
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(`Loan Product ${formData.productName} configured successfully!`);
      if (onSuccess) onSuccess();
    }, 600);
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card" style={{ padding: '24px' }}>
      <h3 style={{ color: '#f8fafc', marginBottom: '16px' }}>Configure New Loan Product</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
        <div>
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Product Code *</label>
          <input className="form-input" required value={formData.productCode} onChange={(e) => setFormData({ ...formData, productCode: e.target.value })} />
        </div>
        <div>
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Product Name *</label>
          <input className="form-input" required value={formData.productName} onChange={(e) => setFormData({ ...formData, productName: e.target.value })} />
        </div>
        <div>
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Min Amount (₹) *</label>
          <input className="form-input" type="number" required value={formData.minAmount} onChange={(e) => setFormData({ ...formData, minAmount: e.target.value })} />
        </div>
        <div>
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Max Amount (₹) *</label>
          <input className="form-input" type="number" required value={formData.maxAmount} onChange={(e) => setFormData({ ...formData, maxAmount: e.target.value })} />
        </div>
        <div>
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Min Tenure (Months) *</label>
          <input className="form-input" type="number" required value={formData.minTenureMonths} onChange={(e) => setFormData({ ...formData, minTenureMonths: e.target.value })} />
        </div>
        <div>
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Max Tenure (Months) *</label>
          <input className="form-input" type="number" required value={formData.maxTenureMonths} onChange={(e) => setFormData({ ...formData, maxTenureMonths: e.target.value })} />
        </div>
        <div>
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Interest Rate (% p.a.) *</label>
          <input className="form-input" type="number" step="0.1" required value={formData.interestRatePerAnnum} onChange={(e) => setFormData({ ...formData, interestRatePerAnnum: e.target.value })} />
        </div>
        <div>
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Interest Method *</label>
          <select className="form-input" value={formData.interestMethod} onChange={(e) => setFormData({ ...formData, interestMethod: e.target.value })}>
            <option value="REDUCING">Reducing Balance</option>
            <option value="FLAT">Flat Interest</option>
            <option value="DAILY_REDUCING">Daily Reducing Balance</option>
          </select>
        </div>
        <div>
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Processing Fee (%)</label>
          <input className="form-input" type="number" step="0.1" value={formData.processingFeePercent} onChange={(e) => setFormData({ ...formData, processingFeePercent: e.target.value })} />
        </div>
        <div>
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Repayment Frequency</label>
          <select className="form-input" value={formData.repaymentFrequency} onChange={(e) => setFormData({ ...formData, repaymentFrequency: e.target.value })}>
            <option value="WEEKLY">Weekly</option>
            <option value="FORTNIGHTLY">Fortnightly</option>
            <option value="MONTHLY">Monthly</option>
          </select>
        </div>
      </div>
      <button type="submit" className="btn-primary" style={{ marginTop: '20px' }} disabled={loading}>
        {loading ? 'Saving...' : 'Save Product Configuration'}
      </button>
    </form>
  );
};
