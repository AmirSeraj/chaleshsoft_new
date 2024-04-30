"use client";
import React, { useState, useTransition } from "react";
import { CardWrapper } from "./CardWrapper";
import { useForm } from "react-hook-form";
import { LoginSchema } from "@/schema";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import LoginFormServerSide from "./LoginFormServerSide";
import { login } from "@/lib/actions/auth/login";
import { useTranslation } from "react-i18next";

const LoginForm = ({ locale }: { locale: string }) => {
  const [error, setError] = useState<string | false | undefined>("");
  const [success, setSuccess] = useState<string | false | undefined>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { t } = useTranslation();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");
    setLoading(true);
    startTransition(() => {
      login(values).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
        setLoading(false);
      });
    });
  };

  return (
    <CardWrapper
      headerTitle={t("login")}
      headerLabel="Welcome back!"
      backButtonHref="/register"
      backButtonLabel={t("sign_up_account")}
      showSocial
    >
      <LoginFormServerSide
        onSubmit={onSubmit}
        error={error}
        success={success}
        isPending={isPending}
        form={form}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        loading={loading}
        locale={locale}
      />
    </CardWrapper>
  );
};

export default LoginForm;
