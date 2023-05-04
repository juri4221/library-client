import { useFetch } from './useFetch';
import { useAppContext } from '../contexts/AppContext';
import { routeMap } from '../routes/routeMap';
import { useNavigate } from 'react-router-dom';

export const useAuthenticate = () => {
  const navigate = useNavigate();
  const { setToken } = useAppContext();
  const { fetch, isError, isLoading, errorMessage } = useFetch(false);

  const signOut = () => {
    localStorage.removeItem('authToken');
    setToken(null);
  };

  const signIn = (userName: string, password: string) => {
    fetch<string>({
      method: 'POST',
      url: 'SignIn',
      data: {
        userName,
        password,
      },
    })
      .then(({ data: token }) => {
        localStorage.setItem('authToken', token);
        setToken(token);
      })
      .then(() => {
        navigate(routeMap.home, { replace: true });
      });
  };

  return {
    signIn,
    signOut,
    isError,
    isLoading,
    errorMessage,
  };
};
