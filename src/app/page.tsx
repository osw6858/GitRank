import DarkModeButton from '@/components/DarkModeButton';
import IntroTitle from '@/components/IntroTitle';

export default function Home() {
  return (
    <div className={'flex h-screen relative glowing-blue-bg'}>
      <div className={'flex flex-col items-center justify-center flex-1'}>
        <IntroTitle />
      </div>
      <div className={'flex items-center flex-1'}>
        <DarkModeButton></DarkModeButton>
      </div>
    </div>
  );
}
