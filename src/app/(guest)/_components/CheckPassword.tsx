import {SubmitHandler, useForm} from 'react-hook-form';

import AuthInput from '@/app/(guest)/_components/AuthInput';
import Button from '@/components/Button';
import {RULES} from '@/constant';
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
          label="password"
          placeholder="비밀번호"
          type="password"
          register={register}
          control={control}
          required
          rules={RULES.password}
          error={errors.password?.message}
        />
      </div>
      <Button type={'submit'}>
        <span>로그인</span>
      </Button>
    </form>
  );
}
