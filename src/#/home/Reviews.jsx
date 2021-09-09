import Carousel from "@/components/Carousel";
import Container from "@/components/Global/Container";
import Link from "@/components/Link";
import Star from "./components/Star";

function Reviews(props) {
  return (
    <>
      <Container className="inline-block">
        <h1 className="font-bold text-2xl text-[#001A34]">Отзывы</h1>
      </Container>
      <Container className="flex justify-between pt-12">
        <Carousel slidesToShow={2.5}>
          {[0, 1, 2].map((n, index) => (
            <div
              className="shadow-200 flex rounded-[5px] overflow-hidden"
              key={index}
            >
              <Link href={`/product/`} className="h-full">
                <div className="rounded-[7px] group duration-300 h-full">
                  <div className="mb-2 h-24 w-full">
                    <img
                      src={`/images/ai.png`}
                      alt="2"
                      className="mx-auto h-full"
                    />
                  </div>

                  <Container className="pl-3">
                    <h1 className="font-extrabold text-sm text-[#001A34] group-hover:text-[#30A8F7] duration-300">
                      540,000 сум{" "}
                    </h1>

                    <Container className="flex items-center">
                      <Star star={3} />

                      <p className="text-[#6C6C6C] px-1 py-1 text-[10px]">
                        (255)
                      </p>
                    </Container>

                    <p className="w-40 text-[#6C6C6C] py-2 text-xs">
                      Наушники Apple AirPods Pro в зарядном футляре
                    </p>
                  </Container>
                </div>
              </Link>

              <div className="person pt-5 pb-3 px-3 | relative">
                <p className="text-[#001A34] w-48 pb-7 text-xs">
                  Быстрая доставка и качественная продукция.
                </p>
                <Star star={5} size={`small`} />

                <Container className="mt-14">
                  <div className="person flex items-center justify-start">
                    <div className="avatar w-7 h-7">
                      <img
                        src="/images/girl.png"
                        alt="avatar"
                        className="object-cover object-center h-full"
                      />
                    </div>

                    <p className="pl-3 text-black text-sm">Ильзара</p>
                  </div>
                </Container>
                <div className="verified absolute bottom-0 right-0">
                  <svg
                    className="w-12"
                    viewBox="0 0 58 59"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M67 35.0703C67 37.4127 66.4373 39.585 65.3119 41.574C64.1865 43.5631 62.6816 45.1203 60.7842 46.2064C60.8365 46.5598 60.8627 47.1094 60.8627 47.8553C60.8627 51.4016 59.6719 54.4113 57.3164 56.8977C54.9479 59.3971 52.0951 60.6402 48.7582 60.6402C47.2664 60.6402 45.84 60.3654 44.4922 59.8158C43.4453 61.9619 41.9404 63.6893 39.9645 65.0109C38.0016 66.3457 35.8424 67 33.5 67C31.1053 67 28.933 66.3588 26.9963 65.0502C25.0465 63.7547 23.5547 62.0143 22.5078 59.8158C21.16 60.3654 19.7467 60.6402 18.2418 60.6402C14.9049 60.6402 12.0391 59.3971 9.64434 56.8977C7.24961 54.4113 6.05879 51.3885 6.05879 47.8553C6.05879 47.4627 6.11113 46.9131 6.20273 46.2064C4.30527 45.1072 2.80039 43.5631 1.675 41.574C0.562695 39.585 0 37.4127 0 35.0703C0 32.584 0.628125 30.2939 1.87129 28.2264C3.11445 26.1588 4.78945 24.6277 6.8832 23.6332C6.33359 22.1414 6.05879 20.6365 6.05879 19.1447C6.05879 15.6115 7.24961 12.5887 9.64434 10.1023C12.0391 7.61602 14.9049 6.35977 18.2418 6.35977C19.7336 6.35977 21.16 6.63457 22.5078 7.18418C23.5547 5.03809 25.0596 3.31074 27.0355 1.98906C28.9984 0.667383 31.1576 0 33.5 0C35.8424 0 38.0016 0.667383 39.9645 1.97598C41.9273 3.29766 43.4453 5.025 44.4922 7.17109C45.84 6.62148 47.2533 6.34668 48.7582 6.34668C52.0951 6.34668 54.9479 7.58984 57.3164 10.0893C59.685 12.5887 60.8627 15.5984 60.8627 19.1316C60.8627 20.7805 60.6141 22.2723 60.1168 23.6201C62.2105 24.6146 63.8855 26.1457 65.1287 28.2133C66.3719 30.2939 67 32.584 67 35.0703ZM32.0736 45.1596L45.9055 24.4445C46.2588 23.8949 46.3635 23.293 46.2457 22.6518C46.1148 22.0105 45.7877 21.5002 45.2381 21.16C44.6885 20.8066 44.0865 20.6889 43.4453 20.7805C42.791 20.8852 42.2676 21.1992 41.875 21.7488L29.692 40.0691L24.0781 34.4684C23.5809 33.9711 23.0051 33.7355 22.3639 33.7617C21.7096 33.7879 21.1469 34.0234 20.6496 34.4684C20.2047 34.9133 19.9822 35.476 19.9822 36.1564C19.9822 36.8238 20.2047 37.3865 20.6496 37.8445L28.3572 45.5522L28.7367 45.8531C29.1816 46.1541 29.6396 46.298 30.0846 46.298C30.9613 46.285 31.6287 45.9186 32.0736 45.1596Z"
                      fill="#1DA1F2"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </Container>
    </>
  );
}

export default Reviews;
