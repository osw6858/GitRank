'use client';

import {SubmitHandler, useForm} from 'react-hook-form';

import AuthInput from '@/app/(guest)/_components/AuthInput';
import Button from '@/components/Button';
import {RULES} from '@/constant';
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
            rules={RULES.email}
            error={errors.email?.message}
          />
          <AuthInput
            label="password"
            placeholder="비밀번호"
            type="password"
            register={register}
            control={control}
            required
            rules={RULES.password}
            error={errors.password?.message}
          />
          <AuthInput
            label="passwordCheck"
            placeholder="비밀번호 확인"
            type="password"
            register={register}
            control={control}
            required
            rules={RULES.passwordCheck(password)}
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
