import { PropTypes } from "prop-types";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { axiosSecure } from "./../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCart();
  const { name, image, price, recipe, _id } = item;

  const handleAddToCart = (food) => {
    if (user && user.email) {
      console.log(user.email, food);
      // send cart item to the db
      const cartItem = {
        menuID: _id,
        email: user.email,
        name,
        image,
        price,
      };

      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success("Item added to the cart");
          refetch();
        }
      });
    } else {
      toast.error("Login in first 🙄");
      navigate("/login", { state: { from: location } });
    }
  };
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
            <button
              onClick={() => handleAddToCart(item)}
              className="btn glass btn-wide bg-[#835D23] rounded-none text-white hover:bg-[#835D21]"
            >
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
