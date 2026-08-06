import React from 'react';
import { Stack, Text, NavLink, Box, Divider, Group, Badge } from '@mantine/core';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { navigateTo, type NavigationPage } from '../../features/navigation';

type PhaseNavItem = {
  page: NavigationPage;
  label: string;
  statusColor: string;
  statusLabel: string;
};

const PHASE_ITEMS: PhaseNavItem[] = [
  { page: 'discovery', label: 'Discovery Phase', statusColor: 'blue', statusLabel: 'Active' },
  { page: 'requirements', label: 'Phase 1 · Requirements', statusColor: 'gray', statusLabel: 'Pending' },
  { page: 'generation', label: 'Phase 2 · Generation', statusColor: 'gray', statusLabel: 'Pending' },
  { page: 'evaluation', label: 'Phase 3 · Evaluation', statusColor: 'gray', statusLabel: 'Pending' },
  { page: 'implementation', label: 'Phase 4 · Implementation', statusColor: 'gray', statusLabel: 'Pending' },
];

export const Sidebar: React.FC = () => {
  const dispatch = useAppDispatch();
  const activePage = useAppSelector((s) => s.navigation.activePage);

  return (
    <Stack gap={0} h="100%" style={{ overflowY: 'auto' }}>
      <Box px="md" py="sm" style={{ flexShrink: 0 }}>
        <Text
          size="xs"
          fw={700}
          c="dimmed"
          tt="uppercase"
          style={{ letterSpacing: '0.06em' }}
        >
          Project Navigation
        </Text>
      </Box>

      <Stack gap={2} px="sm" style={{ flex: 1 }}>
        <Text size="xs" fw={600} c="dimmed" px={8} mb={4}>
          Phases
        </Text>

        {PHASE_ITEMS.map((item) => (
          <NavLink
            key={item.page}
            label={
              <Group justify="space-between" wrap="nowrap" gap="xs">
                <Text size="sm" style={{ flex: 1, minWidth: 0 }} truncate>
                  {item.label}
                </Text>
                <Badge size="xs" color={item.statusColor} variant="dot">
                  {item.statusLabel}
                </Badge>
              </Group>
            }
            active={activePage === item.page}
            color="violet"
            onClick={() => dispatch(navigateTo(item.page))}
            style={{ borderRadius: 'var(--cl-radius-lg)' }}
          />
        ))}
      </Stack>

      <Divider mx="sm" my="xs" />

      <Stack gap={2} px="sm" pb="sm" style={{ flexShrink: 0 }}>
        <NavLink
          label="Project Settings"
          active={activePage === 'settings'}
          color="violet"
          onClick={() => dispatch(navigateTo('settings'))}
          style={{ borderRadius: 'var(--cl-radius-lg)' }}
        />
      </Stack>
    </Stack>
  );
};
