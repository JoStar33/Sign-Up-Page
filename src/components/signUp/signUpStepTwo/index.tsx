import Button from '@/components/common/Button';
import FormComponent from '@/components/hookForm';
import { SignUpTwoStepForm } from '@/types/auth';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import styled from 'styled-components';

interface Props {
  onSubmit: SubmitHandler<SignUpTwoStepForm>;
}

export default function SignUpStepTwo({ onSubmit }: Props) {
  const { handleSubmit } = useFormContext<SignUpTwoStepForm>();

  return (
    <S.SignUpStepTwo onSubmit={handleSubmit(onSubmit)}>
      <FormComponent.InputA<SignUpTwoStepForm> name="address" label="주소" />
      <FormComponent.InputA<SignUpTwoStepForm> name="addressDetail" label="상세주소" />
      <FormComponent.InputA<SignUpTwoStepForm> name="phoneNumber" label="핸드폰 번호" mask={['999-9999-9999']} />
      <Button type="submit">다음</Button>
    </S.SignUpStepTwo>
  );
}

const S = {
  SignUpStepTwo: styled.form``,
};
