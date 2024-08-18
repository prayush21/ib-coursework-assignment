import React from "react";

type Props = { className?: string };

export default function EvaluateIcon({ className }: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="12" fill="white" />
      <g clip-path="url(#clip0_2_4769)">
        <path
          d="M10.9524 7.46949L10.8014 7.41031L10.6501 7.46881L9.43995 7.9367L9.91748 6.74234L9.97695 6.5936L9.92146 6.44333L9.5185 5.35202L10.5974 5.76027L10.7488 5.81754L10.8991 5.75763L12.0959 5.28074L11.6287 6.49333L11.5698 6.64616L11.6307 6.79818L12.0764 7.90999L10.9524 7.46949ZM17.9465 14.4675L17.7965 14.4114L17.6475 14.4703L16.4572 14.941L16.931 13.7559L16.9926 13.602L16.9316 13.4478L16.4843 12.3179L17.6021 12.7703L17.7572 12.8331L17.9127 12.7712L19.1002 12.298L18.6302 13.4907L18.5708 13.6413L18.6287 13.7924L19.0437 14.8773L17.9465 14.4675ZM9.9097 16.6876L9.76481 16.6355L9.62087 16.6902L6.5211 17.8673L7.69818 14.7675L7.75268 14.624L7.70104 14.4794L6.59481 11.3824L9.70175 12.4805L9.84518 12.5312L9.98753 12.4776L13.0739 11.3145L11.9108 14.4009L11.857 14.5436L11.9081 14.6874L13.0164 17.804L9.9097 16.6876Z"
          fill="#6947BF"
          stroke="#6947BF"
          stroke-width="0.833333"
        />
      </g>
      <defs>
        <clipPath id="clip0_2_4769">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(2 2)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
