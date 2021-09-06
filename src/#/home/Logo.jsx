import SvgLogo from "@/icons/SvgLogo";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <a>
        <div className="flex items-center">
          <SvgLogo className="w-10 px-2 py-2" />
          <h1 className="text-2xl font-extrabold text-[#30A8F7]">
            instrument.
          </h1>
        </div>
      </a>
    </Link>
  );
}

export default Logo;
