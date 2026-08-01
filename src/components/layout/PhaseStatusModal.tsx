import React, { useState } from 'react';
import { Modal, Text, Badge, Checkbox, Button, Group, Stack, Alert } from '@mantine/core';

interface PhaseStatusModalProps {
  opened: boolean;
  onClose: () => void;
  onConfirm: () => void;
  phaseId: string;
  phaseName: string;
  currentStatus: string;
  targetStatus: string;
}

export const PhaseStatusModal: React.FC<PhaseStatusModalProps> = ({
  opened,
  onClose,
  onConfirm,
  phaseId,
  phaseName,
  currentStatus,
  targetStatus,
}) => {
  const [acknowledged, setAcknowledged] = useState(false);

  const handleClose = () => {
    setAcknowledged(false);
    onClose();
  };

  const handleConfirm = () => {
    setAcknowledged(false);
    onConfirm();
  };

  return (
    <Modal
      opened={opened}
      onClose={handleClose}
      title={
        <Text fw={600} size="lg">
          Confirm Phase Status Change
        </Text>
      }
      centered
      size="md"
    >
      <Stack gap="md">
        <Group gap="xl">
          <div>
            <Text size="xs" c="dimmed" tt="uppercase" fw={600} mb={2}>
              Phase ID
            </Text>
            <Text ff="monospace" fw={600} size="sm">
              {phaseId}
            </Text>
          </div>
          <div>
            <Text size="xs" c="dimmed" tt="uppercase" fw={600} mb={2}>
              Phase
            </Text>
            <Text fw={500} size="sm">
              {phaseName}
            </Text>
          </div>
        </Group>

        <div>
          <Text size="xs" c="dimmed" tt="uppercase" fw={600} mb={8}>
            Status Transition
          </Text>
          <Group gap="xs" align="center">
            <Badge color="blue" variant="light" size="md">
              {currentStatus}
            </Badge>
            <Text size="sm" c="dimmed">
              →
            </Text>
            <Badge color="violet" variant="light" size="md">
              {targetStatus}
            </Badge>
          </Group>
        </div>

        <Alert color="yellow" title="Warning" variant="light">
          This action will update the phase status and may affect downstream workflows. Once
          applied, this change will be recorded in the Phase State.
        </Alert>

        <Checkbox
          label="I understand the impact of this status change and want to proceed"
          checked={acknowledged}
          onChange={(e) => setAcknowledged(e.currentTarget.checked)}
        />

        <Group justify="flex-end" gap="sm" mt={4}>
          <Button variant="default" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="violet" disabled={!acknowledged} onClick={handleConfirm}>
            Confirm Change
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
};
