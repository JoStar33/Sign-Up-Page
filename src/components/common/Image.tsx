import React from 'react';
import styled, { css } from 'styled-components';

interface Props extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  isFill?: boolean;
}

export default function Image({ isFill = false, ...rest }: Props) {
  const addDefaultImg = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = '/images/empty.png';
  };

  return <S.Image isFill={isFill} {...rest} onError={addDefaultImg} />;
}

const S = {
  Image: styled.img<{ isFill: boolean }>`
    object-fit: cover;
    ${(props) =>
      props.isFill &&
      css`
        position: absolute;
        width: 100%;
        height: 100%;
      `}
  `,
};
