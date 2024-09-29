import { Route, Routes } from 'react-router-dom';
import routerPath from '@/constants/routerPath';
import HomePage from '@/pages';
import { PublicRoute } from '@/components/routes/PublicRoute';
import { PrivateRoute } from '@/components/routes/PrivateRoute';
import SignUpPage from '@/pages/signUp';

export default function Router() {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path={routerPath.SIGN_UP} element={<SignUpPage />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path={routerPath.HOME} element={<HomePage />} />
      </Route>
    </Routes>
  );
}
