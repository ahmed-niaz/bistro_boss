import { PropTypes } from "prop-types";
const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <main>
      <div className="card bg-[#f3e4cd] w-96 shadow-xl rounded-none relative">
        <figure>
          <img className="w-full" src={image} alt={image} />
        </figure>
        <div className="absolute right-4 top-4 p-2 font-cinzel font-extrabold text-xl bg-[#835D23] rounded-sm">
          <p className="text-white">$ {price}</p>
        </div>
        <div className="p-4 space-y-4">
          <h2 className="text-center font-bold font-cinzel font-2xl">{name}</h2>
          <p className="font-cinzel text-black font-semibold">{recipe}</p>
          <div className="card-actions justify-center">
            <button className="btn glass btn-wide bg-[#835D23] rounded-none text-white hover:bg-[#835D21]">
              Add To Cart{" "}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
FoodCard.propTypes = {
  item: PropTypes.object,
};
export default FoodCard;
