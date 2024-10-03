import ErrorComponent from '@/components/common/ErrorComponent';
import SignUpStepThreeContainer from '@/containers/signUp/SignUpStepThreeContainer';
import { ErrorBoundary } from 'react-error-boundary';

export default function SignUpStepThreePage() {
  return (
    <ErrorBoundary fallback={<ErrorComponent />}>
      <SignUpStepThreeContainer />
    </ErrorBoundary>
  );
}
