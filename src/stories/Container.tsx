import React from 'react';

export const Margin = () => <div style={{ margin: '0 1rem' }} />;
export const Vertical = () => <div style={{ margin: '0.5rem 0' }} />;
export const Center = ({ children }: { children: React.ReactNode }) => (
  <div style={{ textAlign: 'center' }}>{children}</div>
);
export const Column = ({ center, children }: { center?: boolean; children: React.ReactNode }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: center ? 'center' : 'initial',
      alignItems: center ? 'center' : 'initial',
    }}
  >
    {children}
  </div>
);
