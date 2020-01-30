import React from 'react';

export const Margin = () => <div style={{ margin: '0 1rem' }} />;
export const Center = ({ children }: { children: React.ReactNode }) => (
  <div style={{ textAlign: 'center' }}>{children}</div>
);
