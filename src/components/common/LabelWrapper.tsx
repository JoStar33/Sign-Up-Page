import styled from 'styled-components';

interface Props {
  isHorizontality?: boolean;
  label?: string;
  children: React.ReactNode;
  labelStyle?: React.CSSProperties;
  wrapperStyle?: React.CSSProperties;
}

export default function LabelWrapper({ label, labelStyle, wrapperStyle, isHorizontality = false, children }: Props) {
  const mainStyle: React.CSSProperties = isHorizontality
    ? {
        display: 'flex',
        gap: '20px',
      }
    : {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      };

  return (
    <S.LabelWrapper style={mainStyle}>
      <p className="label-wrapper__label" style={labelStyle}>
        {label}
      </p>
      <div className="label-wrapper__body" style={wrapperStyle}>
        {children}
      </div>
    </S.LabelWrapper>
  );
}

const S = {
  LabelWrapper: styled.div`
    .label-wrapper {
      &__label {
        font-size: 16px;
      }
      &__body {
        display: flex;
        gap: 10px;
      }
    }
  `,
};
