import api from '../config/api';
import { UserForm } from '../interfaces/interfaces';

export const signUp = (user: UserForm) => api.post('/users', user);
