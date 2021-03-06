import Carousel from "@/components/Carousel";
import { useState } from "react";
import CategoryLink from "./components/CategoryLink";

function Reviews(props) {
  const [categories] = useState([
    {
      icon: "/images/wash.svg",
      title: "Бытовая Техника",
    },

    {
      icon: "/images/phone.svg",
      title: "Электроника",
    },
    {
      icon: "/images/3.svg",
      title: "Электроинструменты",
    },

    {
      icon: "/images/4.svg",
      title: "Сад",
    },

    {
      icon: "/images/5.svg",
      title: "Авто",
    },

    {
      icon: "/images/6.svg",
      title: "Дом и Дача",
    },

    {
      icon: "/images/7.svg",
      title: "Строительство",
    },

    {
      icon: "/images/8.svg",
      title: "Детские товары",
    },

    {
      icon: "/images/phone.svg",
      title: "Электроника",
    },
    {
      icon: "/images/3.svg",
      title: "Электроинструменты",
    },
    {
      icon: "/images/5.svg",
      title: "Авто",
    },

    {
      icon: "/images/6.svg",
      title: "Дом и Дача",
    },
  ]);

  return (
    <section className="pt-20">
      <div className="flex items-center">
        <Carousel slidesToShow={7.7} withoutControls={true} slidesToScroll={4}>
          {categories.map((category, index) => {
            return <CategoryLink category={category} key={index} />;
          })}
        </Carousel>
      </div>
    </section>
  );
}

export default Reviews;
