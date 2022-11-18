export const PATTERNS_GLOBAL = {
  email:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  password: /^(?=.*[0-9])(?=.*[@$!#%*?&.,_-])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*.,]{8,}$/,
};
