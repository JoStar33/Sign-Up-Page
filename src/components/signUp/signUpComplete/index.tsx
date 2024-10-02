import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';
import routerPath from '@/constants/routerPath';
import { flexCenter } from '@/styles/Common';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function SignUpComplete() {
  const navigate = useNavigate();

  const handleRouteHome = () => {
    navigate(routerPath.HOME);
  };

  return (
    <S.SignUpComplete>
      <div className="robot-icon-wrapper">
        <Icon name="Robot" width="200px" height="200px" />
      </div>
      <motion.p animate={{ opacity: [0, 1] }} transition={{ duration: 0.6 }}>
        회원가입이 완료됐습니다.
      </motion.p>
      <motion.p animate={{ opacity: [0, 1] }} transition={{ duration: 0.6, delay: 1 }}>
        이제 당신이 꿈꾸는 모든걸
      </motion.p>
      <motion.p animate={{ opacity: [0, 1] }} transition={{ duration: 0.6, delay: 2 }}>
        <strong>클로봇</strong>에서 이루세요.
      </motion.p>
      <motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 0.6, delay: 3 }}>
        <Button onClick={handleRouteHome}>홈으로 이동</Button>
      </motion.div>
    </S.SignUpComplete>
  );
}

const S = {
  SignUpComplete: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    .robot-icon-wrapper {
      margin: 20px;
      ${flexCenter}
    }
    p {
      font-size: 28px;
      text-align: center;
    }
    strong {
      color: ${(props) => props.theme.colors.main};
      font-weight: 700;
    }
  `,
};
