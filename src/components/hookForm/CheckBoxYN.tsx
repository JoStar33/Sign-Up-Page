import React from 'react';
import { FieldValues, Path, PathValue, useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import ErrorText from '@/components/hookForm/ErrorText';
import Icon from '@/components/common/Icon';

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

  return (
    <S.CheckBoxYN>
      <label className="checkbox">
        <input {...rest} type="checkbox" name={name} checked={watch(name) === 'Y'} onChange={handleChangeCheck} />
        <span className="icon-box">
          <Icon name="CheckOnly" width="16" height="16" />
        </span>
        <span className="checkbox__label">{children}</span>
      </label>
      <ErrorText errors={errors} name={name} />
    </S.CheckBoxYN>
  );
}

const S = {
  CheckBoxYN: styled.div`
    .checkbox {
      cursor: pointer;
      display: flex;
      align-items: center;
      margin-bottom: 5px;
      gap: 10px;
      &__label {
        font-weight: 500;
      }
    }

    input[type='checkbox'] {
      display: none;
    }
    input[type='checkbox'] + span {
      svg {
        display: none;
      }
    }
    input[type='checkbox']:checked + span {
      background-color: ${(props) => props.theme.colors.main};
      border: none;
      svg {
        display: block;
      }
    }
    input[type='checkbox']:disabled + span {
      background-color: #eee;
      border: 1px solid #eee;
    }
    .icon-box {
      height: 18px;
      width: 18px;
      margin-right: 8px;
      border: 1px solid #d0d0d0;
      border-radius: 2px;
      position: relative;
      font-size: 0;
      cursor: pointer;
      svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  `,
};
