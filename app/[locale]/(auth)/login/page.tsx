import LoginForm from "@/components/auth/loginComp/LoginForm";

const LoginPage = ({ params: { locale } }: { params: { locale: string } }) => {
  return (
    <div className="lg:w-1/2 w-full flex justify-center items-center">
      <LoginForm locale={locale} />
    </div>
  );
};

export default LoginPage;
