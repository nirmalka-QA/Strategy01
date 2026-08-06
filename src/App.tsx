import { useAppSelector } from './hooks/useAppSelector';
import { StrategyShell } from './components/layout';
import { DiscoveryPage } from './pages/DiscoveryPage';

function PlaceholderPage({ title }: { title: string }) {
  return (
    <div>
      <h2
        style={{
          margin: '0 0 8px 0',
          fontSize: '22px',
          fontWeight: 700,
          color: 'var(--cl-text)',
        }}
      >
        {title}
      </h2>
      <p style={{ margin: 0, color: 'var(--cl-text-muted)', fontSize: '14px' }}>
        This section will be available in a future phase.
      </p>
    </div>
  );
}

function PageRouter() {
  const activePage = useAppSelector((s) => s.navigation.activePage);

  switch (activePage) {
    case 'discovery':
      return <DiscoveryPage />;
    case 'requirements':
      return <PlaceholderPage title="Phase 1 · Requirements" />;
    case 'generation':
      return <PlaceholderPage title="Phase 2 · Generation" />;
    case 'evaluation':
      return <PlaceholderPage title="Phase 3 · Evaluation" />;
    case 'implementation':
      return <PlaceholderPage title="Phase 4 · Implementation" />;
    case 'settings':
      return <PlaceholderPage title="Project Settings" />;
    default:
      return <DiscoveryPage />;
  }
}

export default function App() {
  return (
    <StrategyShell>
      <PageRouter />
    </StrategyShell>
  );
}
