import React from 'react';

export const Sidebar: React.FC = () => {
  return (
    <nav>
      <h2
        style={{
          fontSize: '14px',
          fontWeight: 700,
          color: 'var(--cl-text-muted)',
          marginBottom: '16px',
          margin: '0 0 16px 0',
        }}
      >
        PROJECT NAVIGATION
      </h2>
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
      >
        <li
          style={{
            padding: '12px',
            background: 'var(--cl-primary)',
            color: 'white',
            borderRadius: 'var(--cl-radius-lg)',
            cursor: 'pointer',
            fontWeight: 500,
          }}
        >
          Discovery Phase
        </li>
        <li
          style={{
            padding: '12px',
            color: 'var(--cl-text)',
            borderRadius: 'var(--cl-radius-lg)',
            cursor: 'pointer',
          }}
        >
          Phase 1: Requirements
        </li>
        <li
          style={{
            padding: '12px',
            color: 'var(--cl-text)',
            borderRadius: 'var(--cl-radius-lg)',
            cursor: 'pointer',
          }}
        >
          Phase 2: Generation
        </li>
        <li
          style={{
            padding: '12px',
            color: 'var(--cl-text)',
            borderRadius: 'var(--cl-radius-lg)',
            cursor: 'pointer',
          }}
        >
          Project Settings
        </li>
      </ul>
    </nav>
  );
};
