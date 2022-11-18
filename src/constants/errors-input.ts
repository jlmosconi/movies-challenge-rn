import {GenericErrors, InputValidator, InputValidators} from '@models';

export const GENERIC_INPUT_MESSAGES: Record<GenericErrors, string> = {
  [GenericErrors.REQUIRED]: 'Campo requerido.',
  [GenericErrors.MATCHES]: 'El formato ingresado no es válido.',
  [GenericErrors.MIN]: 'Debes ingresar al menos {min} caracteres',
  [GenericErrors.MAX]: 'Debes ingresar como máximo {max} caracteres',
  [GenericErrors.EMAIL_PATTERN]: 'Email inválido.',
  [GenericErrors.PASSWORD_PATTERN]:
    'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial.',
};

export const GENERIC_ERRORS: Array<{
  tipo: InputValidator;
  mensaje: string;
}> = [
  {
    tipo: InputValidators.REQUIRED,
    mensaje: GENERIC_INPUT_MESSAGES.required,
  },
  {
    tipo: InputValidators.PATTERN,
    mensaje: GENERIC_INPUT_MESSAGES.matches,
  },
  {
    tipo: InputValidators.MATCHES,
    mensaje: GENERIC_INPUT_MESSAGES.matches,
  },
  {
    tipo: InputValidators.MIN,
    mensaje: GENERIC_INPUT_MESSAGES.min,
  },
  {
    tipo: InputValidators.MAX,
    mensaje: GENERIC_INPUT_MESSAGES.max,
  },
  {
    tipo: InputValidators.EMAIL_PATTERN,
    mensaje: GENERIC_INPUT_MESSAGES.emailPattern,
  },
];
