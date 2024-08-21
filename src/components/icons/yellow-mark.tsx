import React from "react";

interface IconProps {
  className?: string;
}

export default function YellowMark({ className }: IconProps) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_2_539"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="20"
      >
        <rect width="40" height="40" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_2_539)">
        <path
          d="M10.335 2C5.73408 2 2 5.73408 2 10.335C2 14.9359 5.73408 18.67 10.335 18.67C14.9359 18.67 18.67 14.9359 18.67 10.335C18.67 5.73408 14.9359 2 10.335 2ZM11.1685 14.5025H9.5015V12.8355H11.1685V14.5025ZM11.1685 11.1685H9.5015V6.1675H11.1685V11.1685Z"
          fill="#F9C94E"
        />
      </g>
    </svg>
  );
}
