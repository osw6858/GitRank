import AuthModal from '@/app/(guest)/_components/AuthModal';

export default function SignInPageInterceptor() {
  return (
    <>
      <AuthModal title={'Git Rank 가입하기'}>
        <div></div>
      </AuthModal>
    </>
  );
}
