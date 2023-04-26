import { FC } from 'react';
import { Avatar, Card, Group, Image } from '@mantine/core';
import { Text } from '../Text/Text';

type SkillCardProps = {
  icon: string;
  text: string;
};

export const SkillCard: FC<SkillCardProps> = (props) => {
  const { icon, text } = props;
  return (
    <Card shadow="md" radius={'md'}>
      <Group>
        <Avatar variant={'filled'} src={icon} size={32} />
        <Text color={'gray'}>{text}</Text>
      </Group>
    </Card>
  );
};
