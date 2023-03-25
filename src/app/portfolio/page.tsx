'use client';
import { AboutMe } from '@/components/aggregations/sections/AboutMe';
import { SkillAndWorks } from '@/components/aggregations/sections/SkillAndWorks';
import { SkillListPresenter } from '@/components/aggregations/SkillList/SkillListPresenter';
import { MyTimeline } from '@/components/aggregations/sections/Timeline';
import { WorksListPresenter } from '@/components/aggregations/WorksList/WorksListPresenter';
import { Section } from '@/components/templates/Section/Section';
import { TextWithSubtitle } from '@/components/ui/TextWithSubtitle';
import { Button, Group, Text } from '@mantine/core';

const PortfolioPage = () => {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <Button onClick={() => console.log('hello!')}>hello</Button>
      <MyTimeline />
      <TextWithSubtitle text="hello" subtitle="world" />
      <div>
        <Section
          sectionTitle="Skill & Work"
          bg={'gray.1'}
          description="ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。"
        >
          <SkillAndWorks />
        </Section>
        <Section sectionTitle="About Me" bg="green.1">
          <AboutMe />
        </Section>
      </div>
      <div className="h-64 bg-orange-400">s</div>
      <div>
        <Text className="bg-green-500">hello world</Text>
      </div>
    </div>
  );
};

export default PortfolioPage;
