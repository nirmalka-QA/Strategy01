import { Text, Divider } from '@mantine/core';
import { PhasePageHeader } from '../components/phase';

export function DiscoveryPage() {
  return (
    <div>
      <PhasePageHeader />
      <Divider mb="xl" />
      <Text c="dimmed">Discovery phase content goes here...</Text>
    </div>
  );
}
