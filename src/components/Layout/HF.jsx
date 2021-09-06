import Header from "@/components/Header";
import Footer from "@/components/Footer";

function HF(props) {
  return (
    <>
      <Header />
      <section className="container mx-auto max-w-screen-lg">
        {props.children}
      </section>
      <Footer />
    </>
  );
}

export default HF;
