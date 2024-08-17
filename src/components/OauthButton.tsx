'use client';

export default function OauthButton() {
  return (
    <>
      <button
        className={
          'bg-dark-background text-dark-text dark:bg-light-background dark:text-light-text w-full p-3 rounded-full'
        }
      >
        <span className={'font-semibold'}>깃허브로 시작하기</span>
      </button>
    </>
  );
}
