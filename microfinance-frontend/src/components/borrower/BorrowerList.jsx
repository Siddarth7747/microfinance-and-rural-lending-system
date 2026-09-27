import React, { useState } from 'react';
import { DataTable } from '../common/DataTable';
import { formatCurrency } from '../../utils/formatters';
import { BookOpen, Crown } from 'lucide-react';
import { VirtualGoldPassbookModal } from './VirtualGoldPassbookModal';

export const BorrowerList = ({ borrowers, onSelect, isLoading }) => {
  const [selectedPassbookBorrower, setSelectedPassbookBorrower] = useState(null);

  const columns = [
    { header: 'BRN', accessor: 'brn' },
    { header: 'Full Name', accessor: 'fullName' },
    { header: 'Mobile', accessor: 'mobileNumber' },
    { header: 'Village', accessor: 'village' },
    { header: 'Income', render: (row) => formatCurrency(row.annualHouseholdIncome) },
    { header: 'KYC Status', render: (row) => {
      const isVerified = row.kycStatus === 'FULLY_VERIFIED' || row.kycStatus === 'AADHAAR_VERIFIED';
      return (
        <span className={`badge ${isVerified ? 'badge-emerald' : 'badge-amber'}`}>
          {row.kycStatus || 'PENDING'}
        </span>
      );
    }},
    { header: 'Passbook', render: (row) => (
      <button
        onClick={(e) => {
          e.stopPropagation();
          setSelectedPassbookBorrower(row);
        }}
        className="btn-secondary"
        style={{
          padding: '4px 10px',
          fontSize: '11px',
          borderRadius: '8px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '5px'
        }}
      >
        <Crown size={12} color="#facc15" /> Passbook
      </button>
    )}
  ];

  if (isLoading) {
    return <div style={{ padding: '32px', textAlign: 'center', color: '#facc15' }}>Loading borrowers...</div>;
  }

  return (
    <>
      <DataTable 
        columns={columns} 
        data={borrowers || []} 
        onRowClick={(row) => {
          if (onSelect) onSelect(row);
          else setSelectedPassbookBorrower(row);
        }} 
      />

      {selectedPassbookBorrower && (
        <VirtualGoldPassbookModal
          borrower={selectedPassbookBorrower}
          onClose={() => setSelectedPassbookBorrower(null)}
        />
      )}
    </>
  );
};

export default BorrowerList;
