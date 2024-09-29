import React from 'react';
import { useFormContext, Path, FieldValues } from 'react-hook-form';
import ErrorText from './ErrorText';
import { css, styled } from 'styled-components';

interface Props<T extends FieldValues> extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  name: Path<T>;
  label?: string;
  maxLength?: number;
  placeholder?: string;
  isFocusing?: boolean;
  minHeight?: string;
  disabled?: boolean;
  required?: boolean;
  visibleError?: boolean;
}

export default function TextArea<T extends FieldValues>({
  name,
  label,
  maxLength,
  placeholder,
  isFocusing,
  minHeight = '220px',
  visibleError = true,
  required = false,
  disabled,
  ...rest
}: Props<T>) {
  const {
    register,
    setFocus,
    watch,
    formState: { errors },
  } = useFormContext<T>();

  const textAreaWatchValue = watch(name);

  React.useEffect(() => {
    if (isFocusing) {
      setFocus(name);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocusing]);

  return (
    <S.TextArea disabled={disabled}>
      <S.Label required={required}>
        {label}
        <span className="styled-label__required">(필수)</span>
      </S.Label>
      <S.StyledTextArea
        maxLength={maxLength}
        placeholder={placeholder}
        minHeight={minHeight}
        autoComplete="off"
        {...rest}
        {...register(name)}
        disabled={disabled}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {visibleError && <ErrorText errors={errors} name={name} />}
        {maxLength && !disabled && (
          <S.StyledTextCount>
            {textAreaWatchValue ? textAreaWatchValue.length : 0} / {`${maxLength}자`}
          </S.StyledTextCount>
        )}
      </div>
    </S.TextArea>
  );
}

const S = {
  TextArea: styled.div<{ disabled?: boolean }>`
    width: 100%;
  `,
  StyledTextArea: styled.textarea<{ isError?: boolean; minHeight?: string }>`
    width: 100%;
    padding: 10px;
    border: none;
    font-family: 'SUIT';
    min-height: ${(props) => props.minHeight};
    line-height: 18px;
    font-size: 16px;
    width: 100%;
    background-color: ${(props) => props.theme.colors.white};
    border: 1px solid ${(props) => props.theme.colors.modernBlack};
    &::placeholder {
      color: ${(props) => props.theme.colors.modernBlack};
      font-size: 14px;
    }
    ${(props) =>
      props.disabled &&
      css`
        background-color: ${(props) => props.theme.colors.gray};
        border: none;
        color: ${(props) => props.theme.colors.gray};
        -webkit-text-fill-color: currentColor;
        opacity: 1;
      `};
    &:focus {
      border-color: ${(props) => props.theme.colors.deepSkyblue};
      box-shadow: 0 0 5px -1px ${(props) => props.theme.colors.deepSkyblue};
    }
  `,
  StyledTextCount: styled.div`
    margin-top: 5px;
    text-align: right;
    color: ${(props) => props.theme.colors.gray};
    font-size: 12px;
  `,
  Label: styled.label<{ required: boolean }>`
    display: inline-block;
    height: 15px;
    width: auto;
    cursor: default;
    color: ${(props) => props.theme.colors.black};
    font-size: 16px;
    color: ${(props) => props.theme.colors.modernBlack};
    margin-bottom: 7px;
    .styled-label__required {
      display: none;
      ${(props) =>
        props.required &&
        css`
          display: inline;
        `};
      color: ${(props) => props.theme.colors.red};
      margin-left: 2px;
      vertical-align: top;
    }
  `,
};
