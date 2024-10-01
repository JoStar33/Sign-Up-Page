import React, { KeyboardEventHandler } from 'react';
import styled, { css } from 'styled-components';
import { useFormContext, Path, FieldValues } from 'react-hook-form';
import ErrorText from '@/components/hookForm/ErrorText';
import { colors } from '@/styles/Theme';
import { motion } from 'framer-motion';

interface Props<T> extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  name: Path<T>;
  label?: string;
  className?: string;
  margin?: string;
  required?: boolean;
  disabledValid?: boolean;
  maxWidth?: string;
  height?: string;
  disabled?: boolean;
  color?: string;
  fontSize?: string;
  isFocusing?: boolean;
  enterKey?: boolean;
  readOnly?: boolean;
  visibleError?: boolean;
}

const progressValue: Record<number, { name: string; value: number; color: string }> = {
  0: {
    name: '매우 낮음',
    color: colors.red,
    value: 0,
  },
  1: {
    name: '낮음',
    color: colors.red,
    value: 25,
  },
  2: {
    name: '보통',
    color: colors.orange,
    value: 50,
  },
  3: {
    name: '높음',
    color: colors.green,
    value: 75,
  },
  4: {
    name: '충족',
    color: colors.subMain,
    value: 100,
  },
};

export default function PasswordInput<T extends FieldValues>({
  className,
  margin,
  isFocusing,
  name,
  required,
  label,
  disabled,
  maxWidth,
  height,
  enterKey = false,
  readOnly,
  visibleError = true,
  ...rest
}: Props<T>) {
  const {
    formState: { errors },
    register,
    setFocus,
    watch,
    clearErrors,
  } = useFormContext<T>();

  const watchValue = watch(name);

  const strengthOfCryptographic = () => {
    let count = 0;
    // 대문자 체크
    if (/[A-Z]/.test(watchValue)) count++;
    // 소문자 체크
    if (/[a-z]/.test(watchValue)) count++;
    // 숫자 체크
    if (/\d/.test(watchValue)) count++;
    // 특수문자 체크
    if (/[!@#$%^&*(),.?":{}|<>]/.test(watchValue)) count++;
    return count;
  };

  const handleKeyDown: KeyboardEventHandler = (event) => {
    if (!enterKey && event.key === 'Enter') event.preventDefault();
  };

  React.useEffect(() => {
    if (watchValue && watchValue.length !== 0) clearErrors(name);
  }, [clearErrors, name, watchValue]);

  React.useEffect(() => {
    if (isFocusing) setFocus(name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocusing]);

  return (
    <S.PasswordInput margin={margin} className={className} maxWidth={maxWidth} height={height} disabled={disabled} readOnly={readOnly}>
      <div className="input-container">
        {label && (
          <StyledLabel required={required && !disabled} htmlFor={name}>
            {label}
          </StyledLabel>
        )}

        <input
          id={name}
          className="input-container__content"
          disabled={disabled || readOnly}
          autoComplete="off"
          onKeyDown={handleKeyDown}
          {...register(name)}
          {...rest}
        />
        <div className="input-container__progress-container">
          <div className="input-container__progress-info">
            보안강도:
            <strong style={{ color: progressValue[strengthOfCryptographic()].color }}>
              {progressValue[strengthOfCryptographic()].name}
            </strong>
          </div>
          <div className="input-container__progress-bar-wrapper">
            <motion.div
              className="input-container__progress-bar"
              initial={{
                width: '0%',
              }}
              animate={{
                width: `${progressValue[strengthOfCryptographic()].value}%`,
              }}
              style={{
                backgroundColor: progressValue[strengthOfCryptographic()].color,
              }}
            />
          </div>
        </div>
        {visibleError && <ErrorText errors={errors} name={name} />}
      </div>
    </S.PasswordInput>
  );
}

const S = {
  PasswordInput: styled.div<{ margin?: string; maxWidth?: string; disabled?: boolean; readOnly?: boolean; height?: string }>`
    width: 100%;
    max-width: ${(props) => props.maxWidth};
    margin: ${(props) => (props.margin ? props.margin : '0')};
    .input-container {
      position: relative;
      width: 100%;
      &__content {
        width: 100%;
        font-size: 16px;
        background-color: ${(props) => props.theme.colors.white};
        height: ${(props) => (props.height ? props.height : '40px')};
        padding-left: 10px;
        color: ${(props) => props.theme.colors.modernBlack};
        border: ${(props) => (props.readOnly ? 'none' : `1px solid ${props.theme.colors.black}`)};
        ${(props) =>
          props.disabled &&
          css`
            background-color: #f5f5f5;
            color: #999;
            border: 1px solid #e6e5e5;
          `};
        &::placeholder {
          font-size: 12px;
          color: #a6a6a6;
        }
        &:focus {
          border-color: ${(props) => props.theme.colors.deepSkyblue};
          box-shadow: 0 0 5px -1px ${(props) => props.theme.colors.deepSkyblue};
        }
      }
      &__progress-info {
        width: 150px;
        font-size: 12px;
        font-weight: 500;
        strong {
          font-weight: 700;
          margin-left: 6px;
        }
      }
      &__progress-container {
        display: flex;
        align-items: center;
        max-width: 700px;
      }
      &__progress-bar-wrapper {
        background-color: ${(props) => props.theme.colors.gray};
        height: 15px;
        width: 100%;
      }
      &__progress-bar {
        height: 100%;
      }
    }
  `,
};

const StyledLabel = styled.label<{ required?: boolean; fontSize?: string }>`
  display: inline-block;
  font-weight: 500;
  color: ${(props) => props.theme.colors.modernBlack};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};
  margin-bottom: 5px;
  height: 25px;
  width: auto;
  cursor: default;
  ${(props) =>
    props.required &&
    css`
      &::after {
        content: '*';
        color: ${(props) => props.theme.colors.red};
        margin-left: 2px;
        vertical-align: top;
      }
    `};
`;
