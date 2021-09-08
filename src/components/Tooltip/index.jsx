import Tippy from "@tippyjs/react/headless";

function Tooltip(props) {
  return (
    <Tippy
      placement="bottom"
      render={(attrs) => (
        <div
          className="box shadow-300 px-3 py-2 rounded-md bg-white text-xs text-[#001a3494] duration-300"
          tabIndex="-1"
          {...attrs}
          style={{
            width: "25rem",
          }}
        >
          {props.desc}
        </div>
      )}
    >
      {props.children}
    </Tippy>
  );
}

export default Tooltip;
