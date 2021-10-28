import api from '../config/api';
import { LoginProps } from '../interfaces/interfaces';

export const login = (user: LoginProps) => api.post('/users/sign_in', user);
