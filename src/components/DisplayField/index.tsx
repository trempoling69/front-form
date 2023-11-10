import { useEffect, useRef, useState } from 'react';
import { useQuizContext } from '../../context/QuizContext';
import QuestionField from '../QuestionField';
import { Form } from '../../models/form';
import { FormProvider } from 'react-hook-form';
import useManageForm from '../../hooks/useManageForm';
import ProgressBar from '../ProgressBar';

const DisplayField = ({ form }: { form: Form }) => {
  const { currentStep, setFormLength } = useQuizContext();
  const formRef = useRef<HTMLFormElement>(null);
  const [progress, setProgress] = useState<number>(0);
  const { methods, onSubmit } = useManageForm(form);

  useEffect(() => {
    console.log('hhr');
    setFormLength(form.fields.length);
  }, [form, setFormLength]);

  useEffect(() => {
    const prog = (currentStep / form.fields.length) * 100;
    setProgress(prog);
  }, [currentStep]);

  const {
    formState: { errors },
  } = methods;
  console.log(errors);

  const handleRadioButtonClick = () => {
    console.log('hh');
    methods.handleSubmit(onSubmit)();
  };
  return (
    <FormProvider {...methods}>
      {/* <span className="form-page_title-form">{form.title}</span> */}
      <ProgressBar pourcent={progress} />
      <form onSubmit={methods.handleSubmit(onSubmit)} className="form-page_container-form" ref={formRef}>
        <QuestionField field={form.fields[currentStep]} handleRadioButtonClick={handleRadioButtonClick} />
        {/* <button type="button" onClick={previousStep}>
          précédent
        </button>
        <button type="submit">suivant</button> */}
      </form>
    </FormProvider>
  );
};

export default DisplayField;
