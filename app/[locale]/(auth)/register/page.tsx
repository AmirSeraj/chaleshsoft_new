import RegisterForm from "@/components/auth/registerComp/RegisterForm";
import React from "react";

const RegisterPage = ({ params: { locale } }: { params: { locale: string } }) => {
  return (
    <div className="lg:w-1/2 w-full flex justify-center items-center">
      <RegisterForm locale={locale} />
    </div>
  );
};

export default RegisterPage;
