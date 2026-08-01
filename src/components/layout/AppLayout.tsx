import type { ReactNode } from 'react';
import { AppShell, Container } from '@mantine/core';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Container h="100%" display="flex" style={{ alignItems: 'center' }}>
          <span style={{ fontWeight: 700, fontSize: '1.125rem' }}>Polaira — Strategy</span>
        </Container>
      </AppShell.Header>
      <AppShell.Main>
        <Container>{children}</Container>
      </AppShell.Main>
    </AppShell>
  );
}
