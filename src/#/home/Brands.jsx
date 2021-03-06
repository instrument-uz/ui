import Container from "@/components/Global/Container";
import { useState } from "react";
import Link from "@/components/Link";

function Brands(props) {
  const [brands] = useState([
    {
      url: "/images/brands/apple.png",
    },
    {
      url: "/images/brands/stihl.png",
    },
    {
      url: "/images/brands/karcher.png",
    },
    {
      url: "/images/brands/lacoste.png",
    },
    {
      url: "/images/brands/samsung.png",
    },
    {
      url: "/images/brands/mi.png",
    },
    {
      url: "/images/brands/dell.png",
    },
    {
      url: "/images/brands/hu.png",
    },
  ]);

  return (
    <>
      <Container className="inline-block">
        <h1 className="font-bold text-2xl text-[#001A34]">Бренды</h1>
      </Container>

      <section className="brands py-12">
        <Container
          className={`grid gap-16 grid-flow-row`}
          style={{
            gridTemplateColumns: `repeat(${props.count || 6}, minmax(0, 1fr))`,
          }}
        >
          {brands.map((brand, index) => (
            <Link href={`/brands/${index}`} key={index}>
              <div className="h-10 click:scale">
                <img
                  src={brand.url}
                  alt=""
                  className="h-full object-contain mx-auto"
                />
              </div>
            </Link>
          ))}
        </Container>
      </section>
    </>
  );
}

export default Brands;
