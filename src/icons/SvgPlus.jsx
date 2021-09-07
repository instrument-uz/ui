function SvgPlus(props) {
  return (
    <svg fill="none" viewBox="0 0 14 14" {...props}>
      <path
        fill={props.color || "#00DA4A"}
        d="M7 0a1 1 0 00-1 1v5H1a1 1 0 000 2h5v5a1 1 0 102 0V8h5a1 1 0 100-2H8V1a1 1 0 00-1-1z"
      ></path>
    </svg>
  );
}

export default SvgPlus;
