import featured from "../../assets/home/featured.jpg";

const FoodBlog = () => {
  return (
    <main className="bg-featured bg-fixed bg-cover bg-no-repeat mb-24">
      <div className="bg-[#151515B2] opacity-90 ">
        <div className="p-12">
          <h2 className="text-center italic font-cinzel text-[#D99904]">
            ...Check it Out...
          </h2>
          <div className="divider w-1/4 mx-auto"></div>
          <h1 className="text-center font-extrabold text-4xl font-cinzel text-white">
            Food Blog
          </h1>
          <div className="divider w-1/4 mx-auto"></div>
        </div>
        <div className="md:flex justify-center items-center px-24 py-12 gap-16 text-white ">
          <div>
            <img className="bg-cover bg-no-repeat" src={featured} alt="" />
          </div>
          <div className="font-cinzel space-y-2">
            <p className="font-semibold text-sm">19 May 2024</p>
            <p className="font-cinzel font-bold">Where can i get some?</p>
            <p className="w-full capitalize">
              Sourdough bread isn’t just delicious; it’s also packed with
              benefits. The natural fermentation process breaks down gluten,
              making it easier to digest. It also develops a complex flavor
              profile that you can’t get from commercial yeast breads. Plus, the
              sense of accomplishment from nurturing your own sourdough starter
              is unmatched.
            </p>
            <button className="btn glass btn-wide bg-[#835D23] rounded-none text-white hover:bg-[#835D21]">
              Read More..
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FoodBlog;
