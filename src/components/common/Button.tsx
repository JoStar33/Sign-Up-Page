import { colors } from '@/styles/Theme';
import React from 'react';
import styled from 'styled-components';

type ButtonType = 'positiveCancel' | 'negativeCancel' | 'neutral' | 'warning' | 'positive' | 'white' | 'custom';

export interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  margin?: string;
  height?: string;
  cursor?: string;
  fontSize?: string;
  backgroundColor?: keyof typeof colors;
  borderColor?: keyof typeof colors;
  color?: keyof typeof colors;
  borderRadius?: string;
  width?: string;
  disabled?: boolean;
  buttonType?: ButtonType; // 리터럴 타입 추가
  fullMobile?: string;
  children: React.ReactNode;
}

/**
 * 공용 버튼 컴포넌트
 * @param buttonType -
 * - positive: { backgroundColor: black, color: white }
 * - white: { backgroundColor: white, color: black }
 * - positiveCancel: { backgroundColor: black, color: white }
 * - negativeCancel: { border: '1px solid', borderColor: gray, backgroundColor: white, color: gray }
 * - warning: { border: '1px solid', borderColor: black, backgroundColor: gray, color: white }
 * - neutral: { border: '1px solid', borderColor: black, backgroundColor: white, color: black }
 */

export default React.forwardRef<HTMLButtonElement, Props>(function Button(
  {
    margin = '0',
    width = '100%',
    height = '45px',
    cursor = 'pointer',
    borderRadius = '0',
    fontSize = '16px',
    backgroundColor = 'white',
    borderColor = 'white',
    color = 'black',
    disabled,
    buttonType = 'positive',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fullMobile,
    children,
    ...rest
  },
  ref,
) {
  const buttonStyle = (): React.CSSProperties => {
    if (buttonType === 'positiveCancel' || disabled) {
      return {
        backgroundColor: colors.gray,
        color: colors.white,
      };
    }
    if (buttonType === 'positive') {
      return {
        backgroundColor: colors.black,
        color: colors.white,
      };
    }
    if (buttonType === 'neutral') {
      return {
        border: '1px solid',
        borderColor: colors.black,
        backgroundColor: colors.white,
        color: colors.black,
      };
    }
    if (buttonType === 'white') {
      return {
        backgroundColor: colors.white,
        color: colors.black,
      };
    }
    if (buttonType === 'negativeCancel') {
      return {
        border: '1px solid',
        borderColor: colors.gray,
        backgroundColor: colors.white,
        color: colors.gray,
      };
    }
    if (buttonType === 'warning') {
      return {
        border: '1px solid',
        borderColor: colors.black,
        backgroundColor: colors.gray,
        color: colors.white,
      };
    }
    return {
      backgroundColor: colors[backgroundColor],
      borderColor: colors[borderColor],
      color: colors[color],
    };
  };

  return (
    <S.Button
      {...rest}
      ref={ref}
      style={{ ...rest.style, ...buttonStyle(), width, height, cursor, borderRadius, margin, fontSize }}
      disabled={disabled}
    >
      {children}
    </S.Button>
  );
});

const S = {
  Button: styled.button`
    all: unset;
    letter-spacing: 0.5px;
    text-align: center;
    box-sizing: border-box;
  `,
};
