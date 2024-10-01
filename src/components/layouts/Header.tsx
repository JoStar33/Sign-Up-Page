import styled from 'styled-components';

export default function Header() {
  return (
    <S.Header>
      <img src="/images/logo.png" />
    </S.Header>
  );
}

const S = {
  Header: styled.div`
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid black;
    img {
      width: 155px;
      height: 45px;
      object-fit: cover;
    }
  `,
};
