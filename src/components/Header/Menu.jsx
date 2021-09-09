import useToggle from "@/hooks/useToggle";
import Container from "../Global/Container";
import { Popover, Transition } from "@headlessui/react";
import Title from "../Title";
import { useEffect, useState } from "react";

function Menu() {
  const [isMenuOpen, toggleMenu] = useToggle(true);

  useEffect(() => {
    toggleMenu();
  }, []);

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
  ]);

  return (
    <Popover className="relative" open={true}>
      <Popover.Button className="fcc ml-12 mr-10 py-2 | cursor-pointer | click:scale | outline-none focus:outline-none">
        <ul>
          <li className="mb-2 bg-[#30A8F7] w-6 h-0.5 rounded-full"></li>
          <li className="mt-2 bg-[#30A8F7] w-6 h-0.5 rounded-full"></li>
        </ul>

        <h2 className="font-normal text-sm text-[#30A8F7] pl-3">Категории</h2>
      </Popover.Button>
    </Popover>
  );
}

export default Menu;
