import Input from "@/components/Form/Input";

import Title from "@/components/Title";
import SvgGoogle from "@/icons/SvgGoogle";
import Link from "@/components/Link";
import { useState } from "react";
import SvgPhone from "@/icons/SvgPhone";
import SvgArrow from "@/icons/SvgArrow";

function Register(props) {
  const [register, setRegister] = useState({
    phone: "+998907271449",
    code: "1234",
    data: {
      name: "Bbaur",
      date_of_birth: "040.07.2001",
      password: "12345",
    },
  });
  const [active, setActive] = useState(0);

  if (active === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-2/5 shadow-200 | px-10 py-5 | rounded-[7px]">
          <div className="fcc pb-7 | relative">
            <Title className="text-3xl font-black">Регистрация</Title>
            <Link href={`/`}>
              <SvgArrow
                className="h-6 rotate-90 | absolute top-2 left-0 | cursor-pointer"
                color={`black`}
              />
            </Link>
          </div>

          <div className="py-5">
            <Title className="pb-3 | text-lg | fc mb-3">
              <SvgPhone className="h-7 mr-3" />
              Введите телефон номер:
            </Title>
            <Input className="py-1 px-2" placeholder={`+998-__-___-___`} />
          </div>

          <button
            className="bg-[#00DA4A] text-white text-xl font-extrabold fcc w-full py-3 mt-3 rounded-[10px] click:scale outline-none focus:outline-none"
            onClick={() => {
              setActive(active + 1);
            }}
          >
            Дальше
            <SvgArrow className="h-5 ml-5 transform -rotate-90" />
          </button>

          <div className="fc justify-between pt-2">
            <Link
              href={`/auth/login`}
              className="text-[#30A8F7] duration-200 text-sm mt-3 inline-block | font-semibold pl-2 | cursor-pointer"
            >
              <span className="text-[#001A34] pr-2">Уже есть аккаунт?</span>
              Войти
            </Link>
          </div>

          <div className="fc my-7">
            <p className="h-0.5 w-1/2 bg-gray-300 | rounded-full"></p>
            <p className="px-7 text-gray-300">или</p>
            <p className="h-0.5 w-1/2 bg-gray-300 | rounded-full"></p>
          </div>

          <button className="px-5 py-2 | w-full | fcc | outline-none focus:outline-none | click:scale | border border-gray-300 | rounded-[10px]">
            <SvgGoogle className="h-7" />
            <Title className="text-sm font-semibold | px-3 pl-5 ">
              Регистрация с Google
            </Title>
          </button>
        </div>
      </div>
    );
  }

  if (active === 1) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-2/5 shadow-200 | px-10 py-5 | rounded-[7px]">
          <div className="fcc pb-7 | relative">
            <Title className="text-3xl font-black">Подтверждение</Title>

            <SvgArrow
              className="h-6 rotate-90 | absolute top-2 left-0 | cursor-pointer"
              color={`black`}
              onClick={() => setActive(0)}
            />
          </div>
          <div className="py-5 flex flex-col">
            <Title className="pb-3 | text-base font-normal text-[#08213a80] | fc mb-3">
              Мы отправили 6 значный код на номер
              <span className="pl-2 text-[#30A8F7]">+998907271449:</span>
            </Title>
            <div className="inline-block w-24">
              <Input
                className="py-1 px-2 text-center border-[#30A8F7] focus:placeholder-[#30A8F7] duration-200"
                placeholder={`___-___`}
                max={6}
              />
            </div>
          </div>

          <button
            className="bg-[#00DA4A] text-white text-xl font-extrabold fcc w-full py-3 mt-3 rounded-[10px] click:scale outline-none focus:outline-none"
            onClick={() => setActive(active + 1)}
          >
            Дальше
            <SvgArrow className="h-5 ml-5 transform -rotate-90" />
          </button>
        </div>
      </div>
    );
  }

  if (active === 2) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-2/5 shadow-200 | px-10 py-5 | rounded-[7px]">
          <Title className="text-3xl font-black">Заполните Данные</Title>
          <div className="fc pt-5">
            <div className="py-5 pr-5 |  flex flex-col | w-full">
              <Title className="pb-3 | text-base | fc mb-3">Имя:</Title>
              <div className="inline-block">
                <Input className="py-1 px-2" placeholder={`Имя`} max={6} />
              </div>
            </div>

            <div className="py-5 pr-5 |  flex flex-col | w-full">
              <Title className="pb-3 | text-base | fc mb-3">
                Дата Рождения:
              </Title>
              <div className="inline-block">
                <Input
                  className="py-1 px-2 text-[#30A8F7]"
                  placeholder={`Имя`}
                  max={6}
                  type={`date`}
                />
              </div>
            </div>
          </div>
          <div className="py-5 |  flex flex-col | w-full">
            <Title className="pb-3 | text-base | fc mb-3">Пароль:</Title>
            <div className="fc">
              <div className="inline-block pr-5 w-full">
                <Input
                  type={`password`}
                  className="py-1 px-2"
                  placeholder={`Пароль`}
                />
              </div>
              <div className="inline-block pr-5 w-full">
                <Input
                  type={`password`}
                  className="py-1 px-2"
                  placeholder={`Введите пароль заново`}
                />
              </div>
            </div>
          </div>
          <Link href={`/auth/register/congrats`}>
            <button className="bg-[#00DA4A] text-white text-xl font-extrabold fcc w-full py-3 mt-3 rounded-[10px] click:scale outline-none focus:outline-none">
              Сохранить
              <SvgArrow className="h-5 ml-5 transform -rotate-90" />
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Register;
