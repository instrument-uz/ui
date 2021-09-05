import Container from "@/components/Global/Container";
import Carousel from "nuka-carousel";
import { useState } from "react";
import Star from "./components/Star";
import Link from "@/components/Link";

function Products() {
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
    <section className="py-12">
      <Container className="inline-block">
        <h1 className="font-bold text-3xl text-[#001A34]">Новинки</h1>
        <p className="bg-[#F3FFF6] text-[#00F836] inline-block | absolute -top-3 -right-7 text-xs font-bold | px-3 py-1 | rounded-full">
          New
        </p>
      </Container>

      <Container className="pt-12">
        <Carousel
          defaultControlsConfig={carouselConfig}
          slidesToShow={5.5}
          withoutControls={true}
          slidesToScroll={3}
          defaultControlsConfig={{
            containerClassName: "product",
          }}
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => {
            return (
              <Link href={`/product/${index}`}>
                <div className="rounded-[7px] group hover:shadow-100 duration-300">
                  <div className="py-3">
                    <img
                      src="http://localhost:3000/asd.png"
                      alt="2"
                      className="mx-auto h-36"
                    />
                  </div>

                  <Container className="px-3">
                    <h1 className="font-extrabold text-lg text-[#001A34] group-hover:text-[#30A8F7] duration-300">
                      $ 32.00
                    </h1>

                    <Container className="flex items-center">
                      <Star star={3} />

                      <p className="text-[#6C6C6C] px-2 py-1 text-[11px]">
                        (255)
                      </p>
                    </Container>

                    <p className="w-48 text-[#6C6C6C] py-2 text-sm">
                      Молоток столярный Vira Rage 450г
                    </p>
                  </Container>
                </div>
              </Link>
            );
          })}
        </Carousel>
      </Container>
    </section>
  );
}

export default Products;
