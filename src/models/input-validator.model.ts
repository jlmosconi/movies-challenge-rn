export const enum InputValidators {
  REQUIRED = 'required',
  MIN = 'min',
  MAX = 'max',
  MAX_LENGTH = 'maxLength',
  MIN_LENGTH = 'minLength',
  PATTERN = 'pattern',
  MATCHES = 'matches',
  EMAIL_PATTERN = 'emailPattern',
  PASSWORD = 'password',
  PASSWORD_PATTERN = 'passwordPattern',
}

export const enum GenericErrors {
  REQUIRED = 'required',
  MATCHES = 'matches',
  MIN = 'min',
  MAX = 'max',
  EMAIL_PATTERN = 'emailPattern',
  PASSWORD_PATTERN = 'passwordPattern',
}

export type InputValidator = `${InputValidators}`;
