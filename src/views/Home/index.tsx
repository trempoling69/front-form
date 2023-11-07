import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

const Home = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  return (
    <div>
      <h1>Je Suis {user?.email}</h1>
      <h3>Ton home</h3>
      <button onClick={() => navigate('/form')}>Aller au quiz</button>
    </div>
  );
};

export default Home;
