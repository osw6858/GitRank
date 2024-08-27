import {Control, FieldValues, Path, UseFormRegister} from 'react-hook-form';

export interface IFormValues {
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
}
