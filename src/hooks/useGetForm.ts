import { useEffect, useState } from 'react';
import { get } from '../Api/fetchCall';
import { Form } from '../models/form';

const useGetForm = (themeId: string | undefined) => {
  const [form, setForm] = useState<Form>();

  useEffect(() => {
    if (themeId) {
      (async () => {
        const reqForm = await get<Form>(`/form/${themeId}`);
        setForm(reqForm.data);
      })();
    }
  }, [themeId]);

  return { form };
};

export default useGetForm;
