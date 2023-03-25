'use client';

import { AppShell, Header, Text } from '@mantine/core';
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
          <AppShell
            header={
              <Header height={64} sx={{ opacity: 0.8 }} className="py-3">
                <div className="flex items-center justify-between px-6">
                  <Text size="lg">Nex-Ray</Text>
                </div>
              </Header>
            }
          >
            {children}
          </AppShell>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
