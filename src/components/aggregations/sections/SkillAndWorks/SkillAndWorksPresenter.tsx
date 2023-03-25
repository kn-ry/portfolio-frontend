'use client';

import { Title } from '@/components/ui/Title/Title';
import { Group } from '@mantine/core';
import { FC } from 'react';
import { SkillList } from '../../SkillList';
import { WorksList } from '../../WorksList';

type SkillAndWorksPresenterProps = {};

export const SkillAndWorksPresenter: FC<SkillAndWorksPresenterProps> = (
  props,
) => {
  const {} = props;
  return (
    <Group align="flex-start" grow px={256}>
      <SkillList />
      <WorksList />
    </Group>
  );
};
