import type { JSX } from "react";

type ButtonProps = {
  variant?: "contained" | "outlined" | "text";
} & React.PropsWithChildren;

//hashtable
const ButtonDesign = {
  contained: () => (
    <button
      style={{
        backgroundColor: "blue",
        color: "white",
      }}
    >
      contained
    </button>
  ),
  outlined: () => (
    <button
      style={{
        border: "2px solid blue",
        color: "blue",
        backgroundColor: "transparent",
      }}
    >
      outlined
    </button>
  ),
  text: () => (
    <button
      style={{
        backgroundColor: "transparent",
        color: "blue",
      }}
    >
      text
    </button>
  ),
};
export const Button: React.FC<ButtonProps> = ({
  variant = "outlined",
}): JSX.Element => {
  return ButtonDesign[variant]();
};
