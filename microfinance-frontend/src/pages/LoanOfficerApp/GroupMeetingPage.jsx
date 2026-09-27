import React from 'react';
import { GroupMeetingCalendar } from '../../components/loan-group/GroupMeetingCalendar';
import { GroupCohesionScoreCard } from '../../components/loan-group/GroupCohesionScoreCard';
import { MemberAdditionRemovalForm } from '../../components/loan-group/MemberAdditionRemovalForm';

export const GroupMeetingPage = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <div className="glass-card" style={{ padding: '20px' }}>
      <h2 style={{ color: '#f8fafc' }}>Centre Weekly Group Meeting Operations</h2>
    </div>

    <GroupMeetingCalendar />

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
      <GroupCohesionScoreCard />
      <MemberAdditionRemovalForm />
    </div>
  </div>
);

export default GroupMeetingPage;
