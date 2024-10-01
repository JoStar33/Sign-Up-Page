import { SignUpThreeStepForm } from '@/types/auth';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

export default function SignUpStepThreeCheckAllBox() {
  const { watch, reset } = useFormContext<SignUpThreeStepForm>();
  const agreement1Value = watch('agreement1') === 'Y';
  const agreement2Value = watch('agreement2') === 'Y';
  const agreement3Value = watch('agreement3') === 'Y';
  const agreement4Value = watch('agreement4') === 'Y';
  const isCheckedAll = agreement1Value && agreement2Value && agreement3Value && agreement4Value;
  const handleChangeCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.checked) {
      reset({
        agreement1: 'Y',
        agreement2: 'Y',
        agreement3: 'Y',
        agreement4: 'Y',
      });
      return;
    }
  };
  return (
    <S.SignUpStepThreeCheckAllBox>
      <label className="checkbox">
        <input type="checkbox" checked={isCheckedAll} onChange={handleChangeCheck} />
        <span className="checkbox__label">아래 내용에 모두 동의합니다.</span>
      </label>
    </S.SignUpStepThreeCheckAllBox>
  );
}
const S = {
  SignUpStepThreeCheckAllBox: styled.div`
    .checkbox {
      display: flex;
      margin-bottom: 17px;
      gap: 10px;
      &__label {
        font-weight: 500;
      }
    }
  `,
};
