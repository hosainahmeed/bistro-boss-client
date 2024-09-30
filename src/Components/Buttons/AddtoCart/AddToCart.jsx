import { useEffect, useState } from "react";
import UseAdmin from "../../../hooks/useAdmin";

function AddToCart({
  btntext = "Add to Cart",
  bgColor = "#1F2937",
  textColor = "#FFFFFF",
  borderBottom = "#BB8506",
  borderBottomWidth = "2px",
  addToCartItem,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdmin] = UseAdmin();
  const [disabledBtn, setDisableBtn] = useState(false);

  useEffect(() => {
    if (isAdmin) {
      setDisableBtn(true);  // Disable button if user is an admin
    } else {
      setDisableBtn(false); // Enable button if user is not an admin
    }
  }, [isAdmin]);

  const btnStyle = {
    backgroundColor: bgColor,
    color: textColor,
    borderBottom: `${borderBottomWidth} solid ${borderBottom}`,
  };

  const mouseOverStyle = {
    backgroundColor: "#4B5563",
    color: textColor,
    borderBottom: `${borderBottomWidth} solid ${borderBottom}`,
  };

  return (
    <button
      disabled={disabledBtn}
      onClick={addToCartItem}
      style={isHovered ? mouseOverStyle : btnStyle}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      className="px-5 py-3 rounded-xl transition-all duration-300 btn btn-active"
    >
      {isAdmin ? "You are Admin" : btntext}
    </button>
  );
}

export default AddToCart;
