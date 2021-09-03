import SvgCart from "@/icons/SvgCart";
import SvgHeart from "@/icons/SvgHeart";
import SvgUser from "@/icons/SvgUser";
import Container from "../Global/Container";
import Link from "next/link";

function Nav(props) {
  return (
    <nav className="fcc px-12">
      <Link href="/login">
        <a>
          <Container className="flex items-center scale:click bg-[#EFF9FF] | px-5 py-2 | rounded-[7px]">
            <SvgUser className="w-5" />
            <p className="pl-2 text-sm text-[#30A8F7]">Войти</p>
          </Container>
        </a>
      </Link>

      <Link href="/favorites">
        <a>
          <Container className="mx-10 | scale:click">
            <SvgHeart className="w-7" />
          </Container>
        </a>
      </Link>

      <Container className="relative scale:click">
        <SvgCart className="w-7" />
        <p className="absolute -top-2 -right-2 bg-[#30A8F7] text-white p-1 rounded-full w-5 h-5 | flex items-center justify-center | text-xs">
          9
        </p>
      </Container>
    </nav>
  );
}

export default Nav;
