import { TextWithSubtitle } from '@/components/ui/TextWithSubtitle';
import { Stack } from '@mantine/core';
import { FC } from 'react';
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiGraphql,
  SiFigma,
  SiProcessingfoundation,
  SiRubyonrails,
  SiTailwindcss,
  SiNotion,
} from 'react-icons/si';

type SkillListPresenterProps = {};

export const SkillListPresenter: FC<SkillListPresenterProps> = (props) => {
  const {} = props;
  const skillList = [
    {
      title: 'React',
      subtitle: '3years',
      icon: <SiReact size={32} />,
    },
    {
      title: 'Next.js',
      subtitle: '3years',
      icon: <SiNextdotjs size={32} />,
    },
    {
      title: 'TypeScript',
      subtitle: '3years',
      icon: <SiTypescript size={32} />,
    },
    {
      title: 'GraphQL',
      subtitle: '3years',
      icon: <SiGraphql size={32} />,
    },
    {
      title: 'Figma',
      subtitle: '3years',
      icon: <SiFigma size={32} />,
    },
    {
      title: 'Processing',
      subtitle: '3years',
      icon: <SiProcessingfoundation size={32} />,
    },
    {
      title: 'Rails',
      subtitle: '3years',
      icon: <SiRubyonrails size={32} />,
    },
    {
      title: 'TailwindCSS',
      subtitle: '3years',
      icon: <SiTailwindcss size={32} />,
    },
    {
      title: 'Notion',
      subtitle: '3years',
      icon: <SiNotion size={32} />,
    },
  ];
  return (
    <Stack spacing={'sm'}>
      {skillList.map((item) => (
        <TextWithSubtitle
          key={item.title}
          icon={item.icon}
          text={item.title}
          subtitle={item.subtitle}
        />
      ))}
    </Stack>
  );
};
