import routerPath from '@/constants/routerPath';
import { getSignUpDecryptionData } from '@/stores/auth';
import { schema } from '@/utils/validate/schema';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function useSignInDataChecker() {
  const navigate = useNavigate();
  const signUpDecryptionData = getSignUpDecryptionData();
  const { pathname } = useLocation();

  const routeIntoUserWriteOut = async () => {
    const isStepTwo = pathname.includes(routerPath.SIGN_UP_STEP_TWO);
    const isStepThree = pathname.includes(routerPath.SIGN_UP_STEP_THREE);
    const isValidOneStep = await schema.signUpOneStepSchema.isValid(signUpDecryptionData);
    // 회원가입 1차스탭를 통과하지 못했는데 2차스탭 or 3차스탭을 접근하려고 시도한다면 >> 강제로 1차스탭으로 이동
    if ((!isValidOneStep && isStepTwo) || (!isValidOneStep && isStepThree)) {
      return navigate(routerPath.SIGN_UP_STEP_ONE, { replace: true });
    }
    const isValidTwoStep = await schema.signUpTwoStepSchema.isValid(signUpDecryptionData);
    // 회원가입 1차스탭를 통과했으나 회원가입 2차스탭를 통과하지못한 상태에서 3차스탭을 접근하려고 시도한다면 >> 강제로 2차스탭으로 이동
    if (!isValidTwoStep && isStepThree) {
      return navigate(routerPath.SIGN_UP_STEP_TWO, { replace: true });
    }
  };

  React.useEffect(() => {
    routeIntoUserWriteOut();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
