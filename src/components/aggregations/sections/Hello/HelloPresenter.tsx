import { Text } from '@/components/ui/Text/Text';
import { ActionIcon, Stack, Title } from '@mantine/core';
import { FC } from 'react';
import { IoChevronDownCircleOutline } from 'react-icons/io5';

type HelloPresenterProps = {
  onClick: () => void;
};
export const HelloPresenter: FC<HelloPresenterProps> = ({ onClick }) => {
  return (
    <div>
      <Stack align="center" spacing="5.5rem">
        <Stack align="center">
          <Title size={48} color="cyan">
            ryuno's portfolio
          </Title>
          <Title size={24}>web enginner & UI UX desinger</Title>
        </Stack>
        <ActionIcon
          color={'gray.4'}
          className="animate-fuwafuwa"
          radius={9999}
          size={96}
          onClick={onClick}
        >
          <IoChevronDownCircleOutline size={96} strokeWidth={0.5} />
        </ActionIcon>
      </Stack>
    </div>
  );
};
