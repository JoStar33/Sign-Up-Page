import styled from 'styled-components';

interface Props {
  height: number;
}

export default function Space({ height }: Props) {
  return <S.Space height={height} />;
}

const S = {
  Space: styled.div<Props>`
    height: ${(props) => props.height}px;
  `,
};
