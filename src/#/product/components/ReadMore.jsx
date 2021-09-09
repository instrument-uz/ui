import cn from "clsx";
import { useState } from "react";

function ReadMore(props) {
  const [full, setFull] = useState(false);

  return (
    <section>
      <div
        className={cn({
          "h-40 overflow-hidden | relative |  duration-300": true,
          "h-auto": full,
        })}
      >
        <p>{props.src || props.children}</p>
        <div
          className={cn({
            "absolute bottom-0 h-12 w-full": true,
            hidden: full,
          })}
          style={{
            background:
              "linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, rgba(255, 255, 255, 0.2) 0%, #FFFFFF 100%)",
          }}
        ></div>
      </div>
      <a
        className={cn({
          "text-[#30A8F7] duration-200 inline-block | cursor-pointer": true,
          hidden: full,
        })}
        onClick={() => setFull(true)}
      >
        Показать полностью
      </a>
    </section>
  );
}

export default ReadMore;
