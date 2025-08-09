import { AuthWrapper } from "./AuthWrapper";

export function RegisterForm() {
  return (
    <AuthWrapper
      heading="Register"
      description="For register you need write your email and password"
      backButtonLabel="You have an account already? Login"
      backButtonHref="/auth/login"
      isShowSocial
    >
      RegisterForm
    </AuthWrapper>
  );
}
