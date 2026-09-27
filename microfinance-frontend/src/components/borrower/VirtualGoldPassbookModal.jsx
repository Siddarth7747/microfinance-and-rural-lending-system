import React from 'react';
import { useTranslation } from 'react-i18next';
import { X, QrCode, Printer, CheckCircle2, ShieldCheck, Crown, Landmark, Download } from 'lucide-react';
import { formatCurrency } from '../../utils/formatters';
import { goldNotify } from '../../utils/goldNotification';

export const VirtualGoldPassbookModal = ({ borrower, onClose }) => {
  const { t } = useTranslation();

  if (!borrower) return null;

  const installments = [
    { no: '01', date: '10-May-2026', emi: 2850, principal: 2200, interest: 650, balance: 47800, status: 'PAID', mode: 'DOORSTEP CASH' },
    { no: '02', date: '10-Jun-2026', emi: 2850, principal: 2235, interest: 615, balance: 45565, status: 'PAID', mode: 'UPI AUTO-DEBIT' },
    { no: '03', date: '10-Jul-2026', emi: 2850, principal: 2270, interest: 580, balance: 43295, status: 'PAID', mode: 'DOORSTEP CASH' },
    { no: '04', date: '10-Aug-2026', emi: 2850, principal: 2305, interest: 545, balance: 40990, status: 'PAID', mode: 'UPI QR COLLECT' },
    { no: '05', date: '10-Sep-2026', emi: 2850, principal: 2340, interest: 510, balance: 38650, status: 'PENDING', mode: 'DUE ON 10-SEP' },
    { no: '06', date: '10-Oct-2026', emi: 2850, principal: 2380, interest: 470, balance: 36270, status: 'UPCOMING', mode: 'SCHEDULED' },
  ];

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.88)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100,
      padding: '20px'
    }}>
      <div style={{
        background: '#040407',
        border: '2px solid #facc15',
        borderRadius: '24px',
        width: '100%',
        maxWidth: '820px',
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: '0 0 60px rgba(250, 204, 21, 0.35), inset 0 1px 0 rgba(254, 240, 138, 0.5)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column'
      }}>
        
        {/* Passbook Gold Foil Top Header */}
        <div style={{
          background: 'linear-gradient(135deg, #1c1505 0%, #2a2008 50%, #0e0a02 100%)',
          borderBottom: '2px solid rgba(250, 204, 21, 0.5)',
          padding: '24px 30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Background watermark seal */}
          <div style={{
            position: 'absolute',
            right: '60px',
            top: '-20px',
            opacity: 0.08,
            pointerEvents: 'none'
          }}>
            <Crown size={180} color="#facc15" />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #fef08a 0%, #facc15 50%, #ca8a04 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(250, 204, 21, 0.5)',
              border: '2px solid #ffffff'
            }}>
              <Landmark size={28} color="#000000" />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="badge badge-gold" style={{ fontSize: '10.5px' }}>
                  <Crown size={12} /> OFFICIAL DIGITAL PASSBOOK
                </span>
                <span style={{ color: '#d4d4d8', fontSize: '12px' }}>RBI Master Direction Compliance</span>
              </div>
              <h2 style={{
                fontSize: '22px',
                fontWeight: '900',
                margin: '3px 0 0 0',
                background: 'linear-gradient(135deg, #ffffff 0%, #fef08a 40%, #facc15 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Rural Micro-Credit Passbook & Ledger
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'rgba(250, 204, 21, 0.1)',
              border: '1px solid rgba(250, 204, 21, 0.3)',
              borderRadius: '12px',
              width: '38px',
              height: '38px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#facc15',
              cursor: 'pointer'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Passbook Body */}
        <div style={{ padding: '28px 30px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
          
          {/* Member Identity & QR Repayment Card */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            background: 'rgba(12, 12, 18, 0.8)',
            border: '1px solid rgba(234, 179, 8, 0.35)',
            borderRadius: '16px',
            padding: '20px'
          }}>
            {/* Member Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div>
                <span style={{ fontSize: '11px', color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Account Holder</span>
                <div style={{ fontSize: '20px', fontWeight: '900', color: '#fef08a' }}>{borrower.fullName}</div>
                <div style={{ fontSize: '12px', color: '#ca8a04', fontWeight: '600' }}>BRN: {borrower.brn}</div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '4px' }}>
                <div>
                  <span style={{ fontSize: '11px', color: '#a1a1aa' }}>Village / Center</span>
                  <div style={{ fontSize: '13px', fontWeight: '700', color: '#fef08a' }}>{borrower.village || 'Shivpur Sector'}</div>
                </div>
                <div>
                  <span style={{ fontSize: '11px', color: '#a1a1aa' }}>JLG Group</span>
                  <div style={{ fontSize: '13px', fontWeight: '700', color: '#facc15' }}>Mahila Shakti Group #4</div>
                </div>
                <div>
                  <span style={{ fontSize: '11px', color: '#a1a1aa' }}>Sanction Amount</span>
                  <div style={{ fontSize: '14px', fontWeight: '900', color: '#34d399' }}>{formatCurrency(50000)}</div>
                </div>
                <div>
                  <span style={{ fontSize: '11px', color: '#a1a1aa' }}>Interest Rate</span>
                  <div style={{ fontSize: '13px', fontWeight: '800', color: '#fef08a' }}>18.0% Reducing p.a.</div>
                </div>
              </div>
            </div>

            {/* UPI QR Payment Capsule */}
            <div style={{
              background: '#000000',
              border: '1px solid rgba(250, 204, 21, 0.4)',
              borderRadius: '14px',
              padding: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}>
              <div style={{
                background: '#ffffff',
                padding: '8px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 16px rgba(250, 204, 21, 0.4)'
              }}>
                <QrCode size={72} color="#000000" />
              </div>

              <div>
                <span className="badge badge-gold" style={{ fontSize: '10px', marginBottom: '6px' }}>
                  INSTANT UPI RECOVERY
                </span>
                <div style={{ fontSize: '12px', color: '#fef08a', fontWeight: '700' }}>
                  Scan to Pay Monthly EMI
                </div>
                <div style={{ fontSize: '16px', fontWeight: '900', color: '#34d399', margin: '2px 0' }}>
                  {formatCurrency(2850)}
                </div>
                <div style={{ fontSize: '10.5px', color: '#a1a1aa' }}>
                  UPI ID: mfi.{borrower.brn?.toLowerCase()}@goldbank
                </div>
              </div>
            </div>
          </div>

          {/* Ledger Table */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <h4 style={{ fontSize: '15px', fontWeight: '800', color: '#fef08a', margin: 0 }}>
                Installment Amortization Ledger
              </h4>
              <span style={{ fontSize: '12px', color: '#ca8a04' }}>Showing Recent 6 Cycles</span>
            </div>

            <div style={{ overflowX: 'auto', border: '1px solid rgba(234, 179, 8, 0.3)', borderRadius: '12px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12.5px' }}>
                <thead>
                  <tr>
                    <th style={{ padding: '10px 14px', textAlign: 'left' }}>#</th>
                    <th style={{ padding: '10px 14px', textAlign: 'left' }}>Due Date</th>
                    <th style={{ padding: '10px 14px', textAlign: 'right' }}>EMI</th>
                    <th style={{ padding: '10px 14px', textAlign: 'right' }}>Principal</th>
                    <th style={{ padding: '10px 14px', textAlign: 'right' }}>Interest</th>
                    <th style={{ padding: '10px 14px', textAlign: 'right' }}>Balance</th>
                    <th style={{ padding: '10px 14px', textAlign: 'center' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {installments.map((row) => (
                    <tr key={row.no} style={{ borderBottom: '1px solid rgba(234, 179, 8, 0.15)' }}>
                      <td style={{ padding: '10px 14px', fontWeight: '700', color: '#ca8a04' }}>{row.no}</td>
                      <td style={{ padding: '10px 14px', color: '#fef08a' }}>{row.date}</td>
                      <td style={{ padding: '10px 14px', textAlign: 'right', fontWeight: '800', color: '#fef08a' }}>{formatCurrency(row.emi)}</td>
                      <td style={{ padding: '10px 14px', textAlign: 'right', color: '#fde047' }}>{formatCurrency(row.principal)}</td>
                      <td style={{ padding: '10px 14px', textAlign: 'right', color: '#ca8a04' }}>{formatCurrency(row.interest)}</td>
                      <td style={{ padding: '10px 14px', textAlign: 'right', fontWeight: '700', color: '#fef08a' }}>{formatCurrency(row.balance)}</td>
                      <td style={{ padding: '10px 14px', textAlign: 'center' }}>
                        {row.status === 'PAID' ? (
                          <span style={{
                            background: 'rgba(16, 185, 129, 0.2)',
                            color: '#34d399',
                            border: '1px solid #34d399',
                            padding: '2px 8px',
                            borderRadius: '6px',
                            fontSize: '11px',
                            fontWeight: '800',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}>
                            <CheckCircle2 size={11} /> PAID
                          </span>
                        ) : row.status === 'PENDING' ? (
                          <span style={{
                            background: 'rgba(234, 179, 8, 0.2)',
                            color: '#facc15',
                            border: '1px solid #facc15',
                            padding: '2px 8px',
                            borderRadius: '6px',
                            fontSize: '11px',
                            fontWeight: '800'
                          }}>
                            DUE
                          </span>
                        ) : (
                          <span style={{ color: '#71717a', fontSize: '11px', fontWeight: '600' }}>UPCOMING</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Footer Actions */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '6px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#ca8a04', fontSize: '12px' }}>
              <ShieldCheck size={16} color="#facc15" />
              Digitally certified by Core Microfinance Ledger Engine
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={() => window.print()}
                className="btn-secondary"
                style={{ padding: '8px 16px', fontSize: '13px' }}
              >
                <Printer size={15} /> Print Passbook
              </button>
              <button
                onClick={() => goldNotify.success('Gold Passbook PDF Exported', `Official Ledger & QR statement for ${borrower.fullName} downloaded successfully.`)}
                className="btn-primary"
                style={{ padding: '8px 16px', fontSize: '13px' }}
              >
                <Download size={15} /> Download PDF
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default VirtualGoldPassbookModal;
