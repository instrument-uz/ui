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
        className="pl-3 py-1 | w-full outline-none focus:outline-none placeholder-[#C8C8C8] |"
      />
      <SvgSearch
        className="w-5 duration-300"
        color={`${focus ? "#30A8F7" : "#C8C8C8"}`}
      />
    </Container>
  );
}

export default Search;
