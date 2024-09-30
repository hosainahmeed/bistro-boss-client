import useMenu from "../../../../../hooks/useMenu";

function Secret() {
  let [menu] = useMenu();
  console.log(menu);
  
  const pizza = menu.filter((item) => item.category === "pizza");
  console.log(pizza);
  
  return (
    <div>
    </div>
  );
}

export default Secret;

