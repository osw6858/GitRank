import AuthModal from '@/app/(guest)/_components/AuthModal';
import SignUpFrom from '@/app/(guest)/_components/SignUpForm';

export default function SignUpPageInterceptor() {
  return (
    <>
      <AuthModal>
        <SignUpFrom />
      </AuthModal>
    </>
  );
}
