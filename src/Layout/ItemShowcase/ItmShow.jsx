import PropTypes from "prop-types";

function ItmShow({ chefHeading, chefsubHeading, darkMode }) {
  

  return (
    <div
      style={darkMode}
      className="p-4 sm:p-8 md:p-12 lg:p-16 my-4"
    >
      <h1 className="uppercase font-cinzel text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
        {chefHeading}
      </h1>
      <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl mt-4">
        {chefsubHeading}
      </p>
    </div>
  );
}

ItmShow.propTypes = {
  chefHeading: PropTypes.string.isRequired,
  chefsubHeading: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
};

export default ItmShow;
