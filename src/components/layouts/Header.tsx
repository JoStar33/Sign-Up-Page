import routerPath from '@/constants/routerPath';
import { flexCenter } from '@/styles/Common';
import { checkUserLoggedIn } from '@/utils/checkUserLoggedIn';
import { storage } from '@/utils/storage';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
  const navigate = useNavigate();
  const isLoggedIn = checkUserLoggedIn();

  const handleClickLogo = () => {
    if (isLoggedIn) {
      navigate(routerPath.SIGN_UP);
      return;
    }
    navigate(routerPath.HOME);
  };

  const handleLogout = () => {
    storage.removeAccessToken();
    navigate(routerPath.SIGN_UP);
  };

  return (
    <S.Header style={{ justifyContent: isLoggedIn ? 'space-between' : 'center' }}>
      {isLoggedIn && <div className="mock" />}
      <img src="/images/logo.png" onClick={handleClickLogo} />
      {isLoggedIn && (
        <button className="logout-button" onClick={handleLogout}>
          LOGOUT
        </button>
      )}
    </S.Header>
  );
}

const S = {
  Header: styled.div`
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid black;
    padding: 0px 15px;
    .mock {
      width: 6rem;
    }
    .logout-button {
      width: 6rem;
      ${flexCenter}
      border-radius: 5px;
      border: none;
      height: 30px;
      cursor: pointer;
      color: ${(props) => props.theme.colors.white};
      background-color: ${(props) => props.theme.colors.gray};
    }
    img {
      cursor: pointer;
      width: 155px;
      height: 45px;
      object-fit: cover;
    }
  `,
};
