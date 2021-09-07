function SvgBag(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 25"
      {...props}
    >
      <path
        stroke={props.color || "#9D9D9D"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17.243 6.231a5.23 5.23 0 00-5.231-5.23 5.23 5.23 0 00-5.254 5.207v.023M15.558 11.685h-.056M8.497 11.685h-.055"
      ></path>
      <path
        fillRule="evenodd"
        stroke={props.color || "#9D9D9D"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 23.934c-7.88 0-8.787-2.483-10.557-9.042C-.332 8.312 3.23 5.85 12 5.85s12.332 2.462 10.556 9.042c-1.769 6.56-2.675 9.042-10.556 9.042z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default SvgBag;
