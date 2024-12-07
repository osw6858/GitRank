import {SubmitHandler, useForm} from 'react-hook-form';

import AuthInput from '@/app/(guest)/_components/AuthInput';
import Button from '@/components/Button';
import {useEmailStore} from '@/stores/useAuthStore';
import {SignInFormValue} from '@/types';

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
      <Button type={'submit'}>
        <span>로그인</span>
      </Button>
    </form>
  );
}
