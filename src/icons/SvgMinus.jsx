function SvgMinus(props) {
  return (
    <svg fill="none" viewBox="0 0 14 2" {...props}>
      <path
        fill={props.color || "#00DA4A"}
        d="M13 0H1a1 1 0 100 2h12a1 1 0 100-2z"
      ></path>
    </svg>
  );
}

export default SvgMinus;
