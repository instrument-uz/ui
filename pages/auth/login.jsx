import Input from "@/components/Form/Input";
import HF from "@/components/Layout/HF";
import Title from "@/components/Title";
import SvgGoogle from "@/icons/SvgGoogle";
import Link from "@/components/Link";

function Login(props) {
  return (
    // <HF>
    <div className="flex items-center justify-center h-screen">
      <div className="w-2/5 shadow-200 | px-10 py-5 | rounded-[7px]">
        <Title className="text-4xl">Логин</Title>

        <button className="my-7 px-5 py-2 flex items-center justify-center | outline-none focus:outline-none | click:scale | fc | border border-[#30A8F7] | rounded-[10px]">
          <SvgGoogle className="h-5" />
          <Title className="text-sm font-semibold | px-3 pl-5 text-[#30A8F7]  ">
            Войти с Google
          </Title>
        </button>

        <div className="fc">
          <p className="h-0.5 w-1/2 bg-gray-300 | rounded-full"></p>
          <p className="px-7 text-gray-300">или</p>
          <p className="h-0.5 w-1/2 bg-gray-300 | rounded-full"></p>
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
      </div>
    </div>
    // </HF>
  );
}

export default Login;
