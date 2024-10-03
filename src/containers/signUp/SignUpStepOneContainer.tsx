import CompleteAnimation from '@/components/common/CompleteAnimation';
import SignUpStepOne from '@/components/signUp/signUpStepOne';
import useSignInDataChecker from '@/hooks/useSignInDataChecker';

import { getSignUpDecryptionData, useAuthStore } from '@/stores/auth';
import { SignUpOneStepForm } from '@/types/auth';
import { schema } from '@/utils/validate/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

export default function SignUpStepOneContainer() {
  useSignInDataChecker();
  const [isSuccessAnimateShow, setIsSuccessAnimateShow] = React.useState(false);
  const setStepOneData = useAuthStore((store) => store.setStepOneData);
  const signUpDecryptionData = getSignUpDecryptionData();
  const oneStepMethods = useForm<SignUpOneStepForm>({
    resolver: yupResolver(schema.signUpOneStepSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
    mode: 'onChange',
  });

  React.useEffect(() => {
    oneStepMethods.reset(signUpDecryptionData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit: SubmitHandler<SignUpOneStepForm> = (submitData) => {
    if (isSuccessAnimateShow) return;
    setStepOneData(submitData);
    setIsSuccessAnimateShow(true);
  };

  return (
    <>
      {isSuccessAnimateShow && <CompleteAnimation pathName="SIGN_UP_STEP_TWO" />}
      <FormProvider {...oneStepMethods}>
        <SignUpStepOne onSubmit={onSubmit} />
      </FormProvider>
    </>
  );
}
