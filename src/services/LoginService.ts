import api from '../config/api';

export interface LoginProps {
  email: string;
  password: string;
}

export const login = (user: LoginProps) => api.post('/users/sign_in', user);
