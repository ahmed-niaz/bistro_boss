import PropTypes from "prop-types";
const Cover = ({ bgImage, heading, title, text }) => {
  return (
    <main
      className={` ${bgImage} h-[400px] lg:h-[800px] bg-no-repeat bg-fixed bg-center w-full bg-cover`}
    >
      <div className="grid place-items-center h-[400px] lg:h-[800px] bg-black bg-opacity-40">
        <div className="bg-black shadow-2xl bg-opacity-50 w-10/12 h-[250px] lg:h-[400px] flex flex-col justify-center items-center space-y-3">
          <h2 className="font-cinzel text-8xl font-bold text-white">
            {heading}
          </h2>
          <p className={`w-9/12 text-center font-cinzel text-white ${text}`}>
            {title}
          </p>
        </div>
      </div>
    </main>
  );
};

Cover.propTypes = {
  bgImage: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Cover;
