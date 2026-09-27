import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, token, isAuthenticated } = useSelector((state) => state.auth);

  return {
    user,
    token,
    isAuthenticated,
    logoutUser: () => dispatch(logout()),
    hasRole: (role) => user?.roles?.includes(role),
  };
};
