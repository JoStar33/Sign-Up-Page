import React from 'react';
import { FieldValues, Path, PathValue, useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import ErrorText from './ErrorText';

interface Props<T extends FieldValues> extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  name: Path<T>;
  children: React.ReactNode;
}

export default function CheckBoxYN<T extends FieldValues>({ children, name, ...rest }: Props<T>) {
  const {
    formState: { errors },
    setValue,
    watch,
  } = useFormContext<T>();

  const handleChangeCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(name, (event.currentTarget.checked ? 'Y' : 'N') as PathValue<T, Path<T>>);
  };
  /**TODO: 더 세련된 형태로 체크박스 수정하기 */
  return (
    <S.CheckBoxYN>
      <label className="checkbox">
        <input {...rest} type="checkbox" name={name} checked={watch(name) === 'Y'} onChange={handleChangeCheck} />
        <span className="checkbox__label">{children}</span>
      </label>
      <ErrorText errors={errors} name={name} />
    </S.CheckBoxYN>
  );
}

const S = {
  CheckBoxYN: styled.div`
    .checkbox {
      display: flex;
      margin-bottom: 5px;
      gap: 10px;
      &__label {
        font-weight: 500;
      }
    }
  `,
};
