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
import SvgTick from "@/icons/SvgTick";
import Tooltip from "@/components/Tooltip";
import SvgBag from "@/icons/SvgBag";
import SvgMinus from "@/icons/SvgMinus";
import SvgPlus from "@/icons/SvgPlus";
import SvgInfo from "@/icons/SvgInfo";
import Products from "@/#/home/Products";
import ReadMore from "@/#/product/components/ReadMore";

function Product(props) {
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
  const [count, setCount] = useState(1);

  return (
    <HF>
      <div className="product">
        <Breadcrumb />

        <Container className="pt-5">
          <h1 className="text-2xl leading-10 font-bold">
            13.3" Ноутбук Apple MacBook Pro, Apple M1 (3.2 ГГц), RAM 8 ГБ, SSD
            512 ГБ, Apple M1 GPU, macOS, (MYDC2RU/A), серебристый
          </h1>

          <Container className="pt-5 | flex items-center">
            <Star star={4} total={255} />

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

        <Container className="pt-7 | flex">
          <div className="w-1/2 pr-5">
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
              <Carousel slidesToScroll={2} slidesToShow={4.5}>
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

          <div className="w-1/2">
            <Container className="flex items-center justify-between">
              <div>
                <h3 className="text-xl leading-10 font-bold">Состояние:</h3>
                <div className="border border-[#30A8F7] rounded-full inline-flex items-center px-3 py-1">
                  <SvgTick className="h-6" />
                  <p className="text-[#30A8F7] text-lg pl-2">Новое</p>
                </div>
              </div>

              <div className="price text-right">
                <p className="text-[#9d9d9d80] text-lg line-through font-bold">
                  23,112,500сум
                </p>
                <h1 className="text-3xl text-[#00DA4A] font-extrabold">
                  19,112,500 сум
                </h1>
              </div>
            </Container>

            <Container className="pt-5">
              <h3 className="text-xl leading-10 font-bold inline-block">
                Свойства Товара:
              </h3>

              <div>
                <div className="pt-1 | grid grid-cols-2">
                  <p className="inline-flex items-center text-[#001a3494]">
                    Процессор
                    <Tooltip
                      desc={`Центра́льный проце́ссор (ЦП; также центра́льное проце́ссорное устро́йство — ЦПУ; англ. central processing unit, CPU, дословно — центральное обрабатывающее устройство, часто просто процессор) — электронный блок либо интегральная схема, исполняющая машинные инструкции (код программ), главная часть аппаратного обеспечения компьютера или программируемого логического контроллера. Иногда называют микропроцессором или просто процессором.`}
                    >
                      <span className="ml-2">
                        <svg
                          className="h-4"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 0C9.318 0 12 2.6886 12 6C12 9.3126 9.318 12 6 12C2.688 12 0 9.3126 0 6C0 2.6886 2.688 0 6 0ZM6 7.7586C5.712 7.7586 5.478 7.9926 5.478 8.2806C5.478 8.5686 5.712 8.8086 6.006 8.8086C6.294 8.8086 6.528 8.5686 6.528 8.2806C6.528 7.9926 6.294 7.7586 6 7.7586ZM6 3.198C5.712 3.198 5.472 3.4386 5.472 3.726V6.378C5.472 6.6666 5.712 6.9 6 6.9C6.288 6.9 6.522 6.6666 6.522 6.378V3.726C6.522 3.4386 6.288 3.198 6 3.198Z"
                            fill="#001A34"
                            fillOpacity="0.3"
                          />
                        </svg>
                      </span>
                    </Tooltip>
                  </p>
                  <p className="text-black font-semibold">Apple M1 (3.2 ГГц)</p>
                </div>

                <div className="pt-1 | grid grid-cols-2">
                  <p className="inline-flex items-center text-[#001a3494]">
                    Оперативная память
                    <Tooltip
                      desc={`Память с произвольным доступом) — в большинстве случаев энергозависимая часть системы компьютерной памяти, в которой во время работы компьютера хранится выполняемый машинный код (программы), а также входные, выходные и промежуточные данные, обрабатываемые процессором.`}
                    >
                      <span className="ml-2">
                        <svg
                          className="h-4"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 0C9.318 0 12 2.6886 12 6C12 9.3126 9.318 12 6 12C2.688 12 0 9.3126 0 6C0 2.6886 2.688 0 6 0ZM6 7.7586C5.712 7.7586 5.478 7.9926 5.478 8.2806C5.478 8.5686 5.712 8.8086 6.006 8.8086C6.294 8.8086 6.528 8.5686 6.528 8.2806C6.528 7.9926 6.294 7.7586 6 7.7586ZM6 3.198C5.712 3.198 5.472 3.4386 5.472 3.726V6.378C5.472 6.6666 5.712 6.9 6 6.9C6.288 6.9 6.522 6.6666 6.522 6.378V3.726C6.522 3.4386 6.288 3.198 6 3.198Z"
                            fill="#001A34"
                            fillOpacity="0.3"
                          />
                        </svg>
                      </span>
                    </Tooltip>
                  </p>
                  <p className="text-black font-semibold">8 ГБ</p>
                </div>

                <div className="pt-1 | grid grid-cols-2">
                  <p className="inline-flex items-center text-[#001a3494]">
                    Общий объем SSD, ГБ
                    <Tooltip
                      desc={`Центра́льный проце́ссор (ЦП; также центра́льное проце́ссорное устро́йство — ЦПУ;`}
                    >
                      <span className="ml-2">
                        <svg
                          className="h-4"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 0C9.318 0 12 2.6886 12 6C12 9.3126 9.318 12 6 12C2.688 12 0 9.3126 0 6C0 2.6886 2.688 0 6 0ZM6 7.7586C5.712 7.7586 5.478 7.9926 5.478 8.2806C5.478 8.5686 5.712 8.8086 6.006 8.8086C6.294 8.8086 6.528 8.5686 6.528 8.2806C6.528 7.9926 6.294 7.7586 6 7.7586ZM6 3.198C5.712 3.198 5.472 3.4386 5.472 3.726V6.378C5.472 6.6666 5.712 6.9 6 6.9C6.288 6.9 6.522 6.6666 6.522 6.378V3.726C6.522 3.4386 6.288 3.198 6 3.198Z"
                            fill="#001A34"
                            fillOpacity="0.3"
                          />
                        </svg>
                      </span>
                    </Tooltip>
                  </p>
                  <p className="text-black font-semibold">256 ГБ</p>
                </div>

                <div className="pt-1 | grid grid-cols-2">
                  <p className="inline-flex items-center text-[#001a3494]">
                    Видеокарта
                  </p>
                  <p className="text-black font-semibold">Apple M1 GPU</p>
                </div>

                <div className="pt-1 | grid grid-cols-2">
                  <p className="inline-flex items-center text-[#001a3494]">
                    Операционная система
                  </p>
                  <p className="text-black font-semibold">macOS</p>
                </div>

                <div className="pt-1 | grid grid-cols-2">
                  <p className="inline-flex items-center text-[#001a3494]">
                    Время автономной работы, ч
                  </p>
                  <p className="text-black font-semibold">20</p>
                </div>

                <div className="pt-1 | grid grid-cols-2">
                  <p className="inline-flex items-center text-[#001a3494]">
                    Технология матрицы
                  </p>
                  <p className="text-black font-semibold">RETINA</p>
                </div>

                <a
                  href="#"
                  className="text-[#30A8F7] font-semibold duration-200 pt-3 inline-block | click:scale"
                >
                  Перейти к описанию
                </a>
              </div>
            </Container>
            <Container>
              <Container className="pt-5 flex items-center justify-end">
                <div className="plus fcc">
                  <button
                    onClick={decreaseCount}
                    className="flex items-center justify-center | w-10 h-10 | bg-[#F2F9FF] hover:bg-green-100 duration-50 outline-none focus:outline-none | rounded-[10px] click:scale"
                  >
                    <SvgMinus className="h-0.5" />
                  </button>

                  <h1 className="text-2xl font-bold | mx-4">{count}</h1>

                  <button
                    onClick={increaseCount}
                    className="flex items-center justify-center | w-10 h-10 | bg-[#F2F9FF] hover:bg-green-100 duration-50 outline-none focus:outline-none | rounded-[10px] click:scale"
                  >
                    <SvgPlus className="h-4" />
                  </button>
                </div>
              </Container>

              <Container className="flex items-center pt-3">
                <div className="one:click | pr-2">
                  <button
                    type="submit"
                    className="bg-[#F2F9FF] hover:bg-blue-100 duration-50 text-lg text-[#30A8F7] py-5 px-10 outline-none focus:outline-none | font-bold rounded-[10px] click:scale"
                  >
                    Купить
                  </button>
                </div>

                <div className="add:to:cart w-full">
                  <button className="bg-[#00DA4A] text-white text-xl font-extrabold fcc w-full py-5 rounded-[10px] click:scale outline-none focus:outline-none">
                    <span>
                      <SvgBag className="h-7 mr-5" color={`white`} />
                    </span>
                    Добавить в корзину
                  </button>
                </div>
              </Container>
            </Container>
          </div>
        </Container>

        <Container className="flex | pt-7">
          <div className="flex items-center | pr-12">
            <div className="h-6">
              <img
                src="/images/box.svg"
                alt="box"
                className="h-full object-contain"
              />
            </div>
            <p className="text-[#001A34] font-bold px-3">Бесплатная доставка</p>
            <SvgInfo className="h-4" />
          </div>

          <div className="flex items-center">
            <div className="h-6">
              <img
                src="/images/truck.svg"
                alt="box"
                className="h-full object-contain"
              />
            </div>
            <p className="text-[#001A34] font-bold px-3">
              Экспрес доставка - 30, 000 сум
            </p>
            <SvgInfo className="h-4" />
          </div>
        </Container>
      </div>

      <Products
        title={`Похожие Товары`}
        url={`https://py.abad.uz/v1.0/api/categories/laptops/goods/?limit=8&offset=0&discount=0&brand=Apple`}
      />

      <h1 className="font-bold text-2xl text-[#001A34] pt-12">Описание:</h1>

      <ReadMore
        src={`
        Самый тонкий и лёгкий ноутбук Apple теперь стал суперсильным благодаря
        чипу Apple M1. Он быстро справляется с вашими задачами, задействуя
        потрясающую скорость 8‑ядерного процессора. Открывает возможности нового
        уровня в приложениях и играх со сложной графикой, используя всю мощь
        8‑ядерного графического процессора. И ускоряет операции машинного
        обучения, применяя 16‑ядерную систему Neural Engine. Всё происходит
        бесшумно, потому что это ноутбук без вентилятора. И он работает без
        подзарядки до 18 часов напролёт. Это MacBook Air. Всё такой же
        компактный. Но теперь гораздо более мощный. Список основных
        характеристик • Чип Apple M1: грандиозное увеличение вычислительных и
        графических возможностей компьютера, ускорение операций машинного
        обучения • Впечатляющая продолжительность работы: до 18 часов без
        подзарядки • 8‑ядерный центральный процессор: до 3,5 раза больше
        мощности для всех ваших задач • 8‑ядерный графический процессор (в
        максимальной конфигурации): до 5 раз выше скорость обработки изображений
        для приложений и игр со сложной графикой • 16‑ядерная система Neural
        Engine для продвинутого машинного обучения • 8 ГБ объединённой памяти
        для того, чтобы всё работало быстро и плавно • Сверхбыстрый
        SSD‑накопитель для мгновенного доступа к приложениям и файлам •
        Конструкция без вентилятора для бесшумной работы • Дисплей Retina 13,3
        дюйма с широким цветовым охватом P3 для потрясающей цветопередачи и
        невероятной детализации
      `}
      />

      <Container>
        <h3 className="font-bold text-2xl text-[#001A34] pt-12">
          Характеристики:
        </h3>

        <Container className="pt-5">
          <h4 className="font-bold text-lg text-[#001A34] pt-12">
            Встроенное оборудование:
          </h4>

          <Container className="pt-5">
            <div className="grid grid-cols-2">
              <div className="pt-1 | grid grid-cols-2">
                <p className="inline-flex items-center text-[#001a3494]">
                  Процессор
                  <Tooltip
                    desc={`Центра́льный проце́ссор (ЦП; также центра́льное проце́ссорное устро́йство — ЦПУ; англ. central processing unit, CPU, дословно — центральное обрабатывающее устройство, часто просто процессор) — электронный блок либо интегральная схема, исполняющая машинные инструкции (код программ), главная часть аппаратного обеспечения компьютера или программируемого логического контроллера. Иногда называют микропроцессором или просто процессором.`}
                  >
                    <span className="ml-2">
                      <svg
                        className="h-4"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 0C9.318 0 12 2.6886 12 6C12 9.3126 9.318 12 6 12C2.688 12 0 9.3126 0 6C0 2.6886 2.688 0 6 0ZM6 7.7586C5.712 7.7586 5.478 7.9926 5.478 8.2806C5.478 8.5686 5.712 8.8086 6.006 8.8086C6.294 8.8086 6.528 8.5686 6.528 8.2806C6.528 7.9926 6.294 7.7586 6 7.7586ZM6 3.198C5.712 3.198 5.472 3.4386 5.472 3.726V6.378C5.472 6.6666 5.712 6.9 6 6.9C6.288 6.9 6.522 6.6666 6.522 6.378V3.726C6.522 3.4386 6.288 3.198 6 3.198Z"
                          fill="#001A34"
                          fillOpacity="0.3"
                        />
                      </svg>
                    </span>
                  </Tooltip>
                </p>
                <p className="text-black font-semibold">Apple M1 (3.2 ГГц)</p>
              </div>

              <div className="pt-1 | grid grid-cols-2">
                <p className="inline-flex items-center text-[#001a3494]">
                  Оперативная память
                  <Tooltip
                    desc={`Память с произвольным доступом) — в большинстве случаев энергозависимая часть системы компьютерной памяти, в которой во время работы компьютера хранится выполняемый машинный код (программы), а также входные, выходные и промежуточные данные, обрабатываемые процессором.`}
                  >
                    <span className="ml-2">
                      <svg
                        className="h-4"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 0C9.318 0 12 2.6886 12 6C12 9.3126 9.318 12 6 12C2.688 12 0 9.3126 0 6C0 2.6886 2.688 0 6 0ZM6 7.7586C5.712 7.7586 5.478 7.9926 5.478 8.2806C5.478 8.5686 5.712 8.8086 6.006 8.8086C6.294 8.8086 6.528 8.5686 6.528 8.2806C6.528 7.9926 6.294 7.7586 6 7.7586ZM6 3.198C5.712 3.198 5.472 3.4386 5.472 3.726V6.378C5.472 6.6666 5.712 6.9 6 6.9C6.288 6.9 6.522 6.6666 6.522 6.378V3.726C6.522 3.4386 6.288 3.198 6 3.198Z"
                          fill="#001A34"
                          fillOpacity="0.3"
                        />
                      </svg>
                    </span>
                  </Tooltip>
                </p>
                <p className="text-black font-semibold">8 ГБ</p>
              </div>

              <div className="pt-1 | grid grid-cols-2">
                <p className="inline-flex items-center text-[#001a3494]">
                  Общий объем SSD, ГБ
                  <Tooltip
                    desc={`Центра́льный проце́ссор (ЦП; также центра́льное проце́ссорное устро́йство — ЦПУ;`}
                  >
                    <span className="ml-2">
                      <svg
                        className="h-4"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 0C9.318 0 12 2.6886 12 6C12 9.3126 9.318 12 6 12C2.688 12 0 9.3126 0 6C0 2.6886 2.688 0 6 0ZM6 7.7586C5.712 7.7586 5.478 7.9926 5.478 8.2806C5.478 8.5686 5.712 8.8086 6.006 8.8086C6.294 8.8086 6.528 8.5686 6.528 8.2806C6.528 7.9926 6.294 7.7586 6 7.7586ZM6 3.198C5.712 3.198 5.472 3.4386 5.472 3.726V6.378C5.472 6.6666 5.712 6.9 6 6.9C6.288 6.9 6.522 6.6666 6.522 6.378V3.726C6.522 3.4386 6.288 3.198 6 3.198Z"
                          fill="#001A34"
                          fillOpacity="0.3"
                        />
                      </svg>
                    </span>
                  </Tooltip>
                </p>
                <p className="text-black font-semibold">256 ГБ</p>
              </div>

              <div className="pt-1 | grid grid-cols-2">
                <p className="inline-flex items-center text-[#001a3494]">
                  Видеокарта
                </p>
                <p className="text-black font-semibold">Apple M1 GPU</p>
              </div>

              <div className="pt-1 | grid grid-cols-2">
                <p className="inline-flex items-center text-[#001a3494]">
                  Операционная система
                </p>
                <p className="text-black font-semibold">macOS</p>
              </div>

              <div className="pt-1 | grid grid-cols-2">
                <p className="inline-flex items-center text-[#001a3494]">
                  Время автономной работы, ч
                </p>
                <p className="text-black font-semibold">20</p>
              </div>

              <div className="pt-1 | grid grid-cols-2">
                <p className="inline-flex items-center text-[#001a3494]">
                  Технология матрицы
                </p>
                <p className="text-black font-semibold">RETINA</p>
              </div>
            </div>
          </Container>
        </Container>

        <Container className="pt-5">
          <h4 className="font-bold text-lg text-[#001A34] pt-12">Процессор:</h4>

          <Container className="pt-5">
            <div className="grid grid-cols-2">
              <div className="pt-1 | grid grid-cols-2">
                <p className="inline-flex items-center text-[#001a3494]">
                  Процессор
                  <Tooltip
                    desc={`Центра́льный проце́ссор (ЦП; также центра́льное проце́ссорное устро́йство — ЦПУ; англ. central processing unit, CPU, дословно — центральное обрабатывающее устройство, часто просто процессор) — электронный блок либо интегральная схема, исполняющая машинные инструкции (код программ), главная часть аппаратного обеспечения компьютера или программируемого логического контроллера. Иногда называют микропроцессором или просто процессором.`}
                  >
                    <span className="ml-2">
                      <svg
                        className="h-4"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 0C9.318 0 12 2.6886 12 6C12 9.3126 9.318 12 6 12C2.688 12 0 9.3126 0 6C0 2.6886 2.688 0 6 0ZM6 7.7586C5.712 7.7586 5.478 7.9926 5.478 8.2806C5.478 8.5686 5.712 8.8086 6.006 8.8086C6.294 8.8086 6.528 8.5686 6.528 8.2806C6.528 7.9926 6.294 7.7586 6 7.7586ZM6 3.198C5.712 3.198 5.472 3.4386 5.472 3.726V6.378C5.472 6.6666 5.712 6.9 6 6.9C6.288 6.9 6.522 6.6666 6.522 6.378V3.726C6.522 3.4386 6.288 3.198 6 3.198Z"
                          fill="#001A34"
                          fillOpacity="0.3"
                        />
                      </svg>
                    </span>
                  </Tooltip>
                </p>
                <p className="text-black font-semibold">Apple M1 (3.2 ГГц)</p>
              </div>

              <div className="pt-1 | grid grid-cols-2">
                <p className="inline-flex items-center text-[#001a3494]">
                  Оперативная память
                  <Tooltip
                    desc={`Память с произвольным доступом) — в большинстве случаев энергозависимая часть системы компьютерной памяти, в которой во время работы компьютера хранится выполняемый машинный код (программы), а также входные, выходные и промежуточные данные, обрабатываемые процессором.`}
                  >
                    <span className="ml-2">
                      <svg
                        className="h-4"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 0C9.318 0 12 2.6886 12 6C12 9.3126 9.318 12 6 12C2.688 12 0 9.3126 0 6C0 2.6886 2.688 0 6 0ZM6 7.7586C5.712 7.7586 5.478 7.9926 5.478 8.2806C5.478 8.5686 5.712 8.8086 6.006 8.8086C6.294 8.8086 6.528 8.5686 6.528 8.2806C6.528 7.9926 6.294 7.7586 6 7.7586ZM6 3.198C5.712 3.198 5.472 3.4386 5.472 3.726V6.378C5.472 6.6666 5.712 6.9 6 6.9C6.288 6.9 6.522 6.6666 6.522 6.378V3.726C6.522 3.4386 6.288 3.198 6 3.198Z"
                          fill="#001A34"
                          fillOpacity="0.3"
                        />
                      </svg>
                    </span>
                  </Tooltip>
                </p>
                <p className="text-black font-semibold">8 ГБ</p>
              </div>

              <div className="pt-1 | grid grid-cols-2">
                <p className="inline-flex items-center text-[#001a3494]">
                  Время автономной работы, ч
                </p>
                <p className="text-black font-semibold">20</p>
              </div>

              <div className="pt-1 | grid grid-cols-2">
                <p className="inline-flex items-center text-[#001a3494]">
                  Технология матрицы
                </p>
                <p className="text-black font-semibold">RETINA</p>
              </div>
            </div>
          </Container>
        </Container>

        <Container className="pt-5">
          <h4 className="font-bold text-lg text-[#001A34] pt-12">
            Оперативная память:
          </h4>

          <Container className="pt-5">
            <div className="grid grid-cols-2">
              <div className="pt-1 | grid grid-cols-2">
                <p className="inline-flex items-center text-[#001a3494]">
                  Процессор
                  <Tooltip
                    desc={`Центра́льный проце́ссор (ЦП; также центра́льное проце́ссорное устро́йство — ЦПУ; англ. central processing unit, CPU, дословно — центральное обрабатывающее устройство, часто просто процессор) — электронный блок либо интегральная схема, исполняющая машинные инструкции (код программ), главная часть аппаратного обеспечения компьютера или программируемого логического контроллера. Иногда называют микропроцессором или просто процессором.`}
                  >
                    <span className="ml-2">
                      <svg
                        className="h-4"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 0C9.318 0 12 2.6886 12 6C12 9.3126 9.318 12 6 12C2.688 12 0 9.3126 0 6C0 2.6886 2.688 0 6 0ZM6 7.7586C5.712 7.7586 5.478 7.9926 5.478 8.2806C5.478 8.5686 5.712 8.8086 6.006 8.8086C6.294 8.8086 6.528 8.5686 6.528 8.2806C6.528 7.9926 6.294 7.7586 6 7.7586ZM6 3.198C5.712 3.198 5.472 3.4386 5.472 3.726V6.378C5.472 6.6666 5.712 6.9 6 6.9C6.288 6.9 6.522 6.6666 6.522 6.378V3.726C6.522 3.4386 6.288 3.198 6 3.198Z"
                          fill="#001A34"
                          fillOpacity="0.3"
                        />
                      </svg>
                    </span>
                  </Tooltip>
                </p>
                <p className="text-black font-semibold">Apple M1 (3.2 ГГц)</p>
              </div>

              <div className="pt-1 | grid grid-cols-2">
                <p className="inline-flex items-center text-[#001a3494]">
                  Оперативная память
                  <Tooltip
                    desc={`Память с произвольным доступом) — в большинстве случаев энергозависимая часть системы компьютерной памяти, в которой во время работы компьютера хранится выполняемый машинный код (программы), а также входные, выходные и промежуточные данные, обрабатываемые процессором.`}
                  >
                    <span className="ml-2">
                      <svg
                        className="h-4"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 0C9.318 0 12 2.6886 12 6C12 9.3126 9.318 12 6 12C2.688 12 0 9.3126 0 6C0 2.6886 2.688 0 6 0ZM6 7.7586C5.712 7.7586 5.478 7.9926 5.478 8.2806C5.478 8.5686 5.712 8.8086 6.006 8.8086C6.294 8.8086 6.528 8.5686 6.528 8.2806C6.528 7.9926 6.294 7.7586 6 7.7586ZM6 3.198C5.712 3.198 5.472 3.4386 5.472 3.726V6.378C5.472 6.6666 5.712 6.9 6 6.9C6.288 6.9 6.522 6.6666 6.522 6.378V3.726C6.522 3.4386 6.288 3.198 6 3.198Z"
                          fill="#001A34"
                          fillOpacity="0.3"
                        />
                      </svg>
                    </span>
                  </Tooltip>
                </p>
                <p className="text-black font-semibold">8 ГБ</p>
              </div>

              <div className="pt-1 | grid grid-cols-2">
                <p className="inline-flex items-center text-[#001a3494]">
                  Общий объем SSD, ГБ
                  <Tooltip
                    desc={`Центра́льный проце́ссор (ЦП; также центра́льное проце́ссорное устро́йство — ЦПУ;`}
                  >
                    <span className="ml-2">
                      <svg
                        className="h-4"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 0C9.318 0 12 2.6886 12 6C12 9.3126 9.318 12 6 12C2.688 12 0 9.3126 0 6C0 2.6886 2.688 0 6 0ZM6 7.7586C5.712 7.7586 5.478 7.9926 5.478 8.2806C5.478 8.5686 5.712 8.8086 6.006 8.8086C6.294 8.8086 6.528 8.5686 6.528 8.2806C6.528 7.9926 6.294 7.7586 6 7.7586ZM6 3.198C5.712 3.198 5.472 3.4386 5.472 3.726V6.378C5.472 6.6666 5.712 6.9 6 6.9C6.288 6.9 6.522 6.6666 6.522 6.378V3.726C6.522 3.4386 6.288 3.198 6 3.198Z"
                          fill="#001A34"
                          fillOpacity="0.3"
                        />
                      </svg>
                    </span>
                  </Tooltip>
                </p>
                <p className="text-black font-semibold">256 ГБ</p>
              </div>
            </div>
          </Container>
        </Container>
      </Container>

      <Products
        title={`Схожие товары:`}
        url={`https://py.abad.uz/v1.0/api/categories/laptops/goods/?limit=16&offset=14&discount=0&brand=Apple`}
      />
    </HF>
  );

  function increaseCount() {
    setCount(+count + 1);
  }

  function decreaseCount() {
    if (count <= 1) {
      return;
    }

    setCount(+count - 1);
  }
}

export default Product;
