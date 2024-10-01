import Button from '@/components/common/Button';
import FormComponent from '@/components/hookForm';
import { SignUpThreeStepForm } from '@/types/auth';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import SignUpStepThreeCheckAllBox from './SignUpStepThreeCheckAllBox';

interface Props {
  onSubmit: SubmitHandler<SignUpThreeStepForm>;
}

export default function SignUpStepThree({ onSubmit }: Props) {
  const { handleSubmit } = useFormContext<SignUpThreeStepForm>();

  /**TODO: 전체동의 체크박스 만들기 */
  /**TODO: 동의 문구 개선하기 */
  return (
    <S.SignUpStepThree onSubmit={handleSubmit(onSubmit)}>
      <SignUpStepThreeCheckAllBox />
      <FormComponent.CheckBoxYN<SignUpThreeStepForm> name="agreement1">(필수) 만 14세 이상입니다.</FormComponent.CheckBoxYN>
      <FormComponent.CheckBoxYN<SignUpThreeStepForm> name="agreement2">(필수) 개인정보 수집이용동의</FormComponent.CheckBoxYN>
      <FormComponent.CheckBoxYN<SignUpThreeStepForm> name="agreement3">(필수) 개인정보 처리 위탁동의</FormComponent.CheckBoxYN>
      <FormComponent.CheckBoxYN<SignUpThreeStepForm> name="agreement4">(필수) 개인정보 열람동의</FormComponent.CheckBoxYN>
      <Button type="submit">회원가입하기</Button>
    </S.SignUpStepThree>
  );
}
const S = {
  SignUpStepThree: styled.form``,
};
