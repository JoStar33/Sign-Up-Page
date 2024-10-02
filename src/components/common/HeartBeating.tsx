import styled from 'styled-components';
import { motion } from 'framer-motion';
import Icon from './Icon';
import { flexCenter } from '@/styles/Common';

const heartBeatingVariants = {
  init: {
    top: '50%',
    left: '50%',
    width: 0,
    height: 0,
  },
  heartBeat: {
    rotate: [-20, 20, -20, 20, -20, 20, -20, 20, -20, 20, -20, 20, 0],
    width: [0, 200, 0],
    x: [0, -100, 0],
    y: [0, -100, 0],
    height: [0, 200, 0],
  },
};

export default function HeartBeating() {
  return (
    <S.HeartBeating
      variants={heartBeatingVariants}
      initial="init"
      animate="heartBeat"
      transition={{
        ease: 'easeIn',
        duration: 1.2,
      }}
    >
      <Icon width="100%" height="100%" name="Heart" />
    </S.HeartBeating>
  );
}

const S = {
  HeartBeating: styled(motion.div)`
    position: fixed;
    ${flexCenter}
  `,
};
