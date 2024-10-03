import ErrorComponent from '@/components/common/ErrorComponent';
import SignUpStepTwoContainer from '@/containers/signUp/SignUpStepTwoContainer';
import { ErrorBoundary } from 'react-error-boundary';

export default function SignUpStepTwoPage() {
  return (
    <ErrorBoundary fallback={<ErrorComponent />}>
      <SignUpStepTwoContainer />
    </ErrorBoundary>
  );
}
