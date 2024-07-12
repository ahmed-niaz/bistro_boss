import MenuItem from "../shared/MenuItem";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const MenuCategory = ({ items,category }) => {
  console.log(category);
  return (
    <main>
      <div className="grid grid-cols-2 gap-4 container mx-auto my-12">
        {items.slice(0, 4).map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
      <div className="text-center mb-12">
        <Link  to={`/our-shop/${category}`}>
          <button className="btn glass btn-wide bg-[#835D23] rounded-none text-white hover:bg-[#835D21]">
            Order your favourite food..
          </button>
        </Link>
      </div>
    </main>
  );
};
MenuCategory.propTypes = {
  items: PropTypes.array,
};
export default MenuCategory;
