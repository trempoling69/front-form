import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { get } from '../../Api/fetchCall';
import { Answer } from '../../models/answer';

const Result = () => {
  const { id } = useParams();
  const [answer, setAnswer] = useState<Answer>();
  useEffect(() => {
    if (id) {
      (async () => {
        const result = await get<Answer>(`/answer/${id}`);
        setAnswer(result.data);
      })();
    }
  }, [id]);
  return (
    <div className="result_container">
      <h1>Resultat</h1>
      <span>{answer?.profil}</span>
    </div>
  );
};

export default Result;
