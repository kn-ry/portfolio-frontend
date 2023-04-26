import { Text } from '@/components/ui/Text/Text';
import { Title } from '@/components/ui/Title/Title';
import { Box, Divider, MantineColor, Stack } from '@mantine/core';
import { FC } from 'react';

type SectionProps = {
  bg: MantineColor;
  sectionTitle?: string;
  children: React.ReactNode;
  description?: React.ReactNode;
};

export const Section: FC<SectionProps> = ({
  bg,
  sectionTitle,
  description,
  children,
}) => (
  <>
    <Stack bg={bg} align="stretch" justify="flex-start" mih="100vh" w="full">
      <Stack mih={256} align="center" justify="flex-end" pt={56}>
        <Title size={48}>{sectionTitle}</Title>
        <Box w={'50%'}>
          <Text size="md" align="center">
            {description}
          </Text>
        </Box>
      </Stack>
      {children}
    </Stack>
    <Divider mx="xl" />
  </>
);
