import styled from 'styled-components';
import { ErrorMessage } from '@hookform/error-message';
import { FieldErrors, FieldValues, Path } from 'react-hook-form';

interface Props<T> {
  name: Path<T>;
  errors: FieldErrors<FieldValues>;
  margin?: string;
}

export default function ErrorText<T extends FieldValues>({ name, errors, margin }: Props<T>) {
  return (
    <S.ErrorText margin={margin}>
      <ErrorMessage errors={errors} name={name} />
    </S.ErrorText>
  );
}

const S = {
  ErrorText: styled.div<{ margin?: string }>`
    height: 15px;
    font-size: 12px;
    color: ${(props) => props.theme.colors.red};
    margin: ${(props) => (props.margin ? props.margin : '2px 0 0 0')};
  `,
};
