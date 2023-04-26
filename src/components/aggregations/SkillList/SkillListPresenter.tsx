import { SkillCard } from '@/components/ui/Card/SkillCard';
import { TextWithSubtitle } from '@/components/ui/TextWithSubtitle';
import { Card, Group, Image, Rating, Stack, Text } from '@mantine/core';
import { FC } from 'react';

type SkillListPresenterProps = {};

export const SkillListPresenter: FC<SkillListPresenterProps> = (props) => {
  const {} = props;
  const skillList = [
    {
      title: 'JavaScript',
      subtitle: '3years',
      icon: './images/javascript.png',
    },
    {
      title: 'TypeScript',
      subtitle: '3years',
      icon: './images/typescript.png',
    },
    {
      title: 'React',
      subtitle: '3years',
      icon: './images/react.png',
    },
    {
      title: 'Next.js',
      subtitle: '3years',
      icon: './images/nextjs.png',
    },

    {
      title: 'GraphQL',
      subtitle: '3years',
      icon: './images/graphql.png',
    },
    {
      title: 'Figma',
      subtitle: '3years',
      icon: './images/figma.png',
    },

    {
      title: 'Notion',
      subtitle: '3years',
      icon: './images/notion.png',
    },
  ];
  return (
    <>
      <Stack spacing={'xs'} mb={64}>
        {skillList.map((item) => (
          <SkillCard key={item.title} icon={item.icon} text={item.title} />
        ))}
      </Stack>
    </>
  );
};
