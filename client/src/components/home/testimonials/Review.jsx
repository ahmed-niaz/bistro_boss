import { Rating } from "@smastrom/react-rating";
import PropTypes from 'prop-types'
import "@smastrom/react-rating/style.css";
const Review = ({ review }) => {
  const { name, details, rating } = review;
  return (
    <main>
      <div className="rounded-lg bg-white shadow-xl p-8  w-[400px] h-[240px] mx-8 mb-12 space-y-2">
        <div className="font-bold">
          <p className="text-2x font-cinzel">{name}</p>
        </div>

        <p className="font-bold text-sm text-gray-500">
          {details?.substring(0, 200)}
        </p>
        <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
      </div>
    </main>
  );
};

Review.propTypes = {
    review: PropTypes.shape({
      name: PropTypes.string.isRequired,
      details: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    }).isRequired,
  };
  
export default Review;
