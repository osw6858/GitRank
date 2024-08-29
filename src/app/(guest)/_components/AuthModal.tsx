'use client';

import {useRouter} from 'next/navigation';
import {ModalProps} from '@/types';

export default function AuthModal({children}: ModalProps) {
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-dark-modalBg flex items-center justify-center z-50">
      <div className="w-full h-full bg-white dark:bg-dark-background rounded-2xl shadow-xl p-3 md:w-[600px] md:h-auto">
        <div className={'flex flex-col'}>
          <div className={'flex items-center relative'}>
            <button
              className={'absolute top-3 left-3 rounded-full p-3'}
              onClick={() => router.back()}
            >
              ✕
            </button>
            <div className={'flex items-center justify-center flex-1'}>
              <div className={'relative'}>
                <div
                  className={`glowing-green-bg w-full h-[30px] absolute top-14`}
                />
                <p
                  className={`text-xl font-bold bg-clip-text text-light-text dark:text-dark-text md:text-2xl`}
                >
                  Git Rank
                </p>
              </div>
            </div>
          </div>
          <div className={'px-6 md:px-20 py-7'}>{children}</div>
        </div>
      </div>
    </div>
  );
}
