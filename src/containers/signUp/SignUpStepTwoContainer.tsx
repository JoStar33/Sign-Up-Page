import SignUpStepTwo from '@/components/signUp/signUpStepTwo';
import routerPath from '@/constants/routerPath';
import useSignInDataChecker from '@/hooks/useSignInDataChecker';
import { useAuthStore } from '@/stores/auth';
import { SignUpTwoStepForm } from '@/types/auth';
import { schema } from '@/utils/validate/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function SignUpStepTwoContainer() {
  const navigate = useNavigate();
  useSignInDataChecker();
  const setStepTwoData = useAuthStore((store) => store.setStepTwoData);
  const signUpFormData = useAuthStore((store) => store.signUpFormData);
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
    twoStepMethods.reset(signUpFormData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit: SubmitHandler<SignUpTwoStepForm> = (submitData) => {
    setStepTwoData(submitData);
    navigate(routerPath.SIGN_UP_STEP_THREE);
  };

  return (
    <FormProvider {...twoStepMethods}>
      <SignUpStepTwo onSubmit={onSubmit} />
    </FormProvider>
  );
}
