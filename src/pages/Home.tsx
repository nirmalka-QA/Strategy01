import { Stack, Title, Text } from '@mantine/core';

export function HomePage() {
  return (
    <Stack gap="md" mt="xl">
      <Title order={1}>Welcome to Polaira — Strategy</Title>
      <Text c="dimmed">
        Your scaffold is ready. Start building features in{' '}
        <code>src/features/</code> and pages in <code>src/pages/</code>.
      </Text>
    </Stack>
  );
}
