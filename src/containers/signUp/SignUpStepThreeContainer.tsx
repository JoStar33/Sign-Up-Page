import { postSignUp } from '@/apis/auth';
import DarkBackground from '@/components/common/DarkBackground';
import SignUpStepThree from '@/components/signUp/signUpStepThree';
import SignUpStepThreeSummitInfo from '@/components/signUp/signUpStepThree/SignUpStepThreeSummationInfo';
import routerPath from '@/constants/routerPath';
import useSignInDataChecker from '@/hooks/useSignInDataChecker';
import { getSignUpDecryptionData, useAuthStore } from '@/stores/auth';
import { useLoadingStore } from '@/stores/loading';
import { SignUpThreeStepForm } from '@/types/auth';
import { schema } from '@/utils/validate/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function SignUpStepThreeContainer() {
  const navigate = useNavigate();
  const signUpDecryptionData = getSignUpDecryptionData();
  const signUpFormData = useAuthStore((state) => state.signUpFormData);
  useSignInDataChecker();
  const { setIsLoading, isLoading } = useLoadingStore();
  const setStepThreeData = useAuthStore((store) => store.setStepThreeData);
  const [isShow, setIsShow] = React.useState(false);
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

  const fetchSignUp = async () => {
    setIsLoading(true);
    setIsShow(false);
    try {
      const response = await postSignUp(signUpFormData);
      if (response.code !== 200) throw new Error(response.message);
      navigate(routerPath.SIGN_UP_COMPLETE, {
        state: response.value,
      });
    } catch {
      navigate(routerPath.SIGN_UP_FAIL);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit: SubmitHandler<SignUpThreeStepForm> = (submitData) => {
    if (isLoading) return;
    setStepThreeData(submitData);
    setIsShow(true);
  };

  React.useEffect(() => {
    if (signUpDecryptionData.agreement === 'Y') {
      threeStepMethods.reset({
        agreement1: 'Y',
        agreement2: 'Y',
        agreement3: 'Y',
        agreement4: 'Y',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AnimatePresence>
        {isShow && (
          <DarkBackground style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <SignUpStepThreeSummitInfo setIsShow={setIsShow} fetchSignUp={fetchSignUp} />
          </DarkBackground>
        )}
      </AnimatePresence>
      <FormProvider {...threeStepMethods}>
        <SignUpStepThree onSubmit={onSubmit} />
      </FormProvider>
    </>
  );
}
