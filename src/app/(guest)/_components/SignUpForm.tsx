'use client';

import {SubmitHandler, useForm} from 'react-hook-form';

import AuthInput from '@/app/(guest)/_components/AuthInput';
import Button from '@/components/Button';
import {SignUpFromValue} from '@/types';

export default function SignUpFrom() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: {errors},
  } = useForm<SignUpFromValue>();

  const onSignUp: SubmitHandler<SignUpFromValue> = (data) => {
    console.log(data);
  };

  const password = watch('password');

  return (
    <>
      <h1 className="text-3xl font-semibold mb-7">계정을 생성하세요</h1>

      <form onSubmit={handleSubmit(onSignUp)} className="flex flex-col flex-1">
        <div className="flex-grow mb-5">
          <AuthInput
            label="email"
            placeholder="이메일"
            type="email"
            autoComplete="email"
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
            label="password"
            placeholder="비밀번호"
            type="password"
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
            label="passwordCheck"
            placeholder="비밀번호 확인"
            type="password"
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

        <Button type="submit">
          <span className="text-lg font-semibold">가입</span>
        </Button>
      </form>
    </>
  );
}
