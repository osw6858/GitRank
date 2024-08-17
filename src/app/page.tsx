import BasicButton from '@/components/BasicButton';
import OauthButton from '@/components/OauthButton';

export default function Home() {
  return (
    <div className={'flex h-screen relative'}>
      <div className={'flex flex-col items-center justify-center flex-1 p-10'}>
        <div className={'relative'}>
          <div
            className={`glowing-blue-bg w-full h-[30px] absolute top-14`}
          ></div>
          <h1
            className={`text-8xl font-bold bg-clip-text text-light-text dark:text-dark-text`}
          >
            Git Rank
          </h1>
          {/*<h2*/}
          {/*  className={`text-3xl font-semibold text-light-text dark:text-dark-text pl-3`}*/}
          {/*>*/}
          {/*  커밋하며 성장하라*/}
          {/*</h2>*/}
        </div>
      </div>
      <div className={'flex flex-col justify-center flex-1 p-10'}>
        <div className={'flex flex-col p-8 w-2/3'}>
          <h3 className={'text-6xl font-bold my-10'}>개발의 현재를 보다</h3>
          <div className={'flex flex-col'}>
            <p className={'text-3xl font-bold mb-5'}>지금 가입하세요.</p>
          </div>
          <div className={'flex flex-col'}>
            <div className={'my-2 w-78'}>
              <OauthButton />
            </div>
            <div className={'flex items-center w-78'}>
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
          <div className={'w-78 mb-5'}>
            <BasicButton classNames={'bg-button-background text-dark-text'}>
              계정 만들기
            </BasicButton>
          </div>
          <div className={'w-78 mt-16'}>
            <p className={'font-bold text-lg mb-3'}>이미 계정이 있으신가요?</p>
            <BasicButton
              classNames={
                'bg-transparent border border-solid border-light-gray-dark dark:border-dark-gray-light p-2'
              }
            >
              <span className={'text-button-background font-semibold'}>
                로그인
              </span>
            </BasicButton>
          </div>
        </div>
      </div>
    </div>
  );
}
