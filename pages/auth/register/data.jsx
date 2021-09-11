import Step from "@/#/auth/steps/Step";
import Input from "@/components/Form/Input";
import HF from "@/components/Layout/HF";
import Title from "@/components/Title";
import Link from "@/components/Link";
import SvgPhone from "@/icons/SvgPhone";
import SvgArrow from "@/icons/SvgArrow";
import SvgGoogle from "@/icons/SvgGoogle";
import SvgDone from "@/icons/SvgDone";

function Data() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-2/5 shadow-200 | px-10 py-5 | rounded-[7px]">
        <Title className="pb-3 text-2xl">Пароль и Данные</Title>
        <div className="fc">
          <div className="py-5 pr-5 |  flex flex-col | w-full">
            <Title className="pb-3 | text-base | fc mb-3">Имя:</Title>
            <div className="inline-block">
              <Input className="py-1 px-2" placeholder={`Имя`} max={6} />
            </div>
          </div>

          <div className="py-5 pr-5 |  flex flex-col | w-full">
            <Title className="pb-3 | text-base | fc mb-3">Дата Рождения:</Title>
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

export default Data;
