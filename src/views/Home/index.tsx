import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import useGetTheme from '../../hooks/useGetTheme';

const Home = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const { themes } = useGetTheme();
  return (
    <div className="home-page_container">
      {themes.map((theme) => (
        <div className="home-page_theme-card" key={theme.id} onClick={() => navigate(`/form/${theme.id}`)}>
          <img src={theme.photo} alt="" className="home-page_theme-img" />
          <div className="home-page_theme-title">
            <span className="home-page_theme-name">{theme.name}</span>
            <span className="home-page_theme-label">{theme.label}</span>
          </div>
          <div className="shade"></div>
        </div>
      ))}
      {/* <button onClick={() => navigate('/form')} className="button">
        Aller au quiz
      </button> */}
    </div>
  );
};

export default Home;
