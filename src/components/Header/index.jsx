import Logo from "@/#/home/Logo";
import Search from "@/components/Header/Search";
import Nav from "@/components/Header/Nav";
import Menu from "@/components/Header/Menu";
import Container from "@/components/Global/Container";

function Header() {
  return (
    <header className="py-2 | z-50 | bg-white shadow-100 | sticky top-0">
      <div className="flex items-center justify-between container mx-auto max-w-screen-lg">
        <Container className="fcc">
          <Logo />

          <Menu />
        </Container>

        <Search />
        <Nav />
      </div>
    </header>
  );
}

export default Header;
