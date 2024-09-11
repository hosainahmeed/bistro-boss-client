import AddToCart from "../Buttons/AddtoCart/AddToCart";

function Card({ items }) {
  const { image, name, recipe ,price} = items;
  return (
    <div className="gird md:grid-cols-2">
      <div className="card bg-base-100 md:w-80 h-96 shadow-xl">
        <figure>
          <h1 className="absolute top-4 right-4 px-4 py-2 rounded-xl bg-[#222] text-white">${price}</h1>
          <img src={image} alt={name} />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <AddToCart
            bgColor="#dadada"
            textColor="#BB8506"
            borderBottom="#BB8506"
            btntext="Add to Cart"
            borderBottomWidth="2px"
          ></AddToCart>
        </div>
      </div>
    </div>
  );
}

export default Card;
