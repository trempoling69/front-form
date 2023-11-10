import { useEffect, useState } from 'react';
import { get } from '../Api/fetchCall';
import { Theme } from '../models/theme';

const useGetTheme = () => {
  const [themes, setThemes] = useState<Theme[]>([]);

  useEffect(() => {
    (async () => {
      const reqForm = await get<Theme[]>('/theme');
      setThemes(reqForm.data);
    })();
  }, []);

  return { themes };
};

export default useGetTheme;