import {ReactNode} from 'react';
import {
  Control,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';

export interface SignUpFromValue {
  email: string;
  password: string;
  passwordCheck: string;
}

export interface SignInFormValue {
  email: string;
  password: string;
}

export interface AuthInputProps<T extends FieldValues> {
  label: Path<T>;
  placeholder: string;
  type: 'text' | 'password' | 'email';
  autoComplete?: 'email' | 'name';
  register: UseFormRegister<T>;
  control: Control<T>;
  required: boolean;
  disable?: boolean;
  rules?: Omit<
    RegisterOptions<T>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
  error?: string;
}

export interface ModalProps {
  children: ReactNode;
}
