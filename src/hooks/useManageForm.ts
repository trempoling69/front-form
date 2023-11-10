import { z, TypeOf } from 'zod';
import { useQuizContext } from '../context/QuizContext';
import { Form } from '../models/form';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { post } from '../Api/fetchCall';
import { Answer } from '../models/answer';

const useManageForm = (form: Form) => {
  const { currentStep, nextStep, isLastQuestion, setAnswer } = useQuizContext();
  const navigate = useNavigate();

  const buildSchema = (form: Form) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const object: Record<string, any> = {};
    form.fields.slice(0, currentStep + 1).forEach((field) => {
      object[field.name] = z.string().min(1, { message: 'Vous devez sélectionner un champ' });
    });
    return z.object(object);
  };

  const formSchema = buildSchema(form);
  type formType = TypeOf<typeof formSchema>;
  const methods = useForm<formType>({
    resolver: zodResolver(formSchema),
  });

  // const {
  //   formState: { errors },
  // } = methods;
  // console.log(errors);
  const buildAnswerToPost = (values: { [x: string]: string }) => {
    const objAnswer: { [x: string]: string | number | { [x: string]: string } } = {};
    objAnswer['form_id'] = form.id;
    objAnswer['values'] = values;
    return objAnswer;
  };
  const onSubmit: SubmitHandler<formType> = async (values) => {
    console.log(values);
    nextStep();
    if (isLastQuestion) {
      const newAnswer = buildAnswerToPost(values);
      const answer = await post<Answer, any>('/answer', newAnswer);
      console.log(answer.data);
      setAnswer(answer.data);
      const id = answer.data.id;
      navigate(`/result/${id}`);
    }
  };

  return { methods, onSubmit };
};

export default useManageForm;
