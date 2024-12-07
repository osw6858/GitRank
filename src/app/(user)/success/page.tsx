'use client';

import {signOut} from 'next-auth/react';

import ThemeSwitcher from '@/app/(guest)/_components/DarkModeButton';

export default function TestSuccess() {
  return (
    <>
      <button onClick={() => signOut({redirectTo: '/'})}>Sign out</button>
      <ThemeSwitcher />
    </>
  );
}
