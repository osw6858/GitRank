import type {Metadata} from 'next';
import './globals.css';
import {ReactNode} from 'react';

import {ThemeProvider} from '@/provider/ThemeProvider';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
