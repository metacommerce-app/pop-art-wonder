import React from 'react';

type Props = {
  condition: boolean;
  children?: React.ReactNode | React.ReactNode[];
  falsy?: React.ReactNode | React.ReactNode[];
};

const DisplayIf: React.FC<Props> = ({ condition, children, falsy }) => {
  return condition ? <>{children}</> : <>{falsy}</>;
};

export default DisplayIf;
