import styled from 'styled-components';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import routerPath from '@/constants/routerPath';

interface IFallbackProps {
  margin?: string;
  padding?: string;
  height?: string;
}

export default function ErrorComponent({ margin, padding, height }: IFallbackProps) {
  const navigate = useNavigate();

  const handleMoveToHome = () => {
    navigate(routerPath.HOME);
  };

  return (
    <S.ErrorComponent padding={padding} margin={margin} height={height}>
      <div>
        <StyledTitle>잠시 후 다시시도해주세요</StyledTitle>
        <div className="error-detail">
          <p>
            알 수 없는 에러가
            <br />
            발생했습니다.
          </p>
          <Button onClick={handleMoveToHome}>홈으로</Button>
        </div>
      </div>
    </S.ErrorComponent>
  );
}

const StyledTitle = styled.h1`
  color: var(--171717, #171717);
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.5px;
  margin-bottom: 20px;
`;

const S = {
  ErrorComponent: styled.div<{ padding?: string; margin?: string; height?: string }>`
    text-align: center;
    padding: ${(props) => (props.padding ? props.padding : '120px 0')};
    height: ${(props) => (props.height ? props.height : 'auto')};
    margin: ${(props) => props.margin};
    width: 100%;
    .error-detail {
      color: ${(props) => props.theme.colors.gray};
      font-size: 16px;
      font-weight: 500;
      line-height: 28px; /* 175% */
    }
  `,
};
