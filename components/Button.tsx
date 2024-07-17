import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: "primary" | "secondary";
}

export default function Button({
  buttonType = "primary",
  onClick,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`flex h-[45px] w-full cursor-pointer items-center justify-center rounded-[5px] border-[none] bg-[#473a2b] text-[16px] text-[#fff] [transition:all_0.2s] hover:bg-[#322618] ${buttonType === "secondary" ? "text-[14px] opacity-[0.85]" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
