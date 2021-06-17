/* eslint-disable @typescript-eslint/naming-convention */
import i18next from 'i18next';

export const VALIDATIONS = {
  EMAIL: {
    required: i18next.t('SignUp:required') as string,
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: i18next.t('SignUp:invalidFormat') as string
    }
  },
  PASSWORD: {
    required: i18next.t('signUp:required') as string,
    pattern: {
      value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^\w\s\d])?.+$/,
      message: i18next.t('SignUp:validFormatPassword') as string
    },
    minLength: {
      value: 8,
      message: i18next.t('SignUp:minLenghtPassword') as string
    }
  }
};
