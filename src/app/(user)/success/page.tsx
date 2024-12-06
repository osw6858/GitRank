'use client';

import {signOut} from 'next-auth/react';

export default function TestSuccess() {
  return (
    <>
      <button onClick={() => signOut({redirectTo: '/'})}>Sign out</button>
    </>
  );
}
