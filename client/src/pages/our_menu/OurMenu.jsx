import { Helmet } from "react-helmet-async";
import Cover from "../../components/shared/Cover";
import SectionTitle from "./../../components/shared/SectionTitle";
import MenuCategory from "../../components/our_menu/MenuCategory";
import useMenu from "../../hooks/useMenu";

const OurMenu = () => {
  const [menu] = useMenu();
  const cake = menu.filter((item) => item.category === "cake");
  const dessert = menu.filter((item) => item.category === "dessert");
  const noddles = menu.filter((item) => item.category === "noddles");
  const pasta = menu.filter((item) => item.category === "pasta");
  const pure_veg = menu.filter((item) => item.category === "pure_veg");
  const rolls = menu.filter((item) => item.category === "rolls");
  const salad = menu.filter((item) => item.category === "salad");
  const sandwich = menu.filter((item) => item.category === "sandwich");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <main>
      <Helmet>
        <title>Bistro Boss | Our Menu</title>
      </Helmet>
      <Cover
        bgImage="bg-menu-bg"
        heading="Our Menu"
        title="Would you Like to try a dish"
        text="text-2xl"
      />
      <div className="my-14">
        <SectionTitle subHeading="...Don`t miss..." heading="Today`s Offer" />
      </div>
      <MenuCategory items={offered} />
      <Cover
        bgImage="bg-dessert"
        heading="Dessert"
        title="Would you Like to try a dish"
        text="text-xl"
      />
      <MenuCategory items={dessert} />
      <div className="text-center mb-12">
        <button className="btn glass btn-wide bg-[#835D23] rounded-none text-white hover:bg-[#835D21]">
          Order your favourite food..
        </button>
      </div>
      <Cover
        bgImage="bg-cake"
        heading="Cake"
        title="Would you Like to try a dish"
        text="text-xl"
      />
      <MenuCategory items={cake} />
      <div className="text-center mb-12">
        <button className="btn glass btn-wide bg-[#835D23] rounded-none text-white hover:bg-[#835D21]">
          Order your favourite food..
        </button>
      </div>
      <Cover
        bgImage="bg-pure_veg"
        heading="Vegetables"
        title="Would you Like to try a dish"
        text="text-xl"
      />
      <MenuCategory items={pure_veg} />
      <div className="text-center mb-12">
        <button className="btn glass btn-wide bg-[#835D23] rounded-none text-white hover:bg-[#835D21]">
          Order your favourite food..
        </button>
      </div>
      <Cover
        bgImage="bg-salad"
        heading="Salad"
        title="Would you Like to try a dish"
        text="text-xl"
      />
      <MenuCategory items={salad} />
      <div className="text-center mb-12">
        <button className="btn glass btn-wide bg-[#835D23] rounded-none text-white hover:bg-[#835D21]">
          Order your favourite food..
        </button>
      </div>
      <Cover
        bgImage="bg-pasta"
        heading="Pasta"
        title="Would you Like to try a dish"
        text="text-xl"
      />
      <MenuCategory items={pasta} />
      <div className="text-center mb-12">
        <button className="btn glass btn-wide bg-[#835D23] rounded-none text-white hover:bg-[#835D21]">
          Order your favourite food..
        </button>
      </div>
      <Cover
        bgImage="bg-rolls"
        heading="Rolls"
        title="Would you Like to try a dish"
        text="text-xl"
      />
      <MenuCategory items={rolls} />
      <div className="text-center mb-12">
        <button className="btn glass btn-wide bg-[#835D23] rounded-none text-white hover:bg-[#835D21]">
          Order your favourite food..
        </button>
      </div>
      <Cover
        bgImage="bg-sandwich"
        heading="Sandwich"
        title="Would you Like to try a dish"
        text="text-xl"
      />
      <MenuCategory items={sandwich} />
      <div className="text-center mb-12">
        <button className="btn glass btn-wide bg-[#835D23] rounded-none text-white hover:bg-[#835D21]">
          Order your favourite food..
        </button>
      </div>
      <Cover
        bgImage="bg-noddles"
        heading="Noddles"
        title="Would you Like to try a dish"
        text="text-xl"
      />
       <MenuCategory items={noddles} />
        <div className="text-center mb-12">
        <button className="btn glass btn-wide bg-[#835D23] rounded-none text-white hover:bg-[#835D21]">
          Order your favourite food..
        </button>
      </div>
    </main>
  );
};

export default OurMenu;
