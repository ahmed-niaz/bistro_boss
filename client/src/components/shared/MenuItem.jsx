
import PropTypes from "prop-types";
const MenuItem = ({ item }) => {
  const { name, recipe, price, image } = item;
  return (
    <main className="flex gap-4">
      <div>
        <img
          style={{ borderRadius: "0px 200px 200px 200px" }}
          src={image}
          alt=""
        />
      </div>
      <div>
        <p className="uppercase font-cinzel text-2xl font-extrabold">{name}</p>
        <p>{recipe}</p>
      </div>
      <div className="font-extrabold text-3xl text-[#BB8506]">${price}</div>
    </main>
  );
};
MenuItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    recipe: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default MenuItem;