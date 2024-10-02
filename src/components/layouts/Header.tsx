import routerPath from '@/constants/routerPath';
import { checkUserLoggedIn } from '@/utils/checkUserLoggedIn';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
  const navigate = useNavigate();
  const handleClickLogo = () => {
    if (checkUserLoggedIn()) {
      navigate(routerPath.SIGN_UP);
      return;
    }
    navigate(routerPath.HOME);
  };
  return (
    <S.Header>
      <img src="/images/logo.png" onClick={handleClickLogo} />
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
      cursor: pointer;
      width: 155px;
      height: 45px;
      object-fit: cover;
    }
  `,
};
