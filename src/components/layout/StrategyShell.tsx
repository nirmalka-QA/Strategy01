import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { PhaseRail } from './PhaseRail';
import './strategy-theme.css';

interface StrategyShellProps {
  children: React.ReactNode;
}

export const StrategyShell: React.FC<StrategyShellProps> = ({ children }) => {
  const [isAssistantOpen] = useState(true);

  return (
    <div className="strategy-shell">
      <PhaseRail />
      <div className="shell-main">
        <aside className="sidebar-slot">
          <Sidebar />
        </aside>
        <main className="work-area">{children}</main>
        {isAssistantOpen && (
          <aside className="assistant-slot">
            <div style={{ padding: '24px' }}>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: 600 }}>
                AI Assistant
              </h3>
              <p style={{ margin: 0, color: 'var(--cl-text-muted)' }}>
                Context-aware chat goes here...
              </p>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
};
