import Star from "@/#/home/components/Star";
import Breadcrumb from "@/#/product/Breadcrumb";
import Container from "@/components/Global/Container";
import HF from "@/components/Layout/HF";
import SvgEye from "@/icons/SvgEye";
import SvgHeart from "@/icons/SvgHeart";
import SvgComment from "@/icons/SvgComment";
import Carousel from "@/components/Carousel";
import { useState } from "react";
import cn from "clsx";
function Product() {
  const [products] = useState([
    {
      url: "/images/mac.png",
    },
    {
      url: "https://py.abad.uz/media/images/76233/ti7z49.jpeg",
    },
    {
      url: "https://py.abad.uz/media/images/76233/xfxedl.jpeg",
    },
    {
      url: "https://py.abad.uz/media/images/76233/c99xp1.jpeg",
    },
    {
      url: "https://py.abad.uz/media/images/76233/qsxaz8.jpeg",
    },
    {
      url: "https://py.abad.uz/media/images/76233/jlmnuy.jpeg",
    },
  ]);

  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <HF>
      <div className="product">
        <Breadcrumb />

        <Container className="pt-7">
          <h1 className="text-2xl leading-10 font-bold">
            13.3" Ноутбук Apple MacBook Pro, Apple M1 (3.2 ГГц), RAM 8 ГБ, SSD
            512 ГБ, Apple M1 GPU, macOS, (MYDC2RU/A), серебристый
          </h1>

          <Container className="pt-5 | flex items-center">
            <Star star={5} total={255} />

            <div className="flex items-center | pl-12">
              <SvgEye className="h-5" />
              <p className="text-xs pl-2 text-[#6C6C6C]">32 000</p>
            </div>

            <div className="flex items-center | pl-12">
              <SvgHeart className="h-5" color="black" />

              <p className="text-xs pl-2 text-[#6C6C6C]">В избранное</p>
            </div>

            <div className="flex items-center | pl-12">
              <SvgComment className="h-5" />

              <p className="text-xs pl-2 text-[#6C6C6C]">0 отзывов</p>
            </div>
          </Container>
        </Container>
        <hr className="mt-5" />
        <Container className="pt-7 | flex items-center">
          <div className="w-1/2">
            <Carousel
              slideIndex={activeSlide}
              afterSlide={(e) => setActiveSlide(e)}
            >
              {products.map((product) => (
                <div className="h-96 w-full">
                  <img
                    src={product.url}
                    alt="product_image"
                    className="h-full object-contain"
                  />
                </div>
              ))}
            </Carousel>

            <div className="flex items-center | pt-3">
              <Carousel slidesToScroll={2} slidesToShow={4.4}>
                {products.map((product, index) => (
                  <div
                    className={cn({
                      "h-[4.5rem] w-full | mr-3 | rounded-[7px] | py-2 | border hover:border-[#30A8F7] duration-300 cursor-pointer": true,
                      "border-[#30A8F7]": activeSlide === index,
                    })}
                    onClick={() => setActiveSlide(index)}
                  >
                    <img
                      src={product.url}
                      alt="product_image"
                      className="h-full object-contain | mx-auto"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
          <div className="w-1/2"></div>
        </Container>
      </div>
    </HF>
  );
}

export default Product;
