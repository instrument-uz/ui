import SvgSearch from "@/icons/SvgSearch";
import { useState } from "react";
import cn from "clsx";
import Container from "../Global/Container";

function Search() {
  const [focus, setFocus] = useState(false);

  return (
    <Container
      className={cn({
        "pr-3 fcc w-2/3 | border duration-300 border-[#C8C8C8] rounded-full overflow-hidden": true,
        "border-[#30A8F7] ring-1 ring-[#30a7f771]": focus,
      })}
    >
      <input
        type="text"
        onFocus={setFocus}
        onBlur={() => setFocus(false)}
        placeholder="Поиск ваших любимых товаров..."
        spellCheck={false}
        className="pl-3 py-2 | w-full outline-none focus:outline-none placeholder-[#C8C8C8] | text-sm font-semibold text-[#001A34]"
      />
      <SvgSearch className="w-5 duration-300" color={`#C8C8C8`} />
    </Container>
  );
}

export default Search;
