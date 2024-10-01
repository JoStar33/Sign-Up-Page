import styled from 'styled-components';
import FloatButtonWrapper from '@/components/common/FloatButtonWrapper';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
}

export default function SignUp({ children }: Props) {
  return (
    <S.SignUp>
      <motion.img animate={{ opacity: [0, 1] }} transition={{ duration: 0.6 }} className="logo" src="/images/logo.png" />
      <motion.p animate={{ opacity: [0, 1] }} transition={{ delay: 1, duration: 0.6 }} className="title">
        클로봇에 오신것을 환영합니다.
      </motion.p>
      <motion.p animate={{ opacity: [0, 1] }} transition={{ delay: 2, duration: 0.6 }} className="description">
        우리는 더 나은 세상을 만들기 위해 노력합니다.
      </motion.p>
      <FloatButtonWrapper>{children}</FloatButtonWrapper>
    </S.SignUp>
  );
}
const S = {
  SignUp: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    .logo {
      width: 200px;
      object-position: -20px;
    }
    .title {
      font-size: 30px;
    }
    .description {
      font-size: 24px;
    }
  `,
};
