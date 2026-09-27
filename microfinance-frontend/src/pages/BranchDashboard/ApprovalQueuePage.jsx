import React from 'react';
import { BranchManagerApprovalQueue } from '../../components/loan-application/BranchManagerApprovalQueue';

export const ApprovalQueuePage = () => (
  <div>
    <BranchManagerApprovalQueue onApprove={() => alert('Approved!')} />
  </div>
);

export default ApprovalQueuePage;
