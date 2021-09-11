import Input from "@/components/Form/Input";
import Title from "@/components/Title";
import SvgGoogle from "@/icons/SvgGoogle";
import Link from "@/components/Link";
import SvgArrow from "@/icons/SvgArrow";

function Login(props) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-2/5 shadow-200 | px-10 py-5 | rounded-[7px]">
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
          <Input className="py-1 px-2" placeholder={`+998-__-___-___`} />
        </div>
        <div>
          <Title className="pb-3 | text-lg">Пароль:</Title>
          <Input className="py-1 px-2" placeholder={`Пароль...`} />
        </div>

        <button className="bg-[#00DA4A] text-white text-xl font-extrabold fcc w-full py-3 mt-5 rounded-[10px] click:scale outline-none focus:outline-none">
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
  );
}

export default Login;
