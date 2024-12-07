import {MESSAGES} from '@/constant/index';

export const RULES = {
  email: {
    required: MESSAGES.auth.requiredEmail,
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: MESSAGES.auth.emailError,
    },
  },

  password: {
    required: MESSAGES.auth.requiredPassword,
    pattern: {
      value: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).+$/,
      message: MESSAGES.auth.passwordError,
    },
    minLength: {
      value: 8,
      message: MESSAGES.auth.passwordLengthError,
    },
  },
};
