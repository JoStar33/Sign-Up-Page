import Icon from '@/components/common/Icon';
import { flexCenter } from '@/styles/Common';
import styled from 'styled-components';

export default function NotFound() {
  return (
    <S.NotFound>
      <Icon width="300px" height="300px" name="NotFoundRobot" />
      <p className="title">페이지를 찾을 수 없습니다!</p>
    </S.NotFound>
  );
}

const S = {
  NotFound: styled.div`
    height: 100%;
    ${flexCenter}
    flex-direction: column;
    .title {
      font-size: 25px;
      margin-top: 20px;
    }
  `,
};
