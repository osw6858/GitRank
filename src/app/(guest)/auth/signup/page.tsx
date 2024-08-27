import AuthModal from '@/app/(guest)/_components/AuthModal';
import SignUpFrom from '@/app/(guest)/_components/SignUpForm';

export default function SignUpPage() {
  return (
    <>
      <AuthModal title={'계정을 생성하세요'}>
        <SignUpFrom />
      </AuthModal>
    </>
  );
}
