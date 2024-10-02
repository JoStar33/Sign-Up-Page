import routerPath from '@/constants/routerPath';
import { flexCenter } from '@/styles/Common';
import { motion } from 'framer-motion';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '@/components/common/Icon';

interface Props {
  pathName: keyof typeof routerPath;
}

const ANIMATE_OVER = 2000;

export default function CompleteAnimation({ pathName }: Props) {
  const navigate = useNavigate();
  React.useEffect(function animateOverEffect() {
    setTimeout(() => {
      navigate(routerPath[pathName]);
    }, ANIMATE_OVER);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <S.CompleteAnimation>
      <motion.div
        className="good-text"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: [0, 1],
        }}
      >
        STEP CLEAR!
      </motion.div>
      <motion.div
        className="check-animate-container"
        initial={{
          width: 0,
          height: 0,
        }}
        animate={{
          width: [0, 100],
          height: [0, 100],
        }}
      >
        <Icon width="100%" height="100%" name="Check" />
      </motion.div>
    </S.CompleteAnimation>
  );
}

const S = {
  CompleteAnimation: styled.div`
    position: fixed;
    transform: translate3d(-50%, -50%, 0);
    left: 50%;
    width: 100%;
    height: 100%;
    z-index: 10;
    top: 50%;
    ${flexCenter}
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.1);
    .good-text {
      position: absolute;
      width: 100%;
      text-align: center;
      font-weight: 600;
      font-size: 24px;
      top: calc(50% - 90px);
      color: ${(props) => props.theme.colors.white};
    }
  `,
};
