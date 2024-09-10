import chefService from "../../../../../assets/home/chef-service.jpg";
import ItmShow from "../../../../../Layout/ItemShowcase/ItmShow";

function ItemShocase() {
  const backgroundImageStyle = {
    backgroundImage: `url(${chefService})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      style={backgroundImageStyle}
      className="my-12 flex items-center justify-center py-8 px-4 sm:py-12 sm:px-8 md:py-16 md:px-12 lg:py-20 lg:px-16"
    >
      <div className="text-center max-w-screen-lg mx-auto">
        <ItmShow
          backgroundColor="white"
          chefHeading="Bistro Boss"
          chefsubHeading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
        />
      </div>
    </div>
  );
}

export default ItemShocase;
