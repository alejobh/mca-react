/* eslint-disable @typescript-eslint/naming-convention */
import api from '../config/api';

export interface UserForm {
  email: string;
  password: string;
  password_confirmation: string;
  first_name: string;
  last_name: string;
  locale: string;
}

export const signUp = (user: UserForm) => api.post('/users', user);
