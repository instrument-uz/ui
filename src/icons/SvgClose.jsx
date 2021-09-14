function SvgClose(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <rect
        width="25.161"
        height="2.516"
        x="0"
        y="17.522"
        fill={props.color || "#000"}
        rx="1.258"
        transform="rotate(-44.138 0 17.522)"
      ></rect>
      <rect
        width="25.161"
        height="2.516"
        x="17.522"
        y="19.81"
        fill={props.color || "#000"}
        rx="1.258"
        transform="rotate(-134.137 17.522 19.81)"
      ></rect>
    </svg>
  );
}

export default SvgClose;
