import React, { useState } from 'react';
import { PhaseStatusModal } from './PhaseStatusModal';

export const PhaseRail: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleConfirm = () => {
    // Phase State API call would be dispatched here
    setModalOpen(false);
  };

  return (
    <>
      <header
        style={{
          height: '72px',
          background: 'var(--cl-bg-elev)',
          borderBottom: '1px solid var(--cl-border)',
          display: 'flex',
          alignItems: 'center',
          padding: '0 32px',
          justifyContent: 'space-between',
          flexShrink: 0,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <h1 style={{ margin: 0, fontSize: '20px', fontWeight: 600 }}>Global Expansion Strategy</h1>
          <span
            style={{
              padding: '4px 12px',
              background: 'var(--cl-bg-sunken)',
              borderRadius: 'var(--cl-radius-lg)',
              fontSize: '14px',
            }}
          >
            Current: Discovery
          </span>
        </div>
        <div>
          <button
            style={{
              background: 'var(--cl-primary)',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: 'var(--cl-radius-lg)',
              cursor: 'pointer',
              fontWeight: 500,
              fontSize: '14px',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = 'var(--cl-primary-hover)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = 'var(--cl-primary)';
            }}
            onClick={() => setModalOpen(true)}
          >
            Complete Phase
          </button>
        </div>
      </header>

      <PhaseStatusModal
        opened={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirm}
        phaseId="PHASE-001"
        phaseName="Discovery Phase"
        currentStatus="In Progress"
        targetStatus="Complete"
      />
    </>
  );
};
