import AuthModal from '@/app/(guest)/_components/AuthModal';
import SignInForm from '@/app/(guest)/_components/SignInForm';

export default function SignInPageInterceptor() {
  return (
    <>
      <AuthModal>
        <SignInForm />
      </AuthModal>
    </>
  );
}
