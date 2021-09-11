function SvgDone(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 89 65"
      {...props}
    >
      <path
        fill={props.color || "#fff"}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.254 64.49a7.7 7.7 0 01-5.472-2.272L2.269 37.716a7.734 7.734 0 010-10.945 7.734 7.734 0 0110.945 0l19.04 19.02L75.786 2.269a7.734 7.734 0 0110.945 0 7.734 7.734 0 010 10.945L37.727 62.218a7.683 7.683 0 01-5.473 2.272z"
      ></path>
    </svg>
  );
}

export default SvgDone;
