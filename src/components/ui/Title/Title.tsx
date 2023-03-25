import { Title as MTitle, TitleOrder } from '@mantine/core';
import { TitleSize } from '@mantine/core/lib/Title/Title';
import { FC } from 'react';

type TitleProps = {
  size?: TitleSize;
  order?: TitleOrder;
  color?: string;
  children: React.ReactNode;
};
export const Title: FC<TitleProps> = ({ order, color, size, children }) => {
  return (
    <MTitle order={order} color={color} size={size}>
      {children}
    </MTitle>
  );
};
