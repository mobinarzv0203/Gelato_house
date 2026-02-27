import type { SVGProps } from "react";
export const ArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2em"
    height="2em"
    fill="none"
    viewBox="0 0 128 128"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={6}
      d="M74.334 42.333 58.657 58.01a8 8 0 0 0 0 11.314L74.334 85"
    />
  </svg>
);