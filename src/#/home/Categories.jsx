import Carousel from "nuka-carousel";
import { useState } from "react";
import CategoryLink from "./components/CategoryLink";

function Categories(props) {
  const [carouselConfig] = useState({
    nextButtonClassName: "hidden",
    prevButtonClassName: "hidden",
    pagingDotsContainerClassName: "dots-container",
    pagingDotsStyle: {
      fill: "white",
      borderRadius: "50%",
      display: "inline-block",
      margin: "0rem 0.5rem",
      width: "5px",
      height: "5px",
    },
  });

  const [categories] = useState([
    {
      icon: "http://localhost:3000/wash.svg",
      title: "Бытовая Техника",
    },

    {
      icon: "http://localhost:3000/phone.svg",
      title: "Электроника",
    },
    {
      icon: "http://localhost:3000/3.svg",
      title: "Электроинструменты",
    },

    {
      icon: "http://localhost:3000/4.svg",
      title: "Сад",
    },

    {
      icon: "http://localhost:3000/5.svg",
      title: "Авто",
    },

    {
      icon: "http://localhost:3000/6.svg",
      title: "Дом и Дача",
    },

    {
      icon: "http://localhost:3000/7.svg",
      title: "Строительство",
    },

    {
      icon: "http://localhost:3000/8.svg",
      title: "Детские товары",
    },

    {
      icon: "http://localhost:3000/wash.svg",
      title: "Бытовая Техника",
    },

    {
      icon: "http://localhost:3000/phone.svg",
      title: "Электроника",
    },
    {
      icon: "http://localhost:3000/3.svg",
      title: "Электроинструменты",
    },
    {
      icon: "http://localhost:3000/5.svg",
      title: "Авто",
    },

    {
      icon: "http://localhost:3000/6.svg",
      title: "Дом и Дача",
    },
  ]);

  return (
    <section className="pt-20">
      <div className="flex items-center">
        <Carousel
          defaultControlsConfig={carouselConfig}
          slidesToShow={9.4}
          withoutControls={true}
          slidesToScroll={3}
        >
          {categories.map((category) => {
            return <CategoryLink category={category} />;
          })}
        </Carousel>
      </div>
    </section>
  );
}

export default Categories;
