import * as React from "react";
import { twMerge } from "tailwind-merge";

type TButtonProps = {
  children?: React.ReactNode;
  type?: "submit" | "button" | "reset" | undefined;
  className?: string;
  onClick?: () => void;
};

const Button: React.FC<TButtonProps> = ({
  children,
  type = "submit",
  className = "",
  onClick,
  ...props
}) => {
  return (
    <button
      type={type}
      className={twMerge(`w-fit h-[48px] px-3 bg-sky-200 rounded-md`, className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
