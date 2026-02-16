import type React from "react";
import type { JSX } from "react";

type ButtonProps = {
  variant?: "contained" | "outlined" | "text";
} & React.PropsWithChildren &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

//hashtable
const ButtonDesign = {
  contained: ({ children, ...rest }) => (
    <button className="p-2 rounded-3xl bg-red-200" {...rest}>
      {children}
    </button>
  ),
  outlined: (props) => <button {...props}>outlined</button>,
  text: (props) => <button {...props}>text</button>,
};
export const Button: React.FC<ButtonProps> = ({
  variant = "contained",
  ...props
}): JSX.Element => {
  return ButtonDesign[variant](props);
};
