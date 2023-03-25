import { MantineColor, MantineSize, Text as MText } from '@mantine/core';
import { CSSProperties, FC } from 'react';

type TextProps = {
  size?: MantineSize;
  color?: 'dimmed' | MantineColor;
  weight?: CSSProperties['fontWeight'];
  inline?: boolean;
  inherit?: boolean;
  align?: CSSProperties['textAlign'];
  children: React.ReactNode;
};

export const Text: FC<TextProps> = (props) => {
  const { size, color, weight, inline, inherit, align, children } = props;
  return (
    <MText
      size={size}
      color={color}
      weight={weight}
      inline={inline}
      inherit={inherit}
      align={align}
    >
      {children}
    </MText>
  );
};
