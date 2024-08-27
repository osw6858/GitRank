import {
  Control,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';
import {ReactNode} from 'react';

export interface SignUpFromValue {
  email: string;
  password: string;
  passwordCheck: string;
}

export interface AuthInputProps<T extends FieldValues> {
  label: Path<T>;
  placeholder: string;
  type: 'text' | 'password' | 'email';
  autoComplete?: 'email' | 'name';
  register: UseFormRegister<T>;
  control: Control<T>;
  required: boolean;
  rules?: Omit<
    RegisterOptions<T>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
  error?: string;
}

export interface ModalProps {
  title: string;
  children: ReactNode;
}
