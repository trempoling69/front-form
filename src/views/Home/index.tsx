import { useAuthContext } from '../../context/AuthContext';

const Home = () => {
  const { user } = useAuthContext();
  return (
    <div>
      <h1>Je Suis {user?.email}</h1>
      <h3>Ton home</h3>
    </div>
  );
};

export default Home;
