import CompleteAnimation from '@/components/common/CompleteAnimation';
import SignUpStepTwo from '@/components/signUp/signUpStepTwo';
import useSignInDataChecker from '@/hooks/useSignInDataChecker';
import { getSignUpDecryptionData, useAuthStore } from '@/stores/auth';
import { SignUpTwoStepForm } from '@/types/auth';
import { schema } from '@/utils/validate/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

export default function SignUpStepTwoContainer() {
  const [isSuccessAnimateShow, setIsSuccessAnimateShow] = React.useState(false);
  useSignInDataChecker();
  const signUpDecryptionData = getSignUpDecryptionData();
  const setStepTwoData = useAuthStore((store) => store.setStepTwoData);
  const twoStepMethods = useForm<SignUpTwoStepForm>({
    resolver: yupResolver(schema.signUpTwoStepSchema),
    defaultValues: {
      phoneNumber: '',
      address: '',
      addressDetail: '',
    },
    mode: 'onChange',
  });

  React.useEffect(() => {
    twoStepMethods.reset(signUpDecryptionData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit: SubmitHandler<SignUpTwoStepForm> = (submitData) => {
    if (isSuccessAnimateShow) return;
    setStepTwoData(submitData);
    setIsSuccessAnimateShow(true);
  };

  return (
    <>
      {isSuccessAnimateShow && <CompleteAnimation pathName="SIGN_UP_STEP_THREE" />}
      <FormProvider {...twoStepMethods}>
        <SignUpStepTwo onSubmit={onSubmit} />
      </FormProvider>
    </>
  );
}
