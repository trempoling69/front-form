import { useEffect } from 'react';
import { useQuizContext } from '../../context/QuizContext';
import QuestionField from '../QuestionField';
import { Form } from '../../models/form';
import { useForm, FormProvider } from 'react-hook-form';
import useManageForm from '../../hooks/useManageForm';

const DisplayField = ({ form }: { form: Form }) => {
  const { currentStep, setFormLength, previousStep } = useQuizContext();
  const { methods, onSubmit } = useManageForm(form);
  useEffect(() => {
    setFormLength(form.fields.length);
  }, [form]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <QuestionField field={form.fields[currentStep]} />
        <button type="button" onClick={previousStep}>
          précédent
        </button>
        <button type="submit">suivant</button>
      </form>
    </FormProvider>
  );
};

export default DisplayField;
