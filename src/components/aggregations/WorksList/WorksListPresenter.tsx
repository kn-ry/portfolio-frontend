import { WorkCard } from '@/components/ui/Card/WorkCard';
import { TextWithSubtitle } from '@/components/ui/TextWithSubtitle';
import { Card, Stack } from '@mantine/core';
import { FC } from 'react';

type WorksListPresenterProps = {};

export const WorksListPresenter: FC<WorksListPresenterProps> = (props) => {
  const {} = props;
  const workList = [
    {
      title: 'レシピ検索アプリ',
      subtitle: '個人開発・~2022年2月',
      link: 'https://find-recipe-app.vercel.app/',
      body: (
        <>
          <p>
            学習の過程として、主にReact,
            TypeScriptを使ったwebアプリケーションを作成しました。
          </p>
          <p>web apiを使ったレシピの検索および閲覧機能を備えたアプリです</p>
        </>
      ),
    },
    {
      title: 'マーケティングSaaS',
      subtitle: '参画中・2022年9月~現在',
      body: <></>,
    },
  ];
  return (
    <>
      <Stack spacing={'xs'} mb={64}>
        {workList.map((item) => (
          <WorkCard
            key={item.title}
            text={item.title}
            subtitle={item.subtitle}
            body={item.body}
            link={item.link}
          />
        ))}
      </Stack>
    </>
  );
};
