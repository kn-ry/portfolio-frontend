import { Text } from '@/components/ui/Text/Text';
import { ActionIcon, Box, Group, Image, Stack } from '@mantine/core';
import { SiGithub } from 'react-icons/si';

export const AboutMePresenter = () => {
  const myInfo = {
    name: 'Ryunosuke Kono',
    picture: 'https://avatars.githubusercontent.com/u/55564581?v=4',
    description:
      '説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。',
  };
  const { name, picture, description } = myInfo;
  return (
    <div>
      <Group position="center" align="flex-start" spacing="xl" py={80}>
        <Image maw={128} radius="md" src={picture} alt="image" />
        <Stack w="30%">
          <Text size="xl">{name}</Text>
          <Text size="md">{description}</Text>
        </Stack>
      </Group>
    </div>
  );
};
