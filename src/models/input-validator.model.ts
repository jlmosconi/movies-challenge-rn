export const enum InputValidators {
  REQUIRED = 'required',
  MIN = 'min',
  MAX = 'max',
  MAX_LENGTH = 'maxLength',
  MIN_LENGTH = 'minLength',
  PATTERN = 'pattern',
  MATCHES = 'matches',
}

export const enum GenericErrors {
  REQUIRED = 'required',
  MATCHES = 'matches',
  MIN = 'min',
  MAX = 'max',
  EMAIL_PATTERN = 'emailPattern',
}

export type InputValidator = `${InputValidators}`;
