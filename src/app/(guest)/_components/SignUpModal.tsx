'use client';

import {useRouter} from 'next/navigation';

import SignUpFrom from '@/app/(guest)/_components/SignUpForm';

export default function SignUpModal() {
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-dark-modalBg flex items-center justify-center z-50">
      <div className="w-full h-screen bg-white dark:bg-dark-background rounded-lg shadow-xl p-3 md:w-[600px] md:h-auto">
        <div className={'flex flex-col'}>
          <div className={'flex items-center'}>
            <button onClick={() => router.back()}>닫기</button>
            <div className={'flex items-center justify-center flex-1'}>
              <p
                className={`text-xl font-bold bg-clip-text text-light-text dark:text-dark-text md:text-2xl`}
              >
                Git Rank
              </p>
            </div>
          </div>
          <div className={'px-6 md:px-20 py-7'}>
            <h1 className={'text-3xl font-semibold'}>계정을 생성하세요</h1>
            <SignUpFrom />
          </div>
        </div>
      </div>
    </div>
  );
}
