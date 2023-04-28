'use client';

import { Card, Center, Group, Timeline } from '@mantine/core';
import { FC } from 'react';
import { TimelineContent } from '../../TimelineContents';
import { FaSchool, FaLaptopCode, FaRegCommentDots } from 'react-icons/fa';
import { IoSchool } from 'react-icons/io5';
import { Text } from '@/components/ui/Text/Text';

type TimelinePresenterProps = {};

export const TimelinePresenter: FC<TimelinePresenterProps> = (props) => {
  const {} = props;
  const loadmap = [
    {
      title: 'TITLE1',
      subtitle: '期間',
      description: '説明が入ります',
      image: 'https://avatars.githubusercontent.com/u/36186912?v=4',
    },
    {
      title: 'TITLE2',
      subtitle: '期間',
      description: '説明が入ります',
      image: 'https://avatars.githubusercontent.com/u/36186912?v=4',
    },
    {
      title: 'TITLE3',
      subtitle: '期間',
      description: '説明が入ります',
      image: 'https://avatars.githubusercontent.com/u/36186912?v=4',
    },
  ];
  return (
    <Center>
      <Timeline m={64} bulletSize={30} color="cyan" active={4} lineWidth={3}>
        <Timeline.Item
          title={<TimelineStartDate startDate={'2022年4月〜2022年7月'} />}
          bullet={<FaSchool size={20} radius="xl" />}
        >
          <TimelineContent
            title="高校時代"
            subtitle="部活動はマンドリンクラブに所属"
            description={
              <Text>
                サボりながらではありましたが、ゆるゆると続けていました。
                <br />
                高校二年生のコロナ休校期間中に初めてプログラミングに触れ、
                <br />
                三年生の夏頃からweb開発の学習を始めました。
                <Card radius={'md'} py={8} mt={4} shadow="md">
                  <Group spacing={0}>
                    <FaRegCommentDots size={24} color="#868E96" />
                    <Text color={'gray.8'}>
                      「マンドリンってなーに？」という方へ、
                      <a
                        target="_blank"
                        href={'https://kzo.me/mandolin/'}
                        className=" text-[#15AABF]"
                      >
                        こちら
                      </a>
                      の記事がおすすめです ^_^
                    </Text>
                  </Group>
                </Card>
              </Text>
            }
            term="3年間"
          />
        </Timeline.Item>
        <Timeline.Item
          title={
            <TimelineStartDate startDate={'2022年4月〜2026年3月 (予定)'} />
          }
          bullet={<IoSchool size={20} radius="xl" />}
        >
          <TimelineContent
            title="慶應義塾大学入学"
            term="4年間"
            subtitle="環境情報学部 (SFC)"
            description={
              <Text>
                授業や研究内容はとっても楽しいです。
                <br />
                立地だけはちょっと、、
              </Text>
            }
          />
        </Timeline.Item>
        <Timeline.Item
          title={<TimelineStartDate startDate={'2022年4月〜2022年7月'} />}
          bullet={<FaLaptopCode size={20} radius="xl" />}
        >
          <TimelineContent
            title="ミツモア株式会社"
            subtitle="フロントエンドエンジニア (インターン)"
            description="主にReact, TypeScriptを使用したフロントエンド開発業務を担当していました。"
            term="4ヶ月"
          />
        </Timeline.Item>
        <Timeline.Item
          title={<TimelineStartDate startDate={'2022年9月〜'} />}
          bullet={<FaLaptopCode size={20} radius="xl" />}
        >
          <TimelineContent
            title="フィシルコム株式会社"
            subtitle="フロントエンドエンジニア・UI/UXデザイナー"
            description={
              <Text>
                プロダクトの要件定義からデザイン、フロントエンド開発まで幅広く担当しています。
                <br />
                初期メンバーとして、マーケティングSaaSのリリースに向けて尽力しています！
                <br />
              </Text>
            }
            term="4ヶ月"
          />
        </Timeline.Item>
      </Timeline>
    </Center>
  );
};

//期間の表示をコンポーネント化する
const TimelineStartDate = ({ startDate }: { startDate: string }) => {
  return (
    <Text size={'sm'} color={'gray'}>
      {startDate}
    </Text>
  );
};
