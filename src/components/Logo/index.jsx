import SvgLogo from "@/icons/SvgLogo";
import Link from "@/components/Link";

function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center">
        <SvgLogo className="w-10 px-2 py-2" />
        <h1 className="text-2xl font-extrabold text-[#30A8F7]">instrument.</h1>
      </div>
    </Link>
  );
}

export default Logo;
