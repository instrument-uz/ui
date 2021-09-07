import Tippy from "@tippyjs/react/headless"; // different import path!
import "tippy.js/dist/tippy.css"; // optional
import "tippy.js/themes/light.css"; // optional

function Tooltip(props) {
  return (
    <Tippy
      placement="bottom"
      render={(attrs) => (
        <div
          className="box shadow-300 px-3 py-2 rounded-md bg-white text-xs text-[#001a3494]"
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
