import { useEffect, useState } from "react";
import Title from "@/components/Title";
import Container from "@/components/Global/Container";
import Link from "@/components/Link";
import CategoryBrands from "@/components/Header/CategoryBrands";
import cn from "clsx";
import ReadMore from "@/#/product/components/ReadMore";
import { Popover, Transition } from "@headlessui/react";

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
    <Popover className="relative">
      <Popover.Button className="fcc ml-12 mr-10 py-2 | cursor-pointer | click:scale | outline-none focus:outline-none">
        <ul>
          <li className="mb-2 bg-[#30A8F7] w-6 h-0.5 rounded-full"></li>
          <li className="mt-2 bg-[#30A8F7] w-6 h-0.5 rounded-full"></li>
        </ul>

        <h2 className="font-normal text-sm text-[#30A8F7] pl-3">Категории</h2>
      </Popover.Button>
      <Transition
        enter="transition ease-in"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-in duration-100"
        leaveTo="opacity-0"
      >
        <Popover.Panel className="absolute h-96 z-10 w-screen max-w-sm px-4 mt-3 transform -translate-x-1/4 left-1/2 sm:px-0 lg:max-w-5xl">
          <Container
            className="flex items-start bg-white | z-50"
            style={{
              boxShadow: "0.919771px 3.67908px 50px rgba(0, 0, 0, 0.09)",
            }}
          >
            <div className="w-[30%] z-10 h-[calc(100vh-125px)] overflow-y-auto">
              <Container className="p-3 | border-r border-[#F1F4FF]">
                {categories.map((category, index) => (
                  <div
                    key={index}
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

            <div className="w-[70%] px-5 pt-5 flex h-[calc(100vh-125px)] overflow-y-auto">
              <div className="z-10 w-5/6 flex flex-wrap items-start">
                {menu.map((cat, index) => (
                  <div className="category pb-7 w-1/2 pr-5" key={index}>
                    <Title className="text-lg hover:text-[#30A8F7] duration-200 | cursor-pointer">
                      {cat.name}
                    </Title>
                    {cat.subs.length > 7 ? (
                      <ReadMore>
                        <div className="sub:category | mt-1 | grid grid-cols-1">
                          {cat.subs.map((sub, num) => (
                            <Link
                              key={num}
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
                        {cat.subs.map((sub, n) => (
                          <Link
                            key={n}
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
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default Menu;
