import { motion } from 'framer-motion';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

export default function SignUpStepTitle({ children }: Props) {
  return (
    <S.SignUpStepTitle className="title" initial={{ opacity: 0 }} animate={{ x: [-20, 0], opacity: [0, 1] }}>
      {children}
    </S.SignUpStepTitle>
  );
}

const S = {
  SignUpStepTitle: styled(motion.p)`
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 40px;
  `,
};
