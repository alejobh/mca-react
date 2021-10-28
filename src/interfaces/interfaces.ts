export interface LoginProps {
  email: string;
  password: string;
}

export type InputsValues = {
  email: string;
  password: string;
};

export enum UserFieldIds {
  EMAIL = 'email',
  PASSWORD = 'password'
}

/* eslint-disable @typescript-eslint/naming-convention */
export interface UserForm {
  email: string;
  password: string;
  password_confirmation: string;
  first_name: string;
  last_name: string;
  locale: string;
}
/* eslint-enable @typescript-eslint/naming-convention */
