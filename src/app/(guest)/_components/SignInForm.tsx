'use client';

import {SubmitHandler, useForm} from 'react-hook-form';
import {SignInFormValue} from '@/types';
import AuthInput from '@/app/(guest)/_components/AuthInput';
import BasicButton from '@/components/BasicButton';
import OauthButton from '@/app/(guest)/_components/OauthButton';
import Link from 'next/link';

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<SignInFormValue>();

  const onSubmit: SubmitHandler<SignInFormValue> = (data) => {
    console.log(data);
  };

  return (
    <div className={'px-10 pb-20'}>
      <h1 className={'text-3xl font-semibold'}>Git Rank 가입하기</h1>
      <div className={'mt-5'}>
        <div className={'flex flex-col'}>
          <div className={'my-2'}>
            <OauthButton />
          </div>
          <div className={'flex items-center'}>
            <div
              className={'flex-1 border-t border-solid border-light-gray-dark'}
            />
            <p className={'p-3'}>또는</p>
            <div
              className={'flex-1 border-t border-solid border-light-gray-dark'}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className={'flex flex-col'}>
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
          </div>
          <BasicButton
            type={'submit'}
            classNames={
              'mt-6 bg-black dark:bg-white dark:border-dark-gray-light p-2 transition-colors duration-200 hover:bg-gray-800 dark:hover:bg-gray-100'
            }
          >
            <span
              className={
                'text-white text-base dark:text-black font-semibold transition-colors duration-200 group-hover:text-gray-200 dark:group-hover:text-gray-800'
              }
            >
              다음
            </span>
          </BasicButton>
          <BasicButton
            type={'submit'}
            classNames={
              'mt-6 bg-transparent border border-soild dark:border-dark-gray-light p-[5px]'
            }
          >
            <p
              className={
                'pb-[1.2px] text-black text-base dark:text-white font-semibold transition-colors duration-200 group-hover:text-gray-200 dark:group-hover:text-gray-800'
              }
            >
              비밀번호를 잊으셨나요?
            </p>
          </BasicButton>
        </form>
      </div>
      <div className={'mt-16'}>
        <span className={'text-dark-gray-light'}>계정이 없으신가요?</span>{' '}
        <Link className={'text-blue-500'} href={'/auth/signup'}>
          가입하기
        </Link>
      </div>
    </div>
  );
}
