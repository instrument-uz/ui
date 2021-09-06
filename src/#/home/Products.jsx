import Container from "@/components/Global/Container";
import Carousel from "@/components/Carousel";
import { useEffect, useState } from "react";
import Star from "./components/Star";
import Link from "@/components/Link";

function Products(props) {
  const [state, setstate] = useState([]);
  useEffect(() => {
    fetch(props.url)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setstate(res.results);
      });
  }, []);

  return (
    <section className="py-12">
      <Container className="inline-block">
        <h1 className="font-bold text-2xl text-[#001A34]">{props.title}</h1>
        {props.type === `new` && (
          <p className="bg-[#F3FFF6] text-[#00F836] inline-block | absolute -top-3 -right-7 text-xs font-bold | px-3 py-1 | rounded-full">
            New
          </p>
        )}
      </Container>

      <Container className="pt-12">
        <Carousel slidesToShow={4.7} withoutControls={true}>
          {state.map((product) => {
            return (
              <Link href={`/product/`} className="h-full">
                <div className="rounded-[7px] group hover:shadow-100 duration-300 h-full ">
                  <div className="mb-5 h-40 w-56 px-3 block">
                    <img
                      src={product.img[0]}
                      alt="2"
                      className="mx-auto h-full object-contain"
                    />
                  </div>

                  <Container className="px-3">
                    <h1 className="font-extrabold text-lg text-[#001A34] group-hover:text-[#30A8F7] duration-300">
                      $ {product.cost.usd}
                    </h1>

                    <Container className="flex items-center">
                      <Star star={4} />

                      <p className="text-[#6C6C6C] px-2 py-1 text-[11px]">
                        (255)
                      </p>
                    </Container>

                    <p className="w-48 text-[#6C6C6C] py-2 text-sm">
                      {product.name}
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
