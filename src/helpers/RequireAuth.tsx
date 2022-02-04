import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';
import { RootStore } from '../store';

function RequireAuth({ component: Component, ...props }: any) {
  const location = useLocation();

  let isAuthenticated = useSelector(
    (state: RootStore) => state.auth.authenticated
  );

  return isAuthenticated ? (
    <Component />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}

export default RequireAuth;
