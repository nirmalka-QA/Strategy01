import React from 'react';
import { Group, Text, Badge, Box, Burger, Divider } from '@mantine/core';
import { useAppSelector } from '../../hooks/useAppSelector';

interface TopBarProps {
  mobileNavOpened: boolean;
  onMobileNavToggle: () => void;
}

const STATUS_COLOR: Record<string, string> = {
  'Not Started': 'gray',
  'In Progress': 'blue',
  Complete: 'green',
};

export const TopBar: React.FC<TopBarProps> = ({ mobileNavOpened, onMobileNavToggle }) => {
  const { name: phaseName, status } = useAppSelector((s) => s.phase.currentPhase);
  const role = useAppSelector((s) => s.auth.role);

  return (
    <Group h="100%" px="lg" justify="space-between" wrap="nowrap">
      <Group gap="sm" wrap="nowrap">
        <Burger
          opened={mobileNavOpened}
          onClick={onMobileNavToggle}
          hiddenFrom="sm"
          size="sm"
        />

        <Box>
          <Text size="xs" c="dimmed" lh={1} mb={2} style={{ letterSpacing: '0.02em' }}>
            Polaira
          </Text>
          <Text fw={700} size="sm" lh={1} style={{ color: 'var(--cl-text)' }}>
            02-Strategy
          </Text>
        </Box>

        <Divider orientation="vertical" style={{ height: 28, alignSelf: 'center' }} />

        <Text size="sm" c="dimmed" fw={500} visibleFrom="md">
          Global Expansion Strategy
        </Text>

        <Text c="dimmed" size="sm" visibleFrom="md">/</Text>

        <Group gap="xs" wrap="nowrap">
          <Text size="sm" fw={500} style={{ color: 'var(--cl-text)' }}>
            {phaseName}
          </Text>
          <Badge color={STATUS_COLOR[status] ?? 'gray'} size="sm" variant="light">
            {status}
          </Badge>
        </Group>
      </Group>

      <Group gap="sm" wrap="nowrap">
        <Badge color="violet" variant="outline" size="sm" tt="capitalize">
          {role}
        </Badge>
      </Group>
    </Group>
  );
};
