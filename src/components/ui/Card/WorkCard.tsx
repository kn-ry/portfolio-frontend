import { FC } from 'react';
import { Button, Card, Group, Image, Modal, Stack, Title } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { Text } from '../Text/Text';
import { useDisclosure } from '@mantine/hooks';

type WorkCardProps = {
  text: string;
  subtitle: string;
  link?: string;
  body: JSX.Element;
  images: any;
};

export const WorkCard: FC<WorkCardProps> = (props) => {
  const { text, subtitle, link, body, images } = props;
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        centered
        size={'45rem'}
        withCloseButton={false}
        padding={0}
      >
        <Card w={'full'}>
          <Card.Section mb={16}>
            {images.length !== 0 && (
              <Carousel
                withIndicators
                loop
                // slideSize={'70%'}
                // slideGap="md"
                // bg={'cyan'}
                // maw={500}
                // mah={250}
                // align="center"
              >
                {images.map((image: string) => (
                  <Carousel.Slide key={image}>
                    <Image src={image} fit="cover" />
                  </Carousel.Slide>
                ))}
              </Carousel>
            )}
          </Card.Section>

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
                    ':hover': {
                      transform: 'scale(1.05)',
                      cursor: 'pointer',
                    },
                  }}
                >
                  <Text color={'gray'}>さらに詳しく</Text>
                </Button>
              </Group>
            )}
          </div>
        </Card>
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
