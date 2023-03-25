import { FC } from 'react';
import { TimelineElementPresenter } from './TimelineElementPresenter';

type TimelineElementContainerProps = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
};

export const TimelineElementContainer: FC<TimelineElementContainerProps> = (
  props,
) => {
  const { title, subtitle, description, image } = props;
  return (
    <TimelineElementPresenter
      title={title}
      subtitle={subtitle}
      description={description}
      image={image}
    />
  );
};
