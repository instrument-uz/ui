import Header from "@/components/Header";
import Slider from "@/#/home/Slider";
import Categories from "@/#/home/Categories";

function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <Categories />
      {/* <Products type={`new`} /> */}
    </div>
  );
}

export default Home;
