import Carousel from "@/components/Carousel";
import { useState } from "react";
import CategoryLink from "./components/CategoryLink";

function Categories(props) {
  const [categories] = useState([
    {
      icon: "http://localhost:3000/images/wash.svg",
      title: "Бытовая Техника",
    },

    {
      icon: "http://localhost:3000/images/phone.svg",
      title: "Электроника",
    },
    {
      icon: "http://localhost:3000/images/3.svg",
      title: "Электроинструменты",
    },

    {
      icon: "http://localhost:3000/images/4.svg",
      title: "Сад",
    },

    {
      icon: "http://localhost:3000/images/5.svg",
      title: "Авто",
    },

    {
      icon: "http://localhost:3000/images/6.svg",
      title: "Дом и Дача",
    },

    {
      icon: "http://localhost:3000/images/7.svg",
      title: "Строительство",
    },

    {
      icon: "http://localhost:3000/images/8.svg",
      title: "Детские товары",
    },

    {
      icon: "http://localhost:3000/images/phone.svg",
      title: "Электроника",
    },
    {
      icon: "http://localhost:3000/images/3.svg",
      title: "Электроинструменты",
    },
    {
      icon: "http://localhost:3000/images/5.svg",
      title: "Авто",
    },

    {
      icon: "http://localhost:3000/images/6.svg",
      title: "Дом и Дача",
    },
  ]);

  return (
    <section className="pt-20">
      <div className="flex items-center">
        <Carousel slidesToShow={9.4} withoutControls={true}>
          {categories.map((category) => {
            return <CategoryLink category={category} />;
          })}
        </Carousel>
      </div>
    </section>
  );
}

export default Categories;
