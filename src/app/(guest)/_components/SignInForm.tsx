'use client';

import OauthButton from '@/app/(guest)/_components/OauthButton';
import Link from 'next/link';

import CheckEmail from '@/app/(guest)/_components/CheckEmail';
import CheckPassword from '@/app/(guest)/_components/CheckPassword';
import {useEmailStore} from '@/stores/useAuthStore';

export default function SignInForm() {
  const {checkedEmail} = useEmailStore();

  return (
    <>
      {checkedEmail ? (
        <CheckPassword />
      ) : (
        <div className={'md:px-10 pb-20'}>
          <h1 className={'text-3xl font-semibold'}>Git Rank 가입하기</h1>
          <div className={'mt-5'}>
            <div className={'flex flex-col'}>
              <div className={'my-2'}>
                <OauthButton />
              </div>
              <div className={'flex items-center'}>
                <div
                  className={
                    'flex-1 border-t border-solid border-light-gray-dark'
                  }
                />
                <p className={'p-3'}>또는</p>
                <div
                  className={
                    'flex-1 border-t border-solid border-light-gray-dark'
                  }
                />
              </div>
            </div>
            <CheckEmail />
          </div>
          <div className={'mt-16'}>
            <span className={'text-dark-gray-light'}>계정이 없으신가요?</span>{' '}
            <Link className={'text-blue-500'} href={'/auth/signup'}>
              가입하기
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
