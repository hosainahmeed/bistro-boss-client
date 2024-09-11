import { useState } from "react";

function AddToCart({
  btntext = "Add to Cart",
  bgColor = "#1F2937",
  textColor = "#FFFFFF",
  borderBottom = "#BB8506",
  borderBottomWidth = "2px",
}) {
  const [isHovered, setIsHovered] = useState(false);

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
      style={isHovered ? mouseOverStyle : btnStyle}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      className="px-5 py-3 rounded-xl transition-all duration-300"
    >
      {btntext}
    </button>
  );
}

export default AddToCart;
