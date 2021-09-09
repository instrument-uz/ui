import { Popover, Transition } from "@headlessui/react";
import Title from "@/components/Title";
import { useEffect, useState } from "react";
import Container from "@/components/Global/Container";
import HF from "@/components/Layout/HF";
import Link from "@/components/Link";
import CategoryBrands from "@/components/Header/CategoryBrands";
import cn from "clsx";
import ReadMore from "@/#/product/components/ReadMore";
function Menu() {
  const [menu, setMenu] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`https://py.abad.uz/v1.0/api/categories/?full=1&collapse=1&`)
      .then((res) => res.json())
      .then((res) => {
        setCategories(res);
        setMenu(res[0]?.subs || []);
      });
  }, []);

  return (
    <HF>
      <Container
        className="flex items-start bg-white | z-50"
        style={{ boxShadow: "0.919771px 3.67908px 50px rgba(0, 0, 0, 0.09)" }}
      >
        <div className="w-[30%] z-10">
          <Container className="p-3 | border-r border-[#F1F4FF]">
            {categories.map((category, index) => (
              <div
                className={cn({
                  "fc items-center | py-2 pl-2 | group hover:bg-[#F2F9FF] cursor-pointer click:scale | rounded-[7px]": true,
                  "bg-[#F2F9FF] text-[#30A8F7]": activeCategory === index,
                })}
                onMouseEnter={() => {
                  setMenu(category.subs);
                  setActiveCategory(index);
                }}
              >
                <div className="icon | h-6 w-6 filter grayscale opacity-75 ">
                  <img
                    src={category.icon}
                    alt="#"
                    className="h-full mx-auto object-contain"
                  />
                </div>
                <Title
                  className={cn({
                    "pl-4 | text-sm font-normal pr-3 group-hover:text-[#30A8F7]": true,
                    "text-[#30A8F7]": activeCategory === index,
                  })}
                >
                  {category.name}
                </Title>
              </div>
            ))}
          </Container>
        </div>

        <div className="w-[70%] px-5 pt-5 flex">
          <div className="z-10 w-5/6 overflow-auto flex flex-wrap items-start">
            {menu.map((cat) => (
              <div className="category pb-7 w-1/2 pr-5">
                <Title className="text-lg hover:text-[#30A8F7] duration-200 | cursor-pointer">
                  {cat.name}
                </Title>
                {cat.subs.length > 7 ? (
                  <ReadMore>
                    <div className="sub:category | mt-1 | grid grid-cols-1">
                      {cat.subs.map((sub) => (
                        <Link
                          href={`/category/2`}
                          className="text-[#001a3494] hover:text-[#30A8F7] duration-200 pt-2 font-semibold text-sm | cursor-pointer"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </ReadMore>
                ) : (
                  <div className="sub:category | mt-1 | grid grid-cols-1">
                    {cat.subs.map((sub) => (
                      <Link
                        href={`/category/2`}
                        className="text-[#001a3494] hover:text-[#30A8F7] duration-200 pt-2 font-semibold text-sm | cursor-pointer"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="w-1/6">
            <CategoryBrands />
          </div>
        </div>
      </Container>
    </HF>
  );
}

export default Menu;
