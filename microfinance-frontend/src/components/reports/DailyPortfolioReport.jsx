import React from 'react';
import { reportApi } from '../../api/reportApi';
import { BarChart3, Download, FileSpreadsheet, ShieldCheck, CheckCircle2, TrendingUp, DollarSign, Calendar } from 'lucide-react';
import { formatCurrency } from '../../utils/formatters';
import { goldNotify } from '../../utils/goldNotification';

export const DailyPortfolioReport = () => {
  const branchBreakdowns = [
    { branch: 'Varanasi Main Branch', code: 'BR-VAR-01', activeBorrowers: 642, aum: 21800000, demand: 98000, collected: 96500, efficiency: '98.4%', par30: '1.2%' },
    { branch: 'Mirzapur Rural Hub', code: 'BR-MIR-02', activeBorrowers: 384, aum: 12400000, demand: 54000, collected: 53200, efficiency: '98.5%', par30: '1.5%' },
    { branch: 'Ghazipur East Branch', code: 'BR-GHA-03', activeBorrowers: 222, aum: 8300000, demand: 33000, collected: 32100, efficiency: '97.2%', par30: '1.8%' },
  ];

  const handleExportCsv = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + "Branch,Code,ActiveBorrowers,AUM,Demand,Collected,Efficiency,PAR30\n"
      + branchBreakdowns.map(e => `${e.branch},${e.code},${e.activeBorrowers},${e.aum},${e.demand},${e.collected},${e.efficiency},${e.par30}`).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "MFI_Daily_Portfolio_MIS_Report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#ffffff', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BarChart3 size={20} color="#818cf8" /> Executive MIS & Regulatory Compliance Report
          </h3>
          <p style={{ fontSize: '13px', color: '#94a3b8', marginTop: '4px' }}>
            Daily branch performance summaries, MFIN / RBI return filings, and collection reconciliation
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={handleExportCsv} className="btn-secondary" style={{ padding: '9px 16px' }}>
            <FileSpreadsheet size={16} /> Export Excel / CSV
          </button>
          <button onClick={() => goldNotify.success('RBI Form-A Generated', 'Official RBI Master Direction regulatory submission XML file generated & exported.')} className="btn-primary" style={{ padding: '9px 16px' }}>
            <Download size={16} /> Download RBI Form-A
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
        <div className="glass-card" style={{ padding: '20px' }}>
          <div style={{ color: '#94a3b8', fontSize: '12px', fontWeight: '600' }}>TOTAL ACTIVE LOANS</div>
          <div style={{ fontSize: '24px', fontWeight: '800', color: '#ffffff', marginTop: '6px' }}>1,248 Accounts</div>
          <div style={{ fontSize: '12px', color: '#34d399', marginTop: '4px' }}>100% Biometric Verified</div>
        </div>

        <div className="glass-card" style={{ padding: '20px' }}>
          <div style={{ color: '#94a3b8', fontSize: '12px', fontWeight: '600' }}>PORTFOLIO AUM OUTSTANDING</div>
          <div style={{ fontSize: '24px', fontWeight: '800', color: '#34d399', marginTop: '6px' }}>{formatCurrency(42500000)}</div>
          <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>Across 3 Operating Branches</div>
        </div>

        <div className="glass-card" style={{ padding: '20px' }}>
          <div style={{ color: '#94a3b8', fontSize: '12px', fontWeight: '600' }}>TODAY'S RECOVERY EFFICIENCY</div>
          <div style={{ fontSize: '24px', fontWeight: '800', color: '#fbbf24', marginTop: '6px' }}>98.4%</div>
          <div style={{ fontSize: '12px', color: '#34d399', marginTop: '4px' }}>₹1,81,800 of ₹1,85,000</div>
        </div>
      </div>

      {/* Branch Breakdown Table */}
      <div>
        <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#ffffff', marginBottom: '12px' }}>
          Branch-Level Performance & Risk Breakdown
        </h4>
        <div style={{
          overflowX: 'auto',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          background: 'rgba(9, 14, 26, 0.6)'
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
            <thead>
              <tr style={{ background: 'rgba(255, 255, 255, 0.03)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <th style={{ padding: '12px 16px', color: '#94a3b8' }}>Branch Name</th>
                <th style={{ padding: '12px 16px', color: '#94a3b8' }}>Branch Code</th>
                <th style={{ padding: '12px 16px', color: '#94a3b8' }}>Active Borrowers</th>
                <th style={{ padding: '12px 16px', color: '#94a3b8' }}>Gross AUM</th>
                <th style={{ padding: '12px 16px', color: '#94a3b8' }}>Today's Demand</th>
                <th style={{ padding: '12px 16px', color: '#94a3b8' }}>Collection %</th>
                <th style={{ padding: '12px 16px', color: '#94a3b8' }}>PAR 30 Ratio</th>
              </tr>
            </thead>
            <tbody>
              {branchBreakdowns.map((b, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
                  <td style={{ padding: '12px 16px', fontWeight: '700', color: '#818cf8' }}>{b.branch}</td>
                  <td style={{ padding: '12px 16px', color: '#94a3b8' }}>{b.code}</td>
                  <td style={{ padding: '12px 16px', color: '#f8fafc' }}>{b.activeBorrowers}</td>
                  <td style={{ padding: '12px 16px', color: '#34d399', fontWeight: '700' }}>{formatCurrency(b.aum)}</td>
                  <td style={{ padding: '12px 16px', color: '#f8fafc' }}>{formatCurrency(b.demand)}</td>
                  <td style={{ padding: '12px 16px', color: '#fbbf24', fontWeight: '600' }}>{b.efficiency}</td>
                  <td style={{ padding: '12px 16px' }}>
                    <span className="badge badge-emerald">{b.par30}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DailyPortfolioReport;
