import { Text } from '@/components/ui/Text/Text';
import { Title } from '@/components/ui/Title/Title';
import { Box, MantineColor, Stack } from '@mantine/core';
import { FC } from 'react';

type SectionProps = {
  bg: MantineColor;
  sectionTitle: string;
  children: React.ReactNode;
  description?: React.ReactNode;
};

export const Section: FC<SectionProps> = ({
  bg,
  sectionTitle,
  description,
  children,
}) => (
  <Stack bg={bg} align="stretch" justify="center" mih="100vh">
    <Stack h={196} align="center" justify="flex-end">
      <Title size={48}>{sectionTitle}</Title>
      <Box w={'50%'}>
        <Text size="md">{description}</Text>
      </Box>
    </Stack>
    {children}
  </Stack>
);
