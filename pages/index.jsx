import Header from "@/components/Header";
import Slider from "@/#/home/Slider";
import Categories from "@/#/home/Categories";
import Products from "@/#/home/Products";

function Home() {
  return (
    <>
      <Header />
      <section className="container mx-auto">
        <Slider />
        <Categories />
        <Products type={`new`} />
      </section>
    </>
  );
}

export default Home;
