import HeartBeating from '@/components/common/HeartBeating';
import SignUpComplete from '@/components/signUp/signUpComplete';
import { useAuthStore } from '@/stores/auth';
import React from 'react';

export default function SignUpCompleteContainer() {
  const resetSignUpFormData = useAuthStore((state) => state.resetSignUpFormData);

  React.useEffect(() => {
    resetSignUpFormData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <SignUpComplete />
      <HeartBeating />
    </>
  );
}
