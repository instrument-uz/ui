import Input from "@/components/Form/Input";
import HF from "@/components/Layout/HF";
import Title from "@/components/Title";
import SvgGoogle from "@/icons/SvgGoogle";
import Link from "@/components/Link";
import { useState } from "react";

function Register(props) {
  const [phone, setPhone] = useState(`+998907271449`);

  return (
    <HF>
      <div className="flex items-center justify-center">
        <div className="mt-12 pr-12 | w-1/2">
          <Title className="text-4xl">Регистрация</Title>

          <button className="px-5 py-2 my-7 | outline-none focus:outline-none | click:scale | fc | bg-[#EBF7FF] | rounded-[7px]">
            <SvgGoogle className="h-7" />
            <Title className="text-base font-semibold | px-3 pl-5 text-[#30A8F7]  ">
              Регистрация с Google
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

          <Link href={`/auth/register/steps?phone=${phone}`}>
            <button className="bg-[#00DA4A] text-white text-xl font-extrabold fcc w-full py-3 mt-5 rounded-[10px] click:scale outline-none focus:outline-none">
              Регистрация
            </button>
          </Link>
          <div className="fc justify-between pt-2">
            <Link
              href={`/auth/login`}
              className="text-[#30A8F7] duration-200 text-sm mt-3 inline-block | font-semibold pl-2 | cursor-pointer"
            >
              <span className="text-[#001A34] pr-2">Уже есть аккаунт?</span>
              Войти
            </Link>
          </div>
        </div>
      </div>
    </HF>
  );
}

export default Register;
