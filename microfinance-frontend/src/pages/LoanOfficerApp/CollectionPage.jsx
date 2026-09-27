import React from 'react';
import { CollectionEntryForm } from '../../components/collection/CollectionEntryForm';
import { CashReconciliationPanel } from '../../components/collection/CashReconciliationPanel';
import { ReceiptPhotoCapture } from '../../components/collection/ReceiptPhotoCapture';

export const CollectionPage = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <div className="glass-card" style={{ padding: '20px' }}>
      <h2 style={{ color: '#f8fafc' }}>Field EMI Collection & Reconciliation Hub</h2>
    </div>

    <CollectionEntryForm />

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
      <CashReconciliationPanel />
      <ReceiptPhotoCapture />
    </div>
  </div>
);

export default CollectionPage;
