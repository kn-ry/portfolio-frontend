import { FC } from 'react';
import {
  Avatar,
  Button,
  Card,
  Group,
  Image,
  Modal,
  Title,
} from '@mantine/core';
import { Text } from '../Text/Text';
import { useDisclosure } from '@mantine/hooks';

type WorkCardProps = {
  text: string;
  subtitle: string;
  link?: string;
  body: JSX.Element;
};

export const WorkCard: FC<WorkCardProps> = (props) => {
  const { text, subtitle, link, body } = props;
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal opened={opened} onClose={close} centered size={'60%'}>
        <div className="px-6">
          <Text color={'gray'} size="sm">
            {subtitle}
          </Text>
          <Title order={2}>{text}</Title>
          <Text>{body}</Text>
          {link && (
            <Group position="center" mt={32}>
              <Button
                target="_blank"
                component="a"
                rel="noopener noreferrer"
                href={link}
                color={'gray.2'}
                radius={9999}
                sx={{
                  transitionDuration: '.4s',
                  ':hover': { transform: 'scale(1.05)', cursor: 'pointer' },
                }}
              >
                <Text color={'gray'}>さらに詳しく</Text>
              </Button>
            </Group>
          )}
        </div>
      </Modal>
      <Card
        shadow="md"
        radius={'md'}
        onClick={open}
        sx={{
          transitionDuration: '.4s',
          ':hover': { transform: 'scale(1.05)', cursor: 'pointer' },
        }}
      >
        <Text weight={'bold'} size="lg">
          {text}
        </Text>
        <Text color={'gray'}>{subtitle}</Text>
      </Card>
    </>
  );
};
