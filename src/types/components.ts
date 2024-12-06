import {VariantProps} from 'class-variance-authority';
import {ButtonHTMLAttributes, InputHTMLAttributes, ReactNode} from 'react';
import {
  Control,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';

import {ButtonVariant} from '@/components/Button';

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

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariant> {
  children: string | ReactNode;
  asChild?: boolean;
}

export interface ModalProps {
  children: ReactNode;
}
