'use client';

import {signIn} from 'next-auth/react';

import Button from '@/components/Button';
import GitHubIcon from '@public/gitHub.svg';

export default function OauthButton() {
  return (
    <div className={'group relative'}>
      <Button onClick={() => signIn('github', {redirectTo: '/success'})}>
        <div className={'flex items-center justify-center'}>
          <span className={'font-semibold pr-2'}>깃허브 연동 로그인</span>
          <GitHubIcon />
        </div>
      </Button>
      <div className="tooltip">
        깃허브를 연동하여 로그인을 진행합니다.
        <br />
        모든 서비스를 이용하실 수 있습니다.
      </div>
    </div>
  );
}
