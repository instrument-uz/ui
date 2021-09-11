import Input from "@/components/Form/Input";

import Title from "@/components/Title";
import SvgGoogle from "@/icons/SvgGoogle";
import Link from "@/components/Link";
import { useState } from "react";
import SvgPhone from "@/icons/SvgPhone";
import SvgArrow from "@/icons/SvgArrow";
import cn from "clsx";
import { useForm } from "react-hook-form";
import { useRouter } from "next/dist/client/router";

function Register(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  console.log(errors);

  const onSubmit = (data) => {
    if (active === 2) {
      router.push("/auth/congrats");
      return;
    }
    setActive(active + 1);
    console.log(data);
  };

  const [registerData, setRegister] = useState({
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
            <div className="flex">
              <h1 className="bg-gray-100 text-gray-400 px-2 fcc rounded-l-[7px]">
                + 998
              </h1>
              <Input
                className={cn({
                  "py-1 px-2 rounded-l-[0px] rounded-r-[7px] border-l-0": true,
                  "border-red-500": errors.phone,
                })}
                placeholder={`__-___-___`}
                register={{
                  ...register("phone", {
                    pattern: {
                      value: /^[+998]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g,
                      message: "Недействительный номер телефона",
                    },
                    required: {
                      value: true,
                      message: "Обязательно к заполнению",
                    },
                    maxLength: {
                      value: 9,
                      message: "Минимум 9 символов", // JS only: <p>error message</p> TS only support string
                    },
                    minLength: {
                      value: 9,
                      message: "Максимум 9 символов",
                    },
                  }),
                }}
              />
            </div>
            <p className="text-red-500 text-sm pt-2">
              {errors?.phone?.message}
            </p>
          </div>

          <button
            className="bg-[#00DA4A] text-white text-xl font-extrabold fcc w-full py-3 mt-3 rounded-[10px] click:scale outline-none focus:outline-none"
            onClick={handleSubmit(onSubmit)}
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
                register={{
                  ...register("code", {
                    required: {
                      value: true,
                      message: "Обязательно к заполнению",
                    },
                    maxLength: {
                      value: 6,
                      message: "Максимум 6 символов", // JS only: <p>error message</p> TS only support string
                    },
                    minLength: {
                      value: 6,
                      message: "Минимум 6 символов",
                    },
                    pattern: {
                      value: /^\d+$/,
                      message: "Только Числа!",
                    },
                  }),
                }}
              />
            </div>
            <p className="text-red-500 text-sm pt-2">{errors?.code?.message}</p>
          </div>

          <button
            className="bg-[#00DA4A] text-white text-xl font-extrabold fcc w-full py-3 mt-3 rounded-[10px] click:scale outline-none focus:outline-none"
            onClick={handleSubmit(onSubmit)}
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
                <Input
                  className={cn({
                    "py-1 px-2": true,
                    "border-red-500": errors.name,
                  })}
                  placeholder={`Имя`}
                  register={{
                    ...register("name", {
                      required: {
                        value: true,
                        message: "Обязательно к заполнению",
                      },
                      maxLength: {
                        value: 20,
                        message: "Максимум 20 символов",
                      },
                    }),
                  }}
                />
                <p className="text-red-500 text-sm pt-2">
                  {errors?.name?.message}
                </p>
              </div>
            </div>

            <div className="py-5 pr-5 |  flex flex-col | w-full">
              <Title className="pb-3 | text-base | fc mb-3">
                Дата Рождения:
              </Title>
              <div className="inline-block">
                <Input
                  className={cn({
                    "py-1 px-2 text-[#30A8F7]": true,
                    "border-red-500": errors.date_of_birth,
                  })}
                  max={6}
                  type={`date`}
                  onChange={(e) => console.log(e.value)}
                  register={{
                    ...register("date_of_birth", {
                      required: {
                        value: true,
                        message: "Обязательно к заполнению",
                      },
                      valueAsDate: {
                        value: true,
                        message: "Неверный Формат",
                      },
                    }),
                  }}
                />
                <p className="text-red-500 text-sm pt-2">
                  {errors?.date_of_birth?.message}
                </p>
              </div>
            </div>
          </div>
          <div className="py-5 |  flex flex-col | w-full">
            <div className="fc">
              <div className="inline-block pr-5 w-full">
                <Title className="pb-3 | text-base | fc">Пароль:</Title>
                <Input
                  type={`password`}
                  className={cn({
                    "py-1 px-2": true,
                    "border-red-500": errors.password,
                  })}
                  placeholder={`Пароль`}
                  register={{
                    ...register("password", {
                      required: {
                        value: true,
                        message: "Обязательно к заполнению",
                      },
                      pattern: {
                        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                        message:
                          "Минимум 8 символов, Минимум 1 буква и 1 цифра:",
                      },
                    }),
                  }}
                />
                <p className="text-red-500 text-sm pt-2">
                  {errors?.password?.message}
                </p>
              </div>
              <div className="inline-block pr-5 w-full">
                <Title className="pb-3 | text-base | fc">Пароль:</Title>
                <Input
                  type={`password_verify`}
                  className={cn({
                    "py-1 px-2": true,
                    "border-red-500": errors.password_verify,
                  })}
                  placeholder={`Введите пароль заново`}
                  register={{
                    ...register("password_verify", {
                      required: {
                        value: true,
                        message: "Обязательно к заполнению",
                      },
                      validate: {
                        equal: (v) =>
                          v === registerData.data.password ||
                          "Пароль не совпадает!",
                      },
                    }),
                  }}
                />
                <p className="text-red-500 text-sm pt-2">
                  {errors?.password_verify?.message}
                </p>
              </div>
            </div>
          </div>

          <button
            className="bg-[#00DA4A] text-white text-xl font-extrabold fcc w-full py-3 mt-3 rounded-[10px] click:scale outline-none focus:outline-none"
            onClick={handleSubmit(onSubmit)}
          >
            Сохранить
            <SvgArrow className="h-5 ml-5 transform -rotate-90" />
          </button>
        </div>
      </div>
    );
  }
}

export default Register;
