import {ReactNode} from 'react';

import Home from '@/app/(guest)/_components/Home';

export default function SignupLayout({children}: {children: ReactNode}) {
  return (
    <>
      <Home />
      {children}
    </>
  );
}
