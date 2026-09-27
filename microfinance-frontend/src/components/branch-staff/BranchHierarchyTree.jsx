import React from 'react';
import { GitFork } from 'lucide-react';

export const BranchHierarchyTree = () => (
  <div className="glass-card" style={{ padding: '20px' }}>
    <h4 style={{ color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '8px' }}>
      <GitFork size={18} color="#6366f1" /> Organizational Branch Hierarchy (Head Office → Region → Branch → Centre)
    </h4>
  </div>
);
