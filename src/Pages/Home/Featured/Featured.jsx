import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featureImage from "../../../assets/home/featured.jpg";

function Featured() {
  return (
    <div className="relative py-12 brightness-75">
      <SectionTitle
        subheading="Check it out"
        heading="FROM OUR MENU"
      ></SectionTitle>
      <div className="py-12 flex items-center justify-center gap-[78px] px-[300px]">
        <div>
          <img src={featureImage} className="w-full h-full" />
        </div>
        <div className="text-white ">
          <h1>March 20,2023</h1>
          <h1>WHERE CAN I GET SOME?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Featured;
