'use client';

import { Box, Grid, MediaQuery, Stack } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { FC } from 'react';
import { SkillList } from '../../SkillList';
import { WorksList } from '../../WorksList';

type SkillAndWorksPresenterProps = {};

export const SkillAndWorksPresenter: FC<SkillAndWorksPresenterProps> = (
  props,
) => {
  const {} = props;
  const largeScreen = useMediaQuery('(min-width: 60em)');
  return (
    <>
      <MediaQuery largerThan={'md'} styles={{ display: 'none' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Stack align="stretch" w="80%">
            <SkillList />
            <WorksList />
          </Stack>
        </Box>
      </MediaQuery>
      <MediaQuery smallerThan={'md'} styles={{ display: 'none' }}>
        <Box
          // bg={'red'}
          sx={{ display: 'flex', justifyContent: 'center' }}
          p={32}
        >
          <Grid
            // bg={'green'}
            sx={{ width: '60%' }}
            grow
            gutter={'xl'}
          >
            {/* <Stack
          bg={'green'}
          // position="center"
          align="flex-start"
          spacing={largeScreen ? 256 : 96}
          py={80}
        > */}
            <Grid.Col span={5}>
              <SkillList />
            </Grid.Col>
            <Grid.Col span={5}>
              <WorksList />
            </Grid.Col>
            {/* </Stack> */}
          </Grid>
        </Box>
      </MediaQuery>
    </>
  );
};
