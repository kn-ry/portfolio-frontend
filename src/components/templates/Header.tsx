import { FC } from 'react';
import { Group, Header as MHeader } from '@mantine/core';
import { Text } from '../ui/Text/Text';
type HeaderProps = {};

export const Header: FC<HeaderProps> = (props) => {
  return (
    <MHeader
      height={64}
      sx={{ opacity: 0.6 }}
      // className="py-3"

      bg={'white'}
    >
      <div className="flex h-full justify-between px-6">
        <Group bg="green" h={'flex'}>
          <Text size="lg" h="flex">
            myportfolio
          </Text>
        </Group>
        <Group bg="green" h={'flex'}>
          <Text size="lg">myportfolio</Text>
          <Text size="lg">Skills & Works</Text>
          <Text size="lg">Profile</Text>
        </Group>
      </div>
    </MHeader>
  );
};
