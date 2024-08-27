'use client';

import {SubmitHandler, useForm} from 'react-hook-form';

import AuthInput from '@/app/(guest)/_components/AuthInput';
import {SignUpFromValue} from '@/types';
import BasicButton from '@/components/BasicButton';

export default function SignUpFrom() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: {errors},
  } = useForm<SignUpFromValue>();

  const onSubmit: SubmitHandler<SignUpFromValue> = (data) => {
    // TODO: 이곳에서 mutate 실행
    console.log(data);
  };

  const password = watch('password');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={'flex flex-col mt-7'}>
      <div className={'flex-1'}>
        <AuthInput
          label={'email'}
          placeholder={'이메일'}
          type={'email'}
          autoComplete={'email'}
          register={register}
          control={control}
          required
          rules={{
            required: '이메일은 필수입니다.',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: '올바른 이메일 형식이 아닙니다.',
            },
          }}
          error={errors.email?.message}
        />
        <AuthInput
          label={'password'}
          placeholder={'비밀번호'}
          type={'password'}
          register={register}
          control={control}
          required
          rules={{
            required: '비밀번호는 필수입니다.',
            minLength: {
              value: 8,
              message: '비밀번호는 최소 8자 이상이어야 합니다.',
            },
          }}
          error={errors.password?.message}
        />
        <AuthInput
          label={'passwordCheck'}
          placeholder={'비밀번호 확인'}
          type={'password'}
          register={register}
          control={control}
          required
          rules={{
            required: '비밀번호 확인은 필수입니다.',
            validate: (value) =>
              value === password || '비밀번호가 일치하지 않습니다.',
          }}
          error={errors.passwordCheck?.message}
        />
      </div>
      <BasicButton
        type={'submit'}
        classNames={
          'mt-6 p-3 bg-black dark:bg-white dark:border-dark-gray-light p-2 transition-colors duration-200 hover:bg-gray-800 dark:hover:bg-gray-100'
        }
      >
        <span
          className={
            'text-white text-lg dark:text-black font-semibold transition-colors duration-200 group-hover:text-gray-200 dark:group-hover:text-gray-800'
          }
        >
          가입
        </span>
      </BasicButton>
    </form>
  );
}
