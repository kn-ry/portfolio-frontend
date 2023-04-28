'use client';
import { AboutMe } from '@/components/aggregations/sections/AboutMe';
import { Hello } from '@/components/aggregations/sections/Hello';
import { SkillAndWorks } from '@/components/aggregations/sections/SkillAndWorks';
import { MyTimeline } from '@/components/aggregations/sections/Timeline';
import { Section } from '@/components/templates/Section/Section';
import { TextWithSubtitle } from '@/components/ui/TextWithSubtitle';
import { RxHamburgerMenu } from 'react-icons/rx';
import {
  ActionIcon,
  Anchor,
  Button,
  Drawer,
  Footer,
  Group,
  Header,
  MediaQuery,
  Stack,
  Text,
} from '@mantine/core';
import { useDisclosure, useScrollIntoView } from '@mantine/hooks';
import { createRef, useRef } from 'react';
import {
  IoChevronDownCircleOutline,
  IoChevronUpCircleOutline,
} from 'react-icons/io5';

const PortfolioPage = () => {
  // const { scrollIntoView, targetAboutMe } = useScrollIntoView<HTMLDivElement>();
  // const onClickScroll = () => scrollIntoView({ alignment: 'center' });
  const items = ['About me', 'Skill & Works', 'Profile'];

  const pageRef = useRef(items.map(() => createRef<HTMLDivElement>()));
  const scrollIntoView = (id: number) => {
    pageRef.current[id].current?.scrollIntoView({ behavior: 'smooth' });
  };
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        withCloseButton={false}
        size="50%"
      >
        <Stack align={'center'} spacing={0}>
          <Anchor
            onClick={() => {
              window.scroll({ top: 0, behavior: 'smooth' });
            }}
            size="lg"
            color="cyan.8"
            h={56}
          >
            トップ
          </Anchor>
          {items.map((item, id) => (
            <Anchor
              onClick={() => scrollIntoView(id)}
              size="lg"
              key={id}
              color="cyan.8"
              h={56}
            >
              {item}
            </Anchor>
          ))}
        </Stack>
      </Drawer>
      <Header
        height={64}
        sx={{ opacity: 0.8 }}
        // className="py-3"

        bg={'white'}
      >
        <div className="flex h-full justify-between px-16">
          <Group
            sx={{ cursor: 'pointer' }}
            h={'flex'}
            onClick={() => {
              window.scroll({ top: 0, behavior: 'smooth' });
            }}
          >
            <Text size="lg" h="flex" color={'cyan.8'}>
              Kono-folio
            </Text>
          </Group>
          <MediaQuery largerThan={'md'} styles={{ display: 'none' }}>
            <Group h={'flex'}>
              <ActionIcon color="cyan" onClick={open} h={'flex'}>
                <RxHamburgerMenu size={'md'} />
              </ActionIcon>
            </Group>
          </MediaQuery>
          <MediaQuery smallerThan={'md'} styles={{ display: 'none' }}>
            <Group h={'flex'} spacing="xl">
              {items.map((item, id) => (
                <Anchor
                  onClick={() => scrollIntoView(id)}
                  size="lg"
                  key={id}
                  color="cyan.8"
                >
                  {item}
                </Anchor>
              ))}
            </Group>
          </MediaQuery>
        </div>
      </Header>
      <div>
        <Section bg="white">
          <Hello onClick={() => scrollIntoView(0)} />
        </Section>
      </div>
      <div ref={pageRef.current[0]}>
        <Section sectionTitle="About me" bg="white">
          <AboutMe />
        </Section>
      </div>
      <div ref={pageRef.current[1]}>
        <Section
          sectionTitle="Skill & Work"
          bg={'white'}
          description={
            <>
              <p>
                フロントエンド開発からUI/UXデザインまで幅広く対応できることが強みです。
                <br />
                その一方で、まだ経験が浅いこともあり専門性の低さを感じているため、日々キャッチアップに努めてます。
                <br />
                今後はよりUI/UXに関する経験を積み、専門性を高めていきたいと考えています。
              </p>
              <p>＊スキルは業務で実際に使用した技術のみ掲載しております。</p>
            </>
          }
        >
          <SkillAndWorks />
        </Section>
      </div>
      <div ref={pageRef.current[2]}>
        <Section
          sectionTitle="profile"
          bg="white"
          description={
            <Text align="center">まだ短いですが、私の経歴をご紹介します！</Text>
          }
        >
          <MyTimeline />
        </Section>
      </div>
      <div>
        <Stack bg={'white'} align="center" py={56} spacing={'xl'}>
          <ActionIcon
            // className="animate-fuwafuwa"
            color={'cyan'}
            radius={9999}
            size={48}
            onClick={() => {
              window.scroll({ top: 0, behavior: 'smooth' });
            }}
          >
            <IoChevronUpCircleOutline size={48} strokeWidth={0.5} />
          </ActionIcon>
          <Text size={32} weight="bold" color={'cyan'}>
            Thank you for coming!
          </Text>
        </Stack>
      </div>
    </>
  );
};

export default PortfolioPage;

// 良くない例
