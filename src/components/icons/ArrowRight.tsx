import type { SVGProps } from "react";

export const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M53 42.333 68.677 58.01a8 8 0 0 1 0 11.314L53 85"
    />
  </svg>
);