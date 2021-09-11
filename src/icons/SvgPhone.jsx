function SvgPhone(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 39 39"
      {...props}
    >
      <path
        stroke={props.color || "#001A34"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12.5 26.498C-.205 13.79 1.602 7.971 2.94 6.095c.173-.303 4.414-6.652 8.96-2.927 11.286 9.294-3.001 7.98 6.475 17.458 9.479 9.476 8.164-4.81 17.457 6.473 3.725 4.548-2.624 8.79-2.925 8.96-1.876 1.34-7.697 3.148-20.406-9.56z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default SvgPhone;
