import styled from 'styled-components';
import Icon from './Icon';
import { flexCenter } from '@/styles/Common';
import { useNavigate } from 'react-router-dom';

export default function FloatBackButton() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <S.FloatBackButton onClick={handleBack}>
      <Icon name="ArrowLeft" width="28px" height="28px" />
    </S.FloatBackButton>
  );
}

const S = {
  FloatBackButton: styled.div`
    width: 58px;
    height: 58px;
    border-radius: 50%;
    margin-bottom: 16px;
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.white};
    box-shadow: rgb(0 0 0 / 5%) 0 0 5px 2px;
    opacity: 0.96;
    position: fixed;
    bottom: 80px;
    ${flexCenter}
  `,
};
