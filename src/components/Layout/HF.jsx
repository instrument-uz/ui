import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { App } from "./App";

function HF(props) {
  <App>
    <App.Header>
      <Header />
    </App.Header>

    <App.Container>
      <main className="container | relative">{props.children}</main>
    </App.Container>

    <App.Footer>
      <Footer />
    </App.Footer>
  </App>;

  return (
    <section className="relative">
      <Header />
      <main className="container | relative">{props.children}</main>
      <Footer />
    </section>
  );
}

export default HF;
