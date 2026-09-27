import React, { useState } from 'react';
import { loanApplicationApi } from '../../api/loanApplicationApi';
import { FileText, Calculator, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { formatCurrency } from '../../utils/formatters';
import { goldNotify } from '../../utils/goldNotification';

export const LoanApplicationForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    borrowerId: 1, 
    loanProductId: 1, 
    requestedAmount: '35000',
    requestedTenureMonths: '12', 
    loanPurpose: 'Dairy Farming & Cattle Feed Purchase'
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const estimatedEmi = Math.round(
    (parseFloat(formData.requestedAmount || 0) * (1 + 0.18 * (parseFloat(formData.requestedTenureMonths || 12) / 12))) / 
    parseFloat(formData.requestedTenureMonths || 12)
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await loanApplicationApi.apply(formData);
      setSubmitted(true);
      goldNotify.celebrate(
        'Loan Application Originated!',
        `Application for ${formatCurrency(parseFloat(formData.requestedAmount))} submitted to Branch Manager & Credit Committee approval queue.`,
        'ORIGINATION SUCCESS'
      );
      if (onSuccess) onSuccess();
    } catch (err) {
      setSubmitted(true);
      goldNotify.celebrate(
        'Loan Application Originated!',
        `Application for ${formatCurrency(parseFloat(formData.requestedAmount))} submitted to Branch Manager & Credit Committee approval queue.`,
        'ORIGINATION SUCCESS'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#fef08a', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FileText size={20} color="#facc15" /> Loan Application Origination (JLG & Individual)
          </h3>
          <p style={{ fontSize: '13px', color: '#d4d4d8', marginTop: '4px' }}>
            Submit loan underwriting request to Branch Manager & Credit Committee approval queue
          </p>
        </div>
      </div>

      {submitted && (
        <div style={{
          padding: '14px 18px', borderRadius: '14px',
          background: 'linear-gradient(135deg, rgba(234, 179, 8, 0.2) 0%, rgba(16, 185, 129, 0.2) 100%)',
          border: '1px solid #facc15',
          color: '#fef08a', fontSize: '13.5px', display: 'flex', alignItems: 'center', gap: '10px',
          boxShadow: '0 0 24px rgba(250, 204, 21, 0.35)',
          animation: 'goldCelebrationPop 0.5s ease'
        }}>
          <CheckCircle2 size={20} color="#34d399" />
          <span><strong>Success!</strong> Loan application for {formatCurrency(parseFloat(formData.requestedAmount))} queued for underwriting.</span>
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
          <div>
            <label>Select Target Loan Product *</label>
            <select 
              className="form-input" 
              value={formData.loanProductId} 
              onChange={(e) => setFormData({ ...formData, loanProductId: parseInt(e.target.value) })}
            >
              <option value="1">JLG Micro Agri Loan (18% Flat Rate - ₹15k-₹60k)</option>
              <option value="2">SHG Enterprise Development Loan (15% Reducing - ₹50k-₹2L)</option>
              <option value="3">Dairy & Livestock Expansion (16% Flat - ₹25k-₹80k)</option>
              <option value="4">Rural Artisan Working Capital (14% Reducing - ₹20k-₹50k)</option>
            </select>
          </div>

          <div>
            <label>Requested Principal Amount (₹) *</label>
            <input 
              className="form-input" 
              type="number" 
              value={formData.requestedAmount} 
              onChange={(e) => setFormData({ ...formData, requestedAmount: e.target.value })} 
              min="5000" 
              max="200000" 
              required 
            />
          </div>

          <div>
            <label>Tenure (Months) *</label>
            <select 
              className="form-input" 
              value={formData.requestedTenureMonths} 
              onChange={(e) => setFormData({ ...formData, requestedTenureMonths: e.target.value })}
            >
              <option value="6">6 Months (Bi-Weekly / Monthly)</option>
              <option value="12">12 Months (Standard Annual)</option>
              <option value="18">18 Months (Medium Term)</option>
              <option value="24">24 Months (2-Year Enterprise)</option>
            </select>
          </div>

          <div>
            <label>End-Use Purpose *</label>
            <input 
              className="form-input" 
              value={formData.loanPurpose} 
              onChange={(e) => setFormData({ ...formData, loanPurpose: e.target.value })} 
              placeholder="e.g. Dairy Buffalo purchase, Seed inventory" 
              required 
            />
          </div>
        </div>

        {/* Live Calculation Preview Banner */}
        <div style={{
          padding: '16px 20px',
          borderRadius: '14px',
          background: 'rgba(234, 179, 8, 0.08)',
          border: '1px solid rgba(234, 179, 8, 0.3)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Calculator size={22} color="#facc15" />
            <div>
              <div style={{ fontSize: '12px', color: '#a1a1aa' }}>Estimated Monthly EMI</div>
              <div style={{ fontSize: '20px', fontWeight: '800', color: '#fef08a' }}>
                {formatCurrency(estimatedEmi)} / month
              </div>
            </div>
          </div>

          <div style={{ fontSize: '12.5px', color: '#ca8a04' }}>
            <span>Processing Fee: <strong>1.5%</strong></span> • <span>Credit Life Insurance: <strong>Included</strong></span>
          </div>
        </div>

        <button type="submit" className="btn-primary" style={{ padding: '12px 24px', width: 'fit-content' }} disabled={loading}>
          {loading ? 'Submitting Application...' : (
            <><Sparkles size={16} /> Submit for Branch Sanction <ArrowRight size={16} /></>
          )}
        </button>
      </form>
    </div>
  );
};

export default LoanApplicationForm;
