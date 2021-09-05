import Header from "@/components/Header";
import Slider from "@/#/home/Slider";
import Categories from "@/#/home/Categories";
import Products from "@/#/home/Products";
import Brands from "@/#/home/Brands";
import Trust from "@/#/home/Trust";
import Comments from "@/#/home/Comments";

function Home() {
  return (
    <>
      <Header />
      <section className="container mx-auto max-w-6xl">
        <Slider />
        <Categories />
        <Products
          title={`Новинки`}
          type={`new`}
          url={`https://py.abad.uz/v1.0/api/categories/laptops/goods/?limit=16&offset=0&discount=0&brand=Apple`}
        />
        <Brands />
        <Products
          title={`Домашняя утварь`}
          url={`https://py.abad.uz/v1.0/api/categories/vacuum_cleaners/goods/?limit=16&offset=0&discount=0`}
        />

        <Products
          title={`Бытовая Техника`}
          url={`https://py.abad.uz/v1.0/api/categories/ovens/goods/?limit=16&offset=0&discount=0`}
        />
        <Trust />
        <Comments />
      </section>
    </>
  );
}

export default Home;
