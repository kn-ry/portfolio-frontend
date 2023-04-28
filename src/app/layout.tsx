'use client';
import './globals.css';
import { AppShell } from '@mantine/core';
import RootStyleRegistry from './emotion';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <title>こーのフォリオ</title>
      </head>
      <body>
        <RootStyleRegistry>
          <AppShell padding={0}>{children}</AppShell>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
