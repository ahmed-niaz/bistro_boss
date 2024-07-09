import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Review from "./Review";
import SectionTitle from "../../shared/SectionTitle";
const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("reviews.json");
        const data = await res.json();
        setReviews(data);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchReviews();
  }, []);
  return (
    <main>
      <div className="p-16">
        <SectionTitle
          subHeading={"...What our client say..."}
          heading={"Testimonials"}
        />
      </div>
      <div className="flex container mx-auto">
        <Marquee>
          {reviews.map((review) => (
            <Review key={review._id} review={review} />
          ))}
        </Marquee>
      </div>
    </main>
  );
};

export default Testimonials;
