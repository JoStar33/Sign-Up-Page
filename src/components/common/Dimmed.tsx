import styled from 'styled-components';

export default function Dimmed() {
  return <S.Dimmed />;
}

const S = {
  Dimmed: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.03);
    pointer-events: none;
  `,
};
