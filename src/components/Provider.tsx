import React from 'react';
import { AuthProvider } from '#contexts/auth';

const Provider = ({ children }: React.HTMLAttributes<HTMLElement>): React.ReactElement => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default Provider;
