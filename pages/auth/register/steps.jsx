import Step from "@/#/auth/steps/Step";
import Input from "@/components/Form/Input";
import HF from "@/components/Layout/HF";
import Title from "@/components/Title";
import Link from "@/components/Link";
import SvgPhone from "@/icons/SvgPhone";
import SvgArrow from "@/icons/SvgArrow";
import SvgGoogle from "@/icons/SvgGoogle";
import SvgDone from "@/icons/SvgDone";
function Steps() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-2/5 shadow-200 | px-10 py-5 | rounded-[7px]">
        <Title className="pb-3 text-2xl">Подтверждение</Title>
        <div className="py-5 flex flex-col">
          <Title className="pb-3 | text-base font-normal text-[#9D9D9D] | fc mb-3">
            6 значный код
          </Title>
          <div className="inline-block w-24">
            <Input
              className="py-1 px-2 text-center"
              placeholder={`___-___`}
              max={6}
            />
          </div>
        </div>

        <Link href={`/auth/register/data`}>
          <button className="bg-[#00DA4A] text-white text-xl font-extrabold fcc w-full py-3 mt-3 rounded-[10px] click:scale outline-none focus:outline-none">
            Дальше
            <SvgArrow className="h-5 ml-5 transform -rotate-90" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Steps;
