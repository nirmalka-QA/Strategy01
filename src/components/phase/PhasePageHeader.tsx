import React, { useState } from 'react';
import { Group, Text, Badge, Button, Stack } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { updatePhaseStatus, useUpdatePhaseStatusMutation } from '../../features/phase';
import type { PhaseStatus } from '../../features/phase';
import { usePhasePermissions } from '../../hooks/usePhasePermissions';
import { PhaseStatusModal } from '../layout/PhaseStatusModal';

const NEXT_STATUS: Record<PhaseStatus, PhaseStatus | null> = {
  'Not Started': 'In Progress',
  'In Progress': 'Complete',
  Complete: null,
};

const STATUS_COLOR: Record<PhaseStatus, string> = {
  'Not Started': 'gray',
  'In Progress': 'blue',
  Complete: 'green',
};

export const PhasePageHeader: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id, name, status } = useAppSelector((s) => s.phase.currentPhase);
  const { canChangePhaseStatus } = usePhasePermissions();
  const [modalOpen, setModalOpen] = useState(false);
  const [updateStatus, { isLoading }] = useUpdatePhaseStatusMutation();

  const targetStatus = NEXT_STATUS[status];

  const handleConfirm = async () => {
    if (!targetStatus || !canChangePhaseStatus) {
      setModalOpen(false);
      return;
    }

    try {
      await updateStatus({ phaseId: id, status: targetStatus }).unwrap();
      dispatch(updatePhaseStatus(targetStatus));
      notifications.show({
        title: 'Phase status updated',
        message: `${name} moved to "${targetStatus}"`,
        color: 'green',
      });
    } catch (err) {
      const error = err as { status?: number };
      if (error.status === 403) {
        notifications.show({
          title: 'Permission denied',
          message: 'You do not have permission to change this phase status.',
          color: 'red',
        });
      } else if (error.status === 422) {
        notifications.show({
          title: 'Invalid transition',
          message: 'This status transition is not permitted by the phase workflow rules.',
          color: 'orange',
        });
      } else {
        notifications.show({
          title: 'Update failed',
          message: 'An unexpected error occurred. Please try again.',
          color: 'red',
        });
      }
    }

    setModalOpen(false);
  };

  return (
    <>
      <Stack gap={4} mb="xl">
        <Group justify="space-between" align="flex-start">
          <div>
            <Text size="xs" c="dimmed" ff="monospace" mb={4}>
              {id}
            </Text>
            <Text size="xl" fw={700}>
              {name}
            </Text>
          </div>

          <Group gap="sm" align="center">
            <Badge color={STATUS_COLOR[status]} variant="light" size="lg">
              {status}
            </Badge>

            {canChangePhaseStatus && targetStatus ? (
              <Button
                color="violet"
                size="sm"
                onClick={() => setModalOpen(true)}
                loading={isLoading}
              >
                {status === 'Not Started' ? 'Start Phase' : 'Complete Phase'}
              </Button>
            ) : null}
          </Group>
        </Group>
      </Stack>

      {canChangePhaseStatus && targetStatus && (
        <PhaseStatusModal
          opened={modalOpen}
          onClose={() => setModalOpen(false)}
          onConfirm={handleConfirm}
          isLoading={isLoading}
          phaseId={id}
          phaseName={name}
          currentStatus={status}
          targetStatus={targetStatus}
        />
      )}
    </>
  );
};
