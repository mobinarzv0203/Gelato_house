import type React from "react";
import type { JSX } from "react";

type ButtonProps = {
  variant?: "contained" | "outlined" | "text";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
  variant = "contained",
  children,
  ...props
}): JSX.Element => {
  switch (variant) {
    case "contained":
      return (
        <button className="bg-blue-200 p-2 rounded-3xl" {...props}>
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
