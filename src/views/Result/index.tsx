import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { get } from '../../Api/fetchCall';
import { AnswerResponse } from '../../models/answer';

const Result = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [answer, setAnswer] = useState<AnswerResponse>();
  useEffect(() => {
    if (id) {
      (async () => {
        const result = await get<AnswerResponse>(`/answer/${id}`);
        setAnswer(result.data);
      })();
    }
  }, [id]);
  return (
    <div className="result-page_container">
      <span className="result-page_title">Vous êtes :</span>
      <div className="result-page_img-container">
        <img src={answer?.celebrity.photo} alt="" className="result-page_img" />
        <div className="result-page_details">
          <span className="result-page_name">{answer?.celebrity.name}</span>
          <span className="result-page_description">{answer?.celebrity.description}</span>
        </div>
        <div className="shade"></div>
      </div>
      <div>
        <button className="result-page_reload" onClick={() => navigate(`/form/${answer?.celebrity.theme_id}`)}>
          Refaire le test{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2.5 2v6h6M2.66 15.57a10 10 0 1 0 .57-8.38" />
          </svg>
        </button>
        <button className="result-page_reload other" onClick={() => navigate('/home')}>
          Faire un autre test
        </button>
      </div>
      <div className="result-page_social">
        <a href="https://akanema.fr/" target="_blank" rel="noreferrer">
          <svg
            data-name="Layer 1"
            id="Layer_1"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            className="result-page_icon"
          >
            <path d="M16,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30ZM16,4A12,12,0,1,0,28,16,12,12,0,0,0,16,4Z" />
            <path d="M16,30a1,1,0,0,1-1-1V3a1,1,0,0,1,2,0V29A1,1,0,0,1,16,30Z" />
            <path d="M23,17a1,1,0,0,1-1-1c0-6.5-2.75-12-6-12a1,1,0,0,1,0-2c4.49,0,8,6.15,8,14A1,1,0,0,1,23,17Z" />
            <path d="M16,30a1,1,0,0,1,0-2c3.25,0,6-5.5,6-12a1,1,0,0,1,2,0C24,23.85,20.49,30,16,30Z" />
            <path d="M9,17a1,1,0,0,1-1-1C8,8.15,11.51,2,16,2a1,1,0,0,1,0,2c-3.25,0-6,5.5-6,12A1,1,0,0,1,9,17Z" />
            <path d="M16,30c-4.49,0-8-6.15-8-14a1,1,0,0,1,2,0c0,6.5,2.75,12,6,12a1,1,0,0,1,0,2Z" />
            <path d="M29,17H3a1,1,0,0,1,0-2H29a1,1,0,0,1,0,2Z" />
            <path d="M27,11H5A1,1,0,0,1,5,9H27a1,1,0,0,1,0,2Z" />
            <path d="M27,23H5a1,1,0,0,1,0-2H27a1,1,0,0,1,0,2Z" />
          </svg>
        </a>
        <a href="https://www.instagram.com/akanema.france/" target="_blank" rel="noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000" className="result-page_icon">
            <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
          </svg>
        </a>
        <a href="https://fr.linkedin.com/company/akanema-fr" target="_blank" rel="noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000" className="result-page_icon">
            <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Result;
