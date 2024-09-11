import AddToCart from "../Buttons/AddtoCart/AddToCart";

function Card({ items }) {
  const { image, name, recipe } = items;
  return (
    <div className="gird md:grid-cols-2">
      <div className="card bg-base-100 md:w-96 h-96 shadow-xl">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <AddToCart/>
        </div>
      </div>
    </div>
  );
}

export default Card;
