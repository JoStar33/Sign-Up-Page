import React from 'react';
import styled from 'styled-components';
import * as icons from '@/assets/icons';

export type IconType = keyof typeof icons;

export type Props = {
  name: IconType;
  className?: string;
  style?: React.CSSProperties | undefined;
  width?: string;
  height?: string;
  margin?: string;
  onClick?: (event: React.MouseEvent) => void;
};

// eslint-disable-next-line react-refresh/only-export-components
function Icon({ name, className, style, onClick, width = '20px', height = '20px' }: Props) {
  return React.createElement(icons[name], {
    className,
    style,
    width,
    height,
    onClick,
  });
}

export default styled(Icon)`
  margin: ${(props) => (props.margin ? props.margin : '0')};
  cursor: pointer;
  svg {
    fill: currentColor;
  }
  &:hover {
    /* transform: scale(1.05); */
  }
`;
