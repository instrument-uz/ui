import Logo from "@/#/home/Logo";
import Search from "@/components/Header/Search";
import Nav from "@/components/Header/Nav";
import Menu from "@/components/Header/Menu";
import Container from "@/components/Global/Container";

function Header() {
  return (
    <header
      className="py-2 px-5 | flex items-center justify-between | z-50"
      style={{ boxShadow: "0px 1px 50px rgba(0, 0, 0, 0.02)" }}
    >
      <Container className="fcc">
        <Logo />

        <Menu />
      </Container>

      <Search />
      <Nav />
    </header>
  );
}

export default Header;
