function SvgTick(props) {
  return (
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.99866 7.5L6.66687 9.16751L10.0019 5.83249"
        stroke="#30A8F7"
        stroke-width="0.527027"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1 7.5C1 12.3746 2.62535 14 7.5 14C12.3746 14 14 12.3746 14 7.5C14 2.62535 12.3746 1 7.5 1C2.62535 1 1 2.62535 1 7.5Z"
        stroke="#30A8F7"
        stroke-width="0.527027"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default SvgTick;
