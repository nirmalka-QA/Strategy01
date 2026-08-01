import React, { useState } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { updatePhaseStatus } from '../../features/phase';
import type { PhaseStatus } from '../../features/phase';
import { PhaseStatusModal } from './PhaseStatusModal';

const NEXT_STATUS: Record<PhaseStatus, PhaseStatus | null> = {
  'Not Started': 'In Progress',
  'In Progress': 'Complete',
  Complete: null,
};

export const PhaseRail: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id, name, status } = useAppSelector((s) => s.phase.currentPhase);
  const [modalOpen, setModalOpen] = useState(false);

  const targetStatus = NEXT_STATUS[status];

  const handleConfirm = () => {
    if (targetStatus) {
      dispatch(updatePhaseStatus(targetStatus));
    }
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
            {name} — {status}
          </span>
        </div>
        <div>
          {targetStatus && (
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
              {status === 'Not Started' ? 'Start Phase' : 'Complete Phase'}
            </button>
          )}
        </div>
      </header>

      {targetStatus && (
        <PhaseStatusModal
          opened={modalOpen}
          onClose={() => setModalOpen(false)}
          onConfirm={handleConfirm}
          phaseId={id}
          phaseName={name}
          currentStatus={status}
          targetStatus={targetStatus}
        />
      )}
    </>
  );
};
