import {useEmailStore} from '@/stores/useAuthStore';
import AuthInput from '@/app/(guest)/_components/AuthInput';
import {SubmitHandler, useForm} from 'react-hook-form';
import {SignInFormValue} from '@/types';
import BasicButton from '@/components/BasicButton';

export default function CheckPassword() {
  const {email} = useEmailStore();
  const {
    register,
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<SignInFormValue>();

  const onPasswordCheck: SubmitHandler<SignInFormValue> = () => {};

  return (
    <form
      onSubmit={handleSubmit(onPasswordCheck)}
      className="flex flex-col flex-1"
    >
      <div className="flex-grow">
        <AuthInput
          label={'email'}
          placeholder={email}
          type={'email'}
          register={register}
          control={control}
          required
          disable
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
      </div>
      <BasicButton
        type={'submit'}
        classNames={
          'mt-6 bg-black dark:bg-white dark:border-dark-gray-light p-3 transition-colors duration-200 hover:bg-gray-800 dark:hover:bg-gray-100'
        }
      >
        <span
          className={
            'text-white text-base dark:text-black font-semibold transition-colors duration-200 group-hover:text-gray-200 dark:group-hover:text-gray-800'
          }
        >
          로그인
        </span>
      </BasicButton>
    </form>
  );
}
