import React from "react";

type Props = { className?: Props };

export default function BurgerMenu({ className }: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_2_7924"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_2_7924)">
        <path
          d="M3.5 17.6345V16.1347H20.5V17.6345H3.5ZM3.5 12.75V11.25H20.5V12.75H3.5ZM3.5 7.86523V6.36548H20.5V7.86523H3.5Z"
          fill="#1C1B1F"
        />
      </g>
    </svg>
  );
}
