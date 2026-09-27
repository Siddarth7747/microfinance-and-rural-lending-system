import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { FieldOfficerLayout } from '../layouts/FieldOfficerLayout';
import { AdminLayout } from '../layouts/AdminLayout';
import { RoleGuard } from './RoleGuard';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Microfinance from '../pages/Microfinance';

import LoanStatusPage from '../pages/BorrowerPortal/LoanStatusPage';
import RepaymentSchedulePage from '../pages/BorrowerPortal/RepaymentSchedulePage';
import PaymentHistoryPage from '../pages/BorrowerPortal/PaymentHistoryPage';

import OnboardingPage from '../pages/LoanOfficerApp/OnboardingPage';
import CollectionPage from '../pages/LoanOfficerApp/CollectionPage';
import GroupMeetingPage from '../pages/LoanOfficerApp/GroupMeetingPage';

import ParReportPage from '../pages/BranchDashboard/ParReportPage';
import ApprovalQueuePage from '../pages/BranchDashboard/ApprovalQueuePage';
import OfficerPerformancePage from '../pages/BranchDashboard/OfficerPerformancePage';

import LoanReviewPage from '../pages/CreditCommittee/LoanReviewPage';

import UsersPage from '../pages/AdminConsole/UsersPage';
import ProductsPage from '../pages/AdminConsole/ProductsPage';
import IntegrationsPage from '../pages/AdminConsole/IntegrationsPage';

export const AppRouter = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* Main Application Routes */}
        <Route element={<RoleGuard />}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/microfinance/*" element={<Microfinance />} />

            {/* Borrower Portal */}
            <Route path="/borrower/status" element={<LoanStatusPage />} />
            <Route path="/borrower/schedule" element={<RepaymentSchedulePage />} />
            <Route path="/borrower/history" element={<PaymentHistoryPage />} />

            {/* Branch Dashboard */}
            <Route path="/branch/par" element={<ParReportPage />} />
            <Route path="/branch/approvals" element={<ApprovalQueuePage />} />
            <Route path="/branch/performance" element={<OfficerPerformancePage />} />

            {/* Credit Committee */}
            <Route path="/credit/review" element={<LoanReviewPage />} />
          </Route>

          {/* Field Officer Mobile-First App */}
          <Route element={<FieldOfficerLayout />}>
            <Route path="/officer/onboarding" element={<OnboardingPage />} />
            <Route path="/officer/collection" element={<CollectionPage />} />
            <Route path="/officer/meeting" element={<GroupMeetingPage />} />
          </Route>

          {/* Admin Console */}
          <Route element={<RoleGuard allowedRoles={['ADMIN']} />}>
            <Route element={<AdminLayout />}>
              <Route path="/admin/users" element={<UsersPage />} />
              <Route path="/admin/products" element={<ProductsPage />} />
              <Route path="/admin/integrations" element={<IntegrationsPage />} />
            </Route>
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
