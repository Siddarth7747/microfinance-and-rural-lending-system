import React from 'react';
import { Inbox } from 'lucide-react';

export const DataTable = ({ columns, data, onRowClick }) => {
  return (
    <div style={{
      overflowX: 'auto',
      borderRadius: '14px',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      background: 'rgba(9, 14, 26, 0.6)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)'
    }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13.5px' }}>
        <thead>
          <tr style={{
            background: 'rgba(255, 255, 255, 0.03)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            {columns.map((col, idx) => (
              <th 
                key={idx} 
                style={{
                  padding: '13px 18px',
                  color: '#94a3b8',
                  fontWeight: '600',
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em'
                }}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((row, rIdx) => (
              <tr
                key={rIdx}
                onClick={() => onRowClick && onRowClick(row)}
                style={{
                  borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                  cursor: onRowClick ? 'pointer' : 'default',
                  transition: 'background 0.15s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(99, 102, 241, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                {columns.map((col, cIdx) => (
                  <td key={cIdx} style={{ padding: '14px 18px', color: '#f8fafc' }}>
                    {col.render ? col.render(row) : (row[col.accessor] !== null && row[col.accessor] !== undefined ? String(row[col.accessor]) : '—')}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} style={{ padding: '48px', textAlign: 'center', color: '#64748b' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <Inbox size={32} strokeWidth={1.5} color="#475569" />
                  <span style={{ fontSize: '14px', fontWeight: '500' }}>No records found</span>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
