import styled from 'styled-components';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
}

export default function SignUp({ children }: Props) {
  return (
    <S.SignUp>
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 0.6 }}
        className="logo"
        src="/images/logo.png"
      />
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }} transition={{ delay: 1, duration: 0.6 }} className="title">
        <strong>클로봇</strong>에 오신것을 환영합니다.
      </motion.p>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }} transition={{ delay: 2, duration: 0.6 }} className="description">
        우리는 더 나은 세상을 만들기 위해 노력합니다.
      </motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }} transition={{ delay: 3, duration: 0.6 }}>
        {children}
      </motion.div>
    </S.SignUp>
  );
}
const S = {
  SignUp: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    strong {
      color: ${(props) => props.theme.colors.main};
      font-weight: 700;
    }
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
