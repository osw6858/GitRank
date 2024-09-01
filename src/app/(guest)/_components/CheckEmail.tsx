import {SubmitHandler, useForm} from 'react-hook-form';
import AuthInput from '@/app/(guest)/_components/AuthInput';
import BasicButton from '@/components/BasicButton';
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
  );
}
