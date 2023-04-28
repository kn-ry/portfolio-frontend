'use client';

import { Group, Title } from '@mantine/core';
import { FC, ReactNode } from 'react';
import { Text } from './Text/Text';

type TextWithSubtitleProps = {
  icon?: ReactNode;
  text: string;
  subtitle: string;
};

export const TextWithSubtitle: FC<TextWithSubtitleProps> = ({
  icon,
  text,
  subtitle,
}) => {
  return (
    <div>
      <Group>
        {icon}
        <div>
          <Title order={3}>{text}</Title>
          <Text size="md" color="gray.5">
            {subtitle}
          </Text>
        </div>
      </Group>
    </div>
  );
};
