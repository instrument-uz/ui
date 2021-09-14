import Slider from "@/#/home/Slider";
import Categories from "@/#/home/Categories";
import Products from "@/#/home/Products";
import Brands from "@/#/home/Brands";
import Trust from "@/#/home/Trust";
import Reviews from "@/#/home/Reviews";
import { App } from "@/components/Layout/App";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import SvgClose from "@/icons/SvgClose";
import SvgMinus from "@/icons/SvgMinus";
import SvgPlus from "@/icons/SvgPlus";
import Container from "@/components/Global/Container";
import { Transition } from "@headlessui/react";
import cn from "clsx";
import useToggle from "@/hooks/useToggle";

function Home() {
  const [isMenuOpen, toggleMenu] = useToggle(true);
  console.log(isMenuOpen);
  return (
    <App
      onClick={toggleMenu}
      className={isMenuOpen ? "overflow-y-hidden h-screen" : ""}
    >
      <App.Absolute>
        <Transition
          show={isMenuOpen}
          enter="duration-100"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="h-full | fixed top-0 left-0 w-3/5 bg-gray-900 bg-opacity-50"></div>
          <div className="h-full | fixed top-0 right-0 w-2/5 max-w-[96rem] bg-white | rounded-l-lg | flex flex-col justify-between shadow-300">
            <Container>
              <div className="fc justify-between px-3 pt-5 bg-white">
                <Title className="text-2xl">В Корзине:</Title>
                <SvgClose
                  className="h-5 | cursor-pointer"
                  onClick={toggleMenu}
                />
              </div>

              <div className="incart:products | pl-3 pt-12 overflow-y-scroll h-96">
                <div className="incart:product | flex | border-b border-gray-300 py-3">
                  <div className="product:img | h-36 min-w-[8rem] max-w-[10rem] | bg-white">
                    <img
                      src="/images/ears.png"
                      alt="ears"
                      className="h-full object-contain | mx-auto"
                    />
                  </div>
                  <div className="product:body pl-3">
                    <Title className="text-sm font-semibold">
                      Наушники S10 earphone Подоригинал (36387)
                    </Title>
                    <div className="fcb | pt-7">
                      <div className="product:count fc">
                        <div className="minus | bg-[#EDEDED] | w-7 h-7 | fcc | rounded-full">
                          <SvgMinus className="w-full px-2" color={`#C4C4C4`} />
                        </div>

                        <Title className="text-lg px-3">3</Title>

                        <div className="minus | bg-[#EDEDED] | w-7 h-7 | fcc | rounded-full">
                          <SvgPlus className="w-full px-2" color={`#C4C4C4`} />
                        </div>
                      </div>

                      <div className="product:remove mr-3">
                        <SvgClose
                          className="h-5"
                          color={`#C4C4C4`}
                          onClick={toggleMenu}
                        />
                      </div>
                    </div>

                    <Title className="text-lg font-extrabold | pt-7">
                      1,200,000 сум
                    </Title>
                  </div>
                </div>

                <div className="incart:product | flex | border-b border-gray-300 py-3 ">
                  <div className="product:img | h-36 min-w-[8rem] max-w-[10rem] | bg-white">
                    <img
                      src="/images/ears.png"
                      alt="ears"
                      className="h-full object-contain | mx-auto"
                    />
                  </div>
                  <div className="product:body pl-3">
                    <Title className="text-sm font-semibold">
                      Наушники S10 earphone Подоригинал (36387)
                    </Title>
                    <div className="fcb | pt-7">
                      <div className="product:count fc">
                        <div className="minus | bg-[#EDEDED] | w-7 h-7 | fcc | rounded-full">
                          <SvgMinus className="w-full px-2" color={`#C4C4C4`} />
                        </div>

                        <Title className="text-lg px-3">3</Title>

                        <div className="minus | bg-[#EDEDED] | w-7 h-7 | fcc | rounded-full">
                          <SvgPlus className="w-full px-2" color={`#C4C4C4`} />
                        </div>
                      </div>

                      <div className="product:remove mr-3">
                        <SvgClose
                          className="h-5"
                          color={`#C4C4C4`}
                          onClick={toggleMenu}
                        />
                      </div>
                    </div>

                    <Title className="text-lg font-extrabold | pt-7">
                      1,200,000 сум
                    </Title>
                  </div>
                </div>

                <div className="incart:product | flex | border-b border-gray-300 py-3">
                  <div className="product:img | h-36 min-w-[8rem] max-w-[10rem] | bg-white">
                    <img
                      src="/images/ears2.png"
                      alt="ears"
                      className="h-full object-contain | mx-auto"
                    />
                  </div>
                  <div className="product:body pl-3">
                    <Title className="text-sm font-semibold">
                      Наушники S10 earphone Подоригинал (36387)
                    </Title>
                    <div className="fcb | pt-7">
                      <div className="product:count fc">
                        <div className="minus | bg-[#EDEDED] | w-7 h-7 | fcc | rounded-full">
                          <SvgMinus className="w-full px-2" color={`#C4C4C4`} />
                        </div>

                        <Title className="text-lg px-3">1</Title>

                        <div className="minus | bg-[#EDEDED] | w-7 h-7 | fcc | rounded-full">
                          <SvgPlus className="w-full px-2" color={`#C4C4C4`} />
                        </div>
                      </div>

                      <div className="product:remove mr-3">
                        <SvgClose className="h-5" color={`#C4C4C4`} />
                      </div>
                    </div>

                    <Title className="text-lg font-extrabold | pt-7">
                      150,000 сум
                    </Title>
                  </div>
                </div>
              </div>
            </Container>
            <Container className="checkout:link | pb-3 px-3 ">
              <div className="price:total:calculator | w-full">
                <div className="general:pricing | border-b border-gray-300 pb-3">
                  <div className="first | fcb">
                    <p className="text-base font-normal pb-1 | text-gray-800">
                      Налог:
                    </p>
                    <p className="text-base font-normal pb-1 | text-gray-800">
                      15%
                    </p>
                  </div>

                  <div className="first | fcb">
                    <p className="text-base font-normal pb-1 | text-gray-800">
                      Доставка:
                    </p>
                    <p className="text-base font-normal pb-1 | text-gray-800">
                      Бесплатно
                    </p>
                  </div>

                  <div className="first | fcb">
                    <p className="text-base font-normal pb-1 | text-gray-800">
                      Товары:
                    </p>
                    <p className="text-base font-normal pb-1 | text-gray-800">
                      1,250,000 сум
                    </p>
                  </div>
                </div>

                <div className="price:overall | fcb | pt-3">
                  <Title className="text-2xl font-extrabold">Итог:</Title>
                  <Title className="text-2xl font-extrabold">
                    1,276,452 сум
                  </Title>
                </div>
              </div>

              <button className="bg-[#41CC00] text-white text-lg font-bold fcc w-full py-3 rounded-[7px] click:scale outline-none focus:outline-none mt-5">
                Оформить Заказ
              </button>
            </Container>
          </div>
        </Transition>
      </App.Absolute>

      <App.Header>
        <Header />
      </App.Header>

      <App.Container className="pointer-events-none">
        <Slider />
        <Categories />
        <Products
          title={`Новинки`}
          type={`new`}
          url={`https://py.abad.uz/v1.0/api/categories/laptops/goods/?limit=16&offset=0&discount=0&brand=Apple`}
        />
        <Products
          title={`Домашняя утварь`}
          url={`https://py.abad.uz/v1.0/api/categories/vacuum_cleaners/goods/?limit=16&offset=0&discount=0`}
        />
        <Brands />

        <Products
          title={`Бытовая Техника`}
          url={`https://py.abad.uz/v1.0/api/categories/ovens/goods/?limit=16&offset=0&discount=0`}
        />
        <Trust />
        <Reviews />
      </App.Container>

      <App.Footer>
        <Footer />
      </App.Footer>
    </App>
  );
}

export default Home;
