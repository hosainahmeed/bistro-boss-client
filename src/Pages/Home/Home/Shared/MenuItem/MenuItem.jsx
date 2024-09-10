function MenuItem({ items }) {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:space-x-6 items-center md:items-start ">
        <img
          className=" w-40 rounded-tl-none rounded-tr-full rounded-br-full rounded-bl-full object-cover"
          src={items.image}
          alt={items.name}
        />
        <div className="mt-4 md:mt-0 text-center md:text-left">
          <h3 className="text-xl font-cinzel">{items.name}---------</h3>
          <p className="text-gray-600">{items.recipe}</p>
        </div>
        <p className="text-[#D99904] font-semibold mt-4 md:mt-0">
          ${items.price}
        </p>
      </div>
    </div>
  );
}

export default MenuItem;
