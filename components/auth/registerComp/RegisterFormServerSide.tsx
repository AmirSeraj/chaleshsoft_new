import React from "react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../../ui/form";
import { UseFormReturn } from "react-hook-form";
import * as z from "zod";
import { RegisterSchema } from "@/schema";
import { FormError } from "../forms/FormError";
import { FormSuccess } from "../forms/FormSuccess";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

interface FormRegisterProps {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
}

const RegisterFormServerSide = ({
  form,
  onSubmit,
  isPending,
  error,
  success,
  showPassword,
  setShowPassword,
  showConfirmPassword,
  setShowConfirmPassword,
  locale,
}: {
  form: UseFormReturn<FormRegisterProps, any, undefined>;
  onSubmit: (values: z.infer<typeof RegisterSchema>) => void;
  isPending: boolean;
  error?: string | false;
  success?: string | false;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  showConfirmPassword: boolean;
  setShowConfirmPassword: React.Dispatch<React.SetStateAction<boolean>>;
  locale: string;
}) => {
  const { t } = useTranslation();
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("name")}</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder="John Doe"
                    type="text"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("email")}</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder="john.doe@example.com"
                    type="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("password")}</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="******"
                      type={showPassword ? "text" : "password"}
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className={clsx(
                        "absolute bottom-2 cursor-pointer",
                        locale === "fa" ? "left-7" : "right-7"
                      )}
                    >
                      {showPassword ? (
                        <IoEye size={22} />
                      ) : (
                        <IoEyeOff size={22} />
                      )}
                    </span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("confirm_password")}</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="******"
                      type={showConfirmPassword ? "text" : "password"}
                    />
                    <span
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className={clsx(
                        "absolute bottom-2 cursor-pointer",
                        locale === "fa" ? "left-7" : "right-7"
                      )}
                    >
                      {showPassword ? (
                        <IoEye size={22} />
                      ) : (
                        <IoEyeOff size={22} />
                      )}
                    </span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {error && <FormError message={error} />}
        {success && <FormSuccess message={success} />}
        <Button type="submit" disabled={isPending} className="w-full">
          {/* Create an account */}
          {t("signup")}
        </Button>
      </form>
    </Form>
  );
};

export default RegisterFormServerSide;
