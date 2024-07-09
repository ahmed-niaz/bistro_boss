const Service = () => {
  return (
    <main className="bg-service-bg h-[400px] lg:h-[570px] container mx-auto my-16">
      <div className="grid place-items-center h-[400px] lg:h-[570px] bg-black bg-opacity-40">
        <div className="bg-black shadow-2xl bg-opacity-50 w-10/12 h-[250px] lg:h-[400px] flex flex-col justify-center items-center space-y-3">
          <h2 className="font-cinzel text-3xl font-bold text-white">
            Bistro Boss
          </h2>
          <p className="w-9/12 text-center font-cinzel text-white">
            Our food delivery service offers a convenient and efficient way to
            enjoy delicious meals from your favorite local restaurants, right at
            your doorstep. Whether you`re craving gourmet cuisine, comfort food,
            or healthy options, our platform connects you with a wide range of
            eateries to satisfy your taste buds.{" "}
          </p>
        </div>
      </div>
    </main>
  );
};

export default Service;
