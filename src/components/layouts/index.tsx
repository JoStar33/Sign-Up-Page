import React from 'react';
import styled from 'styled-components';
import Header from '@/components/layouts/Header';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <S.Layout>
      <div className="layout__cover">
        <Header />
        <div className="layout__body">{children}</div>
      </div>
    </S.Layout>
  );
}

const S = {
  Layout: styled.div`
    height: 100dvh;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.gray};
    .layout {
      &__cover {
        background-color: ${(props) => props.theme.colors.white};
        position: relative;
        overflow: hidden;
        width: 100%;
        max-width: 700px;
        height: 100dvh;
      }
      &__body {
        display: flex;
        flex-direction: column;
        padding: 15px;
        position: relative;
        transform: rotate(1);
        height: calc(100dvh - 60px);
        min-width: 100%;
      }
    }
  `,
};
