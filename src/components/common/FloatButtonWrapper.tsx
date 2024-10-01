import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

export default function FloatButtonWrapper({ children }: Props) {
  return <S.FloatButtonWrapper>{children}</S.FloatButtonWrapper>;
}
const S = {
  FloatButtonWrapper: styled.div`
    position: fixed;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    max-width: 700px;
    padding: 15px;
    width: 100%;
  `,
};
