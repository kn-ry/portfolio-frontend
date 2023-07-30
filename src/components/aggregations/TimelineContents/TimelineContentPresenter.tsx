import { Text } from '@/components/ui/Text/Text';
import { Group, Stack, Title } from '@mantine/core';
import { FC } from 'react';

type TimelineContentPresenterProps = {
  title: string;
  term: JSX.Element | string;
  subtitle?: string;
  description?: JSX.Element | string;
};

export const TimelineContentPresenter: FC<TimelineContentPresenterProps> = ({
  title,
  term,
  subtitle,
  description,
}) => {
  return (
    <div>
      <Stack spacing={'xs'}>
        <Stack spacing={0}>
          <Group align={'baseline'} spacing="md">
            <Title order={2}>{title}</Title>
            <Text size={'md'} weight="bold" color={'gray'}>
              {term}
            </Text>
          </Group>
          <Title order={4}>{subtitle}</Title>
        </Stack>
        <Text size={'md'}>{description}</Text>
      </Stack>
    </div>
  );
};
