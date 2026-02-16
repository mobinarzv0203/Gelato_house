import type React from "react";
import type { JSX } from "react";
import { clx } from "../../../utilities/clx";

type ButtonProps = {
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const colors = { 
  primary: "bg-primary-500 text-white", 
  secondary: "bg-secondary-500 text-white" 
};

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
  switch (variant) {
    case "contained":
      return (
        <button
          className={clx("p-2 rounded-3xl", colors[color], sizes[size])}
          {...props}
        >
          {children}
        </button>
      );
    case "outlined":
      return <button {...props}>outlined</button>;
    case "text":
      return <button {...props}>text</button>;
    default:
      return <button {...props}>outlined</button>;
  }
};
