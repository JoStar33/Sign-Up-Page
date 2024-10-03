import ErrorComponent from '@/components/common/ErrorComponent';
import SignUpStepOneContainer from '@/containers/signUp/SignUpStepOneContainer';
import { ErrorBoundary } from 'react-error-boundary';

export default function SignUpStepOnePage() {
  return (
    <ErrorBoundary fallback={<ErrorComponent />}>
      <SignUpStepOneContainer />
    </ErrorBoundary>
  );
}
