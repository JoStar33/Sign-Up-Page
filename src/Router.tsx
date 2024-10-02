import { Route, Routes } from 'react-router-dom';
import routerPath from '@/constants/routerPath';
import HomePage from '@/pages';
import { PublicRoute } from '@/components/routes/PublicRoute';
import { PrivateRoute } from '@/components/routes/PrivateRoute';
import SignUpPage from '@/pages/signUp';
import SignUpStepOnePage from '@/pages/signUp/SignUpStepOnePage';
import SignUpStepTwoPage from '@/pages/signUp/SignUpStepTwoPage';
import SignUpStepThreePage from '@/pages/signUp/SignUpStepThreePage';
import SignUpCompletePage from '@/pages/signUp/SignUpCompletePage';
import NotFound from '@/pages/NotFound';
import SignUpFailPage from './pages/signUp/SignUpFail';

export default function Router() {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path={routerPath.SIGN_UP} element={<SignUpPage />} />
        <Route path={routerPath.SIGN_UP_STEP_ONE} element={<SignUpStepOnePage />} />
        <Route path={routerPath.SIGN_UP_STEP_TWO} element={<SignUpStepTwoPage />} />
        <Route path={routerPath.SIGN_UP_STEP_THREE} element={<SignUpStepThreePage />} />
        <Route path={routerPath.SIGN_UP_FAIL} element={<SignUpFailPage />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path={routerPath.HOME} element={<HomePage />} />
      </Route>
      <Route path={routerPath.SIGN_UP_COMPLETE} element={<SignUpCompletePage />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
