import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { RootStore } from '../store';

function RequireAuth({ component: Component }: any) {
  let isAuthenticated = useSelector(
    (state: RootStore) => state.auth.authenticated
  );
  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
}

export default RequireAuth;
