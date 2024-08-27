'use client';

import AuthInput from '@/app/(guest)/_components/AuthInput';

export default function SignUpFrom() {
  return (
    <div>
      <form>
        <AuthInput
          placeholder={'이메일'}
          type={'email'}
          autoComplete={'email'}
        />
        <AuthInput placeholder={'비밀번호'} type={'password'} />
        <AuthInput placeholder={'비밀번호 확인'} type={'password'} />
      </form>
    </div>
  );
}
