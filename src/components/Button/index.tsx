import React from 'react';

type Props = {} & JSX.IntrinsicElements['button'];

function Button({ children, ...props }: Props) {
  return (
    <button style={{ color: 'red', backgroundColor: 'blue' }} {...props}>
      {children}
    </button>
  );
}

export default Button;
