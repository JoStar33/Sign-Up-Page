import React from 'react';
import styled from 'styled-components';
import Header from '@/components/layouts/Header';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <S.Layout>
      <Header />
      <div className="body">{children}</div>
    </S.Layout>
  );
}

const S = {
  Layout: styled.div`
    height: 100dvh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: calc(100dvh - 60px);
      max-width: 1280px;
      width: 100%;
    }
  `,
};
