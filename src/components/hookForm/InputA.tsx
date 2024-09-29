import React, { KeyboardEventHandler } from 'react';
import styled, { css } from 'styled-components';
import { useFormContext, Path, FieldValues } from 'react-hook-form';
import { useHookFormMask } from 'use-mask-input';
import ErrorText from '@/components/hookForm/ErrorText';

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
  mask?: string[];
  color?: string;
  fontSize?: string;
  isFocusing?: boolean;
  enterKey?: boolean;
  readOnly?: boolean;
  visibleError?: boolean;
}

export default function InputA<T extends FieldValues>({
  className,
  margin,
  isFocusing,
  name,
  required,
  label,
  disabled,
  maxWidth,
  height,
  mask,
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
  const registerWithMask = useHookFormMask(register);

  const watchValue = watch(name);

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
    <S.InputA margin={margin} className={className} maxWidth={maxWidth} height={height} disabled={disabled} readOnly={readOnly}>
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
          {...(mask ? registerWithMask(name, mask, { autoUnmask: true }) : register(name))}
          {...rest}
        />
        {visibleError && <ErrorText errors={errors} name={name} />}
      </div>
    </S.InputA>
  );
}

const S = {
  InputA: styled.div<{ margin?: string; maxWidth?: string; disabled?: boolean; readOnly?: boolean; height?: string }>`
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
