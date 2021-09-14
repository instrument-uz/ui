import SvgHeart from "@/icons/SvgHeart";
import SvgUser from "@/icons/SvgUser";
import Container from "../Global/Container";
import Link from "@/components/Link";
import SvgBag from "@/icons/SvgBag";

function Nav(props) {
  return (
    <nav className="fcc pl-7 | relative">
      <Link href="/auth/login">
        <Container className="flex items-center click:scale bg-[#EFF9FF] | px-4 py-1.5 | rounded-[7px]">
          <SvgUser className="h-6" />
          <p className="pl-2 text-sm text-[#30A8F7]">Войти</p>
        </Container>
      </Link>

      <Link href="/favorites">
        <Container className="mx-5 | click:scale">
          <SvgHeart className="h-6" />
        </Container>
      </Link>

      <Container className="relative click:scale py-2 px-2">
        <SvgBag className="h-6" />
        <p className="absolute -top-1 -right-1 bg-[#30A8F7] text-white p-1 rounded-full w-5 h-5 | flex items-center justify-center | text-xs">
          9
        </p>
      </Container>
    </nav>
  );
}

export default Nav;
