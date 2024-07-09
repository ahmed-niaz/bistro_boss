import Banner from "../../components/home/banner/Banner";
import Service from "../../components/home/Service";
import Slider from "../../components/home/Slider";
import Footer from "../../components/shared/Footer";


const Home = () => {
    return (
       <main>
        <Banner/>
        <Slider/>
        <Service/>
        <Footer/>
       </main>
    );
};

export default Home;