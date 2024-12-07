import {SubmitHandler, useForm} from 'react-hook-form';

import AuthInput from '@/app/(guest)/_components/AuthInput';
import Button from '@/components/Button';
import {RULES} from '@/constant';
import {useEmailStore} from '@/stores/useAuthStore';
import {SignInFormValue} from '@/types';

export default function CheckEmail() {
  const {
    register,
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<SignInFormValue>();

  const {setEmail, setCheckedEmail} = useEmailStore();

  const onEmailCheck: SubmitHandler<SignInFormValue> = (data) => {
    console.log(data);
    setEmail(data.email);
    // 이곳에서 데이터 패칭

    setCheckedEmail(true);
  };

  return (
    <form onSubmit={handleSubmit(onEmailCheck)} className={'flex flex-col'}>
      <div className={'flex-1'}>
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
      </div>
      <div className={'flex flex-col space-y-6 mt-3'}>
        <Button type={'submit'} variant={'default'}>
          <span className={'font-semibold'}>다음</span>
        </Button>
        <Button type={'submit'} variant={'ghost'}>
          <span className={'font-semibold'}>비밀번호를 잊으셨나요?</span>
        </Button>
      </div>
    </form>
  );
}
