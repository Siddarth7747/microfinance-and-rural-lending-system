import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Building2, CheckCircle2, AlertCircle, ArrowUpRight, Zap, 
  Send, RefreshCw, FileText, Download, ShieldCheck, Clock, Check 
} from 'lucide-react';
import { formatCurrency } from '../../utils/formatters';
import { goldNotify } from '../../utils/goldNotification';
import { DisbursementInitiationForm } from './DisbursementInitiationForm';

export const DisbursementManagementFullView = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('queue');
  const [processingBatch, setProcessingBatch] = useState(false);

  const [disbursementQueue, setDisbursementQueue] = useState([
    {
      id: 'DISB-2026-801',
      borrowerName: 'Sunita Devi',
      brn: 'BRN-VAR-1001',
      groupName: 'Mahila Shakti JLG',
      amount: 50000,
      bankName: 'State Bank of India',
      accountMasked: '•••• •••• 4892',
      ifsc: 'SBIN0001234',
      pennyDropStatus: 'VERIFIED',
      channel: 'DBT / PFMS',
      status: 'READY_TO_DISBURSE'
    },
    {
      id: 'DISB-2026-802',
      borrowerName: 'Meena Kumari',
      brn: 'BRN-VAR-1002',
      groupName: 'Mahila Shakti JLG',
      amount: 45000,
      bankName: 'Baroda UP Bank',
      accountMasked: '•••• •••• 9912',
      ifsc: 'BARB0BUPGBX',
      pennyDropStatus: 'VERIFIED',
      channel: 'NEFT / RTGS',
      status: 'READY_TO_DISBURSE'
    },
    {
      id: 'DISB-2026-803',
      borrowerName: 'Radha Yadav',
      brn: 'BRN-VAR-1003',
      groupName: 'Ujala SHG Fed',
      amount: 60000,
      bankName: 'Punjab National Bank',
      accountMasked: '•••• •••• 1104',
      ifsc: 'PUNB0024500',
      pennyDropStatus: 'VERIFIED',
      channel: 'APB (Aadhaar Bridge)',
      status: 'SETTLED',
      utr: 'UTR-PUNB-20260906-84920'
    },
    {
      id: 'DISB-2026-804',
      borrowerName: 'Kiran Maurya',
      brn: 'BRN-VAR-1004',
      groupName: 'Pragati SHG',
      amount: 40000,
      bankName: 'Union Bank of India',
      accountMasked: '•••• •••• 6721',
      ifsc: 'UBIN0542312',
      pennyDropStatus: 'VERIFIED',
      channel: 'DBT / PFMS',
      status: 'SETTLED',
      utr: 'UTR-UBIN-20260906-19402'
    }
  ]);

  const handleBatchRelease = () => {
    setProcessingBatch(true);
    setTimeout(() => {
      setDisbursementQueue((prev) =>
        prev.map((item) => ({
          ...item,
          status: 'SETTLED',
          utr: item.utr || `UTR-CORE-${Date.now()}-${Math.floor(Math.random() * 9000 + 1000)}`
        }))
      );
      setProcessingBatch(false);
      goldNotify.celebrate(
        'Batch DBT Payout Executed!',
        `Real-time electronic transfer of ${formatCurrency(pendingTotal)} confirmed via Core Banking Interface (PFMS/APB).`,
        'DBT BATCH SETTLED'
      );
    }, 1200);
  };

  const pendingTotal = disbursementQueue
    .filter((d) => d.status === 'READY_TO_DISBURSE')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const settledTotal = disbursementQueue
    .filter((d) => d.status === 'SETTLED')
    .reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
      
      {/* Top Stat Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
        
        <div className="glass-card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <span style={{ color: '#fde047', fontSize: '11.5px', fontWeight: '700', textTransform: 'uppercase' }}>
              Pending Batch Queue
            </span>
            <div style={{
              width: '36px', height: '36px', borderRadius: '10px',
              background: 'rgba(234, 179, 8, 0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#facc15', border: '1px solid rgba(234, 179, 8, 0.3)'
            }}>
              <Clock size={18} />
            </div>
          </div>
          <div style={{ fontSize: '28px', fontWeight: '900', color: '#fef08a', marginTop: '8px' }}>
            {formatCurrency(pendingTotal)}
          </div>
          <div style={{ fontSize: '11.5px', color: '#facc15', marginTop: '4px', fontWeight: '700' }}>
            {disbursementQueue.filter(d => d.status === 'READY_TO_DISBURSE').length} Loans Awaiting Release
          </div>
        </div>

        <div className="glass-card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <span style={{ color: '#fde047', fontSize: '11.5px', fontWeight: '700', textTransform: 'uppercase' }}>
              Today's Disbursed Total
            </span>
            <div style={{
              width: '36px', height: '36px', borderRadius: '10px',
              background: 'rgba(16, 185, 129, 0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#34d399', border: '1px solid rgba(16, 185, 129, 0.3)'
            }}>
              <Building2 size={18} />
            </div>
          </div>
          <div style={{ fontSize: '28px', fontWeight: '900', color: '#34d399', marginTop: '8px' }}>
            {formatCurrency(settledTotal)}
          </div>
          <div style={{ fontSize: '11.5px', color: '#34d399', marginTop: '4px', fontWeight: '700' }}>
            100% PFMS Settlement
          </div>
        </div>

        <div className="glass-card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <span style={{ color: '#fde047', fontSize: '11.5px', fontWeight: '700', textTransform: 'uppercase' }}>
              Penny-Drop Success
            </span>
            <div style={{
              width: '36px', height: '36px', borderRadius: '10px',
              background: 'rgba(16, 185, 129, 0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#34d399', border: '1px solid rgba(16, 185, 129, 0.3)'
            }}>
              <ShieldCheck size={18} />
            </div>
          </div>
          <div style={{ fontSize: '28px', fontWeight: '900', color: '#34d399', marginTop: '8px' }}>
            100.0%
          </div>
          <div style={{ fontSize: '11.5px', color: '#a1a1aa', marginTop: '4px' }}>
            NPCI Name Match Validated
          </div>
        </div>

        <div className="glass-card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <span style={{ color: '#fde047', fontSize: '11.5px', fontWeight: '700', textTransform: 'uppercase' }}>
              Direct Benefit Transfer
            </span>
            <div style={{
              width: '36px', height: '36px', borderRadius: '10px',
              background: 'rgba(234, 179, 8, 0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#facc15', border: '1px solid rgba(234, 179, 8, 0.3)'
            }}>
              <Zap size={18} />
            </div>
          </div>
          <div style={{ fontSize: '28px', fontWeight: '900', color: '#fef08a', marginTop: '8px' }}>
            Zero Leakage
          </div>
          <div style={{ fontSize: '11.5px', color: '#facc15', marginTop: '4px' }}>
            Direct to Beneficiary Account
          </div>
        </div>

      </div>

      {/* Action Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => setActiveTab('queue')}
            style={{
              padding: '8px 16px',
              borderRadius: '10px',
              fontSize: '13px',
              fontWeight: activeTab === 'queue' ? '800' : '600',
              background: activeTab === 'queue' ? 'linear-gradient(135deg, #facc15 0%, #ca8a04 100%)' : '#0a0a0e',
              color: activeTab === 'queue' ? '#000000' : '#fef08a',
              border: activeTab === 'queue' ? '1px solid #fef08a' : '1px solid rgba(234, 179, 8, 0.2)',
              cursor: 'pointer'
            }}
          >
            Direct Disbursement Batch Queue
          </button>

          <button
            onClick={() => setActiveTab('single')}
            style={{
              padding: '8px 16px',
              borderRadius: '10px',
              fontSize: '13px',
              fontWeight: activeTab === 'single' ? '800' : '600',
              background: activeTab === 'single' ? 'linear-gradient(135deg, #facc15 0%, #ca8a04 100%)' : '#0a0a0e',
              color: activeTab === 'single' ? '#000000' : '#fef08a',
              border: activeTab === 'single' ? '1px solid #fef08a' : '1px solid rgba(234, 179, 8, 0.2)',
              cursor: 'pointer'
            }}
          >
            + Initiate Single Payout
          </button>
        </div>

        {activeTab === 'queue' && (
          <button
            onClick={handleBatchRelease}
            disabled={processingBatch || pendingTotal === 0}
            className="btn-primary"
            style={{
              opacity: pendingTotal === 0 ? 0.4 : 1,
              cursor: pendingTotal === 0 ? 'not-allowed' : 'pointer'
            }}
          >
            <Zap size={16} /> {processingBatch ? 'Executing Bank Payouts...' : `Release Batch (${formatCurrency(pendingTotal)})`}
          </button>
        )}
      </div>

      {/* Main Content */}
      {activeTab === 'queue' && (
        <div className="glass-card" style={{ padding: '24px' }}>
          <h3 style={{ fontSize: '17px', color: '#fef08a', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Building2 size={18} color="#facc15" /> Electronic Fund Transfer & DBT Ledger
          </h3>

          <div style={{ overflowX: 'auto', border: '1px solid rgba(234, 179, 8, 0.3)', borderRadius: '12px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
              <thead>
                <tr>
                  <th style={{ padding: '12px 14px', textAlign: 'left' }}>Disbursement ID</th>
                  <th style={{ padding: '12px 14px', textAlign: 'left' }}>Borrower & JLG Group</th>
                  <th style={{ padding: '12px 14px', textAlign: 'left' }}>Bank & Account</th>
                  <th style={{ padding: '12px 14px', textAlign: 'left' }}>Channel</th>
                  <th style={{ padding: '12px 14px', textAlign: 'right' }}>Sanction Amount</th>
                  <th style={{ padding: '12px 14px', textAlign: 'center' }}>Penny Drop</th>
                  <th style={{ padding: '12px 14px', textAlign: 'center' }}>Settlement Status</th>
                </tr>
              </thead>
              <tbody>
                {disbursementQueue.map((row) => (
                  <tr key={row.id} style={{ borderBottom: '1px solid rgba(234, 179, 8, 0.15)' }}>
                    <td style={{ padding: '12px 14px', fontWeight: '800', color: '#ca8a04' }}>
                      {row.id}
                      {row.utr && (
                        <div style={{ fontSize: '10.5px', color: '#34d399', fontFamily: 'monospace' }}>
                          {row.utr}
                        </div>
                      )}
                    </td>
                    <td style={{ padding: '12px 14px' }}>
                      <div style={{ fontWeight: '800', color: '#fef08a' }}>{row.borrowerName}</div>
                      <div style={{ fontSize: '11px', color: '#a1a1aa' }}>{row.brn} • {row.groupName}</div>
                    </td>
                    <td style={{ padding: '12px 14px' }}>
                      <div style={{ color: '#fde047', fontWeight: '700' }}>{row.bankName}</div>
                      <div style={{ fontSize: '11px', color: '#ca8a04' }}>{row.accountMasked} ({row.ifsc})</div>
                    </td>
                    <td style={{ padding: '12px 14px' }}>
                      <span className="badge badge-gold" style={{ fontSize: '10.5px' }}>
                        {row.channel}
                      </span>
                    </td>
                    <td style={{ padding: '12px 14px', textAlign: 'right', fontWeight: '900', color: '#34d399', fontSize: '14px' }}>
                      {formatCurrency(row.amount)}
                    </td>
                    <td style={{ padding: '12px 14px', textAlign: 'center' }}>
                      <span style={{
                        background: 'rgba(16, 185, 129, 0.18)',
                        color: '#34d399',
                        border: '1px solid rgba(16, 185, 129, 0.4)',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        fontSize: '11px',
                        fontWeight: '800',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '3px'
                      }}>
                        <CheckCircle2 size={11} /> MATCHED
                      </span>
                    </td>
                    <td style={{ padding: '12px 14px', textAlign: 'center' }}>
                      {row.status === 'SETTLED' ? (
                        <span style={{
                          background: 'rgba(16, 185, 129, 0.2)',
                          color: '#34d399',
                          border: '1px solid #34d399',
                          padding: '3px 10px',
                          borderRadius: '6px',
                          fontSize: '11.5px',
                          fontWeight: '800',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}>
                          <Check size={12} /> SETTLED
                        </span>
                      ) : (
                        <span style={{
                          background: 'rgba(234, 179, 8, 0.2)',
                          color: '#facc15',
                          border: '1px solid #facc15',
                          padding: '3px 10px',
                          borderRadius: '6px',
                          fontSize: '11.5px',
                          fontWeight: '800'
                        }}>
                          QUEUED
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'single' && (
        <DisbursementInitiationForm />
      )}

    </div>
  );
};

export default DisbursementManagementFullView;
