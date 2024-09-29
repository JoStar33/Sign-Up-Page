import { flexCenter } from '@/styles/Common';
import styled, { css } from 'styled-components';

interface Props {
  mode: 'block' | 'center' | 'fixed' | 'inline' | 'absolute';
}

export default function Loading({ mode = 'block' }: Props) {
  return (
    <S.Loading mode={mode}>
      <img src="/images/Spinner200px.gif" />
    </S.Loading>
  );
}

const S = {
  Loading: styled.div<{ mode: string }>`
    ${flexCenter}
    z-index: 20;
    width: 100%;
    height: 100%;
    img {
      width: 80px;
      height: 80px;
    }
    ${(props) =>
      props.mode === 'inline' &&
      css`
        width: 100%;
      `};
    ${(props) =>
      props.mode === 'center' &&
      css`
        height: 50%;
      `};

    ${(props) =>
      props.mode === 'absolute' &&
      css`
        position: absolute;
        top: 0;
        height: 100%;
      `};

    ${(props) =>
      props.mode === 'fixed' &&
      css`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      `};
  `,
};
