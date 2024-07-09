import Banner from "../../components/home/banner/Banner";
import Features from "../../components/home/Features";
import FoodBlog from "../../components/home/FoodBlog";
import PopularMenu from "../../components/home/PopularMenu";
import Service from "../../components/home/Service";
import Slider from "../../components/home/Slider";
import Testimonials from "../../components/home/testimonials/Testimonials";
import Footer from "../../components/shared/Footer";

const Home = () => {
  return (
    <main>
      <Banner />
      <Slider />
      <Service />
      <PopularMenu />
      <Features />
      <FoodBlog />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Home;
