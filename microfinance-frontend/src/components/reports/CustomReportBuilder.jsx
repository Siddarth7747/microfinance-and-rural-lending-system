import React, { useState } from 'react';

export const CustomReportBuilder = () => {
  const [reportType, setReportType] = useState('LOAN_PORTFOLIO');
  const [dateFrom, setDateFrom] = useState('2026-08-01');
  const [dateTo, setDateTo] = useState('2026-08-31');

  const handleRun = () => {
    alert(`Custom ${reportType} report generated for range ${dateFrom} to ${dateTo}!`);
  };

  return (
    <div className="glass-card" style={{ padding: '24px' }}>
      <h3 style={{ color: '#f8fafc', marginBottom: '16px' }}>Custom Management Information System (MIS) Report Builder</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '16px' }}>
        <div>
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Report Category</label>
          <select className="form-input" value={reportType} onChange={(e) => setReportType(e.target.value)}>
            <option value="LOAN_PORTFOLIO">Loan Portfolio & Outstanding</option>
            <option value="REPAYMENT_COLLECTION">Repayment & Collection Register</option>
            <option value="PAR_NPA_AGING">PAR / NPA Aging Analysis</option>
            <option value="SHG_SAVINGS">SHG Savings & Internal Loans</option>
          </select>
        </div>
        <div>
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Start Date</label>
          <input className="form-input" type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
        </div>
        <div>
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>End Date</label>
          <input className="form-input" type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} />
        </div>
      </div>
      <button className="btn-primary" onClick={handleRun}>Build & Export Report</button>
    </div>
  );
};
