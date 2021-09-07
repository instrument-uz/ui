function SvgComment(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 22 22"
      {...props}
    >
      <path
        stroke={props.color || "#000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M14.94 11.413h.01M10.93 11h.011M6.921 11h.012"
      ></path>
      <path
        stroke={props.color || "#000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M18.071 18.07c-3.055 3.056-7.581 3.717-11.285 2.004-.546-.22-4.085.76-4.853-.007-.767-.768.213-4.307-.007-4.854C.213 11.511.874 6.983 3.93 3.927c3.901-3.903 10.24-3.903 14.141 0 3.91 3.909 3.901 10.241 0 14.143z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default SvgComment;
