import i18next from 'i18next';

i18next.addResources('es', 'SignUp', {
  firstName: 'Nombre',
  lastName: 'Apellido',
  required: 'Este campo es requerido',
  email: 'Email',
  invalidFormat: 'Formato inválido',
  passwordConfirmation: 'Confirmación de Password',
  validFormatPassword: 'Debe contener 1 mayúscula, 1 minúscula y 1 número',
  minLenghtPassword: 'Mínimo 8 caracteres',
  noMatchPassword: 'Las contraseñas no coinciden'
});
