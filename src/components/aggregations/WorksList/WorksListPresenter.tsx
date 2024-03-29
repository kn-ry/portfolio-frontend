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
            TypeScriptを使ったwebアプリケーションを作成しました。 web
            apiを使ったレシピの検索および閲覧機能を備えたアプリです。
          </p>
          <p>
            開発言語(フロント)：React / TypeScript
            <br />
            スタイリング/UI：Chakra UI <br />
          </p>
        </>
      ),
      images: [
        './images/recipe-app/recipe1.jpeg',
        './images/recipe-app/recipe2.jpeg',
        './images/recipe-app/recipe3.jpeg',
      ],
    },
    {
      title: "Kono's Portfolio",
      subtitle: '個人開発・2023年4月',
      body: (
        <>
          <p>
            このポートフォリオサイトです。Next.jsを使用し、１枚のLP風のサイトにしました。
          </p>
          <p>
            とりあえず形になるものを、と作成したため現時点ではかなり簡素なデザインになっています。
            <br />
            Three.jsやGSAPでのアニメーションなど今後取り入れたい技術がまだまだあるので、これからもっと楽しいページになると思います！
          </p>
        </>
      ),
      images: ['./images/portfolio/portfolio1.jpeg'],
    },
    {
      title: 'マーケティングSaaS',
      subtitle: '参画中・2022年9月~現在',
      body: (
        <>
          <p>
            Cookieレス時代に対応した新しいマーケティング支援ツールの開発を進めています。
            <br />
            スタートアップのメンバーとして、プロダクトの要件定義からUI/UXデザイン、フロントエンド開発までを担当しています。
          </p>
          <p>
            開発言語(フロント)：Next.js / TypeScript / GraphQL
            <br />
            スタイリング/UI：Tailwind CSS / Mantine <br />
            デザイン：Figma
          </p>
        </>
      ),
      images: ['./images/marketing/marketing.jpeg'],
    },
    {
      title: '医療領域を中心としたサービス・ツールの開発',
      subtitle: '参画中・2023年7月~現在',
      body: (
        <>
          <p>
            医療・メンタルヘルスケア領域を中心とした開発支援を行うテックカンパニーでインターンのメンバーとして稼働しています。
            <br />
            様々なプロジェクトに参画し、フロントエンド開発やデザインを担当しています。
          </p>
          <p>
            開発言語：Next.js / TypeScript / GraphQL / Bubble 他
            <br />
            デザイン：Figma
          </p>
        </>
      ),
      images: ['./images/ispec/medical-care.jpg'],
    },
    {
      title: '技術系記事の発信',
      subtitle: 'Zennにて',
      link: 'https://zenn.dev/kn_ry',
      body: (
        <>
          <p>
            Zennで自分の扱う技術やアイデアに関する記事を執筆しています。
            <br />
            まだ数は少ないですが、これからも有益な情報を発信していきたいと考えています。
          </p>
        </>
      ),
      images: ['./images/zenn/zenn-image.png'],
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
