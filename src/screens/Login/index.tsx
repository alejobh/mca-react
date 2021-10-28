/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
import i18next from 'i18next';

import WoloxLogo from 'assets/LogoWolox-Original.png';
import { login } from 'services/LoginService';
import Loading from 'components/Spinner/components/loading';

import { LoginProps, InputsValues, UserFieldIds } from '../../interfaces/interfaces';

import styles from './styles.module.scss';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<InputsValues>();
  const history = useHistory();
  const [notCredentials, setNotCredentials] = useState(false);

  const mutation = useMutation(login, {
    onError: error => {
      console.log(error);
      setNotCredentials(true);
    },
    onSuccess: data => {
      data.headers && window.localStorage.setItem('access-token', data.headers['access-token']);
      history.push('/');
    }
  });

  const onSubmit = (user: LoginProps) => mutation.mutate(user);

  return (
    <div className="column center middle full-width full-height">
      <form className={`m-bottom-2 ${styles.loginForm}`} onSubmit={handleSubmit(onSubmit)}>
        <img
          src={WoloxLogo}
          alt={`${i18next.t('Global:logoWolox')}`}
          className={`m-bottom-3 ${styles.logo}`}
        />
        <div className={`column start m-bottom-3 ${styles.inputContainer}`}>
          <label htmlFor={UserFieldIds.EMAIL} className={`m-bottom-2 ${styles.label}`}>
            {i18next.t('SignUp:email')}
          </label>
          <input
            type="email"
            {...register(UserFieldIds.EMAIL, {
              required: i18next.t('SignUp:required') as string,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: i18next.t('SignUp:invalidFormat') as string
              }
            })}
            className={styles.input}
          />
          {errors.email && <span className={styles.inputError}>{errors.email.message}</span>}
        </div>
        <div className={`column start m-bottom-3 ${styles.inputContainer}`}>
          <label htmlFor={UserFieldIds.PASSWORD} className={`m-bottom-2 ${styles.label}`}>
            {i18next.t('Login:password')}
          </label>
          <input
            type="password"
            {...register(UserFieldIds.PASSWORD, {
              required: i18next.t('SignUp:required') as string,
              pattern: {
                value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^\w\s\d])?.+$/,
                message: i18next.t('SignUp:validFormatPassword') as string
              },
              minLength: {
                value: 8,
                message: i18next.t('SignUp:minLenghtPassword') as string
              }
            })}
            className={styles.input}
          />
          {errors.password && <span className={styles.inputError}>{errors.password.message}</span>}
        </div>
        <button type="submit" className={`m-bottom-3 ${styles.loginButton}`}>
          {mutation.isLoading ? <Loading /> : 'Login'}
        </button>
        <div className={`m-bottom-3 ${styles.line}`} />
        <button type="button" className={styles.loginButtonSecondary} />
      </form>
      {notCredentials && <span className={styles.error}>Credenciales incorrectas</span>}
    </div>
  );
}

export default Login;
