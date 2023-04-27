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
      images: [
        './images/recipe-app/recipe1.jpeg',
        './images/recipe-app/recipe2.jpeg',
        './images/recipe-app/recipe3.jpeg',
      ],
    },
    {
      title: "Kouno's Portfolio",
      subtitle: '個人開発・2023年4月',
      link: 'https://find-recipe-app.vercel.app/',
      body: (
        <>
          <p>
            このポートフォリオサイトです。Next.jsを使用し、１枚のLP風のサイトにしました。
          </p>
          <p>
            とりあえず急いで作成したため、現時点では簡素なデザインになっています。
            <br />
            Three.jsやGSAPなど今後取り入れたい技術がまだまだあるので、これからもっと楽しいページになると思います！
          </p>
        </>
      ),
      images: [],
    },
    {
      title: 'マーケティングSaaS',
      subtitle: '参画中・2022年9月~現在',
      body: (
        <>
          <p>
            Cookieレス時代に対応した新しいマーケティング支援ツールの開発を進めています。
          </p>
          <p>
            開発言語(フロント)：NextJS / TypeScript / GraphQL
            <br />
            スタイリング/UI：Tailwind CSS / Mantine <br />
            デザイン：Figma
          </p>
        </>
      ),
      images: [],
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
            images={item.images}
            link={item.link}
          />
        ))}
      </Stack>
    </>
  );
};
