import BasicButton from '@/components/BasicButton';
import OauthButton from '@/components/OauthButton';

export default function Home() {
  return (
    <div className={'flex flex-col h-screen relative md:flex-row'}>
      <div
        className={'flex flex-col items-center justify-center flex-1 md:p-10'}
      >
        <div className={'relative'}>
          <div
            className={`glowing-green-bg w-full h-[30px] absolute top-14`}
          ></div>
          <h1
            className={`text-6xl font-bold bg-clip-text text-light-text dark:text-dark-text md:text-8xl`}
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
      <div className={'flex flex-col justify-center flex-1 p-5 md:p-10'}>
        <div className={'flex flex-col md:w-2/3 md:p-8'}>
          <h3 className={'text-4xl font-bold my-10 md:text-6xl'}>
            개발의 현재를 보다
          </h3>
          <div className={'flex flex-col'}>
            <p className={'text-xl font-bold mb-5 md:text-3xl'}>
              지금 가입하세요.
            </p>
          </div>
          <div className={'flex flex-col'}>
            <div className={'my-2 md:w-78'}>
              <OauthButton />
            </div>
            <div className={'flex items-center md:w-78'}>
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
          <div className={'md:w-78 mb-5 group relative'}>
            <BasicButton classNames={'bg-button-green text-white'}>
              비연동 회원가입
            </BasicButton>
            <div className="tooltip">
              깃허브 연동을 하지 않고 회원가입만 진행합니다.
              <br />
              단순 조회만 가능하며 이후 깃허브를 연동하여
              <br />
              추가 기능을 이용하실 수 있습니다.
            </div>
          </div>
          <div className={'md:w-78 mt-16'}>
            <p className={'font-bold text-lg mb-3'}>이미 계정이 있으신가요?</p>
            <BasicButton
              classNames={
                'bg-transparent border border-solid border-light-gray-dark dark:border-dark-gray-light p-2'
              }
            >
              <span
                className={
                  'text-button-green dark:text-button-lightGreen font-semibold'
                }
              >
                로그인
              </span>
            </BasicButton>
          </div>
        </div>
      </div>
    </div>
  );
}
