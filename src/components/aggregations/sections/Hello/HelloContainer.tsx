import { FC } from 'react';
import { HelloPresenter } from './HelloPresenter';

type HelloContainerProps = {
  onClick: () => void;
};

export const HelloContainer: FC<HelloContainerProps> = ({ onClick }) => (
  <HelloPresenter onClick={onClick} />
);
