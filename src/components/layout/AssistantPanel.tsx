import React from 'react';
import { Stack, Text, Box, Textarea, ScrollArea, Paper, Group, Badge } from '@mantine/core';

export const AssistantPanel: React.FC = () => {
  return (
    <Stack gap={0} h="100%">
      <Box p="md" style={{ borderBottom: '1px solid var(--cl-border)', flexShrink: 0 }}>
        <Group justify="space-between" align="flex-start" wrap="nowrap">
          <Box>
            <Text fw={600} size="sm" style={{ color: 'var(--cl-text)' }}>
              AI Assistant
            </Text>
            <Text size="xs" c="dimmed">
              Context-aware strategic guidance
            </Text>
          </Box>
          <Badge size="xs" color="teal" variant="dot">
            Ready
          </Badge>
        </Group>
      </Box>

      <ScrollArea style={{ flex: 1 }}>
        <Stack gap="sm" p="md">
          <Paper
            p="sm"
            radius="md"
            style={{ background: 'var(--cl-bg-sunken)', border: '1px solid var(--cl-border)' }}
          >
            <Text size="xs" c="dimmed" fw={600} tt="uppercase" mb={6} style={{ letterSpacing: '0.04em' }}>
              Assistant
            </Text>
            <Text size="sm" c="dimmed" lh={1.6}>
              Hello! I'm here to help with your strategy work. Ask me about market analysis,
              competitive insights, or deliverables for any phase.
            </Text>
          </Paper>
        </Stack>
      </ScrollArea>

      <Box p="md" style={{ borderTop: '1px solid var(--cl-border)', flexShrink: 0 }}>
        <Textarea
          placeholder="Ask the AI assistant…"
          minRows={2}
          maxRows={4}
          autosize
          radius="md"
          disabled
          styles={{ input: { background: 'var(--cl-bg-sunken)' } }}
        />
        <Text size="xs" c="dimmed" ta="center" mt={8}>
          AI assistant activates in a future phase
        </Text>
      </Box>
    </Stack>
  );
};
