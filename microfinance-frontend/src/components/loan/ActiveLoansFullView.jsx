import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CreditCard, CheckCircle2, Crown, Search, Filter, ShieldCheck, DollarSign, Calendar } from 'lucide-react';
import { formatCurrency } from '../../utils/formatters';
import { VirtualGoldPassbookModal } from '../borrower/VirtualGoldPassbookModal';

export const ActiveLoansFullView = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPassbookBorrower, setSelectedPassbookBorrower] = useState(null);

  const activeLoans = [
    {
      loanId: 'LN-2026-001',
      borrowerName: 'Sunita Devi',
      brn: 'BRN-VAR-1001',
      group: 'Mahila Shakti JLG #1',
      village: 'Shivpur Sector 1',
      productName: 'JLG Agri Micro Loan',
      sanctionedAmount: 50000,
      outstandingBalance: 38650,
      monthlyEmi: 2850,
      nextDueDate: '10-Sep-2026',
      dpd: 0,
      status: 'PERFORMING'
    },
    {
      loanId: 'LN-2026-002',
      borrowerName: 'Meena Kumari',
      brn: 'BRN-VAR-1002',
      group: 'Mahila Shakti JLG #1',
      village: 'Shivpur Sector 1',
      productName: 'JLG Dairy Enterprise',
      sanctionedAmount: 45000,
      outstandingBalance: 32400,
      monthlyEmi: 2550,
      nextDueDate: '10-Sep-2026',
      dpd: 0,
      status: 'PERFORMING'
    },
    {
      loanId: 'LN-2026-003',
      borrowerName: 'Radha Yadav',
      brn: 'BRN-VAR-1003',
      group: 'Ujala SHG Federation',
      village: 'Chandauli Agro Hub',
      productName: 'SHG Artisan Handloom',
      sanctionedAmount: 60000,
      outstandingBalance: 42100,
      monthlyEmi: 3400,
      nextDueDate: '15-Sep-2026',
      dpd: 0,
      status: 'PERFORMING'
    },
    {
      loanId: 'LN-2026-004',
      borrowerName: 'Kiran Maurya',
      brn: 'BRN-VAR-1004',
      group: 'Pragati SHG Group',
      village: 'Mirzapur Rural Belt',
      productName: 'Rural Micro-Retail',
      sanctionedAmount: 40000,
      outstandingBalance: 28900,
      monthlyEmi: 2300,
      nextDueDate: '12-Sep-2026',
      dpd: 0,
      status: 'PERFORMING'
    }
  ];

  const filteredLoans = activeLoans.filter(
    (l) =>
      l.borrowerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.loanId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.village.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
      
      {/* KPI Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
        <div className="glass-card" style={{ padding: '20px' }}>
          <span style={{ color: '#fde047', fontSize: '11.5px', fontWeight: '700', textTransform: 'uppercase' }}>
            Total Active Loans
          </span>
          <div style={{ fontSize: '28px', fontWeight: '900', color: '#fef08a', marginTop: '8px' }}>
            1,248 Accounts
          </div>
          <div style={{ fontSize: '11.5px', color: '#34d399', marginTop: '4px', fontWeight: '700' }}>
            99.2% Standard Performing
          </div>
        </div>

        <div className="glass-card" style={{ padding: '20px' }}>
          <span style={{ color: '#fde047', fontSize: '11.5px', fontWeight: '700', textTransform: 'uppercase' }}>
            Principal Outstanding
          </span>
          <div style={{ fontSize: '28px', fontWeight: '900', color: '#fef08a', marginTop: '8px' }}>
            {formatCurrency(42500000)}
          </div>
          <div style={{ fontSize: '11.5px', color: '#facc15', marginTop: '4px', fontWeight: '700' }}>
            AUM Book Balance
          </div>
        </div>

        <div className="glass-card" style={{ padding: '20px' }}>
          <span style={{ color: '#fde047', fontSize: '11.5px', fontWeight: '700', textTransform: 'uppercase' }}>
            Average Ticket Size
          </span>
          <div style={{ fontSize: '28px', fontWeight: '900', color: '#34d399', marginTop: '8px' }}>
            {formatCurrency(48500)}
          </div>
          <div style={{ fontSize: '11.5px', color: '#a1a1aa', marginTop: '4px' }}>
            12 to 24 Months Tenures
          </div>
        </div>

        <div className="glass-card" style={{ padding: '20px' }}>
          <span style={{ color: '#fde047', fontSize: '11.5px', fontWeight: '700', textTransform: 'uppercase' }}>
            Repayment Rate
          </span>
          <div style={{ fontSize: '28px', fontWeight: '900', color: '#34d399', marginTop: '8px' }}>
            98.55%
          </div>
          <div style={{ fontSize: '11.5px', color: '#34d399', marginTop: '4px', fontWeight: '700' }}>
            Zero NPA Overdues
          </div>
        </div>
      </div>

      {/* Main Table */}
      <div className="glass-card" style={{ padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px', flexWrap: 'wrap', gap: '12px' }}>
          <h3 style={{ fontSize: '17px', color: '#fef08a', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CreditCard size={18} color="#facc15" /> Active Loan Portfolio Master Directory
          </h3>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '280px' }}>
            <input
              type="text"
              placeholder="Search by name, loan ID, village..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input"
              style={{ padding: '8px 12px', fontSize: '13px' }}
            />
          </div>
        </div>

        <div style={{ overflowX: 'auto', border: '1px solid rgba(234, 179, 8, 0.3)', borderRadius: '12px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
            <thead>
              <tr>
                <th style={{ padding: '12px 14px', textAlign: 'left' }}>Loan ID</th>
                <th style={{ padding: '12px 14px', textAlign: 'left' }}>Borrower & JLG Group</th>
                <th style={{ padding: '12px 14px', textAlign: 'left' }}>Product & Village</th>
                <th style={{ padding: '12px 14px', textAlign: 'right' }}>Sanction</th>
                <th style={{ padding: '12px 14px', textAlign: 'right' }}>Outstanding</th>
                <th style={{ padding: '12px 14px', textAlign: 'right' }}>Monthly EMI</th>
                <th style={{ padding: '12px 14px', textAlign: 'center' }}>Next Due</th>
                <th style={{ padding: '12px 14px', textAlign: 'center' }}>Status</th>
                <th style={{ padding: '12px 14px', textAlign: 'center' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredLoans.map((loan) => (
                <tr key={loan.loanId} style={{ borderBottom: '1px solid rgba(234, 179, 8, 0.15)' }}>
                  <td style={{ padding: '12px 14px', fontWeight: '800', color: '#ca8a04' }}>
                    {loan.loanId}
                  </td>
                  <td style={{ padding: '12px 14px' }}>
                    <div style={{ fontWeight: '800', color: '#fef08a' }}>{loan.borrowerName}</div>
                    <div style={{ fontSize: '11px', color: '#a1a1aa' }}>{loan.brn} • {loan.group}</div>
                  </td>
                  <td style={{ padding: '12px 14px' }}>
                    <div style={{ color: '#fde047', fontWeight: '700' }}>{loan.productName}</div>
                    <div style={{ fontSize: '11px', color: '#ca8a04' }}>{loan.village}</div>
                  </td>
                  <td style={{ padding: '12px 14px', textAlign: 'right', fontWeight: '700', color: '#fef08a' }}>
                    {formatCurrency(loan.sanctionedAmount)}
                  </td>
                  <td style={{ padding: '12px 14px', textAlign: 'right', fontWeight: '900', color: '#34d399', fontSize: '13.5px' }}>
                    {formatCurrency(loan.outstandingBalance)}
                  </td>
                  <td style={{ padding: '12px 14px', textAlign: 'right', fontWeight: '800', color: '#facc15' }}>
                    {formatCurrency(loan.monthlyEmi)}
                  </td>
                  <td style={{ padding: '12px 14px', textAlign: 'center', color: '#fef08a', fontSize: '12px' }}>
                    {loan.nextDueDate}
                  </td>
                  <td style={{ padding: '12px 14px', textAlign: 'center' }}>
                    <span style={{
                      background: 'rgba(16, 185, 129, 0.2)',
                      color: '#34d399',
                      border: '1px solid #34d399',
                      padding: '3px 8px',
                      borderRadius: '6px',
                      fontSize: '11px',
                      fontWeight: '800',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <CheckCircle2 size={11} /> {loan.status}
                    </span>
                  </td>
                  <td style={{ padding: '12px 14px', textAlign: 'center' }}>
                    <button
                      onClick={() => setSelectedPassbookBorrower({
                        fullName: loan.borrowerName,
                        brn: loan.brn,
                        village: loan.village,
                        annualHouseholdIncome: 180000
                      })}
                      className="btn-secondary"
                      style={{
                        padding: '4px 10px',
                        fontSize: '11px',
                        borderRadius: '8px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <Crown size={12} color="#facc15" /> Passbook
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedPassbookBorrower && (
        <VirtualGoldPassbookModal
          borrower={selectedPassbookBorrower}
          onClose={() => setSelectedPassbookBorrower(null)}
        />
      )}

    </div>
  );
};

export default ActiveLoansFullView;
