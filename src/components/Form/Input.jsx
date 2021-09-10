import cn from "clsx";
import { useState } from "react";

function Input(props) {
  const [focus, setFocus] = useState(false);

  return (
    <div
      className={cn(props.className, {
        "duration-200 | border | rounded-[7px] overflow-hidden": true,
        "border-[#30A8F7]": focus,
      })}
    >
      <input
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholder={props.placeholder}
        type="text"
        spellCheck={false}
        className={`outline-none focus:outline-none w-full placeholder-[#C8C8C8] | text-[#001A34] ${props.className}`}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default Input;
