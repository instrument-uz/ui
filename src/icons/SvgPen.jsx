function SvgPen(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        stroke={props.color || "#000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M18.627 30.498H31"
      ></path>
      <path
        stroke={props.color || "#000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M23.91 2.177a5.915 5.915 0 00-8.261 1.173l-13.1 17.39c-3.375 4.482-.183 10.035-.183 10.035s6.294 1.442 9.62-2.976l13.1-17.39a5.867 5.867 0 00-1.176-8.232z"
        clipRule="evenodd"
      ></path>
      <path
        stroke={props.color || "#000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M13.135 6.725l9.437 7.059"
      ></path>
    </svg>
  );
}

export default SvgPen;
