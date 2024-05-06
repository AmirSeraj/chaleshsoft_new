import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { BackButtonProps } from "@/lib/types";

const BackButton = ({ label, href, className }: BackButtonProps) => {
  return (
    <Button
      className="font-normal w-full no-underline"
      variant={"link"}
      size={"sm"}
      asChild
    >
      <Link href={href ?? ''} className={className}>
        {label}
      </Link>
    </Button>
  );
};

export default BackButton;
