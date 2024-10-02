import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';
import Line from '@/components/common/Line';
import { useAuthStore } from '@/stores/auth';
import { motion } from 'framer-motion';
import styled from 'styled-components';

interface Props {
  fetchSignUp: () => void;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const modalVariants = {
  hidden: {
    opacity: 0,
    y: '-100%',
    // x: '100%',
  },
  visible: {
    opacity: 1,
    y: '0%',
    // x: '100%',
    transition: {
      stiffness: 150,
      mass: 0.4,
      damping: 10,
      type: 'spring',
    },
  },
};

export default function SignUpStepThreeSummitInfo({ setIsShow, fetchSignUp }: Props) {
  const signUpFormData = useAuthStore((state) => state.signUpFormData);
  const handleClose = () => {
    setIsShow(false);
  };
  const handleSignUp = () => {
    fetchSignUp();
  };
  return (
    <S.SignUpStepThreeSummitInfo variants={modalVariants} animate="visible" initial="hidden" exit="hidden">
      <div className="modal__header">
        <p className="modal__header__title">회원가입을 하시겠습니까?</p>
        <Icon name="Close2" width="28px" height="28px" onClick={handleClose} />
      </div>
      <Line isVertical={false} height="1px" />
      <div className="modal__body">
        <p className="modal__body__sub-title">아래 정보가 맞는지 다시한번만 확인해주세요.</p>
        <div className="modal__body__user-info">👨{signUpFormData.name}</div>
        <div className="modal__body__user-info">📒{signUpFormData.email}</div>
        <div className="modal__body__user-info">📱{signUpFormData.phoneNumber.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')}</div>
        <div className="modal__body__user-info">🏠{signUpFormData.address}</div>
        <div className="modal__body__user-info">✨{signUpFormData.addressDetail}</div>
      </div>
      <Button onClick={handleSignUp}>회원가입 진행</Button>
    </S.SignUpStepThreeSummitInfo>
  );
}

const S = {
  SignUpStepThreeSummitInfo: styled(motion.div)`
    width: 100%;
    max-width: 500px;
    margin: 15px;
    height: 600px;
    border-radius: 10px;
    background-color: white;
    padding: 0px 15px;
    .modal {
      &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 0px;
        &__title {
          font-weight: 600;
          font-size: 30px;
          margin-top: 10px;
        }
        &__mock {
          width: 28px;
          height: 28px;
        }
      }
      &__body {
        height: calc(100% - 130px);
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-top: 20px;
        &__sub-title {
          font-size: 12px;
          font-weight: 600;
        }
        &__user-info {
          font-size: 25px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          strong {
            font-weight: 700;
            font-size: 15px;
          }
        }
      }
    }
  `,
};
