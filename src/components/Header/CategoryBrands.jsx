import { useState } from "react";
import Link from "@/components/Link";
function CategoryBrands() {
  const [brands] = useState([
    {
      url: "/images/brands/apple.png",
    },
    {
      url: "/images/brands/samsung.png",
    },

    {
      url: "/images/brands/hu.png",
    },

    {
      url: "/images/brands/dell.png",
    },
    {
      url: "/images/brands/mi.png",
    },
  ]);

  return (
    <div>
      {brands.map((brand, index) => (
        <Link
          href={`/brands/${index}`}
          className="pt-5 inline-block mx-auto fcc"
        >
          <div className="h-12 w-full click:scale filter grayscale hover:grayscale-0 duration-200 opacity-25 hover:opacity-100">
            <img
              src={brand.url}
              alt=""
              className="h-full object-contain mx-auto "
            />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CategoryBrands;
