import Icon from '@/components/common/Icon';
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
    reset({
      agreement1: 'N',
      agreement2: 'N',
      agreement3: 'N',
      agreement4: 'N',
    });
  };

  return (
    <S.SignUpStepThreeCheckAllBox>
      <label className="checkbox">
        <input type="checkbox" checked={isCheckedAll} onChange={handleChangeCheck} />
        <span className="icon-box">
          <Icon name="CheckOnly" width="16" height="16" />
        </span>
        <span className="checkbox__label">아래 내용에 모두 동의합니다.</span>
      </label>
    </S.SignUpStepThreeCheckAllBox>
  );
}
const S = {
  SignUpStepThreeCheckAllBox: styled.div`
    .checkbox {
      display: flex;
      align-items: center;
      cursor: pointer;
      margin-bottom: 17px;
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
