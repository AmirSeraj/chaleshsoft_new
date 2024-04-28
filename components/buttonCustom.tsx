"use client";

import React from "react";

interface ButtonCustomProps {
  className: string;
  onClick?: () => void;
  children: React.ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}
const ButtonCustom = ({
  className,
  onClick,
  children,
  onMouseEnter,
  onMouseLeave,
}: ButtonCustomProps) => {
  const buttonClasses = `p-3 rounded-lg text-sm hover:bg-sky-300 hover:text-slate-800 transition-all hover:duration-700 active:duration-100 ease-in active:bg-sky-600 active:outline-none active:shadow-outline border border-transparent ${className}`;
  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
};

export default ButtonCustom;
