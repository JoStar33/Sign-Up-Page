import SignUpStepOne from '@/components/signUp/signUpStepOne';
import routerPath from '@/constants/routerPath';
import useSignInDataChecker from '@/hooks/useSignInDataChecker';

import { useAuthStore } from '@/stores/auth';
import { SignUpOneStepForm } from '@/types/auth';
import { schema } from '@/utils/validate/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function SignUpStepOneContainer() {
  const navigate = useNavigate();
  useSignInDataChecker();
  const setStepOneData = useAuthStore((store) => store.setStepOneData);
  const signUpFormData = useAuthStore((store) => store.signUpFormData);
  const oneStepMethods = useForm<SignUpOneStepForm>({
    resolver: yupResolver(schema.signUpOneStepSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
  });

  React.useEffect(() => {
    oneStepMethods.reset(signUpFormData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit: SubmitHandler<SignUpOneStepForm> = (submitData) => {
    setStepOneData(submitData);
    navigate(routerPath.SIGN_UP_STEP_TWO);
  };

  return (
    <FormProvider {...oneStepMethods}>
      <SignUpStepOne onSubmit={onSubmit} />
    </FormProvider>
  );
}
