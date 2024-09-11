import ItmShow from "../../../../../Layout/ItemShowcase/ItmShow";

function ItemShocase({ bgImage, title }) {
  const backgroundImageStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const darkMode = {
    backgroundColor: "#03030358",
    color: "white",
  };

  return (
    <div
      style={backgroundImageStyle}
      className="my-12 flex items-center justify-center py-8 px-4 sm:py-12 sm:px-8 md:py-16 md:px-12 lg:py-20 lg:px-16"
    >
      <div className="text-center max-w-screen-lg mx-auto">
        <ItmShow
          darkMode={darkMode}
          chefHeading={title}
          chefsubHeading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
        />
      </div>
    </div>
  );
}

export default ItemShocase;
