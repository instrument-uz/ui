import Slider from "@/#/home/Slider";
import Categories from "@/#/home/Categories";
import Products from "@/#/home/Products";
import Brands from "@/#/home/Brands";
import Trust from "@/#/home/Trust";
import Reviews from "@/#/home/Reviews";
import { App } from "@/components/Layout/App";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function Home() {
  return (
    <App>
      <App.Header>
        <Header />
      </App.Header>

      <App.Container className="pointer-events-none">
        <Slider />
        <Categories />
        <Products
          title={`Новинки`}
          type={`new`}
          url={`https://py.abad.uz/v1.0/api/categories/laptops/goods/?limit=16&offset=0&discount=0&brand=Apple`}
        />
        <Products
          title={`Домашняя утварь`}
          url={`https://py.abad.uz/v1.0/api/categories/vacuum_cleaners/goods/?limit=16&offset=0&discount=0`}
        />
        <Brands />

        <Products
          title={`Бытовая Техника`}
          url={`https://py.abad.uz/v1.0/api/categories/ovens/goods/?limit=16&offset=0&discount=0`}
        />
        <Trust />
        <Reviews />
      </App.Container>

      <App.Footer>
        <Footer />
      </App.Footer>
    </App>
  );
}

export default Home;
