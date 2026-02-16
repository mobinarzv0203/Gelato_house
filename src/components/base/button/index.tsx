import type React from "react";
import type { JSX } from "react";
import { clx } from "../../../utilities/clx";

type ButtonProps = {
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const buttonBaseStyle = "rounded-xl";

const variants = {
  contained: {
    primary: "bg-primary-500 text-white", 
    secondary: "bg-secondary-500 text-white"
  },
  outlined: {
    primary: "text-primary-500 border border-primary-500", 
    secondary: "text-secondary-500 border border-secondary-500"
  },
  text: {
    primary: "text-gray-500", 
    secondary: "text-gray-500"
  }
}

const sizes = {
  small: "px-2 py-1 text-sm", 
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg"
}
export const Button: React.FC<ButtonProps> = ({
  variant = "contained",
  children,
  color = "primary",
  size = "medium",
  ...props
}): JSX.Element => {
  return(
    <button
          className={clx(
            buttonBaseStyle, 
            variants[variant][color], 
            sizes[size])}
          {...props}
        >
          {children}
        </button>
  )
};
