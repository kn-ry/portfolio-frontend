import { TextWithSubtitle } from '@/components/ui/TextWithSubtitle';
import { Stack } from '@mantine/core';
import { FC } from 'react';

type WorksListPresenterProps = {};

export const WorksListPresenter: FC<WorksListPresenterProps> = (props) => {
  const {} = props;
  const skillList = [
    {
      title: 'レシピ検索アプリ',
      subtitle: '2022年2月',
    },
    // {
    //   title: '集客・見積もりを自動化するプラットフォーム「ミツモア」',
    //   subtitle: 'インターン・2022年4月~2022年7月',
    // },
    {
      title: 'マーケティングSaaS',
      subtitle: '参画中・2022年9月~現在',
    },
  ];
  return (
    <Stack spacing={'sm'}>
      {skillList.map((item) => (
        <TextWithSubtitle
          key={item.title}
          text={item.title}
          subtitle={item.subtitle}
        />
      ))}
    </Stack>
  );
};
