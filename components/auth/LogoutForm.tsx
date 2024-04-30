import { logout } from "@/lib/actions/auth/logout";
import React from "react";

const LogoutForm = async ({ title }: { title: string }) => {
  return (
    <form action={logout}>
      <button type="submit">{title}</button>
    </form>
  );
};

export default LogoutForm;
