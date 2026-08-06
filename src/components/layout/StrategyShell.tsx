import React from 'react';
import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { TopBar } from './TopBar';
import { Sidebar } from './Sidebar';
import { AssistantPanel } from './AssistantPanel';
import './strategy-theme.css';

interface StrategyShellProps {
  children: React.ReactNode;
}

export const StrategyShell: React.FC<StrategyShellProps> = ({ children }) => {
  const [mobileNavOpened, { toggle: toggleMobileNav }] = useDisclosure(false);

  return (
    <AppShell
      header={{ height: 64 }}
      navbar={{
        width: 260,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileNavOpened },
      }}
      aside={{
        width: 360,
        breakpoint: 'lg',
        collapsed: { mobile: true },
      }}
      padding={0}
    >
      <AppShell.Header
        style={{
          background: 'var(--cl-bg-elev)',
          borderBottom: '1px solid var(--cl-border)',
        }}
      >
        <TopBar mobileNavOpened={mobileNavOpened} onMobileNavToggle={toggleMobileNav} />
      </AppShell.Header>

      <AppShell.Navbar
        style={{
          background: 'var(--cl-bg-elev)',
          borderRight: '1px solid var(--cl-border)',
        }}
      >
        <Sidebar />
      </AppShell.Navbar>

      <AppShell.Main style={{ background: 'var(--cl-bg)' }}>
        <div className="work-area">{children}</div>
      </AppShell.Main>

      <AppShell.Aside
        style={{
          background: 'var(--cl-bg-elev)',
          borderLeft: '1px solid var(--cl-border)',
        }}
      >
        <AssistantPanel />
      </AppShell.Aside>
    </AppShell>
  );
};
