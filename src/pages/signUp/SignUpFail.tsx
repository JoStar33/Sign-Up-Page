import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';
import routerPath from '@/constants/routerPath';
import { flexCenter } from '@/styles/Common';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function SignUpFailPage() {
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate(routerPath.SIGN_UP_STEP_THREE);
  };
  return (
    <S.SignUpFailPage>
      <p className="title">회원가입 통신중 에러가 발생했어요!</p>
      <Icon name="ErrorRobot" width="300px" height="300px" />
      <p className="title">다시 시도해주세요.</p>
      <Button onClick={handleClickButton} width="300px">
        이전 페이지로
      </Button>
    </S.SignUpFailPage>
  );
}

const S = {
  SignUpFailPage: styled.div`
    ${flexCenter}
    flex-direction: column;
    .title {
      font-size: 25px;
      margin: 20px;
    }
  `,
};
