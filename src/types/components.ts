import {InputHTMLAttributes, ReactNode} from 'react';
import {
  Control,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';

export interface BaseAuthFormValue {
  email: string;
  password: string;
}

export type SignInFormValue = BaseAuthFormValue;

export interface SignUpFromValue extends BaseAuthFormValue {
  passwordCheck: string;
}

export interface AuthInputProps<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  label: Path<T>;
  register: UseFormRegister<T>;
  control: Control<T>;
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
