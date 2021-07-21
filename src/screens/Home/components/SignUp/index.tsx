/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from 'react-hook-form';
import i18next from 'i18next';

import WoloxLogo from '../../assets/LogoWolox-Original.png';

import styles from './styles.module.scss';

type InputsValues = {
  user: {
    email: string;
    password: string;
    passwordConfirmation: string;
    firstName: string;
    lastName: string;
    locale: string;
  };
};

enum UserFieldIds {
  FIRST_NAME = 'user.firstName',
  LAST_NAME = 'user.lastName',
  EMAIL = 'user.email',
  PASSWORD = 'user.password',
  PASSWORD_CONFIRMATION = 'user.passwordConfirmation'
}

function SignUp() {
  const { register, handleSubmit } = useForm<InputsValues>();
  const onSubmit = (data: InputsValues) => console.log(data);

  return (
    <form className={styles.signUpForm} onSubmit={handleSubmit(onSubmit)}>
      <img src={WoloxLogo} className={`m-bottom-3 ${styles.logo}`} />
      <div className={`column start m-bottom-3 ${styles.inputContainer}`}>
        <label htmlFor={UserFieldIds.FIRST_NAME} className={`m-bottom-2 ${styles.label}`}>
          {i18next.t('SignUp:firstName')}
        </label>
        <input {...register(UserFieldIds.FIRST_NAME)} className={styles.input} />
      </div>
      <div className={`column start m-bottom-3 ${styles.inputContainer}`}>
        <label htmlFor={UserFieldIds.LAST_NAME} className={`m-bottom-2 ${styles.label}`}>
          {i18next.t('SignUp:lastName')}
        </label>
        <input {...register(UserFieldIds.LAST_NAME)} className={styles.input} />
      </div>
      <div className={`column start m-bottom-3 ${styles.inputContainer}`}>
        <label htmlFor={UserFieldIds.EMAIL} className={`m-bottom-2 ${styles.label}`}>
          {i18next.t('SignUp:email')}
        </label>
        <input type="email" {...register(UserFieldIds.EMAIL)} className={styles.input} autoComplete="off" />
      </div>
      <div className={`column start m-bottom-3 ${styles.inputContainer}`}>
        <label htmlFor={UserFieldIds.PASSWORD} className={`m-bottom-2 ${styles.label}`}>
          Password
        </label>
        <input type="password" {...register(UserFieldIds.PASSWORD)} className={styles.input} />
      </div>
      <div className={`column start m-bottom-5 ${styles.inputContainer}`}>
        <label htmlFor={UserFieldIds.PASSWORD_CONFIRMATION} className={`m-bottom-2 ${styles.label}`}>
          {i18next.t('SignUp:passwordConfirmation')}
        </label>
        <input type="password" {...register(UserFieldIds.PASSWORD_CONFIRMATION)} className={styles.input} />
      </div>
      <button type="submit" className={`m-bottom-3 ${styles.signUpButton}`} />
      <div className={`m-bottom-3 ${styles.line}`} />
      <button type="button" className={styles.signUpButtonSecondary} />
    </form>
  );
}

export default SignUp;
