function SvgHeart(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 29 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.52386 13.3949C0.0117321 8.7274 1.78035 2.92434 6.73669 1.34713C9.34381 0.515333 12.5611 1.20919 14.3889 3.70179C16.1125 1.11724 19.4228 0.520906 22.0271 1.34713C26.982 2.92434 28.7605 8.7274 27.2498 13.3949C24.8963 20.7933 16.6846 24.6472 14.3889 24.6472C12.0947 24.6472 3.95623 20.8797 1.52386 13.3949Z"
        stroke={props.color || "#9D9D9D"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgHeart;
