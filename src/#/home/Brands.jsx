import Container from "@/components/Global/Container";
import { useState } from "react";
import Link from "@/components/Link";
function Brands(props) {
  const [brands] = useState([
    {
      url: "http://localhost:3000/brands/apple.png",
    },
    {
      url: "http://localhost:3000/brands/stihl.png",
    },
    {
      url: "http://localhost:3000/brands/karcher.png",
    },
    {
      url: "http://localhost:3000/brands/lacoste.png",
    },
    {
      url: "http://localhost:3000/brands/samsung.png",
    },
    {
      url: "http://localhost:3000/brands/mi.png",
    },
  ]);

  return (
    <>
      <Container className="inline-block">
        <h1 className="font-bold text-2xl text-[#001A34]">Бренды</h1>
      </Container>

      <section className="brands py-12">
        <Container className="grid grid-cols-6 gap-16 grid-flow-row">
          {brands.map((brand, index) => (
            <Link href={`/brands/${index}`}>
              <div className="h-10 click:scale">
                <img src={brand.url} alt="" className="h-full mx-auto" />
              </div>
            </Link>
          ))}
        </Container>
      </section>
    </>
  );
}

export default Brands;
