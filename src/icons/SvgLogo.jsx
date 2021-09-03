import * as React from "react";

function SvgLogo(props) {
  return (
    <svg
      viewBox="0 0 25 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="0.242249"
        width="14.8579"
        height="33.6393"
        rx="1.86885"
        fill="#30A8F7"
      />
      <g filter="url(#filter0_b)">
        <path
          d="M9.18634 6.91803C9.18634 5.85873 10.0451 5 11.1044 5H22.5172C23.5765 5 24.4353 5.85873 24.4353 6.91803V26.0983C24.4353 27.1576 23.5765 28.0163 22.5172 28.0163H11.1044C10.0451 28.0163 9.18634 27.1576 9.18634 26.0983V6.91803Z"
          fill="#6FE4FF"
        />
      </g>
      <defs>
        <filter
          id="filter0_b"
          x="-364.829"
          y="-369.016"
          width="763.28"
          height="771.048"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation="187.008" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgLogo;
