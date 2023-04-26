'use client';

import { Accordion, Button, Group, Stack, Text } from '@mantine/core';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push('/portfolio');
  }, []);

  return <div></div>;
}
