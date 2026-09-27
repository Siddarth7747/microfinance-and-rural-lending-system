import React from 'react';

export const LoanDetailPanel = ({ loan }) => {
  const data = loan || {
    loanAccountNumber: 'LN-MFI-2026-1001',
    borrowerName: 'Sunita Devi',
    groupName: 'Mahila Utthan JLG',
    sanctionedAmount: '30,000',
    disbursedAmount: '30,000',
    outstandingPrincipal: '22,400',
    outstandingInterest: '1,820',
    emiAmount: '2,750',
    totalEmis: '12',
    paidEmis: '3',
    status: 'ACTIVE',
    parClassification: 'CURRENT',
    dpd: 0,
    disbursementDate: '2026-06-15',
    firstEmiDate: '2026-07-15'
  };

  return (
    <div className="glass-card" style={{ padding: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <div>
          <h3 style={{ color: '#f8fafc' }}>Loan Account Overview</h3>
          <p style={{ color: '#94a3b8', fontSize: '13px', marginTop: '2px' }}>A/C: {data.loanAccountNumber}</p>
        </div>
        <span style={{
          padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold',
          background: data.status === 'ACTIVE' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)',
          color: data.status === 'ACTIVE' ? '#10b981' : '#ef4444'
        }}>
          {data.status} ({data.parClassification})
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
        <div style={{ background: 'rgba(15, 23, 42, 0.5)', padding: '12px', borderRadius: '10px' }}>
          <div style={{ color: '#94a3b8', fontSize: '12px' }}>Borrower / Group</div>
          <div style={{ color: '#f8fafc', fontWeight: '600', fontSize: '14px', marginTop: '4px' }}>{data.borrowerName}</div>
          <div style={{ color: '#6366f1', fontSize: '12px' }}>{data.groupName}</div>
        </div>

        <div style={{ background: 'rgba(15, 23, 42, 0.5)', padding: '12px', borderRadius: '10px' }}>
          <div style={{ color: '#94a3b8', fontSize: '12px' }}>Sanctioned / Disbursed</div>
          <div style={{ color: '#f8fafc', fontWeight: '600', fontSize: '14px', marginTop: '4px' }}>₹{data.sanctionedAmount}</div>
          <div style={{ color: '#94a3b8', fontSize: '12px' }}>Disbursed: {data.disbursementDate}</div>
        </div>

        <div style={{ background: 'rgba(15, 23, 42, 0.5)', padding: '12px', borderRadius: '10px' }}>
          <div style={{ color: '#94a3b8', fontSize: '12px' }}>Outstanding Balance</div>
          <div style={{ color: '#f59e0b', fontWeight: '600', fontSize: '14px', marginTop: '4px' }}>₹{data.outstandingPrincipal}</div>
          <div style={{ color: '#94a3b8', fontSize: '12px' }}>Interest: ₹{data.outstandingInterest}</div>
        </div>

        <div style={{ background: 'rgba(15, 23, 42, 0.5)', padding: '12px', borderRadius: '10px' }}>
          <div style={{ color: '#94a3b8', fontSize: '12px' }}>EMI Progress</div>
          <div style={{ color: '#10b981', fontWeight: '600', fontSize: '14px', marginTop: '4px' }}>₹{data.emiAmount} / mo</div>
          <div style={{ color: '#94a3b8', fontSize: '12px' }}>Paid {data.paidEmis} of {data.totalEmis} EMIs</div>
        </div>
      </div>
    </div>
  );
};
