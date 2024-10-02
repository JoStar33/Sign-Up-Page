import HeartBeating from '@/components/common/HeartBeating';
import SignUpComplete from '@/components/signUp/signUpComplete';
import routerPath from '@/constants/routerPath';
import { useAuthStore } from '@/stores/auth';
import { storage } from '@/utils/storage';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function SignUpCompleteContainer() {
  const navigate = useNavigate();
  const resetSignUpFormData = useAuthStore((state) => state.resetSignUpFormData);
  const data = useLocation().state;

  React.useEffect(() => {
    if (!data || typeof data !== 'string') return navigate(routerPath.SIGN_UP);
    storage.setAccessTokenLocalStorage(data);
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
