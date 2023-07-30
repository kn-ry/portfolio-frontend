import { FC } from 'react';
import { TimelineContentPresenter } from './TimelineContentPresenter';

type TimelineContentContainerProps = {
  title: string;
  subtitle?: string;
  term: JSX.Element | string;
  description?: JSX.Element | string;
};

export const TimelineContentContainer: FC<TimelineContentContainerProps> = ({
  title,
  subtitle,
  term,
  description,
}) => (
  <TimelineContentPresenter
    title={title}
    subtitle={subtitle}
    term={term}
    description={description}
  />
);
