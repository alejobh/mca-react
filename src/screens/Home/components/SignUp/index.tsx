import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import i18next from 'i18next';

import { signUp, UserForm } from 'services/UserService';
import { useLazyRequest } from 'hooks/useRequest';
import Loading from 'components/Spinner/components/loading';

import WoloxLogo from '../../assets/LogoWolox-Original.png';

import styles from './styles.module.scss';

type InputsValues = {
  user: UserForm;
};

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<InputsValues>();
  const [formSent, setFormSent] = useState(false);

  const handleFormSuccess = useCallback(() => {
    setFormSent(true);
  }, []);

  const [, loading, , requestSignUp] = useLazyRequest({
    request: signUp,
    withPostSuccess: handleFormSuccess
  });

  const onSubmit = useCallback(
    data => {
      requestSignUp(data.user);
    },
    [requestSignUp]
  );

  return (
    <div className="column center middle full-width">
      {formSent && <div>Error</div>}
      <form className={styles.signUpForm} onSubmit={handleSubmit(onSubmit)}>
        <img src={WoloxLogo} className={`m-bottom-3 ${styles.logo}`} />
        <div className={`column start m-bottom-3 ${styles.inputContainer}`}>
          <label className={`m-bottom-2 ${styles.label}`}>{i18next.t('SignUp:firstName')}</label>
          <input
            {...register('user.first_name', { required: i18next.t('SignUp:required') as string })}
            className={styles.input}
          />
          {errors.user?.first_name && (
            <span className={styles.inputError}>{errors.user?.first_name.message}</span>
          )}
        </div>
        <div className={`column start m-bottom-3 ${styles.inputContainer}`}>
          <label className={`m-bottom-2 ${styles.label}`}>{i18next.t('SignUp:lastName')}</label>
          <input
            {...register('user.last_name', { required: i18next.t('SignUp:required') as string })}
            className={styles.input}
          />
          {errors.user?.last_name && (
            <span className={styles.inputError}>{errors.user?.last_name.message}</span>
          )}
        </div>
        <div className={`column start m-bottom-3 ${styles.inputContainer}`}>
          <label className={`m-bottom-2 ${styles.label}`}>{i18next.t('SignUp:email')}</label>
          <input
            type="email"
            {...register('user.email', {
              required: i18next.t('SignUp:required') as string,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: i18next.t('SignUp:invalidFormat') as string
              }
            })}
            className={styles.input}
          />
          {errors.user?.email && <span className={styles.inputError}>{errors.user?.email.message}</span>}
        </div>
        <div className={`column start m-bottom-3 ${styles.inputContainer}`}>
          <label className={`m-bottom-2 ${styles.label}`}>Password</label>
          <input
            type="password"
            {...register('user.password', {
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
          {errors.user?.password && (
            <span className={styles.inputError}>{errors.user?.password.message}</span>
          )}
        </div>
        <div className={`column start m-bottom-5 ${styles.inputContainer}`}>
          <label className={`m-bottom-2 ${styles.label}`}>{i18next.t('SignUp:passwordConfirmation')}</label>
          <input
            type="password"
            {...register('user.password_confirmation', {
              required: true,
              validate: value =>
                value === watch('user.password') || (i18next.t('SignUp:noMatchPassword') as string)
            })}
            className={styles.input}
          />
          {errors.user?.password_confirmation && (
            <span className={styles.inputError}>{errors.user?.password_confirmation.message}</span>
          )}
        </div>
        <button type="submit" className={`m-bottom-3 ${styles.signUpButton}`}>
          {loading ? <Loading /> : 'Sign Up'}
        </button>
        <div className={`m-bottom-3 ${styles.line}`} />
        <button type="button" className={styles.signUpButtonSecondary} />
      </form>
    </div>
  );
}

export default SignUp;
