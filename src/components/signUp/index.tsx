import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

export default function SignUp({ children }: Props) {
  return (
    <S.SignUp>
      <p className="title">클로봇에 오신것을 환영합니다.</p>
      <p className="description">우리는 더 나은 세상을 만들기 위해 노력합니다.</p>
      {children}
    </S.SignUp>
  );
}
const S = {
  SignUp: styled.div``,
};
