import type {Metadata} from 'next';
import './globals.css';
import {Noto_Sans_KR} from 'next/font/google';
import {ReactNode} from 'react';

import ThemeSwitcher from '@/app/(guest)/_components/DarkModeButton';
import AuthProvider from '@/provider/AuthProvider';
import {ThemeProvider} from '@/provider/ThemeProvider';

export const metadata: Metadata = {
  title: 'Git Rank',
  description: '개발의 현재를 보다 GitHub로 보는 개발자 순위',
};

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="kr" suppressHydrationWarning>
      <body
        className={`${notoSansKR.className} bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text`}
      >
        <AuthProvider>
          <ThemeProvider>
            {children}
            <ThemeSwitcher />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
