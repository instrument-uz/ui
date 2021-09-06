import Carousel from "nuka-carousel";
import { useState } from "react";
import Link from "@/components/Link";

function Slider() {
  const [carouselConfig] = useState({
    nextButtonClassName: "hidden",
    prevButtonClassName: "hidden",
    pagingDotsContainerClassName: "dots-container",
    pagingDotsStyle: {
      fill: "white",
      borderRadius: "50%",
      display: "inline-block",
      margin: "0rem 0.5rem",
      width: "5px",
      height: "5px",
    },
  });

  return (
    <section className="w-full | pt-5">
      <Carousel
        defaultControlsConfig={carouselConfig}
        slidesToShow={1}
        cellSpacing={10}
        autoplay={true}
      >
        <Link href="/saf">
          <img
            src="https://admin.abad.uz/images/banners/a4oaal.jpeg"
            className="object-cover h-80 | outline-none focus:outline-none | rounded-[10px] overflow-hidden hover:shadow-100 duration-300"
          />
        </Link>

        <Link href="/saf">
          <img
            src="https://admin.abad.uz/images/banners/z44f3z.jpg"
            className="object-cover h-80 | outline-none focus:outline-none | rounded-[10px]  overflow-hidden"
          />
        </Link>

        <Link href="/saf">
          <img
            src="https://admin.abad.uz/images/banners/x09g1t.png"
            className="object-cover h-80 | outline-none focus:outline-none | rounded-[10px]  overflow-hidden"
          />
        </Link>
      </Carousel>
    </section>
  );
}

export default Slider;
