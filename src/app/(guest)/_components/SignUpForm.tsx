'use client';

import {SubmitHandler, useForm} from 'react-hook-form';

import AuthInput from '@/app/(guest)/_components/AuthInput';
import {IFormValues} from '@/types';

export default function SignUpFrom() {
  const {register, handleSubmit, control} = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthInput
          label={'email'}
          placeholder={'이메일'}
          type={'email'}
          autoComplete={'email'}
          register={register}
          control={control}
          required
        />
        <AuthInput
          label={'password'}
          placeholder={'비밀번호'}
          type={'password'}
          register={register}
          control={control}
          required
        />
        <AuthInput
          label={'passwordCheck'}
          placeholder={'비밀번호 확인'}
          type={'password'}
          register={register}
          control={control}
          required
        />
        <button type="submit">제출</button>
      </form>
    </div>
  );
}
