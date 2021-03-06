import cn from "clsx";
import { useState } from "react";

function Star(props) {
  const [stars] = useState(arrayLength(5));
  const [activeStars, setActiveStars] = useState(props.star);

  return (
    <div className="flex items-center">
      <div className="fc">
        {stars.map((star, index) => (
          <svg
            key={index}
            className={cn({
              "duration-300": true,
              "cursor-pointer hover:scale-125": props.rate,
              "w-4": !props.size,
              "w-7": props.size == `large`,
              "mr-1": index !== 4,
            })}
            viewBox="0 0 11 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onMouseEnter={() => onHover(index + 1)}
            onBlur={() => setActiveStars(activeStars)}
          >
            <path
              d="M2.07 5.98c.13.13.19.31.16.5l-.45 2.49c-.04.2.05.42.23.54.17.13.4.14.59.04l2.24-1.17a.57.57 0 01.25-.06h.14c.05 0 .1.02.14.04L7.6 9.54c.11.05.24.07.36.05.3-.05.5-.34.45-.64l-.45-2.5a.57.57 0 01.16-.49L9.96 4.2c.15-.15.2-.37.14-.57a.57.57 0 00-.45-.38l-2.52-.37a.56.56 0 01-.45-.3L5.58.29a.53.53 0 00-.1-.13L5.42.12a.34.34 0 00-.08-.06L5.29.04 5.21 0h-.22a.57.57 0 00-.44.3L3.42 2.57a.56.56 0 01-.42.3L.5 3.24a.57.57 0 00-.46.38c-.07.2-.01.43.14.57L2.07 6z"
              fill={cn({
                "#E5E5E5": activeStars < index + 1, // SILVER
                "#FFF500": activeStars >= index + 1,
              })}
            />
          </svg>
        ))}
      </div>
      {props.total && (
        <p className="text-xs pl-2 text-[#6C6C6C]">({props.total})</p>
      )}
    </div>
  );

  function onHover(params) {
    if (!props.onRate) {
      return;
    }

    setActiveStars(+params);

    props.onRate(params);
  }

  function arrayLength(length) {
    return Array.from({ length: length }, (_, index) => index + 1);
  }
}

export default Star;
