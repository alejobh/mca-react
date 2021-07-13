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

function SignUp() {
  const { register, handleSubmit } = useForm<InputsValues>();
  const onSubmit = (data: InputsValues) => console.log(data);

  return (
    <form className={styles.signUpForm} onSubmit={handleSubmit(onSubmit)}>
      <img src={WoloxLogo} className={`m-bottom-3 ${styles.logo}`} />
      <div className={`column start m-bottom-3 ${styles.inputContainer}`}>
        <label htmlFor="user.firstName" className={`m-bottom-2 ${styles.label}`}>
          {i18next.t('SignUp:firstName')}
        </label>
        <input {...register('user.firstName')} className={styles.input} />
      </div>
      <div className={`column start m-bottom-3 ${styles.inputContainer}`}>
        <label htmlFor="user.lastName" className={`m-bottom-2 ${styles.label}`}>
          {i18next.t('SignUp:lastName')}
        </label>
        <input {...register('user.lastName')} className={styles.input} />
      </div>
      <div className={`column start m-bottom-3 ${styles.inputContainer}`}>
        <label htmlFor="user.email" className={`m-bottom-2 ${styles.label}`}>
          {i18next.t('SignUp:email')}
        </label>
        <input type="email" {...register('user.email')} className={styles.input} autoComplete="off" />
      </div>
      <div className={`column start m-bottom-3 ${styles.inputContainer}`}>
        <label htmlFor="user.password" className={`m-bottom-2 ${styles.label}`}>
          Password
        </label>
        <input type="password" {...register('user.password')} className={styles.input} />
      </div>
      <div className={`column start m-bottom-5 ${styles.inputContainer}`}>
        <label htmlFor="user.passwordConfirmation" className={`m-bottom-2 ${styles.label}`}>
          {i18next.t('SignUp:passwordConfirmation')}
        </label>
        <input type="password" {...register('user.passwordConfirmation')} className={styles.input} />
      </div>
      <button type="submit" className={`m-bottom-3 ${styles.signUpButton}`} />
      <div className={`m-bottom-3 ${styles.line}`} />
      <button type="button" className={styles.signUpButtonSecondary} />
    </form>
  );
}

export default SignUp;
