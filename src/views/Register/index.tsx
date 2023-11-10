import { useForm, SubmitHandler } from 'react-hook-form';
import { z, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ErrorMessage } from '@hookform/error-message';
import { post } from '../../Api/fetchCall';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
type User = {
  id: number;
  name: string;
  email: string;
  updated_at: string;
  created_at: string;
};
const Register = () => {
  const [errorRegister, setErrorRegister] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const registerSchema = z.object({
    name: z.string().min(1, { message: 'obligatoire' }),
    email: z.string().email().min(1, { message: 'obligatoire' }),
    password: z.string().min(8, { message: 'obligatoire et + 8 caractères' }),
  });

  type InputRegister = TypeOf<typeof registerSchema>;
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<InputRegister>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<InputRegister> = (data) => {
    post<User, InputRegister>('/register', data)
      .then((response) => {
        console.log(response);
        navigate('/home');
      })
      .catch((err) => {
        setErrorRegister(true);
        setErrorMessage(err.message);
      });
  };
  return (
    <div className="page-login_container">
      <div className="magicpattern"></div>
      <div className="magicpattern2"></div>
      <div className="magicpattern3"></div>
      <div className="magicpattern4"></div>
      <div className="login-container">
        <div className="form-login_container">
          <h2 className="form-login_title">Créer un compte</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="form-login_form">
            <div className="form-login_input-group">
              <input type="text" className="form-login_input" placeholder="nom" {...register('name')} />
              <ErrorMessage
                name="name"
                errors={errors}
                render={({ message }) => <div className="form_error-message">{message}</div>}
              />
            </div>
            <div className="form-login_input-group">
              <input type="text" className="form-login_input" placeholder="email" {...register('email')} />
              <ErrorMessage
                name="email"
                errors={errors}
                render={({ message }) => <div className="form_error-message">{message}</div>}
              />
            </div>
            <div className="form-login_input-group">
              <input
                type="password"
                className="form-login_input"
                placeholder="mot de passe"
                {...register('password')}
              />
              <ErrorMessage
                name="password"
                errors={errors}
                render={({ message }) => <div className="form_error-message">{message}</div>}
              />
            </div>
            <button type="submit" className="form-login_submit">
              s'inscrire
            </button>
            <button type="button" onClick={() => navigate('/login')} className="form-login_to-register">
              Se connecter
            </button>
          </form>
          {errorRegister && <h2 className="form_error_submit-message">{errorMessage}</h2>}
        </div>
      </div>
    </div>
  );
};

export default Register;
