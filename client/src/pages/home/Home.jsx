import Banner from "../../components/home/banner/Banner";
import Features from "../../components/home/Features";
import FoodBlog from "../../components/home/FoodBlog";
import PopularMenu from "../../components/home/PopularMenu";
import Service from "../../components/home/Service";
import Slider from "../../components/home/Slider";
import Testimonials from "../../components/home/testimonials/Testimonials";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <main>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner />
      <Slider />
      <Service />
      <PopularMenu />
      <Features />
      <FoodBlog />
      <Testimonials />
    </main>
  );
};

export default Home;
