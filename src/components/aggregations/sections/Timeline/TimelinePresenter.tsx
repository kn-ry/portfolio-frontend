'use client';

import {
  Avatar,
  Box,
  Header,
  Stack,
  Text,
  Timeline,
  Title,
} from '@mantine/core';
import { FC } from 'react';
import { TimelineElement } from './TimelineElement';

type TimelinePresenterProps = {};

export const TimelinePresenter: FC<TimelinePresenterProps> = (props) => {
  const {} = props;
  const loadmap = [
    {
      title: 'TITLE1',
      subtitle: '期間',
      description: '説明が入ります',
      image: 'https://avatars.githubusercontent.com/u/36186912?v=4',
    },
    {
      title: 'TITLE2',
      subtitle: '期間',
      description: '説明が入ります',
      image: 'https://avatars.githubusercontent.com/u/36186912?v=4',
    },
    {
      title: 'TITLE3',
      subtitle: '期間',
      description: '説明が入ります',
      image: 'https://avatars.githubusercontent.com/u/36186912?v=4',
    },
  ];
  return (
    <Timeline m={128}>
      {loadmap.map((item) => (
        <>
          <Timeline.Item
            key={item.title}
            title={
              <Stack
                className="translate-x-20"
                align="flex-start"
                spacing={0}
                ml={32}
              >
                <Title order={2}>{item.title}</Title>
                <Text size="md">{item.subtitle}</Text>
              </Stack>
            }
            bullet={<Avatar size={64} radius="xl" />}
          >
            <Box ml={32} mt="sm">
              <Text size="sm">{item.description}</Text>
            </Box>
          </Timeline.Item>
        </>
      ))}
      {/* {/* <Timeline.Item
        title={
          <Stack align="flex-start" spacing={0} ml={32}>
            <Title order={2}>'TITLE1'</Title>
            <Text size="md">'期間'</Text>
          </Stack>
        }
        bullet={<Avatar size={64} radius="xl" src={image} />}
      >
        <Box ml={32} my="sm">
          <Text size="sm">説明が入りませす</Text>
        </Box>
      </Timeline.Item> */}
      <Timeline.Item
        title={
          <Stack align="flex-start" spacing={0} ml={32}>
            <Title order={2}>{'title'}</Title>
            <Text size="md">{'subtitle'}</Text>
          </Stack>
        }
        bullet={<Avatar size={64} radius="xl" />}
      >
        <Box ml={32} my="sm">
          <Text size="sm">{'ss'}</Text>
        </Box>
      </Timeline.Item>
    </Timeline>
  );
};
