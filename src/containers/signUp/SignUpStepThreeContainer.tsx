import SignUpStepThree from '@/components/signUp/signUpStepThree';
import routerPath from '@/constants/routerPath';
import useSignInDataChecker from '@/hooks/useSignInDataChecker';
import { SignUpThreeStepForm } from '@/types/auth';
import { schema } from '@/utils/validate/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function SignUpStepThreeContainer() {
  const navigate = useNavigate();
  useSignInDataChecker();
  const threeStepMethods = useForm<SignUpThreeStepForm>({
    resolver: yupResolver(schema.signUpThreeStepSchema),
    defaultValues: {
      agreement1: 'N',
      agreement2: 'N',
      agreement3: 'N',
      agreement4: 'N',
    },
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<SignUpThreeStepForm> = (submitData) => {
    console.log(submitData);
    navigate(routerPath.SIGN_UP_COMPLETE);
  };

  return (
    <FormProvider {...threeStepMethods}>
      <SignUpStepThree onSubmit={onSubmit} />
    </FormProvider>
  );
}
