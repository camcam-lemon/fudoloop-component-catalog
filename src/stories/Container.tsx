import React from 'react';

const styles: { [key: string]: React.CSSProperties } = {
  margin: {
    margin: '0 1rem',
  },
  vertical: {
    margin: '0.5rem 0',
  },
  center: {
    textAlign: 'center',
  },
  flexBox: {
    display: 'flex',
    flexDirection: 'column',
  },
};

export const Margin = () => <div style={styles.margin} />;
export const Vertical = () => <div style={styles.vertical} />;
export const Center = ({ children }: { children: React.ReactNode }) => (
  <div style={styles.center}>{children}</div>
);
export const Column = ({
  center,
  styles: customStyles,
  children,
}: {
  center?: boolean;
  styles?: React.CSSProperties;
  children: React.ReactNode;
}) => (
  <div
    style={{
      ...styles.flexBox,
      justifyContent: center ? 'center' : 'initial',
      alignItems: center ? 'center' : 'initial',
      ...customStyles,
    }}
  >
    {children}
  </div>
);
