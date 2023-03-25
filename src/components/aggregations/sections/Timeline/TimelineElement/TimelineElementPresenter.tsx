'use client';

import { Avatar, Box, Stack, Text, Timeline, Title } from '@mantine/core';
import { FC, ReactNode } from 'react';

type TimelineElementPresenterProps = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
};

export const TimelineElementPresenter: FC<TimelineElementPresenterProps> = (
  props,
) => {
  const { title, subtitle, description, image } = props;
  return (
    <Timeline.Item
      title={
        <Stack align="flex-start" spacing={0} ml={32}>
          <Title order={2}>{title}</Title>
          <Text size="md">{subtitle}</Text>
        </Stack>
      }
      bullet={<Avatar size={64} radius="xl" src={image} />}
    >
      <Box ml={32} my="sm">
        <Text size="sm">{description}</Text>
      </Box>
    </Timeline.Item>
  );
};
