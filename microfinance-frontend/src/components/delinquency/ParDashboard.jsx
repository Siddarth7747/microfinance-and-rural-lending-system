import React from 'react';
import { ParTrendChart } from '../../charts/ParTrendChart';
import { DelinquencyByBranchChart } from '../../charts/DelinquencyByBranchChart';
import { AlertTriangle, TrendingDown, ShieldAlert, CheckCircle, ArrowUpRight } from 'lucide-react';
import { formatCurrency } from '../../utils/formatters';

export const ParDashboard = () => {
  const delinquentAccounts = [
    { id: 'LN-2026-8801', borrower: 'Sunita Devi (BRN-1001)', group: 'Rampur Mahila JLG-1', amount: 35000, overdue: 3200, dpd: 14, bucket: 'SMA-0 (1-30 DPD)', officer: 'Rajesh Kumar' },
    { id: 'LN-2026-8804', borrower: 'Kusum Devi (BRN-1008)', group: 'Shivpur Kisan Group', amount: 45000, overdue: 4800, dpd: 38, bucket: 'PAR-30 (31-60 DPD)', officer: 'Ramesh Singh' },
    { id: 'LN-2026-8809', borrower: 'Radha Yadav (BRN-1012)', group: 'Mirzapur SHG-4', amount: 60000, overdue: 9600, dpd: 72, bucket: 'PAR-60 (61-90 DPD)', officer: 'Rajesh Kumar' },
    { id: 'LN-2026-8740', borrower: 'Sangeeta Maurya (BRN-0982)', group: 'Varanasi North JLG-2', amount: 50000, overdue: 18500, dpd: 98, bucket: 'NPA (>90 DPD)', officer: 'Ramesh Singh' }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '1440px', margin: '0 auto' }}>
      
      {/* Header Banner */}
      <div className="glass-card" style={{
        padding: '24px 30px',
        background: 'linear-gradient(135deg, rgba(244, 63, 94, 0.12) 0%, rgba(245, 158, 11, 0.08) 100%)',
        border: '1px solid rgba(244, 63, 94, 0.25)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <span className="badge badge-rose">
              <ShieldAlert size={13} /> Asset Quality & RBI Classification
            </span>
            <span style={{ fontSize: '13px', color: '#94a3b8' }}>• As of September 2026</span>
          </div>
          <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#ffffff', margin: 0 }}>
            Portfolio at Risk (PAR) & NPA Delinquency Management
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '13.5px', marginTop: '4px' }}>
            Live early-warning indicator tracking DPD (Days Past Due), SMA buckets, and doorstep recovery workflows.
          </p>
        </div>
      </div>

      {/* PAR Metric Buckets */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '18px' }}>
        
        <div className="glass-card" style={{ padding: '20px' }}>
          <div style={{ color: '#94a3b8', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase' }}>
            SMA-0 (1–30 DPD)
          </div>
          <div style={{ fontSize: '26px', fontWeight: '800', color: '#fbbf24', marginTop: '8px' }}>
            {formatCurrency(145000)}
          </div>
          <div style={{ fontSize: '12px', color: '#34d399', marginTop: '4px' }}>
            1.15% Portfolio • 4 accounts
          </div>
        </div>

        <div className="glass-card" style={{ padding: '20px' }}>
          <div style={{ color: '#94a3b8', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase' }}>
            PAR-30 (31–60 DPD)
          </div>
          <div style={{ fontSize: '26px', fontWeight: '800', color: '#f59e0b', marginTop: '8px' }}>
            {formatCurrency(85000)}
          </div>
          <div style={{ fontSize: '12px', color: '#34d399', marginTop: '4px' }}>
            0.65% Portfolio • 2 accounts
          </div>
        </div>

        <div className="glass-card" style={{ padding: '20px' }}>
          <div style={{ color: '#94a3b8', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase' }}>
            PAR-60 (61–90 DPD)
          </div>
          <div style={{ fontSize: '26px', fontWeight: '800', color: '#fb7185', marginTop: '8px' }}>
            {formatCurrency(42000)}
          </div>
          <div style={{ fontSize: '12px', color: '#fbbf24', marginTop: '4px' }}>
            0.32% Portfolio • 1 account
          </div>
        </div>

        <div className="glass-card" style={{ padding: '20px' }}>
          <div style={{ color: '#94a3b8', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase' }}>
            Gross NPA (&gt;90 DPD)
          </div>
          <div style={{ fontSize: '26px', fontWeight: '800', color: '#f43f5e', marginTop: '8px' }}>
            {formatCurrency(28000)}
          </div>
          <div style={{ fontSize: '12px', color: '#34d399', marginTop: '4px' }}>
            0.21% GNPA (Well below 2% limit)
          </div>
        </div>

      </div>

      {/* Analytics Chart */}
      <div className="glass-card" style={{ padding: '24px' }}>
        <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#ffffff', marginBottom: '16px' }}>
          PAR Delinquency Trend (Monthly DPD Distribution)
        </h4>
        <ParTrendChart />
      </div>

      {/* Delinquent Overdue Queue Table */}
      <div className="glass-card" style={{ padding: '24px' }}>
        <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#ffffff', marginBottom: '16px' }}>
          Field Action Queue — Overdue Borrowers
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
                <th style={{ padding: '12px 16px', color: '#94a3b8' }}>Loan Account</th>
                <th style={{ padding: '12px 16px', color: '#94a3b8' }}>Borrower & JLG Group</th>
                <th style={{ padding: '12px 16px', color: '#94a3b8' }}>Overdue Demand</th>
                <th style={{ padding: '12px 16px', color: '#94a3b8' }}>DPD</th>
                <th style={{ padding: '12px 16px', color: '#94a3b8' }}>PAR Classification</th>
                <th style={{ padding: '12px 16px', color: '#94a3b8' }}>Assigned Officer</th>
              </tr>
            </thead>
            <tbody>
              {delinquentAccounts.map((row, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
                  <td style={{ padding: '12px 16px', fontWeight: '700', color: '#818cf8' }}>{row.id}</td>
                  <td style={{ padding: '12px 16px' }}>
                    <div style={{ color: '#f8fafc', fontWeight: '600' }}>{row.borrower}</div>
                    <div style={{ fontSize: '11px', color: '#94a3b8' }}>{row.group}</div>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#fb7185', fontWeight: '700' }}>{formatCurrency(row.overdue)}</td>
                  <td style={{ padding: '12px 16px', color: '#f8fafc' }}>{row.dpd} Days</td>
                  <td style={{ padding: '12px 16px' }}>
                    <span className={`badge ${
                      row.dpd > 90 ? 'badge-rose' : row.dpd > 60 ? 'badge-rose' : row.dpd > 30 ? 'badge-amber' : 'badge-indigo'
                    }`}>
                      {row.bucket}
                    </span>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#94a3b8' }}>{row.officer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default ParDashboard;
