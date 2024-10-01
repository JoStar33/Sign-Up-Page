import Button from '@/components/common/Button';
import SignUp from '@/components/signUp';
import routerPath from '@/constants/routerPath';
import { useNavigate } from 'react-router-dom';
export default function SignUpContainer() {
  const navigate = useNavigate();

  const handleNextStep = () => {
    navigate(routerPath.SIGN_UP_STEP_ONE);
  };

  return (
    <SignUp>
      <Button onClick={handleNextStep}>회원가입 시작하기</Button>
    </SignUp>
  );
}
