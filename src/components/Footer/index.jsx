import Logo from "@/#/home/Logo";
import Container from "@/components/Global/Container";

function Footer(props) {
  return (
    <footer className="rounded-t-[15px] shadow-200 | px-5 py-5 mt-16">
      <Container className="container mx-auto max-w-screen-lg grid grid-cols-4 gap-10">
        <div>
          <Logo />
          <div className="flex items-center | pt-5">
            <div className="">
              <svg
                className="w-6"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.70049 14.299C-0.197496 7.40022 0.783381 4.24115 1.51055 3.22316C1.60396 3.05862 3.90647 -0.38812 6.37459 1.63407C12.5008 6.67945 4.7451 5.96611 9.8894 11.1113C15.0348 16.2554 14.3214 8.49995 19.3659 14.6249C21.3882 17.094 17.9413 19.3964 17.7778 19.4888C16.7598 20.217 13.5995 21.1978 6.70049 14.299Z"
                  stroke="black"
                  strokeWidth="0.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="flex flex-col pl-3">
              <a
                className="hover:text-[#30A8F7] duration-200 text-sm"
                href="tel:+998907271449"
              >
                +998 90 727 14-49
              </a>
              <a
                className="hover:text-[#30A8F7] duration-200 text-sm"
                href="tel:+998907271449"
              >
                +998 90 727 14-49
              </a>
            </div>
          </div>

          <div className="flex items-center | pt-5">
            <div className="">
              <svg
                className="w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 12C1 20.2494 3.75059 23 12 23C20.2494 23 23 20.2494 23 12C23 3.75059 20.2494 1 12 1C3.75059 1 1 3.75059 1 12Z"
                  stroke="black"
                  strokeWidth="0.891892"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.0315 14.3996L11.999 11.9939V6.80786"
                  stroke="black"
                  strokeWidth="0.891892"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="flex flex-col pl-3">
              <p className="text-sm"> Режим: с 9.00 до 18.00</p>
            </div>
          </div>

          <div className="socials pt-5">
            <div className="flex flex-col">
              <p className="text-[1.15rem]">Следите за нами:</p>
            </div>

            <div className="flex items-center pt-3">
              <div className="facebook pr-3">
                <svg
                  className="h-5 fill-current hover:text-[#30A8F7] duration-200 text-[#9D9D9D] cursor-pointer"
                  viewBox="0 0 12 22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.5043 11.8084L11.0896 8.00915H7.4444V5.5448C7.4444 4.50771 7.95268 3.49117 9.58531 3.49117H11.2436V0.256704C11.2436 0.256704 9.73933 0 8.30179 0C5.29836 0 3.33715 1.81746 3.33715 5.11353V8.00915H0V11.8084H3.33715V21.1524H7.4444V11.8084H10.5043Z" />
                </svg>
              </div>

              <div className="telegram pr-3">
                <svg
                  className="h-5 fill-current hover:text-[#30A8F7] duration-200 text-[#9D9D9D] cursor-pointer"
                  viewBox="0 0 20 17"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.04523 10.8957L14.9762 15.9785C15.695 16.4405 16.3111 16.1838 16.5164 15.2597L19.3402 2.0138C19.5969 0.884301 18.8781 0.370894 18.108 0.730278L1.62764 7.09653C0.549483 7.50725 0.549483 8.17468 1.42227 8.43139L5.68355 9.76624L15.4383 3.55402C15.9004 3.29731 16.3111 3.4 16.003 3.75938" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <h1 className="font-extrabold textLg">
            <a href="#" className="hover:text-[#30A8F7] duration-200">
              Соглашение
            </a>
          </h1>

          <div className="flex flex-col pt-2">
            <a
              href="#"
              className="hover:text-[#30A8F7] duration-200 text-sm pt-2"
            >
              Возврат товара
            </a>
            <a
              href="#"
              className="hover:text-[#30A8F7] duration-200 text-sm pt-2"
            >
              Доставка
            </a>
            <a
              href="#"
              className="hover:text-[#30A8F7] duration-200 text-sm pt-2"
            >
              Оплата
            </a>

            <a
              href="#"
              className="hover:text-[#30A8F7] duration-200 text-sm pt-2"
            >
              Оформление заказа
            </a>

            <a
              href="#"
              className="hover:text-[#30A8F7] duration-200 text-sm pt-2"
            >
              Пользовательское соглашение
            </a>
          </div>
        </div>

        <div className="pt-5">
          <h1 className="font-extrabold textLg">
            <a href="#" className="hover:text-[#30A8F7] duration-200">
              О Нас
            </a>
          </h1>

          <div className="flex flex-col pt-2">
            <a
              href="#"
              className="hover:text-[#30A8F7] duration-200 text-sm pt-2"
            >
              Контакты
            </a>
            <a
              href="#"
              className="hover:text-[#30A8F7] duration-200 text-sm pt-2"
            >
              О Компании
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
