/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import i18next from 'i18next';
import { useState } from 'react';

import WoloxLogo from 'assets/LogoWolox-Original.png';
import { signUp } from 'services/UserService';
import Loading from 'components/Spinner/components/loading';

import { UserForm } from '../../interfaces/interfaces';

import styles from './styles.module.scss';

enum UserFieldIds {
  FIRST_NAME = 'first_name',
  LAST_NAME = 'last_name',
  EMAIL = 'email',
  PASSWORD = 'password',
  PASSWORD_CONFIRMATION = 'password_confirmation'
}

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<UserForm>();
  const [notCredentials, setNotCredentials] = useState(false);

  const mutation = useMutation(signUp, {
    onError: () => {
      setNotCredentials(true);
    },
    onSuccess: data => {
      console.log(data);
    }
  });

  const onSubmit = (user: UserForm) => mutation.mutate(user);

  return (
    <div className="column center middle full-width full-height">
      <form className={`m-bottom-2 ${styles.signUpForm}`} onSubmit={handleSubmit(onSubmit)}>
        <img
          src={WoloxLogo}
          alt={`${i18next.t('Global:logoWolox')}`}
          className={`m-bottom-3 ${styles.logo}`}
        />
        <div className={`column start m-bottom-3 ${styles.inputContainer}`}>
          <label
            htmlFor={UserFieldIds.FIRST_NAME}
            className={`m-bottom-2 ${styles.label}`}
            id="firstname-label"
          >
            {i18next.t('SignUp:firstName')}
          </label>
          <input
            aria-labelledby="firstname-label"
            {...register(UserFieldIds.FIRST_NAME, {
              required: i18next.t('SignUp:required') as string
            })}
            className={styles.input}
          />
          {errors.first_name && <span className={styles.inputError}>{errors.first_name.message}</span>}
        </div>
        <div className={`column start m-bottom-3 ${styles.inputContainer}`}>
          <label
            htmlFor={UserFieldIds.LAST_NAME}
            className={`m-bottom-2 ${styles.label}`}
            id="lastname-label"
          >
            {i18next.t('SignUp:lastName')}
          </label>
          <input
            aria-labelledby="lastname-label"
            {...register(UserFieldIds.LAST_NAME, {
              required: i18next.t('SignUp:required') as string
            })}
            className={styles.input}
          />
          {errors.last_name && <span className={styles.inputError}>{errors.last_name.message}</span>}
        </div>
        <div className={`column start m-bottom-3 ${styles.inputContainer}`}>
          <label htmlFor={UserFieldIds.EMAIL} className={`m-bottom-2 ${styles.label}`} id="email-label">
            {i18next.t('SignUp:email')}
          </label>
          <input
            aria-labelledby="email-label"
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
          <label htmlFor={UserFieldIds.PASSWORD} className={`m-bottom-2 ${styles.label}`} id="password-label">
            {i18next.t('SignUp:password') as string}
          </label>
          <input
            aria-labelledby="password-label"
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
        <div className={`column start m-bottom-5 ${styles.inputContainer}`}>
          <label
            htmlFor={UserFieldIds.PASSWORD_CONFIRMATION}
            className={`m-bottom-2 ${styles.label}`}
            id="password-confirmation-label"
          >
            {i18next.t('SignUp:passwordConfirmation')}
          </label>
          <input
            aria-labelledby="password-confirmation-label"
            type="password"
            {...register(UserFieldIds.PASSWORD_CONFIRMATION, {
              required: true,
              validate: value =>
                value === watch(UserFieldIds.PASSWORD) || (i18next.t('SignUp:noMatchPassword') as string)
            })}
            className={styles.input}
          />
          {errors.password_confirmation && (
            <span className={styles.inputError}>{errors.password_confirmation.message}</span>
          )}
        </div>
        <button type="submit" className={`m-bottom-3 ${styles.signUpButton}`}>
          {mutation.isLoading ? <Loading /> : i18next.t('SignUp:signUpTitle')}
        </button>
        <div className={`m-bottom-3 ${styles.line}`} />
        <button type="button" className={styles.signUpButtonSecondary} />
      </form>
      {notCredentials && <span className={styles.error}>{i18next.t('SignUp:messageError')}</span>}
    </div>
  );
}

export default SignUp;
