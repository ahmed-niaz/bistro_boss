import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Pagination, Autoplay } from "swiper/modules";
import img1 from "../../assets/home/slide/cake.jpg";
import img2 from "../../assets/home/slide/dessert.jpg";
import img3 from "../../assets/home/slide/noddles.jpg";
import img4 from "../../assets/home/slide/pasta.jpg";
import img5 from "../../assets/home/slide/pure_veg.jpg";
import img6 from "../../assets/home/slide/rolls.jpg";
import img7 from "../../assets/home/slide/salad.jpg";
import img8 from "../../assets/home/slide/sandwich.jpg";
const Slider = () => {
  return (
    <main className="mt-16">
      <h2 className="text-center italic font-cinzel text-[#D99904]">
        ...From 11am to 10pm...
      </h2>
      <div className="divider w-1/4 mx-auto"></div>
      <h1 className="text-center font-extrabold text-4xl font-cinzel">
        Order Online
      </h1>
      <div className="divider w-1/4 mx-auto"></div>
      <Swiper
        className="container mx-auto mb-16"
        slidesPerView={4}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide>
          <img src={img1} className="w-full h-[120px] lg:h-[450px] bg-cover" alt="" />
          <p className="uppercase font-cinzel text-center font-extrabold text-white -mt-16">
            Cake
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} className="w-full h-[120px] lg:h-[450px] bg-cover" alt="" />
          <p className="uppercase font-cinzel text-center font-extrabold text-white -mt-16">
            Dessert
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} className="w-full h-[120px] lg:h-[450px] bg-cover" alt="" />
          <p className="uppercase font-cinzel text-center font-extrabold text-white -mt-16">
            Noddles
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} className="w-full h-[120px] lg:h-[450px] bg-cover" alt="" />
          <p className="uppercase font-cinzel text-center font-extrabold text-white -mt-16">
            Pasta
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} className="w-full h-[120px] lg:h-[450px] bg-cover" alt="" />
          <p className="uppercase font-cinzel text-center font-extrabold text-white -mt-16">
            Pure Veg
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} className="w-full h-[120px] lg:h-[450px] bg-cover" alt="" />
          <p className="uppercase font-cinzel text-center font-extrabold text-white -mt-16">
            Rolls
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} className="w-full h-[120px] lg:h-[450px] bg-cover" alt="" />
          <p className="uppercase font-cinzel text-center font-extrabold text-white -mt-16">
            Salad
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} className="w-full h-[120px] lg:h-[450px] bg-cover" alt="" />
          <p className="uppercase font-cinzel text-center font-extrabold text-white -mt-16">
            Sandwich
          </p>
        </SwiperSlide>
      </Swiper>
    </main>
  );
};

export default Slider;
