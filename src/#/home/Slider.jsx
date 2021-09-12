import Carousel from "@/components/Carousel";
import Link from "@/components/Link";
import cn from "clsx";

function Slider(props) {
  return (
    <section className="w-full | pt-5">
      <Carousel autoplay={true} withoutControls={false} slidesToScroll={1}>
        <Link href="/saf">
          <div
            className={cn({
              "h-80": !props.size || props.size === `large`,
              "h-64": props.size === `small`,
            })}
          >
            <img
              src="/images/full-banner.png"
              className="object-cover h-full | outline-none focus:outline-none | rounded-[10px] overflow-hidden hover:shadow-100 duration-300"
            />
          </div>
        </Link>

        <Link href="/saf">
          <div
            className={cn({
              "h-80": !props.size || props.size === `large`,
              "h-64": props.size === `small`,
            })}
          >
            <img
              src="/images/full-banner2.png"
              className="object-cover h-full | outline-none focus:outline-none | rounded-[10px]  overflow-hidden"
            />
          </div>
        </Link>

        <Link href="/saf">
          <div
            className={cn({
              "h-80": !props.size || props.size === `large`,
              "h-64": props.size === `small`,
            })}
          >
            <img
              src="/images/full-banner3.png"
              className="object-cover h-full | outline-none focus:outline-none | rounded-[10px]  overflow-hidden"
            />
          </div>
        </Link>
      </Carousel>
    </section>
  );
}

export default Slider;
