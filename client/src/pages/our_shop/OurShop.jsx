import { Helmet } from "react-helmet-async";
import Cover from "../../components/shared/Cover";
import "react-tabs/style/react-tabs.css";
import FoodOrder from "../../components/our_shop/FoodOrder";

const OurShop = () => {
  return (
    <main>
      <Helmet>
        <title>Bistro Boss | Our Shop</title>
      </Helmet>
      <Cover
        bgImage="bg-shop_bg"
        heading="Our Shop"
        title="Would you Like to try a dish"
        text="text-2xl"
      />
      <FoodOrder />
    </main>
  );
};

export default OurShop;
