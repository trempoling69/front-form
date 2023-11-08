import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

const Home = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  return (
    <div className='home-page_container'>
      <button onClick={() => navigate('/form')} className='button'>Aller au quiz</button>
    </div>
  );
};

export default Home;
