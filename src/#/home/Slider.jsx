import Carousel from "@/components/Carousel";
import Link from "@/components/Link";

function Slider() {
  return (
    <section className="w-full | pt-5">
      <Carousel autoplay={true} withoutControls={false}>
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
