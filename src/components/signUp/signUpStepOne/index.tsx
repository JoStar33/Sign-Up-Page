import Button from '@/components/common/Button';
import FormComponent from '@/components/hookForm';
import { SignUpOneStepForm } from '@/types/auth';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import styled from 'styled-components';

interface Props {
  onSubmit: SubmitHandler<SignUpOneStepForm>;
}

export default function SignUpStepOne({ onSubmit }: Props) {
  const { handleSubmit } = useFormContext<SignUpOneStepForm>();

  return (
    <S.SignUpStepOne onSubmit={handleSubmit(onSubmit)}>
      <FormComponent.InputA<SignUpOneStepForm> name="name" label="이름" />
      <FormComponent.InputA<SignUpOneStepForm> name="email" label="이메일" />
      <FormComponent.PasswordInput<SignUpOneStepForm> name="password" label="비밀번호" type="password" />
      <FormComponent.PasswordInput<SignUpOneStepForm> name="passwordConfirm" label="비밀번호 확인" type="password" />
      <Button type="submit">다음</Button>
    </S.SignUpStepOne>
  );
}

const S = {
  SignUpStepOne: styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
};
