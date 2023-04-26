'use client';
import './globals.css';
import { AppShell, Box, Button, Group, Header, Text } from '@mantine/core';
import RootStyleRegistry from './emotion';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head />
      <body>
        <RootStyleRegistry>
          <AppShell padding={0}>{children}</AppShell>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
