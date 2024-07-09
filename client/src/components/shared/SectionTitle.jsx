import PropTypes from "prop-types";
const SectionTitle = ({ heading, subHeading }) => {
  return (
    <main>
      <h2 className="text-center italic font-cinzel text-[#D99904]">
        {subHeading}
      </h2>
      <div className="divider w-1/4 mx-auto"></div>
      <h1 className="text-center font-extrabold text-4xl font-cinzel">
        {heading}
      </h1>
      <div className="divider w-1/4 mx-auto mb-8"></div>
    </main>
  );
};

SectionTitle.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string,
};
export default SectionTitle;
