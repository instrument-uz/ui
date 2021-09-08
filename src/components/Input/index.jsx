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
      <textarea
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholder={props.placeholder}
        type="text"
        spellCheck={false}
        {...props}
        className={`outline-none px-3 py-3 focus:outline-none placeholder-[#C8C8C8] | text-[#001A34] ${props.className}`}
      />
      <style>{` textarea{
        resize:none;
    }`}</style>
    </div>
  );
}

export default Input;
