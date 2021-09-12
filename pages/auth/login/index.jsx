import Input from "@/components/Form/Input";
import Title from "@/components/Title";
import SvgGoogle from "@/icons/SvgGoogle";
import Link from "@/components/Link";
import SvgArrow from "@/icons/SvgArrow";
import { useForm } from "react-hook-form";
import cn from "clsx";
import WHF from "@/components/Layout/WHF";

function Login(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <WHF>
      <div className="w-3/6 m-auto flex items-center justify-center h-screen">
        <div className="w-full shadow-200 | px-10 py-5 | rounded-[7px]">
          <div className="fcc pb-7 | relative">
            <Title className="text-3xl font-black">Логин</Title>
            <Link href={`/`}>
              <SvgArrow
                className="h-6 rotate-90 | absolute top-2 left-0 | cursor-pointer"
                color={`black`}
              />
            </Link>
          </div>

          <div className="py-5">
            <Title className="pb-3 | text-lg">Телефон:</Title>
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
                    required: {
                      value: true,
                      message: "Обязательно к заполнению",
                    },
                    pattern: {
                      value: /^[+998]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g,
                      message: "Недействительный Номер телефона",
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
          <div>
            <Title className="pb-3 | text-lg">Пароль:</Title>
            <Input
              className={cn({
                "py-1 px-2": true,
                "border-red-500": errors.password,
              })}
              placeholder={`Пароль...`}
              type={`password`}
              register={{
                ...register("password", {
                  required: {
                    value: true,
                    message: "Обязательно к заполнению",
                  },
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                    message: "Минимум 8 символов, Минимум 1 буква и 1 цифра:",
                  },
                }),
              }}
            />
            <p className="text-red-500 text-sm pt-2">
              {errors?.password?.message}
            </p>
          </div>

          <button
            className="bg-[#00DA4A] text-white text-xl font-extrabold fcc w-full py-3 mt-5 rounded-[10px] click:scale outline-none focus:outline-none"
            onClick={handleSubmit(onSubmit)}
          >
            Войти
          </button>
          <div className="fc justify-between | mt-3">
            <Link
              href={`/auth/restore`}
              className="text-[#30A8F7] duration-200 text-sm mt-3 inline-block | font-semibold pl-2 | cursor-pointer"
            >
              Забыли пароль?
            </Link>

            <Link
              href={`/auth/register`}
              className="text-[#30A8F7] duration-200 text-sm mt-3 inline-block | font-semibold pl-2 | cursor-pointer"
            >
              <span className="text-[#001A34] pr-2">Нету Аккаунта?</span>
              Регистрация
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
              Войти с Google
            </Title>
          </button>
        </div>
      </div>
    </WHF>
  );
}

export default Login;
