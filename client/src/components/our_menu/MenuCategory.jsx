import MenuItem from "../shared/MenuItem";
import PropTypes from 'prop-types'
const MenuCategory = ({items}) => {
  return (
    <main>
      <div className="grid grid-cols-2 gap-4 container mx-auto my-12">
        {items.slice(0,4).map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};
MenuCategory.propTypes = {
  items: PropTypes.array
}
export default MenuCategory;
