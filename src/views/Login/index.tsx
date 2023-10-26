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
const Login = () => {
  const [errorLogin, setErrorLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const loginSchema = z.object({
    email: z.string().email().min(1, { message: 'obligatoire' }),
    password: z.string().min(1, { message: 'obligatoire' }),
  });

  type InputLogin = TypeOf<typeof loginSchema>;
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<InputLogin>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<InputLogin> = (data) => {
    post<User, InputLogin>('/login', data)
      .then((response) => {
        console.log(response);
        navigate('/home');
      })
      .catch((err) => {
        setErrorLogin(true);
        setErrorMessage(err.message);
      });
  };
  return (
    <div className="page-login_container">
      <div className="login-container">
        <div className="form-login_container">
          <h2 className="form-login_title">Se connecter</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="form-login_form">
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
            <button className="form-login_submit">se connecter</button>
          </form>
          {errorLogin && <h2 className="form_error_submit-message">{errorMessage}</h2>}
        </div>
      </div>
    </div>
  );
};

export default Login;
