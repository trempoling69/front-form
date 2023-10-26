import { useEffect, useState } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

const AuthLayout = () => {
  const { isLogin, getUser } = useAuthContext();
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    const fetchUser = async () => {
      try {
        await getUser();
        setLoading(false);
      } catch (err) {
        navigate('/login');
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (loading) {
    return <div>Chargement</div>;
  }
  if (isLogin) {
    return <Outlet />;
  } else {
    return <Navigate to={'/login'} replace />;
  }
};

export default AuthLayout;
