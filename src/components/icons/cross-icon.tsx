import React from "react";

type Props = { className: string };

function CrossIcon({ className }: Props) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_2_4745"
        maskUnits="userSpaceOnUse"
        x="0"
        y="-1"
        width="15"
        height="16"
      >
        <rect y="-0.00183105" width="14.9333" height="14.9333" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_2_4745)">
        <path
          d="M5.59984 11.3313L4.6665 10.398L7.0665 7.998L4.6665 5.61467L5.59984 4.68134L7.99984 7.08134L10.3832 4.68134L11.3165 5.61467L8.9165 7.998L11.3165 10.398L10.3832 11.3313L7.99984 8.93133L5.59984 11.3313Z"
          fill="#5B6170"
        />
      </g>
    </svg>
  );
}

export default CrossIcon;
