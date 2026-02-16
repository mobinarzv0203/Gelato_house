import type React from "react";
import type { JSX } from "react";
import { clx } from "../../../utilities/clx";

type ButtonProps = {
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const colors = { primary: "bg-primary-500", secondary: "bg-secondary-500" };
export const Button: React.FC<ButtonProps> = ({
  variant = "contained",
  children,
  color = "primary",
  ...props
}): JSX.Element => {
  switch (variant) {
    case "contained":
      return (
        <button
          className={clx("bg-primary-600 p-2 rounded-3xl", colors[color])}
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
