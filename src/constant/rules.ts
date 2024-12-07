import {MESSAGES, REGEX} from '@/constant';

export const RULES = {
  email: {
    required: MESSAGES.auth.requiredEmail,
    pattern: {
      value: REGEX.auth.email,
      message: MESSAGES.auth.emailError,
    },
  },

  password: {
    required: MESSAGES.auth.requiredPassword,
    pattern: {
      value: REGEX.auth.password,
      message: MESSAGES.auth.passwordError,
    },
    minLength: {
      value: 8,
      message: MESSAGES.auth.passwordLengthError,
    },
  },

  passwordCheck: (password: string) => {
    return {
      required: MESSAGES.auth.requiredPasswordCheck,
      validate: (value: string) =>
        value === password || MESSAGES.auth.passwordCheckError,
    };
  },
};
