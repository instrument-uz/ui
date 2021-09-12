import Title from "@/components/Title";

function Brands() {
  return (
    <section>
      <Title className="text-2xl | py-12">Категория:</Title>

      <div className="categories | grid grid-cols-4 gap-5">
        <div className="category | fc flex-col | mb-12 | click:scale">
          <div className="img | bg-[#071f380d] fcc | w-36 h-36 p-3 | rounded-[7px]">
            <img
              src="/images/c1.png"
              alt="category__image"
              className="h-full object-contain"
            />
          </div>
          <p className="font-bold mt-2 | text-center">Телефоны</p>
        </div>
        <div className="category | fc flex-col | mb-12 | click:scale">
          <div className="img | bg-[#071f380d] fcc | w-36 h-36 p-3 | rounded-[7px]">
            <img
              src="/images/brands/photo.png"
              alt="category__image"
              className="h-full object-contain"
            />
          </div>
          <p className="font-bold mt-2 | text-center">Фотоаппараты</p>
        </div>{" "}
        <div className="category | fc flex-col | mb-12 | click:scale">
          <div className="img | bg-[#071f380d] fcc | w-36 h-36 p-3 | rounded-[7px]">
            <img
              src="/images/brands/nout.png"
              alt="category__image"
              className="h-full object-contain"
            />
          </div>
          <p className="font-bold mt-2 | text-center">Ноутбуки</p>
        </div>
        <div className="category | fc flex-col | mb-12 | click:scale">
          <div className="img | bg-[#071f380d] fcc | w-36 h-36 p-3 | rounded-[7px]">
            <img
              src="/images/brands/camera.png"
              alt="category__image"
              className="h-full object-contain"
            />
          </div>
          <p className="font-bold mt-2 | text-center">Видеокамеры</p>
        </div>
        <div className="category | fc flex-col | mb-12 | click:scale">
          <div className="img | bg-[#071f380d] fcc | w-36 h-36 p-3 | rounded-[7px]">
            <img
              src="/images/brands/port.png"
              alt="category__image"
              className="h-full object-contain"
            />
          </div>
          <p className="font-bold mt-2 | text-center">Портативная техника</p>
        </div>
        <div className="category | fc flex-col | mb-12 | click:scale">
          <div className="img | bg-[#071f380d] fcc | w-36 h-36 p-3 | rounded-[7px]">
            <img
              src="/images/brands/garnit.png"
              alt="category__image"
              className="h-full object-contain"
            />
          </div>
          <p className="font-bold mt-2 | text-center">Гарнитуры и наушники</p>
        </div>{" "}
        <div className="category | fc flex-col | mb-12 | click:scale">
          <div className="img | bg-[#071f380d] fcc | w-36 h-36 p-3 | rounded-[7px]">
            <img
              src="/images/brands/samsun.png"
              alt="category__image"
              className="h-full object-contain"
            />
          </div>
          <p className="font-bold mt-2 | text-center">Ноутбуки</p>
        </div>
        <div className="category | fc flex-col | mb-12 | click:scale">
          <div className="img | bg-[#071f380d] fcc | w-36 h-36 p-3 | rounded-[7px]">
            <img
              src="/images/brands/ear.png"
              alt="category__image"
              className="h-full object-contain"
            />
          </div>
          <p className="font-bold mt-2 | text-center">GPS-навигация</p>
        </div>
      </div>
    </section>
  );
}

export default Brands;
