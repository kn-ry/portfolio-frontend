import { Text } from '@/components/ui/Text/Text';
import { Box, Image, Stack } from '@mantine/core';
import { FC } from 'react';

type AboutMePresenterProps = {};

export const AboutMePresenter: FC<AboutMePresenterProps> = (props) => {
  const {} = props;
  const myInfo = {
    name: 'Ryunosuke Kono',
    picture: './images/selfie.jpg',
    description: (
      <>
        <p>
          横浜市在住の大学生。
          <br />
          慶應義塾大学・環境情報学部の学部２年生です。
        </p>
        大学入学と同時期にエンジニアとしてインターンを始め、TypeScript,
        Next.jsを中心にフロントエンドの開発業務を担当していました。
        <br />
        現在はUI/UXデザインの領域にも注力。Figmaを使用したUI作成やデザインシステムの構築、プロダクトの要件定義など幅広くサービス開発に携わっています。
<<<<<<< HEAD
=======
        sentense 1 sentense 2
        <br />
        sentense 1, sentense 1'
        <br />
        sentense 2
>>>>>>> b1264ab2450b14f4eabc48013e1a65f3f5a31760
      </>
    ),
  };
  return (
    <div>
      <Stack align="center" spacing="xl" py={56}>
        <Stack align={'center'} spacing="xs">
          <Box
            sx={{
              overflow: 'hidden',
              borderRadius: 9999,
              border: '2px solid #DEE2E6',
            }}
          >
            <Image maw={196} radius={9999} src={myInfo.picture} alt="image" />
          </Box>
          <Text size="xl" color={'gray'}>
            {myInfo.name}
          </Text>
        </Stack>
        <Stack w={'50%'} maw={650} align="center">
          <Text size="md">{myInfo.description}</Text>
        </Stack>
      </Stack>
    </div>
  );
};
