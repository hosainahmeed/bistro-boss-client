import AddToCart from "../../../Components/Buttons/AddtoCart/AddToCart";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featureImage from "../../../assets/home/featured.jpg";

function Featured() {
  return (
    <div className="relative py-12 my-12">
      <div className="absolute top-0 left-0 w-full h-full -z-0 brightness-75">
        <img
          src={featureImage}
          alt="Featured_Image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 text-white">
        <SectionTitle subheading="Check it out" heading="FROM OUR MENU" />

        <div className="md:py-12 flex items-center justify-center gap-8 px-4 md:px-16 lg:px-28 xl:px-48 flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              src={featureImage}
              className="w-full h-auto object-cover"
              alt="Featured Image"
            />
          </div>
          <div className="w-full md:w-1/2 text-white space-y-4 p-4">
            <h1 className="text-xl md:text-2xl">March 20, 2023</h1>
            <h2 className="text-2xl md:text-3xl font-bold">
              WHERE CAN I GET SOME?
            </h2>
            <p className="text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <AddToCart btntext="Order Now"></AddToCart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
